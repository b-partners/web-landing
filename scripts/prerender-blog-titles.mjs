// Runs after `vite build` (see the "postbuild" npm script) and stamps out a static
// build/blog/post/<slug>/index.html for every post in public/blog-data, with that post's own
// <title>/description/OG tags — so a crawler or link-preview bot that doesn't execute JS
// (Slack/WhatsApp/Twitter unfurling, some SEO bots) sees the real per-post title instead of
// the site-wide default baked into index.html.
//
// This can't be done by committing static files ahead of time like public/blog-data/*.json:
// Vite injects content-hashed asset filenames (assets/index-<hash>.js) into index.html, and
// that hash changes on every build (even for unrelated changes), so a pre-committed HTML
// shell would reference stale, deleted assets the moment anyone rebuilds. Using the
// just-built build/index.html as the template guarantees the hashes are always current.
//
// Most static hosts (Netlify, Vercel, nginx, GitHub Pages, S3+CloudFront) serve a matching
// on-disk file for a directory-style request (e.g. build/blog/post/<slug>/index.html for
// `/blog/post/<slug>`) before falling back to the SPA's catch-all index.html rewrite, so this
// needs no host-specific configuration.
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as parse5 from 'parse5';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const BUILD_DIR = path.join(ROOT, 'build');
const TEMPLATE_FILE = path.join(BUILD_DIR, 'index.html');
const BLOG_INDEX_FILE = path.join(ROOT, 'public', 'blog-data', 'index.json');
const POSTS_DIR = path.join(ROOT, 'public', 'blog-data', 'posts');

const SITE_ORIGIN = 'https://www.birdia.fr';

function findAll(node, predicate, results = []) {
  if (predicate(node)) results.push(node);
  if (node.childNodes) for (const child of node.childNodes) findAll(child, predicate, results);
  return results;
}

function setTextContent(node, text) {
  node.childNodes = [{ nodeName: '#text', value: text, parentNode: node }];
}

function setMetaContent(doc, matchAttr, matchValue, content) {
  const nodes = findAll(doc, (n) => n.tagName === 'meta' && n.attrs?.some((a) => a.name === matchAttr && a.value === matchValue));
  for (const node of nodes) {
    const contentAttr = node.attrs.find((a) => a.name === 'content');
    if (contentAttr) contentAttr.value = content;
  }
}

async function heroImageUrl(slug) {
  try {
    const raw = await readFile(path.join(POSTS_DIR, `${slug}.json`), 'utf-8');
    const post = JSON.parse(raw);
    const first = post.richContent?.nodes?.[0];
    return first?.type === 'IMAGE' ? first.imageData?.image?.src?.url : undefined;
  } catch {
    return undefined;
  }
}

async function main() {
  let template;
  try {
    template = await readFile(TEMPLATE_FILE, 'utf-8');
  } catch {
    console.warn('[prerender-blog-titles] build/index.html not found — did `vite build` run first? Skipping.');
    return;
  }

  let posts;
  try {
    posts = JSON.parse(await readFile(BLOG_INDEX_FILE, 'utf-8'));
  } catch {
    console.warn('[prerender-blog-titles] public/blog-data/index.json not found — skipping.');
    return;
  }

  for (const post of posts) {
    const doc = parse5.parse(template);
    const titleNode = findAll(doc, (n) => n.tagName === 'title')[0];
    const pageTitle = `${post.title} | Blog BIRDIA`;
    const description = (post.excerpt || '').trim() || `${post.title} — article du blog BIRDIA.`;
    const canonicalUrl = `${SITE_ORIGIN}/blog/post/${post.slug}`;
    const ogImage = (await heroImageUrl(post.slug)) ?? undefined;

    if (titleNode) setTextContent(titleNode, pageTitle);
    setMetaContent(doc, 'name', 'description', description);
    setMetaContent(doc, 'property', 'og:title', post.title);
    setMetaContent(doc, 'property', 'og:description', description);
    setMetaContent(doc, 'property', 'og:url', canonicalUrl);
    setMetaContent(doc, 'property', 'og:type', 'article');
    if (ogImage) setMetaContent(doc, 'property', 'og:image', ogImage);

    const outDir = path.join(BUILD_DIR, 'blog', 'post', post.slug);
    await mkdir(outDir, { recursive: true });
    await writeFile(path.join(outDir, 'index.html'), parse5.serialize(doc));
  }

  console.log(`[prerender-blog-titles] Wrote ${posts.length} static blog/post/<slug>/index.html files with per-post titles.`);
}

main().catch((err) => {
  console.error('[prerender-blog-titles] Failed:', err);
  process.exit(1);
});
