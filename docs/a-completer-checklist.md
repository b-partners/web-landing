# À compléter — tracking checklist

Checked off as answers come in. Source: BPARTNERS-3708 pages entreprise batch (see `docs/new-pages.md`).

## Fonctionnalites (/fonctionnalites/*) — BPARTNERS-3724 batch (see `docs/new-pages.md`)
- [ ] **⚠️ Get client consent before shipping**, or anonymize: all 3 feature pages publicly reuse a real client's address and report figures (17 Rue Pierre Bénech, 31100 Toulouse) as a worked example — currently not confirmed with the client.
- [x] ~~`/fonctionnalites/metre-et-mesures` — confirm the precision/error margin claimed for automatic measurements (FAQ)~~ — content confirmed final (user's call), placeholder removed
- [x] ~~`/fonctionnalites/metre-et-mesures` — confirm whether a data export (GeoJSON, Excel...) exists beyond the current PDF export (FAQ)~~ — content confirmed final (user's call), placeholder removed
- [x] ~~`/fonctionnalites/donnees-imagerie-et-methode` — confirm exact data hosting location~~ — content confirmed final (user's call), placeholder removed
- [ ] Link each `/pour-qui/*` persona page to the relevant `/fonctionnalites/*` page — not done in this batch, ticket flags it as a follow-up

## About (/a-propos) — team
- [x] Team section removed from the page entirely (user's call) — `resources/team.ts` deleted, all items below are moot
- [x] ~~Real roster (confirmed by user): Sofiane Madani (CEO, co-fondateur), Fonenantsoa "Lou" Maurica (co-fondateur, directeur technique), Ryan Andriamahery (fullstack), Amour Bien Aimée (frontend, homme), Dinasoa Ratsimba (DevOps), Adel Belhancee (IA), Ricka Princy (backend), Fadela Belarbi. "Emmanuel Faiche" was not on the real team, dropped.~~
- [x] ~~Fadela Belarbi — exact role~~
- [x] ~~Photo + 2-line bio × 8~~

## PartnerRoofers (/partenaires-couvreurs)
- [x] Couvreur selection criteria (FAQ) — question removed (user's call, no content to show)
- [x] ~~Is homeowner mise-en-relation free / conditions (FAQ) — for Sofiane to ask~~ — question removed from the FAQ entirely (user's call)
- [x] "Avis vérifiés" section — filled with 5 real reviews from the homepage (Idris B. + the 4 reuse candidates: Laurent M., Émilie C., Nathalie L., Julien V.). ⚠️ 4 of these are assureur/collectivité testimonials on a couvreur-network page — thematic fit is questionable, sanity-check before shipping.
- [x] Trustpilot/G2/Capterra widget note removed (user's call)

## ContactDemo (/contact-demo)
- [x] Office address: 14 rue Soleillet, 75020 Paris (user's call)
- [x] Minimap added, same embed pattern as the current /contact page

## LegalNotice (/mentions-legales)
- [x] Publication date — set to today (30/09/2026), since content was modified (rule: old date only if untouched)
- [x] VAT number — set to FR29918072737 (user's call)
- [x] Phone number in mentions légales — resolved to 06 68 62 48 36, the +33 1 82 07 72 28 number dropped (user's call)
- [x] Legal sign-off: activity description confirmed complete as-is, placeholder removed
- [x] Hosting: AWS, region eu-west-3 (Paris)

## Privacy (/confidentialite)
- [x] Publication date — kept as previous version's date, 16/01/2024 (user's call)
- [x] Legal sign-off: new activity description (section 2) is complete as-is, placeholder removed
- [ ] Scope confirm: France + EEA — for Sofiane (Belgium/Switzerland availability). Placeholder `<mark>` removed from the page (user's call); tracked here instead
- [x] Verify reconstructed account addresses — Instagram link (section 4.1) removed (was dead); Facebook/LinkedIn/X kept
- [ ] Add new-site form data + uploaded files to data-collected list. Placeholder `<mark>` removed from the page (user's call); tracked here instead
- [ ] Retention: harmonize with CGU art. 16.3 (30 days post-termination). Placeholder `<mark>` removed from the page (user's call); tracked here instead
- [x] Hosting wording: fixed — AWS, France, eu-west-3
- [x] Subprocessor: Fintecture — not used, replaced with Stripe (only payment processor currently)
- [x] Subprocessor: Bridge — not used anymore (migrated to Stripe), row removed
- [ ] Add current subprocessors list — imagery provider: ask Dinasoa (per user); still need CRM/form tool, emailing, analytics, site host names. Placeholder `<mark>` removed from the page (user's call); tracked here instead
- [x] Cookies section written — based on actual trackers in index.html (Axeptio managing Microsoft Clarity + Meta Pixel); could not scrape the live banner's exact wording (renders client-side, blocked in headless even with UA spoofing). REMINDER saved: talk to Sofiane before shipping.

## Presse (/presse)
- [x] ~~Systematic Paris Region, mars 2023 — source URL~~ — quote removed from the page entirely (user's call), see `docs/new-pages.md`
- [x] ~~French AssurTech, 2024 — source URL~~ — quote removed from the page entirely (user's call), see `docs/new-pages.md`

## Pricing (/tarifs)
- [x] Visual style now matches the real /couvreurs pricing section: Mensuel/Annuel (-10%) toggle, dark "métrés" banner, icon-topped cards, "Le plus choisi" badge, dashed feature checklist, outline/filled CTAs — ported from Craftsman.tsx/couvreurs.css
- [x] Price × 4 — reused live pricing from /couvreurs: 10€/analyse, 49€/99€/199€ per month (44/89/179 annual)
- [x] Offer content/inclusions × 4 — same source, real feature bullets per plan
- [x] Feature table: 9 rows × 4 plans — filled by mapping to /couvreurs' comparatif (inferred mapping, not 1:1 source — worth a sanity check)
- [x] Monthly or annual billing — both, 12-month commitment, annual gets a discount
- [x] Free trial duration — 7 days, no engagement (Essentiel/Pro/Expert)
- [x] Free trial: 2 analyses included (confirmed by Ryan)
- [ ] Assureurs/collectivités devis basis
- [x] ~~Comparison table: delay before quote — for Sofiane~~ — "Combien coûte une inspection aujourd'hui ?" section removed entirely (user's call)
- [x] ~~Comparison table: cost per building — for Sofiane~~ — same section removed
- [x] ~~FAQ: what's included (images, exports, users) — "Y a-t-il des frais cachés ?"~~ — question removed from the FAQ entirely (user's call)
- [x] ~~FAQ: are aerial images included, and their source (IGN, PCRS, prestataire)~~ — question removed from the FAQ entirely (user's call)

## CaseStudies (/cas-clients)
- [x] Route unmounted from `App.tsx` (user's call) — page is unreachable/unserved, but `src/pages/CaseStudies` is kept in the codebase as-is. Its links from `Advertising-Campaign` ("Ils nous font confiance" logos + "Voir tous les cas clients") and `About` ("Voir nos cas clients") were removed too, since they'd otherwise point at a dead route
- [ ] Shared template ×6 (solution/territory/imagery, named quote, 3 metrics)
- [ ] Use-case per city: Dijon, Toulouse, Cannes, Valence Romans Agglo
- [ ] Le Cotentin: confirm client
- [ ] Anonymous insurer case: name + use-case
- [x] Testimonial "Arnaud P." — matches the live homepage testimonial verbatim (name/role/quote); that's the approved published form, no fuller name/company needed
- [x] Testimonial "Joël D." — same, matches live homepage testimonial verbatim
- [ ] Precision rate + method (FAQ)
- [ ] Official client logos + usage rights
- [x] Reviews widget mention removed — logged as a nice-to-have in memory instead (not blocking)
- [ ] Unused live testimonials available for reuse (see chat): Laurent M. (assureur habitation), Émilie C. (souscription IARD), Nathalie L. (SIG collectivité), Julien V. (DSI collectivité), Idris B. (couvreur, 35). None are tied to a specific city, so not auto-assigned to a case card — say which case/page, if any.

## Advertising-Campaign (/campagne-publicitaire)
- [x] Per-campaign message variant — placeholder text removed (user's call: no variant needed)
- [x] Response turnaround time — placeholder removed, no SLA line shown (user's call)

## Pour qui (/pour-qui/*) — BPARTNERS-3718 batch (see `docs/new-pages.md`)
- [x] ~~`/pour-qui/foncieres-bailleurs-gestionnaires-de-patrimoine` — confirm exact slug (ticket flagged it as truncated)~~ — moot, persona removed from the hub (user's call)
- [x] ~~`/pour-qui/foncieres-bailleurs-gestionnaires-de-patrimoine` — validate positioning, no prior content existed for this persona~~ — moot, persona removed from the hub (user's call)
- [x] ~~`/particuliers/diagnostic-toiture` — validate positioning, no prior content existed for this persona~~ — moot, persona removed from the hub (user's call)
- [x] ~~`/particuliers/diagnostic-toiture` — is the pre-diagnostic free for a homeowner?~~ — moot, persona removed from the hub (user's call)
- [x] ~~`/pour-qui/foncieres-bailleurs-gestionnaires-de-patrimoine` — max volume of properties BIRDIA can analyze at once, processing delay for a large portfolio~~ — moot, persona removed from the hub (user's call)
- [x] ~~Replace the hero SVG illustration with real photography for couvreurs, assureurs, collectivites~~ — moot, these 3 pages reverted to the existing preprod `Craftsman`/`Insurance`/`Collectivity` components (no mockup template)
- [x] ~~Replace the 2 remaining placeholder hero SVG illustrations (foncières-bailleurs, particuliers) with real photography or brand art~~ — moot, both personas removed from the hub
- [x] Both the "Foncières et bailleurs" and "Particuliers" persona cards were removed from `/pour-qui` (`PourQui.tsx`), and their routes (`/pour-qui/foncieres-bailleurs-gestionnaires-de-patrimoine`, `/particuliers/diagnostic-toiture`) were unmounted from `App.tsx` (user's call). `src/pages/PourQuiFoncieresBailleurs` and `src/pages/DiagnosticToitureParticuliers` are kept in the codebase, just unreachable/unserved — same treatment as `/cas-clients` above.
- [ ] Set `ENDPOINT` in the CRM/form-tool integration once available (none of these pages have a form; CTAs go to `/contact-demo`, which already uses the mailto fallback)
