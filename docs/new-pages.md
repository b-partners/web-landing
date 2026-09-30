# New pages log

Tracks pages added to the site outside the auto-generated `/template` SEO pages: route, source, description, and any follow-up needed.

## /bpartners-devient-birdia

- **Source**: `src/pages/Rebranding` (from `/srv/download/bpartners-devient-birdia.html`)
- **Description**: Rebranding announcement — explains that BPartners is now called BIRDIA (same company, same team, same account), what changes vs. what doesn't, the company timeline, and an FAQ.
- **Links fixed during import**:
  - `/contact-demo` (didn't exist as a route) → replaced with the site's demo-booking link (`bookYourDemoUrl`, opens in a new tab), matching the "Réserver votre démo" convention used elsewhere on the site.
  - Hardcoded `https://dashboard.birdia.fr/login` and `/sign-up` → replaced with `Env.DASHBOARD_LOGIN_URL` / `Env.DASHBOARD_REGISTRATION_URL` so they follow the environment, like the rest of the site.

## /presse

- **Source**: `src/pages/Presse` (from `/srv/download/presse.html`)
- **Description**: Press kit page — key facts about BIRDIA, press quotes/mentions, a press-release list (currently just the BPartners→BIRDIA announcement), a media kit, and press contact details.
- **Links fixed during import**: same `/contact-demo` and dashboard URL fixes as above.
- **Known TODOs (intentionally left as placeholders, per product decision)**:
  - The 5 "Lire l'article" press-quote links (Les Pépites Tech, Systematic Paris Region, Institut Mines-Télécom, GIP RECIA, French AssurTech) still point to `#`. Real article URLs need to be found and wired in — search the existing site/blog for matching coverage first.
  - The "Télécharger les logos" download button was removed entirely (no asset, and not planned).
  - "Télécharger les visuels" and "Télécharger le dossier (PDF)" buttons are still `#` — need a real asset to link to (e.g. hosted PDF/zip) before launch.
