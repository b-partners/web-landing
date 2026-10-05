// Pulls every published post from the Wix Blog REST API (blog.birdia.fr) and
// writes it as static JSON under public/blog-data, bundled into the build.
// Runs at build time (see "prebuild" in package.json) so the key never reaches
// the browser bundle. Requires WIX_API_KEY + WIX_SITE_ID (Blog read scope) as
// plain env vars — do NOT prefix them with REACT_APP_.
import 'dotenv/config';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const API_KEY = process.env.WIX_API_KEY;
const SITE_ID = process.env.WIX_SITE_ID;
const QUERY_POSTS_URL = 'https://www.wixapis.com/v3/posts/query';
const PAGE_SIZE = 100;

const OUT_DIR = path.join(__dirname, '..', 'public', 'blog-data');
const INDEX_FILE = path.join(OUT_DIR, 'index.json');
const POSTS_DIR = path.join(OUT_DIR, 'posts');

async function queryAllPosts() {
  const posts = [];
  let cursor;

  do {
    const response = await fetch(QUERY_POSTS_URL, {
      method: 'POST',
      headers: {
        Authorization: API_KEY,
        'wix-site-id': SITE_ID,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fieldsets: ['RICH_CONTENT', 'URL'],
        query: {
          cursorPaging: { limit: PAGE_SIZE, cursor },
          sort: [{ fieldName: 'firstPublishedDate', order: 'DESC' }],
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`Wix Blog API error ${response.status}: ${await response.text()}`);
    }

    const data = await response.json();
    posts.push(...(data.posts ?? []));
    cursor = data.pagingMetadata?.hasNext ? data.pagingMetadata?.cursors?.next : undefined;
  } while (cursor);

  return posts;
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  if (!API_KEY || !SITE_ID) {
    console.warn('[fetch-blog-posts] WIX_API_KEY / WIX_SITE_ID not set — skipping fetch, blog pages will show no posts.');
    await writeFile(INDEX_FILE, '[]');
    return;
  }

  const posts = await queryAllPosts();
  await mkdir(POSTS_DIR, { recursive: true });

  const index = posts.map((post) => ({
    id: post.id,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    firstPublishedDate: post.firstPublishedDate,
    minutesToRead: post.minutesToRead,
  }));
  await writeFile(INDEX_FILE, JSON.stringify(index, null, 2));

  await Promise.all(posts.map((post) => writeFile(path.join(POSTS_DIR, `${post.slug}.json`), JSON.stringify(post, null, 2))));

  console.log(`[fetch-blog-posts] Wrote ${posts.length} posts to ${path.relative(process.cwd(), OUT_DIR)}`);
}

main().catch((err) => {
  console.error('[fetch-blog-posts] Failed:', err);
  process.exit(1);
});
