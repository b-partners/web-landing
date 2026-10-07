# SEO audit — birdia.fr landing (code review)

Date: 2026-10-07 · Scope: source code only (no live crawl, no Search Console data). Branch `preprod` @ `648ca96`.

## TL;DR

**Verdict: the code is not SEO-friendly in its current form.** Content and keyword targeting (≈200 template landing pages, French copy, one `<h1>` on most new pages) are a decent base, but the technical layer works against it:

1. **Pure client-side SPA**: every URL serves the same empty `<div id="root">` with the homepage `<title>`/description. Google can render JS, but slowly and not reliably; Bing, social previews (LinkedIn/Facebook/WhatsApp) and AI crawlers mostly can't.
2. **One 3.2 MB JS bundle + 30 MB of PNGs**: poor Core Web Vitals (LCP), which also delays rendering for Googlebot.
3. **Invalid / risky structured data and meta** in `index.html` (fake phone number, self-declared review rating, `lang="en"`, `og:url` = `/page-exemple`).
4. **Sitemap is out of sync and invalid** (contains other domains, misses key pages, stale `lastmod`).
5. **Soft-404s**: unknown URLs redirect to `/` instead of returning 404.
6. **~200 near-duplicate template pages** (same testimonials, same sections): thin/duplicate-content risk.

Priority fixes are at the bottom.

---

## 1. Rendering & indexability — 🔴 critical

| Finding | Where | Impact |
|---|---|---|
| SPA with no SSR/SSG/prerender. Raw HTML for every route = homepage head + empty root. | `index.html`, `vite.config.ts` | Crawlers that don't execute JS see one identical page ×230. Google indexes via the delayed render queue. |
| Title/description are set at runtime by `useUpdateMeta` (mutates `document.title`). | `src/common/utils/use-update-meta.ts` (+ duplicate in `pages/template/utils`) | Meta only exists after JS runs. Social cards always show the homepage text. |
| No `<link rel="canonical">` anywhere. | whole repo | `www` vs non-www, trailing slash, `?utm=` variants can be indexed as duplicates. |
| No per-page Open Graph / Twitter tags; the global `og:url` is `https://www.birdia.fr/page-exemple`. | `index.html` | Every share points to a non-existent URL. |
| `<html lang="en">` on a French site. | `index.html:2` | Wrong language signal for Google FR / hreflang logic. |
| Catch-all `<Route path="*" element={<Navigate to="/" />} />`. | `src/App.tsx:284` | Unknown/removed URLs return 200 + homepage → **soft 404s**; old URLs never drop out of the index. |
| Legacy slugs (`/conditions-generales-d-utilisation`, `/politique-de-confidentialite`) redirect client-side only. | `src/App.tsx:280-282` | Not a real 301; link equity is not passed reliably. |
| `<noscript>You need to enable JavaScript…</noscript>` is the only no-JS content. | `index.html` | That's what non-rendering bots read. |

## 2. Performance (Core Web Vitals) — 🔴 critical

| Finding | Detail |
|---|---|
| **Single JS bundle of 3.2 MB** (`build/assets/index-*.js`). | `App.tsx` statically imports all ~25 pages **and all ~205 template data files**; no `React.lazy`/code splitting. Every visitor downloads every page. |
| **74 raster images = 30 MB**, only 13 webp/avif. | Biggest: `common/components/solution/assets/images/Image_4.png` (4.4 MB), `Image_2.png` (4.1 MB), `Image_5.png` (3.3 MB), `home/assets/images/keys.png` (2.7 MB). `build/assets` = 64 MB. |
| Lazy loading used in only ~16 places for ~57 `<img>`. | Below-the-fold images load eagerly. |
| Heavy UI stack: MUI + emotion + `@mui/styles` (legacy JSS) + 3 carousel libs (swiper, react-multi-carousel, react-responsive-carousel) + react-pdf + Font Awesome 4.7 CSS + FA SVG. | More JS/CSS to parse before first paint. |
| Render-blocking 3rd parties in `<head>`: Clarity, Axeptio, Meta Pixel, GTM, gtag ×2 (Ads + GA4) + Font Awesome CSS. | GA4 is loaded *both* directly and probably via GTM. |
| Broken font hints: `preload`/`stylesheet` pointing at `https://fonts.googleapis.com` and `https://fonts.gstatic.com` roots (not files), `as="font"` on a CSS URL, `preconnect` on a full CSS URL. | Wasted requests + console warnings; the real font CSS is still render-blocking. |
| `"npm"` and `"install"` listed as runtime dependencies. | Not bundled, but a sign the dependency list needs cleanup. |

