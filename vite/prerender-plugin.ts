import { existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from 'fs';
import { Server, createServer } from 'http';
import { AddressInfo } from 'net';
import path from 'path';
import type { Plugin, ResolvedConfig } from 'vite';

/**
 * Build-time prerendering: after `vite build`, open every route listed in the sitemap in headless Chrome
 * and write the rendered markup to `<outDir>/<route>/index.html`, so crawlers and social previews get real HTML
 * (title, description, canonical, OG tags, page content) without running JavaScript.
 *
 * The app still boots with `createRoot`, which replaces the prerendered markup on load.
 * Set PRERENDER=false to skip this step. If Chrome can't start, the build keeps the plain SPA output.
 */

type PrerenderOptions = {
  sitemapPath: string;
  siteUrl: string;
  exclude?: (route: string) => boolean;
  concurrency?: number;
};

type Snapshot = {
  title: string;
  head: Record<string, string>;
  styles: string;
  body: string;
};

const MIME_TYPES: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.pdf': 'application/pdf',
  '.mp4': 'video/mp4',
};

// Head tags set at runtime by useUpdateMeta, copied from the rendered page into the static template.
const HEAD_TAGS = [
  { name: 'description', selector: 'meta[name="description"]', attribute: 'content', element: 'meta', key: 'name' },
  { name: 'canonical', selector: 'link[rel="canonical"]', attribute: 'href', element: 'link', key: 'rel' },
  { name: 'og:url', selector: 'meta[property="og:url"]', attribute: 'content', element: 'meta', key: 'property' },
  { name: 'og:title', selector: 'meta[property="og:title"]', attribute: 'content', element: 'meta', key: 'property' },
  { name: 'og:description', selector: 'meta[property="og:description"]', attribute: 'content', element: 'meta', key: 'property' },
];

const escapeHtml = (value: string) => value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const readRoutes = (sitemapPath: string, siteUrl: string) => {
  const sitemap = readFileSync(sitemapPath, 'utf-8');
  const locs = [...sitemap.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((match) => match[1]);
  return [...new Set(locs.filter((loc) => loc.startsWith(siteUrl)).map((loc) => decodeURI(loc.slice(siteUrl.length)) || '/'))];
};

// Static server over the build output; unknown paths fall back to the SPA shell, like the production host.
const serveBuild = (outDir: string, shell: string) =>
  new Promise<Server>((resolve) => {
    const server = createServer((request, response) => {
      const pathname = decodeURIComponent(new URL(request.url ?? '/', 'http://localhost').pathname);
      const filePath = path.join(outDir, pathname);
      if (filePath.startsWith(outDir) && existsSync(filePath) && statSync(filePath).isFile()) {
        response.writeHead(200, { 'Content-Type': MIME_TYPES[path.extname(filePath).toLowerCase()] ?? 'application/octet-stream' });
        response.end(readFileSync(filePath));
        return;
      }
      response.writeHead(200, { 'Content-Type': MIME_TYPES['.html'] });
      response.end(shell);
    });
    server.listen(0, '127.0.0.1', () => resolve(server));
  });

const injectSnapshot = (shell: string, snapshot: Snapshot) => {
  let html = shell.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(snapshot.title)}</title>`);
  for (const { name, attribute, element, key } of HEAD_TAGS) {
    const value = snapshot.head[name];
    if (!value) continue;
    const tag = `<${element} ${key}="${name}" ${attribute}="${escapeHtml(value)}" />`;
    const existing = new RegExp(`<${element}\\s[^>]*${key}="${name}"[^>]*>`);
    html = existing.test(html) ? html.replace(existing, () => tag) : html.replace('</head>', () => `  ${tag}\n  </head>`);
  }
  html = html.replace('</head>', () => `  <style data-prerender>${snapshot.styles}</style>\n  </head>`);
  return html.replace('<div id="root"></div>', () => `<div id="root">${snapshot.body}</div>`);
};

export const prerender = ({ sitemapPath, siteUrl, exclude = () => false, concurrency = 4 }: PrerenderOptions): Plugin => {
  let config: ResolvedConfig;

  return {
    name: 'birdia-prerender',
    apply: 'build',
    configResolved(resolvedConfig) {
      config = resolvedConfig;
    },
    async closeBundle() {
      if (process.env.PRERENDER === 'false') return;

      const logger = config.logger;
      const outDir = path.resolve(config.root, config.build.outDir);
      const shell = readFileSync(path.join(outDir, 'index.html'), 'utf-8');
      const routes = readRoutes(path.resolve(config.root, sitemapPath), siteUrl).filter((route) => !exclude(route));

      let puppeteer: typeof import('puppeteer').default;
      let browser: import('puppeteer').Browser;
      try {
        puppeteer = (await import('puppeteer')).default;
        browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
      } catch (error) {
        logger.warn(`[prerender] skipped, headless Chrome unavailable: ${(error as Error).message}`);
        return;
      }

      const server = await serveBuild(outDir, shell);
      const origin = `http://127.0.0.1:${(server.address() as AddressInfo).port}`;
      const snapshots = new Map<string, Snapshot>();
      const failures: string[] = [];
      const startedAt = Date.now();

      const renderRoute = async (route: string) => {
        const page = await browser.newPage();
        try {
          await page.setViewport({ width: 1440, height: 900 });
          await page.setRequestInterception(true);
          // Only load the site itself: no analytics, pixels, cookie banner or third-party fonts in the snapshot.
          page.on('request', (request) => (request.url().startsWith(origin) || request.url().startsWith('data:') ? request.continue() : request.abort()));
          await page.goto(origin + encodeURI(route), { waitUntil: 'networkidle0', timeout: 30_000 });
          await page.waitForSelector('#root > *', { timeout: 10_000 });

          const finalPath = decodeURI(new URL(page.url()).pathname);
          if (finalPath !== route) throw new Error(`redirected to ${finalPath}`);

          const snapshot = await page.evaluate((headTags) => {
            const head: Record<string, string> = {};
            for (const { name, selector, attribute } of headTags) {
              const value = document.head.querySelector(selector)?.getAttribute(attribute);
              if (value) head[name] = value;
            }
            // Emotion (MUI) injects rules through CSSOM in production, so <style> tags are empty: read the rules instead.
            const styles = [...document.querySelectorAll<HTMLStyleElement>('style[data-emotion]')]
              .map((style) => [...(style.sheet?.cssRules ?? [])].map((rule) => rule.cssText).join(''))
              .join('');
            return { title: document.title, head, styles, body: document.getElementById('root')?.innerHTML ?? '' };
          }, HEAD_TAGS);
          snapshots.set(route, snapshot);
        } catch (error) {
          failures.push(`${route} (${(error as Error).message})`);
        } finally {
          await page.close();
        }
      };

      const queue = [...routes];
      await Promise.all(
        Array.from({ length: concurrency }, async () => {
          for (let route = queue.shift(); route; route = queue.shift()) await renderRoute(route);
        })
      );
      await browser.close();
      server.close();

      for (const [route, snapshot] of snapshots) {
        const directory = path.join(outDir, route);
        mkdirSync(directory, { recursive: true });
        writeFileSync(path.join(directory, 'index.html'), injectSnapshot(shell, snapshot));
      }

      const seconds = ((Date.now() - startedAt) / 1000).toFixed(1);
      logger.info(`[prerender] ${snapshots.size}/${routes.length} routes rendered in ${seconds}s`);
      if (failures.length) logger.warn(`[prerender] ${failures.length} route(s) not prerendered:\n  ${failures.join('\n  ')}`);
    },
  };
};
