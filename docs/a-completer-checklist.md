# À compléter — tracking checklist

Checked off as answers come in. Source: BPARTNERS-3708 pages entreprise batch (see `docs/new-pages.md`).

## About (/a-propos) — team
- [x] Real roster (confirmed by user): Sofiane Madani (CEO, co-fondateur), Fonenantsoa "Lou" Maurica (co-fondateur, directeur technique), Ryan Andriamahery (fullstack), Amour Bien Aimée (frontend, homme), Dinasoa Ratsimba (DevOps), Adel Belhancee (IA), Ricka Princy (backend), Fadela Belarbi. "Emmanuel Faiche" was not on the real team, dropped.
- [x] Moved to `src/pages/About/resources/team.ts` — plain data array (initials/name/role/roleTodo/photo/bio), so future edits don't touch component code. Fill `photo`/`bio` per person there and the page picks it up automatically.
- [ ] Fadela Belarbi — exact role (user unsure: "Finance et relation client je crois", flagged as [À compléter] on the page)
- [ ] Photo + 2-line bio × 8 — fill directly in `resources/team.ts`

## PartnerRoofers (/partenaires-couvreurs)
- [x] Couvreur selection criteria (FAQ) — question removed (user's call, no content to show)
- [ ] Is homeowner mise-en-relation free / conditions (FAQ) — for Sofiane to ask
- [x] "Avis vérifiés" section — filled with 5 real reviews from the homepage (Idris B. + the 4 reuse candidates: Laurent M., Émilie C., Nathalie L., Julien V.). ⚠️ 4 of these are assureur/collectivité testimonials on a couvreur-network page — thematic fit is questionable, sanity-check before shipping.
- [x] Trustpilot/G2/Capterra widget note removed (user's call)

## ContactDemo (/contact-demo)
- [x] Office address: 14 rue Soleillet, 75020 Paris (user's call)
- [x] Minimap added, same embed pattern as the current /contact page

## LegalNotice (/mentions-legales)
- [x] Publication date — set to today (30/09/2026), since content was modified (rule: old date only if untouched)
- [ ] VAT number — to confirm with Sofiane
- [ ] Phone number in mentions légales (vs 06 68 62 48 36) — to confirm with Sofiane
- [x] Legal sign-off: activity description confirmed complete as-is, placeholder removed
- [x] Hosting: AWS, region eu-west-3 (Paris)

## Privacy (/confidentialite)
- [x] Publication date — kept as previous version's date, 16/01/2024 (user's call)
- [x] Legal sign-off: new activity description (section 2) is complete as-is, placeholder removed
- [x] Scope confirm: France + EEA — for Sofiane (Belgium/Switzerland availability)
- [x] Verify reconstructed account addresses — for Sofiane; ⚠️ Instagram link (section 4.1) is dead/unavailable, needs a real handle or removal
- [ ] Add new-site form data + uploaded files to data-collected list
- [ ] Retention: harmonize with CGU art. 16.3 (30 days post-termination)
- [x] Hosting wording: fixed — AWS, France, eu-west-3
- [x] Subprocessor: Fintecture — not used, replaced with Stripe (only payment processor currently)
- [x] Subprocessor: Bridge — not used anymore (migrated to Stripe), row removed
- [ ] Add current subprocessors list — imagery provider: ask Dinasoa (per user); still need CRM/form tool, emailing, analytics, site host names
- [x] Cookies section written — based on actual trackers in index.html (Axeptio managing Microsoft Clarity + Meta Pixel); could not scrape the live banner's exact wording (renders client-side, blocked in headless even with UA spoofing). REMINDER saved: talk to Sofiane before shipping.

## Pricing (/tarifs)
- [x] Price × 4 — reused live pricing from /couvreurs: 10€/analyse, 49€/99€/199€ per month (44/89/179 annual)
- [x] Offer content/inclusions × 4 — same source, real feature bullets per plan
- [x] Feature table: 9 rows × 4 plans — filled by mapping to /couvreurs' comparatif (inferred mapping, not 1:1 source — worth a sanity check)
- [x] Monthly or annual billing — both, 12-month commitment, annual gets a discount
- [x] Free trial duration — 7 days, no engagement (Essentiel/Pro/Expert)
- [x] Free trial: no analysis-count limit during the 7 days (to confirm with Ryan)
- [ ] Assureurs/collectivités devis basis
- [x] Comparison table: delay before quote — for Sofiane
- [x] Comparison table: cost per building — for Sofiane

## CaseStudies (/cas-clients)
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
