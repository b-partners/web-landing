// Scrapes every published post directly from the live blog.birdia.fr site (server-rendered
// HTML, no credentials needed) and writes it as static JSON under public/blog-data — the
// same on-disk shape the Wix Blog API script (scripts/fetch-blog-posts.mjs, currently
// deactivated — see that file) would have produced. The existing blog renderer
// (src/pages/Blog/*) reads these files unchanged; it has no idea the data came from here
// instead of the Wix API.
//
// Content is reconstructed as a Wix Ricos document (the `richContent` shape the viewer
// expects) using @wix/ricos's own `fromRichTextHtml` on a cleaned-up version of each post's
// server-rendered body: headings, paragraphs, bold/italic, links and lists are preserved;
// `fromRichTextHtml` has no HTML->Ricos path for blockquotes or images, so those are built
// as native BLOCKQUOTE/IMAGE nodes by hand. The sampled posts on this site have no inline
// body images (only a hero/cover image, pulled from the page's JSON-LD and prepended as the
// first node) — the image-node handling below is defensive for any outlier post, not the
// common case.
//
// Usage: node scripts/scrape-birdia-blog.mjs
import { fromRichTextHtml } from '@wix/ricos';
import { decode } from 'html-entities';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as parse5 from 'parse5';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const BLOG_ORIGIN = 'https://blog.birdia.fr';
const SITEMAP_INDEX_URL = `${BLOG_ORIGIN}/sitemap.xml`;
const USER_AGENT = 'BirdiaBlogSync/1.0 (+static content sync for birdia.fr)';
const CONCURRENCY = 5;
const WORDS_PER_MINUTE = 200;

const OUT_DIR = path.join(__dirname, '..', 'public', 'blog-data');
const INDEX_FILE = path.join(OUT_DIR, 'index.json');
const POSTS_DIR = path.join(OUT_DIR, 'posts');

const BLOCK_TAGS = new Set(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'ul', 'ol', 'blockquote']);
const INLINE_TAG_MAP = { strong: 'strong', b: 'strong', em: 'em', i: 'em', a: 'a' };

// blog.birdia.fr's JSON-LD only exposes the author's display name — no email anywhere in the
// page, by design (privacy). There's no source to scrape it from, so known authors are mapped
// by hand here; anyone not listed gets no email (name-only byline) rather than a guessed one.
const AUTHOR_EMAILS = {
  'Lou Maurica': 'lou@birdia.fr',
};

function resolveAuthorEmail(name) {
  return AUTHOR_EMAILS[name];
}

async function fetchText(url) {
  const res = await fetch(url, { headers: { 'User-Agent': USER_AGENT } });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.text();
}

async function fetchTextWithRetry(url, attempts = 3) {
  let lastErr;
  for (let i = 0; i < attempts; i += 1) {
    try {
      return await fetchText(url);
    } catch (err) {
      lastErr = err;
      await new Promise((resolve) => setTimeout(resolve, 500 * (i + 1)));
    }
  }
  throw lastErr;
}