## 3. Structured data & head — 🟠 high

In `index.html`:

- `Organization` JSON-LD has a **placeholder phone `+33-1-23-45-67-89`** and a logo URL (`/logo.png`) that is not in `public/`.
- `LocalBusiness` JSON-LD declares `aggregateRating 4.3 / 92 reviews` on the business itself. **Self-serving review markup violates Google's guidelines** and can trigger a manual action. Also uses a different phone and logo path (`/assets/images/logo.webp`) than the Organization block.
- Same JSON-LD is served on all 230 pages (no page-level `FAQPage`, `BreadcrumbList`, `Product/Offer` for `/tarifs`, etc.). The template pages have FAQ sections that could use `FAQPage` markup.
- `meta keywords` (ignored by Google, harmless).
- Two `google-site-verification` tags (fine, but check both are still used).
- `theme-color #000000`, CRA leftover comments.

## 4. Sitemap & robots — 🟠 high

`public/sitemap.xml` (222 URLs), compared against routes in `App.tsx`:

- **Contains URLs from other hosts** (`blog.birdia.fr/*`, `dashboard.birdia.fr/login`, `/sign-up`). A sitemap may only list URLs of its own host → Search Console errors. The blog needs its own sitemap; dashboard login/sign-up shouldn't be in one at all.
- **Public pages missing** from the sitemap: `/tarifs`, `/fonctionnalites`, `/fonctionnalites/donnees-imagerie-et-methode`, `/fonctionnalites/metre-et-mesures`, `/fonctionnalites/pre-diagnostic-et-etat-de-la-toiture`, `/presse`, `/partenaires-couvreurs`, `/contact-demo`, `/bpartners-devient-birdia`, `/cgu`, `/confidentialite`, `/plan-du-site-navigation`, `/diagnostic-toiture-terrasse-dtu-43.3`. (Some may be intentional — e.g. `/campagne-publicitaire` — but `/tarifs` and `/fonctionnalites/*` are core money pages.)
- `lastmod` is hand-written and stale: 203 entries share `2025-09-26`, 14 share `2025-06-23`. Google ignores `lastmod` when it's visibly not trustworthy.
- `priority` / `changefreq` are ignored by Google.
- Sitemap is maintained by hand; the template generator workflow (`add-template-page.sh`) doesn't seem to update it, so new template pages can be missed.
- Uses `https://www.birdia.fr` while CLAUDE.md says the site is `birdia.fr` — make sure one host 301s to the other at the hosting level.
- `robots.txt` has no `Sitemap:` line. `Disallow: /template` also blocks every URL *starting with* `/template` (fine today, but watch slugs). `/campagne-publicitaire` (ad landing) is not noindexed.
- A template data file is named `schéma-toiture.ts` → probable accented slug; works, but percent-encoded URLs are fragile in sitemaps/links.

## 5. On-page content — 🟡 medium

**Good**

- 25 pages call `useUpdateMeta` with specific French titles/descriptions; template pages have unique `metaTitle`s (0 duplicates, max ~118 chars — a bit long, aim ≤ 60).
- Newer hand-built pages (Pricing, Fonctionnalités*, PourQui*, Presse…) have exactly one `<h1>`.
- Navigation uses real `<Link>`/`<a href>` (crawlable), and there is an HTML sitemap page (`/plan-du-site-navigation`).

**Issues**

- **No `<h1>` found on the home page, Insurance (`/pour-qui/assureurs`), Collectivity (`/pour-qui/collectivites`) and Contact** (older MUI pages using `Typography` without `variant/component="h1"`). Home is the most important page.
- **Template pages are near-duplicates**: 204/205 contain the same testimonials (e.g. "Arnaud P."), 199 share the same section title "Analyse automatisée de toitures…", same `TheyTrustUs`, `RoofDiagnostics`, footer. Unique text per page is a few short paragraphs (~5 KB of data each, most of it shared). At this scale it looks like doorway / scaled content to Google (Helpful Content + "scaled content abuse" policy). 9 meta descriptions are duplicated across templates. Some slugs are keyword variants of each other (`/diagnostics-toiture-s`, `/diagnostic-etat-toiture-s`, `…-pdf`) → keyword cannibalisation.
- The template layout has no footer (`TemplateLayout` renders only `Navbar`), so those pages link less back into the site.
- `alt` attributes: 7 `<img>` without `alt`, 2 with empty `alt` (ok if decorative). MUI/CSS background images carry no alt text at all.
- Same reused testimonials on many pages without `Review` markup is fine; but don't add review schema to them.

