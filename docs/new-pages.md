# New pages log

Tracks pages added to the site outside the auto-generated `/template` SEO pages: route, source, description, and any follow-up needed.

## BPARTNERS-3708 — Pages entreprise (site redesign)

11 pages ported from the BIRDIA mockups in `/srv/download/birdia-pages-entreprises/` (see that folder's `pages-entreprise.md` and `TODO.md` for the original ticket). Two of them (`/bpartners-devient-birdia`, `/presse`) were built first from an earlier, near-identical drop and are listed separately below; this section covers the rest plus site-wide notes.

**Decisions made during this batch** (see `TODO.md` "Decisions to make first" for the full list — most are still open):
- `/cas-clients` uses the **plural** slug (content-tree naming), not the ticket's singular `/cas-client`.
- `/mentions-legales`, `/cgu` and `/confidentialite` now render the new HTML legal pages. `/conditions-generales-d-utilisation` and `/politique-de-confidentialite` (the old PDF-viewer routes) now render the same new `Cgu`/`Privacy` components instead of redirecting — a real 301 still needs to be set up at the hosting level per `pages-entreprise.md`, along with `bpartners.app/*` → `/bpartners-devient-birdia` and `/contact` → `/contact-demo` (only if those two pages get merged — not decided).
- The old in-app PDF viewer (`src/pages/GCU/PdfReader`) was removed; each legal page instead has a plain "Télécharger le PDF" link to the existing hosted PDF (`Env.REACT_APP_CGU_URL` / `REACT_APP_LEGAL_MENTION_URL` / `REACT_APP_PRIVACY_POLICY_URL`), so the original PDFs stay reachable.
- `/a-propos` and `/campagne-publicitaire` fully replace their previous page implementations (old subcomponents deleted after confirming nothing else imported them).
- Forms (`/contact-demo`, `/partenaires-couvreurs`, `/campagne-publicitaire`) use a shared `useMailtoFallbackForm` hook (`src/common/utils/use-mailto-fallback-form.ts`) that opens a pre-filled email to contact@birdia.fr, exactly like the mockups' own vanilla-JS fallback — no real CRM/form endpoint exists yet, so this **is not wired to `/sendEmail`** (the endpoint the older `ContactForm` uses) since its request shape is unrelated and unverified for these forms. Swap in a real endpoint once `TODO.md`'s "set ENDPOINT" item is resolved.
- `/campagne-publicitaire`'s `noindex, follow` meta and every page's canonical/OG/JSON-LD tags were **not** added — this codebase has no head-tag management infra beyond `useUpdateMeta` (title + description only). Worth revisiting if SEO/social previews matter for these pages.
- Every `<mark class="todo">[À compléter : …]</mark>` placeholder from the mockups was preserved verbatim in the ported JSX — none were filled in or guessed at. See `TODO.md` for the full inventory; highlights that block launch are called out per page below.
- Not ported in this batch (still open, per `TODO.md`): CGV / Contrat SaaS pages (referenced by CGU and tarifs but no page exists), the header "Nous recrutons !" careers page, verifying the social-media links reconstructed from the old privacy policy, and the footer "Ressources" blog links (some point at planned `/blog/` slugs that don't exist yet).

### /a-propos (replaces the previous About page)
- **Source**: `src/pages/About` (from `a-propos.html`)
- **Description**: Company story — research origin, the hybrid AI explained as "not a black box", the three professions served, team, awards, FAQ.
- **Open TODOs**: team member photos + 2-line bios (×4), Fonenantsoa's role, Lou's last name and role.

### /cas-clients
- **Source**: `src/pages/CaseStudies` (from `cas-client.html`)
- **Description**: Trust-center page — client logos, 6 case studies (need/solution/figures/quote), roofer testimonials, space for verified reviews, FAQ.
- **Open TODOs**: official client logos + usage agreement, per-case-study figures/quotes/use-cases (heavily templated, see `TODO.md` for the full count), a verified-reviews widget (Trustpilot/G2/Capterra).

### /partenaires-couvreurs
- **Source**: `src/pages/PartnerRoofers` (from `partenaires-couvreurs.html`)
- **Description**: Two-path page — homeowners find a partner roofer, roofers join the network. How-it-works steps, a lead form, FAQ.
- **Open TODOs**: verified-reviews widget, partner selection criteria, whether the homeowner mise-en-relation is free.

### /tarifs
- **Source**: `src/pages/Pricing` (from `tarifs.html`)
- **Description**: The four CGU-named offers (À l'usage, Essentiel, Pro, Expert), quote-based offers for assureurs/collectivités, a feature-comparison table, a cost-vs-site-visit-vs-drone comparison, FAQ.
- **Open TODOs**: every price and feature-table cell is still a placeholder (46 total) — pricing hasn't been decided yet.

### /contact-demo
- **Source**: `src/pages/ContactDemo` (from `contact-demo.html`)
- **Description**: Merged contact + demo-booking page: team contact details, what happens during the demo, one lead form (profile + request type).
- **Open TODO**: office address — the mockup flags a conflict between 14 rue Soleillet 75020 (site) and 8 rue Puget 75018 (legal docs); kept as a visible placeholder, not resolved.

### /mentions-legales, /cgu, /confidentialite
- **Source**: `src/pages/LegalNotice`, `src/pages/Cgu`, `src/pages/Privacy` (from `mentions-legales.html`, `cgu.html`, `confidentialite.html`)
- **Description**: Full legal text — mentions légales, terms of service (preamble + 20 articles), privacy policy (preamble + definitions + 23 sections) — each with an in-page table of contents.
- **Open TODOs**: publication dates, VAT number, AWS hosting region/host name, legal sign-off on the rewritten activity description (mentions légales + confidentialité), a cookies section to write, current subprocessor list, and — flagged but **not** resolved — two different phone numbers appear across the legal text (`+33 1 82 07 72 28`) vs. the rest of the site (`06 68 62 48 36`); both were kept exactly as the source had them.

### /campagne-publicitaire (replaces the previous ad-campaign page)
- **Source**: `src/pages/Advertising-Campaign` (from `campagne-publicitaire.html`)
- **Description**: Short ad-landing page — pitch, lead-gen form (captures `utm_source`/`utm_campaign` from the URL into hidden fields), and client-logo links into `/cas-clients`.
- **Open TODO**: the per-campaign message variant and the "réponse sous X" turnaround time are still placeholders.

## /bpartners-devient-birdia

- **Source**: `src/pages/Rebranding` (from `/srv/download/bpartners-devient-birdia.html`)
- **Description**: Rebranding announcement — explains that BPartners is now called BIRDIA (same company, same team, same account), what changes vs. what doesn't, the company timeline, and an FAQ.
- **Links fixed during import**:
  - `/contact-demo` now exists for real (built in the BPARTNERS-3708 batch above) — its "Réserver votre démo" buttons were updated to link there directly instead of the external demo-booking link they used temporarily.
  - Hardcoded `https://dashboard.birdia.fr/login` and `/sign-up` → replaced with `Env.DASHBOARD_LOGIN_URL` / `Env.DASHBOARD_REGISTRATION_URL` so they follow the environment, like the rest of the site.

## /presse

- **Source**: `src/pages/Presse` (from `/srv/download/presse.html`)
- **Description**: Press page — key facts about BIRDIA, press quotes/mentions, a press-release list (currently just the BPartners→BIRDIA announcement), and press contact details. The media kit section (logos/visuals/press-kit downloads) was removed entirely — user's call, not planned for now.
- **Links fixed during import**: same `/contact-demo` and dashboard URL fixes as above.
- **Known TODO**: 4 of 6 press-quote links are now real (Les Pépites Tech, Institut Mines-Télécom, GIP RECIA, and a new Airbus/Pléiades Neo case study added to the list). The Systematic Paris Region and French AssurTech quotes (which never had a source URL) were removed entirely — user's call — instead of staying as unsourced placeholders.

## BPARTNERS-3718 — /pour-qui (persona hub + 5 persona pages)

6 pages ported from the BIRDIA mockups in `/srv/download/pour-qui/` (see that folder's `pour-qui.md` for the original ticket). All 6 share the same visual template (hero + illustration, green "pourquoi BIRDIA" panel, benefit cards, FAQ, CTA) — only the hub page (`/pour-qui`) differs, with a persona-card grid instead.

**Decisions made during this batch**:
- `/pour-qui/couvreurs`, `/pour-qui/assureurs` and `/pour-qui/collectivites` were initially built from the `pour-qui-*.html` mockups, then reverted: the user asked to keep the existing preprod page implementations (`Craftsman`, `Insurance`, `Collectivity`) instead — these are now served as-is at the new `/pour-qui/*` URLs (no mockup template, no new illustration/benefits/FAQ layout for these 3). `/couvreurs`, `/assurances` and `/collectivites` still client-side redirect (`<Navigate replace>`) to their `/pour-qui/*` equivalent, same pattern as the existing `/conditions-generales-d-utilisation` → `/cgu` redirect. No server-level 301 exists for any of these (no redirect config in this repo) — same caveat as the legal-page redirects from the previous batch.
- `/pour-qui/foncieres-bailleurs-gestionnaires-de-patrimoine` and `/particuliers/diagnostic-toiture` are new personas, no prior page existed.
- Navbar: the three separate `Couvreurs`/`Assurances`/`Collectivités` links were replaced with a single `Pour qui ?` link to the hub (`src/common/components/navbar/utils/constants.ts`) — the ticket's second suggested option, since a dropdown component doesn't exist yet.
- Internal links to the old slugs were updated to the new canonical paths where found: the 3 persona cards on `/` (`src/pages/home/utils/constant.tsx`) and on `/a-propos` (`About.tsx`), and the template-page route allowlist (`use-template-form-context.ts`).
- On `/particuliers/diagnostic-toiture`, the "couvreur partenaire" mention in the benefits list links to `/partenaires-couvreurs` (not in the source mockup, added to fulfil the ticket's note that this page "connects to `/partenaires-couvreurs` for the roofer hand-off").
- Every `<mark class="todo">[À compléter : …]</mark>` placeholder from the mockups was preserved verbatim — none were filled in or guessed at.
- The illustrative SVGs in each hero are placeholders (per the ticket), kept as inline SVG exactly as in the mockups.

### /pour-qui
- **Source**: `src/pages/PourQui` (from `pour-qui.html`)
- **Description**: Hub page linking to the 5 persona pages below.

### /pour-qui/couvreurs, /pour-qui/assureurs, /pour-qui/collectivites
- **Source**: unchanged — `src/pages/Craftsman`, `src/pages/Insurance`, `src/pages/Collectivity` (the existing preprod pages), just mounted at the new `/pour-qui/*` paths instead of `/couvreurs`, `/assurances`, `/collectivites`.
- **Description**: same pages as before this batch — see their own history for content details.

### /pour-qui/foncieres-bailleurs-gestionnaires-de-patrimoine
- **Source**: `src/pages/PourQuiFoncieresBailleurs` (from `pour-qui-foncieres-bailleurs.html`)
- **Description**: Same template as above, for foncières/bailleurs/gestionnaires de patrimoine.
- **Open TODO**: positioning not validated — no prior content existed for this persona (flagged `[À compléter]` in the hero).

### /particuliers/diagnostic-toiture
- **Source**: `src/pages/DiagnosticToitureParticuliers` (from `pour-qui-particuliers.html`)
- **Description**: Same template, for individual homeowners — pre-diagnostic before a purchase/sale/renovation, with an optional hand-off to a partner roofer via `/partenaires-couvreurs`.
- **Open TODO**: positioning not validated (no prior content existed), and whether the pre-diagnostic is free is still a placeholder.

## BPARTNERS-3724 — /fonctionnalites (hub + 3 feature pages)

4 pages ported from the mockups in `/home/langio/Downloads/donc/` (see that folder's `fonctionnalites.md` for the original ticket). Unlike previous batches, content here is **not invented** — it's based on real BIRDIA dashboard screenshots and an actual analysis report (17 Rue Pierre Bénech, Toulouse). Each of the 3 feature pages embeds 2 real product screenshots and a worked example with real figures from that report.

**Decisions made during this batch**:
- The mockups embedded each screenshot as a self-contained base64 JPEG. These were extracted and converted to WebP (quality 85) for a meaningfully smaller payload, then imported as regular page assets — same pattern as the `/pour-qui/*` hero photos (ceda4e6). The 2D/3D screenshots are identical between `/fonctionnalites/metre-et-mesures` and `/fonctionnalites/donnees-imagerie-et-methode` (same underlying report, different explanatory framing) — duplicated into both pages' own `assets/img/`, consistent with this codebase's one-folder-per-page convention (no cross-page asset imports elsewhere in the repo).
- `/fonctionnalites` was added to the header nav (`src/common/components/navbar/utils/constants.ts`), next to `/pour-qui`, per the ticket's suggested nav placement.
- Per-persona linking from `/pour-qui/*` to the relevant feature pages was **not done** in this batch (ticket flags it as "not yet done" too).
- Unlike previous batches, this content is final: the `<mark class="todo">[À compléter : …]</mark>` placeholders from the mockups (measurement precision/error margin, data-export formats beyond PDF, exact hosting location) were removed — the user confirmed there are no open questions left on these 4 pages.

### /fonctionnalites
- **Source**: `src/pages/Fonctionnalites` (from `fonctionnalites.html`)
- **Description**: Hub page linking to the 3 feature pages below. Same template/markup pattern as the `/pour-qui` hub.

### /fonctionnalites/metre-et-mesures
- **Source**: `src/pages/FonctionnalitesMetresMesures` (from `fonctionnalites-metre-et-mesures.html`)
- **Description**: Automatic per-pan roof measurement (surface, pente, bordures) from a street address, 2D/3D product screenshots, material-loss calculator (0–22.5%, 10% recommended by default), real worked example (208.85 m², 5 pans, 21°, 32.67 m of arêtiers).

### /fonctionnalites/pre-diagnostic-et-etat-de-la-toiture
- **Source**: `src/pages/FonctionnalitesPreDiagnostic` (from `fonctionnalites-pre-diagnostic-et-etat-de-la-toiture.html`)
- **Description**: Material/anomaly detection (cheminée, moisissure, obstacle), each measured separately, percentage-based "intervention nécessaire" score (21.62% in the real example, alongside 71.03% taux de moisissure and a "Minime" usure level) — **not** the invented A–E letter grade from an earlier draft (corrected per the ticket). Includes an expert-comment field for human validation.

### /fonctionnalites/donnees-imagerie-et-methode
- **Source**: `src/pages/FonctionnalitesImagerieMethode` (from `fonctionnalites-donnees-imagerie-et-methode.html`)
- **Description**: Real image-source metadata (e.g. `HAUTE-GARONNE_2022_5cm`, GPS coordinates — orthophotos + LiDAR only, **no infrarouge claim**, per the ticket's correction), hybrid AI method (deep learning + symbolic reasoning), answers the "black box" objection.

### Open items (all 3 feature pages)
- **Client consent**: the worked example (17 Rue Pierre Bénech, Toulouse) reuses a real client's address and report figures as a public example. No consent confirmation was part of this batch — get client sign-off before this ships, or anonymize the address/figures. Flagged prominently in `docs/a-completer-checklist.md`.