async function mapWithConcurrency(items, limit, fn) {
  const results = new Array(items.length);
  let cursor = 0;
  async function worker() {
    while (cursor < items.length) {
      const i = cursor;
      cursor += 1;
      results[i] = await fn(items[i], i);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
  return results;
}

async function listPostUrls() {
  const indexXml = await fetchTextWithRetry(SITEMAP_INDEX_URL);
  const childSitemaps = [...indexXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const postsSitemapUrl = childSitemaps.find((u) => u.includes('blog-posts-sitemap')) ?? `${BLOG_ORIGIN}/blog-posts-sitemap.xml`;

  const postsXml = await fetchTextWithRetry(postsSitemapUrl);
  // Only top-level <loc> (post URLs), not the nested <image:loc> entries.
  const urls = [...postsXml.matchAll(/<loc>(https:\/\/blog\.birdia\.fr\/post\/[^<]+)<\/loc>/g)].map((m) => m[1]);
  return [...new Set(urls)];
}

function findAll(node, predicate, results = []) {
  if (predicate(node)) results.push(node);
  if (node.childNodes) for (const child of node.childNodes) findAll(child, predicate, results);
  return results;
}

function findFirst(node, predicate) {
  const found = findAll(node, predicate, []);
  return found[0];
}

function textContent(node) {
  if (node.nodeName === '#text') return node.value;
  if (!node.childNodes) return '';
  return node.childNodes.map(textContent).join('');
}

function escapeHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Strips Wix's Ricos-viewer styling wrappers (span/div soup with inline CSS vars) down to
// plain inline semantic HTML (strong/em/a) that @wix/ricos's own fromRichTextHtml accepts.
function cleanInline(node) {
  if (node.nodeName === '#text') return escapeHtml(node.value);
  if (!node.childNodes) return '';
  const inner = node.childNodes.map(cleanInline).join('');
  const tag = INLINE_TAG_MAP[node.tagName];
  if (tag === 'a') {
    const href = node.attrs?.find((a) => a.name === 'href')?.value;
    if (!href || !inner.trim()) return inner;
    return `<a href="${escapeHtml(href)}">${inner}</a>`;
  }
  if (tag) return inner.trim() ? `<${tag}>${inner}</${tag}>` : '';
  if (node.tagName === 'br') return ' ';
  return inner;
}

function imageUrlFromWowImage(node) {
  const raw = node.attrs?.find((a) => a.name === 'data-image-info')?.value;
  if (!raw) return undefined;
  try {
    const info = JSON.parse(raw);
    const uri = info?.imageData?.uri;
    if (!uri) return undefined;
    return uri.startsWith('http') ? uri : `https://static.wixstatic.com/media/${uri}`;
  } catch {
    return undefined;
  }
}

// Walks the article DOM and emits an ordered list of content chunks: plain HTML blocks
// (headings/paragraphs/lists, already cleaned to semantic tags for fromRichTextHtml),
// blockquotes and images (both built as manual Ricos nodes since fromRichTextHtml drops
// them), in original document order.
function extractContentChunks(root) {
  const chunks = [];
  function walk(node) {
    if (node.tagName === 'wow-image' || node.tagName === 'img') {
      const url = node.tagName === 'wow-image' ? imageUrlFromWowImage(node) : node.attrs?.find((a) => a.name === 'src')?.value;
      if (url) chunks.push({ kind: 'image', url });
      return;
    }
    if (node.tagName && BLOCK_TAGS.has(node.tagName)) {
      if (node.tagName === 'ul' || node.tagName === 'ol') {
        const items = (node.childNodes || []).filter((c) => c.tagName === 'li');
        const itemsHtml = items.map((li) => `<li>${cleanInline(li)}</li>`).join('');
        if (itemsHtml) chunks.push({ kind: 'html', html: `<${node.tagName}>${itemsHtml}</${node.tagName}>` });
      } else if (node.tagName === 'blockquote') {
        const inner = cleanInline(node);
        if (inner.trim()) chunks.push({ kind: 'blockquote', html: `<p>${inner}</p>` });
      } else {
        const inner = cleanInline(node);
        // These sites write a recurring "👉 <tip>" paragraph after most sections — promote it
        // to a BLOCKQUOTE node (a real <blockquote>, styled as a tip card in blog.css) instead
        // of a plain paragraph, since fromRichTextHtml has no way to flag it otherwise.
        const isTipParagraph = node.tagName === 'p' && /^\s*👉/.test(textContent(node));
        if (inner.trim()) chunks.push({ kind: isTipParagraph ? 'blockquote' : 'html', html: `<${node.tagName}>${inner}</${node.tagName}>` });
      }
      return;
    }
    if (node.childNodes) for (const child of node.childNodes) walk(child);
  }
  walk(root);
  return chunks;
}

function buildImageNode(url) {
  return { type: 'IMAGE', imageData: { image: { src: { url } } } };
}

function buildBlockquoteNode(html) {
  const doc = fromRichTextHtml(html);
  return { type: 'BLOCKQUOTE', nodes: doc.nodes };
}

function chunksToRicosNodes(chunks) {
  const nodes = [];
  let htmlBuffer = [];
  function flushHtmlBuffer() {
    if (!htmlBuffer.length) return;
    const doc = fromRichTextHtml(htmlBuffer.join(''));
    nodes.push(...doc.nodes);
    htmlBuffer = [];
  }
  for (const chunk of chunks) {
    if (chunk.kind === 'html') {
      htmlBuffer.push(chunk.html);
    } else if (chunk.kind === 'blockquote') {
      flushHtmlBuffer();
      nodes.push(buildBlockquoteNode(chunk.html));
    } else if (chunk.kind === 'image') {
      flushHtmlBuffer();
      nodes.push(buildImageNode(chunk.url));
    }
  }
  flushHtmlBuffer();
  return nodes;
}

function parseJsonLd(doc) {
  const scriptNode = findFirst(doc, (n) => n.tagName === 'script' && n.attrs?.some((a) => a.name === 'type' && a.value === 'application/ld+json'));
  if (!scriptNode) return undefined;
  try {
    return JSON.parse(textContent(scriptNode));
  } catch {
    return undefined;
  }
}

function parseMinutesToRead(doc, wordCount) {
  const el = findFirst(doc, (n) => n.attrs?.some((a) => a.name === 'data-hook' && a.value === 'time-to-read'));
  const title = el?.attrs?.find((a) => a.name === 'title')?.value;
  const match = title?.match(/(\d+)/);
  if (match) return parseInt(match[1], 10);
  return Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE));
}

function slugFromUrl(url) {
  return decodeURIComponent(new URL(url).pathname.replace(/^\/post\//, '').replace(/\/$/, ''));
}

async function scrapePost(url) {
  const html = await fetchTextWithRetry(url);
  const doc = parse5.parse(html);
  const slug = slugFromUrl(url);

  const jsonLd = parseJsonLd(doc);
  // The JSON-LD <script> tag is raw text to the HTML parser, so numeric character
  // references Wix embeds in it (e.g. "&#010;") survive JSON.parse as literal text —
  // decode them here rather than leaving stray entities in the title/excerpt.
  const title = jsonLd?.headline ? decode(jsonLd.headline).trim() : undefined;
  const excerpt = jsonLd?.description ? decode(jsonLd.description).trim() : '';
  const firstPublishedDate = jsonLd?.datePublished;
  const heroImageUrl = jsonLd?.image?.url;
  const authorName = jsonLd?.author?.name ? decode(jsonLd.author.name).trim() : undefined;
  const author = authorName ? { name: authorName, email: resolveAuthorEmail(authorName) } : undefined;

  if (!title || !firstPublishedDate) {
    throw new Error(`Missing title/datePublished in JSON-LD for ${url}`);
  }

  const section = findFirst(doc, (n) => n.attrs?.some((a) => a.name === 'data-hook' && a.value === 'post-description'));
  if (!section) throw new Error(`post-description section not found for ${url}`);

  const chunks = extractContentChunks(section);
  const bodyNodes = chunksToRicosNodes(chunks);
  const wordCount = textContent(section).trim().split(/\s+/).filter(Boolean).length;
  const minutesToRead = parseMinutesToRead(doc, wordCount);

  const nodes = heroImageUrl ? [buildImageNode(heroImageUrl), ...bodyNodes] : bodyNodes;
  // Whatever ends up first in richContent (hero image, or a body image if a post has no hero
  // but does have inline images) is "the first found image" — used as the card thumbnail.
  const coverImage = nodes[0]?.type === 'IMAGE' ? nodes[0].imageData?.image?.src?.url : undefined;

  return {
    id: slug,
    slug,
    title,
    excerpt,
    firstPublishedDate,
    minutesToRead,
    coverImage,
    author,
    richContent: { nodes, metadata: { version: 1, createdTimestamp: firstPublishedDate, updatedTimestamp: firstPublishedDate, id: slug } },
  };
}

async function main() {
  await mkdir(POSTS_DIR, { recursive: true });

  console.log('[scrape-birdia-blog] Listing posts from sitemap…');
  const urls = await listPostUrls();
  console.log(`[scrape-birdia-blog] Found ${urls.length} posts. Scraping (concurrency ${CONCURRENCY})…`);

  const failures = [];
  const posts = [];
  let done = 0;
  await mapWithConcurrency(urls, CONCURRENCY, async (url) => {
    try {
      const post = await scrapePost(url);
      posts.push(post);
    } catch (err) {
      failures.push({ url, error: err.message });
    } finally {
      done += 1;
      if (done % 25 === 0 || done === urls.length) console.log(`[scrape-birdia-blog] ${done}/${urls.length}`);
    }
  });

  posts.sort((a, b) => new Date(b.firstPublishedDate) - new Date(a.firstPublishedDate));

  const index = posts.map(({ id, slug, title, excerpt, firstPublishedDate, minutesToRead, coverImage }) => ({
    id,
    slug,
    title,
    excerpt,
    firstPublishedDate,
    minutesToRead,
    coverImage,
  }));
  await writeFile(INDEX_FILE, JSON.stringify(index, null, 2));
  await Promise.all(posts.map((post) => writeFile(path.join(POSTS_DIR, `${post.slug}.json`), JSON.stringify(post, null, 2))));

  console.log(`[scrape-birdia-blog] Wrote ${posts.length} posts to ${path.relative(process.cwd(), OUT_DIR)}`);
  if (failures.length) {
    console.warn(`[scrape-birdia-blog] ${failures.length} posts failed:`);
    for (const f of failures) console.warn(`  - ${f.url}: ${f.error}`);
  }
}

main().catch((err) => {
  console.error('[scrape-birdia-blog] Failed:', err);
  process.exit(1);
});