## 6. What's fine / not an issue

- HTTPS URLs, clean French slugs, flat URL structure.
- `/template*` editor routes are disallowed in robots.
- Google Search Console verification present.
- Analytics/consent (Axeptio) is in place (but impacts performance, see §2).

---

## Recommended actions (by ROI)

**P0 — quick wins (hours)** — ✅ done 2026-10-07 (`b9a0b0c`, `b81d663`, `5d2656f`, `e814fcd`). Found while doing it, still open:
- `https://birdia.fr/` answers 200 instead of 301 → `www` (host config).
- `/diagnostic-toiture-terrasse-dtu-43` and `/diagnostic-toiture-terrasse-dtu-43.3` render the same data file (duplicate content).
- Organization JSON-LD now has no phone; add the real support number if there is one.
- Unused heavy files remain in `public/` (e.g. `about/airbus-site.webp` 2.6 MB, `advertising/features/analyse-report.png` 2.2 MB) and in `src/` (`solution/` component, `Collectivity` `UseCaseItem*` aren't rendered). They don't affect page weight, only repo size.

1. Fix `index.html`: `lang="fr"`, remove/repair the fake phone & self-declared `aggregateRating`, fix `og:url`, clean the broken font preload/preconnect tags.
2. Clean the sitemap: remove external-host URLs, add `/tarifs`, `/fonctionnalites/*`, `/presse`, `/partenaires-couvreurs`, etc.; add `Sitemap: https://www.birdia.fr/sitemap.xml` to `robots.txt`.
3. Add an `<h1>` to home, assureurs, collectivités, contact.
4. Compress/convert the big PNGs to WebP/AVIF (30 MB → probably < 3 MB) and add `loading="lazy"` below the fold.

**P1 — structural (days)** — items 5 and 6 done 2026-10-07 (build-time prerender via `vite/prerender-plugin.ts`, canonical/OG in `useUpdateMeta`).
5. **Prerender / SSG** every route at build time so each URL ships its own HTML, `<title>`, description, canonical, OG tags. Options, least to most invasive: `vite-plugin-prerender`/`react-snap`-style prerendering → `vite-react-ssg` → migrate to Astro/Next.js (static export). The route list already exists in `App.tsx` + `json-data/`.
6. Replace `useUpdateMeta` with a head manager (`react-helmet-async`, or what the SSG tool provides) that handles title, description, canonical, OG/Twitter, robots, and per-page JSON-LD (`FAQPage` on templates, `BreadcrumbList`).
7. Route-level code splitting (`React.lazy` per page; load the template JSON by slug dynamically) to break the 3.2 MB bundle.
8. Server-side **301 redirects** for legacy slugs and a **real 404** page (HTTP 404) instead of `<Navigate to="/">`. Needs host config (Netlify `_redirects`, Vercel `vercel.json`, nginx…) — hosting is not defined in this repo.
9. Generate `sitemap.xml` at build time from the routes (real `lastmod` from git), and have the template workflow trigger it.

**P2 — content strategy**
10. Audit the ~200 template pages in Search Console: keep the ones that get impressions, merge/redirect keyword variants (`-s`, `-pdf`…), `noindex` or delete the rest; make each kept page meaningfully unique (local data, specific FAQ, no shared testimonial block).
11. Shorten template titles to ~60 chars, de-duplicate the 9 shared meta descriptions.
12. Add a footer to `TemplateLayout` for internal linking.

## Limits of this audit

Code-only. Not checked: live HTTP status codes/redirects, hosting config, actual indexation & rankings (Search Console), real Core Web Vitals (CrUX/PageSpeed), backlink profile, the blog subdomain. A live crawl (Screaming Frog with JS rendering on/off) + PageSpeed Insights on `/`, `/tarifs` and one template page would confirm the priorities above.
