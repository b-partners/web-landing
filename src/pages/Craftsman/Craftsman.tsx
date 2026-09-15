import { ReactNode, useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { bookYourDemoUrl } from '@pages/Advertising-Campaign/components';

import './assets/css/couvreurs.css';

const MAQUETTE_IMG = '/assets/images/slot-image-maquette-3d.jpg';
const ANALYSE_IMG = '/assets/images/slot-image-2-maquette-3d.jpg';

/* ------------------------------------------------------------------ */
/* Icônes SVG réutilisables                                            */
/* ------------------------------------------------------------------ */
const CheckIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const PlayIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="6 4 20 12 6 20 6 4" />
  </svg>
);

// Vidéo du hero « Chiffrez une toiture » — ancienne vidéo de présentation,
// pilotable par la variable d'environnement (comme l'ancienne page couvreurs).
const HERO_VIDEO_URL = process.env.REACT_APP_CRAFTSMAN_VIDEO_URL || 'https://www.youtube.com/embed/kIQvQYhfZdU';
// Vidéo de la section « prise de côte » — tutoriel de prise de cote 3D (nouvelle vidéo).
const PRISE_DE_COTE_VIDEO_URL = 'https://www.youtube.com/embed/6nub7AjiwgQ';

/* ------------------------------------------------------------------ */
/* Données                                                             */
/* ------------------------------------------------------------------ */
const heroBullets = [
  { title: 'Sans échelle, sans drone.', text: "Analyse depuis l'imagerie aérienne HD." },
  { title: 'Visualisation HD.', text: 'Toiture à 5 cm par pixel.' },
  { title: 'Maquette 3D & plan des pans.', text: 'Surfaces, pentes, faîtage, rives, égouts, noues.' },
  { title: 'Rapport prêt à chiffrer.', text: 'Exporté en moins de 5 minutes.' },
];

const partnerLogos = [
  { src: '/assets/images/logo/abaques-batiments-services.png', alt: 'Abaques Bâtiments Services' },
  { src: '/assets/images/logo/adeso.png', alt: 'Adeso' },
  { src: '/assets/images/logo/lariviere.png', alt: 'Larivière' },
  { src: '/assets/images/logo/pictave-toiture.png', alt: 'Pictave Toiture' },
  { src: '/assets/images/logo/rte-dauphine.png', alt: 'RTE Dauphiné' },
  { src: '/assets/images/logo/archismart.png', alt: 'Archismart' },
  { src: '/assets/images/logo/couvrtoit38.png', alt: 'Couvrtoit 38' },
  { src: '/assets/images/logo/tuita.png', alt: 'Tuita' },
];

const steps = [
  {
    num: 1,
    title: 'Une simple adresse postale',
    text: "Vous saisissez l'adresse du prospect. Notre IA localise la parcelle et récupère l'imagerie aérienne haute définition de la toiture.",
    icon: (
      <svg className="step-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    num: 2,
    title: 'Mesures en 1 clic',
    text: 'Surface, pentes, hauteurs, faîtage, rives, égouts, noues — instantanément.',
    icon: (
      <svg className="step-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M7 12l3-3 4 4 6-6" />
        <path d="M16 7h5v5" />
      </svg>
    ),
  },
  {
    num: 3,
    title: "Détection d'usure",
    text: "Signes de vieillissement, mousses, moisissures, obstacles et zones d'humidité.",
    icon: (
      <svg className="step-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    num: 4,
    title: 'Rapport prêt à envoyer',
    text: 'Un document clair, professionnel, exploitable pour vos devis dès la première prise de contact.',
    icon: (
      <svg className="step-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="9" y1="15" x2="15" y2="15" />
        <line x1="9" y1="11" x2="15" y2="11" />
      </svg>
    ),
  },
];

const techPoints = [
  {
    title: 'Un assistant expert, pas un remplaçant',
    text: "Notre IA simule le regard métier d'un couvreur expérimenté.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
  {
    title: 'Prédiagnostics à distance',
    text: 'Détection des zones à risque, des dégradations, mesure de la pente et des hauteurs — sans monter sur le toit.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
  },
  {
    title: 'Plus de chantiers, moins de temps perdu',
    text: 'Gagnez en productivité en concentrant vos déplacements uniquement sur les projets prioritaires.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M7 15l4-4 3 3 6-6" />
      </svg>
    ),
  },
  {
    title: 'Une nouvelle expérience client',
    text: 'Fournissez à vos prospects un rapport technique clair dès la première prise de contact.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    title: 'Réduction de la pénibilité',
    text: "Moins d'allers-retours sur les toitures, plus de temps passé à réparer.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3l3 3M2 22l3.3-11 8-8 6.7 6.7-8 8L2 22z" />
      </svg>
    ),
  },
  {
    title: 'Moins de risques de chute',
    text: 'En évitant les diagnostics physiques systématiques, vous sécurisez vos équipes.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6z" />
      </svg>
    ),
  },
  {
    title: 'Une innovation française, née de la recherche publique',
    text: 'BIRDIA est une solution deeptech développée pour et avec les artisans.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z" />
      </svg>
    ),
  },
];

type Billing = 'monthly' | 'yearly';

type Plan = {
  name: string;
  subtitle: string;
  icon: ReactNode;
  price: Record<Billing, string>;
  suffix: string;
  ht: string;
  yearlyLine?: Record<Billing, ReactNode>;
  cta: { label: string; outline?: boolean };
  plusTag?: string;
  featured?: boolean;
  features: { node: ReactNode; muted?: boolean }[];
};

const plans: Plan[] = [
  {
    name: "À l'usage",
    subtitle: 'Pour tester ou pour un besoin ponctuel.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    price: { monthly: '10 €', yearly: '10 €' },
    suffix: '/ analyse',
    ht: 'Prix HT · aucun abonnement',
    cta: { label: 'Acheter une analyse', outline: true },
    features: [
      { node: <strong>1 analyse toiture à la demande</strong> },
      {
        node: (
          <>
            <strong>Tous les métrés</strong> (2D + détaillés + 3D + export CAO/BIM)
          </>
        ),
      },
      { node: 'Rapport PDF + emprise GeoJSON' },
      { node: 'Marque blanche / co-branding du rapport' },
      { node: 'Assistance par courriel' },
      { node: 'Bouton lead-gen sur votre site', muted: true },
      { node: 'Communauté BIRDIA — chantiers proposés', muted: true },
    ],
  },
  {
    name: 'Essentiel',
    subtitle: "Pour l'artisan solo — chiffrage pro dès le premier RDV.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 7l-5 5 5 5" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
    price: { monthly: '49 €', yearly: '44 €' },
    suffix: '/ mois',
    ht: 'HT · engagement annuel 12 mois',
    yearlyLine: {
      monthly: '588 € HT / an',
      yearly: (
        <>
          <strong>529 €</strong> HT / an (économie 59 €)
        </>
      ),
    },
    cta: { label: 'Essayer 7 jours sans engagement' },
    features: [
      { node: <strong>10 analyses toiture incluses / mois</strong> },
      { node: '5 € HT / analyse supplémentaire' },
      { node: 'Tous les métrés (2D + détaillés + 3D + export CAO/BIM)' },
      { node: 'Marque blanche / co-branding du rapport' },
      { node: 'Bouton sur votre site pour génération de prospects' },
      {
        node: (
          <>
            <strong>Communauté BIRDIA</strong> — 1 chantier proposé / mois <em>(particulier, entretien)</em>
          </>
        ),
      },
      { node: 'Assistance 7j/7 par courriel' },
    ],
  },
  {
    name: 'Pro',
    subtitle: "Pour l'entreprise 3–10 personnes — équipe et intégration.",
    featured: true,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12l2-2 4 4 8-8 4 4" />
      </svg>
    ),
    price: { monthly: '99 €', yearly: '89 €' },
    suffix: '/ mois',
    ht: 'HT · engagement annuel 12 mois',
    yearlyLine: {
      monthly: '1 188 € HT / an',
      yearly: (
        <>
          <strong>1 069 €</strong> HT / an (économie 119 €)
        </>
      ),
    },
    cta: { label: 'Essayer 7 jours sans engagement', outline: true },
    plusTag: '+ Tout Essentiel',
    features: [
      { node: <strong>25 analyses toiture incluses / mois</strong> },
      { node: '4 € HT / analyse supplémentaire' },
      {
        node: (
          <>
            <strong>Communauté BIRDIA</strong> — +2 chantiers / mois <em>(particuliers, entretiens)</em>
          </>
        ),
      },
      {
        node: (
          <>
            <strong>Outil d'aide aux appels d'offres</strong> publics ou grands groupes
          </>
        ),
      },
      { node: 'Support prioritaire' },
    ],
  },
  {
    name: 'Expert',
    subtitle: 'Pour les multi-agences et les intégrations API.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6z" />
      </svg>
    ),
    price: { monthly: '199 €', yearly: '179 €' },
    suffix: '/ mois',
    ht: 'HT · engagement annuel 12 mois',
    yearlyLine: {
      monthly: '2 388 € HT / an',
      yearly: (
        <>
          <strong>2 149 €</strong> HT / an (économie 239 €)
        </>
      ),
    },
    cta: { label: 'Essayer 7 jours sans engagement', outline: true },
    plusTag: '+ Tout Pro',
    features: [
      { node: <strong>60 analyses toiture incluses / mois</strong> },
      { node: '3 € HT / analyse supplémentaire' },
      {
        node: (
          <>
            <strong>Communauté BIRDIA</strong> — +5 chantiers / mois <em>(particuliers, entretiens, AO)</em>
          </>
        ),
      },
      { node: 'Accès API & webhooks' },
      { node: 'Suivi annuel (nouvelle passe automatique)' },
      { node: 'Multi-agences / multi-marques' },
      { node: 'Assistance dédiée 4 h ouvrées' },
    ],
  },
];

/* Comparatif : ✓ = true · — = false · sinon texte / {main, sub} */
type Cell = boolean | string | { main: string; sub: string };
type CompareRow = { label: string; group: true } | { label: string; cells: [Cell, Cell, Cell, Cell] };

const compareRows: CompareRow[] = [
  { label: 'Prix HT / mois', cells: ['—', '49 €', '99 €', '199 €'] },
  { label: 'Analyses toiture incluses / mois', cells: ['0', '10', '25', '60'] },
  { label: 'Prix / analyse supp. HT', cells: ['10 €', '5 €', '4 €', '3 €'] },
  { label: 'Métrés — cœur BIRDIA', group: true },
  { label: 'Surface rampant, pente, périmètre', cells: [true, true, true, true] },
  { label: 'Faîtage, rives, égouts, noues (linéaires)', cells: [true, true, true, true] },
  { label: 'Maquette 3D des pans (visualisation)', cells: [true, true, true, true] },
  { label: 'Export CAO / BIM (DXF, IFC)', cells: [true, true, true, true] },
  { label: 'Livrables & branding', group: true },
  { label: 'Rapport PDF + emprise GeoJSON', cells: [true, true, true, true] },
  { label: 'Marque blanche / co-branding rapport', cells: [true, true, true, true] },
  { label: 'Acquisition & process commercial', group: true },
  { label: 'Bouton sur votre site pour génération de prospects', cells: [false, true, true, true] },
  { label: 'Module de génération de devis', cells: [false, false, false, true] },
  { label: "Outil d'aide aux appels d'offres publics ou grands groupes", cells: [false, false, true, true] },
  { label: 'Communauté BIRDIA — chantiers proposés', group: true },
  {
    label: 'Chantiers proposés / mois',
    cells: [
      false,
      { main: '1', sub: 'particulier, entretien' },
      { main: '+2', sub: 'particuliers, entretiens' },
      { main: '+5', sub: 'particuliers, entretiens, AO' },
    ],
  },
  { label: 'Intégration & monitoring', group: true },
  { label: 'Accès API & webhooks', cells: [false, false, false, true] },
  { label: 'Suivi annuel (nouvelle passe automatique)', cells: [false, false, false, true] },
  { label: 'Multi-agences / multi-marques', cells: [false, false, false, true] },
  { label: 'Support', group: true },
  { label: 'Support', cells: ['Courriel', '7j/7 courriel', 'Prioritaire', 'Dédié 4 h ouvrées'] },
];

const renderCell = (cell: Cell, key: number) => {
  if (cell === true) {
    return (
      <td key={key} className="yes">
        ✓
      </td>
    );
  }
  if (cell === false) {
    return (
      <td key={key} className="no">
        —
      </td>
    );
  }
  if (typeof cell === 'object') {
    return (
      <td key={key}>
        {cell.main}
        <br />
        <span className="sub">{cell.sub}</span>
      </td>
    );
  }
  return <td key={key}>{cell}</td>;
};

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */
export const Craftsman = () => {
  const [billing, setBilling] = useState<Billing>('yearly');
  const pricingRef = useRef<HTMLDivElement>(null);

  // Aligne chaque rangée de features sur la hauteur max de cette rangée entre les
  // cartes (uniquement en desktop 4 colonnes) — pas de hauteur globale fixe, donc
  // pas d'impression de vide sous les features courtes.
  useLayoutEffect(() => {
    const grid = pricingRef.current;
    if (!grid) return;

    let lastWidth = -1;
    const equalize = () => {
      const cards = Array.from(grid.querySelectorAll<HTMLElement>('.price-card'));
      const lists = cards.map((c) => Array.from(c.querySelectorAll<HTMLElement>('.features li')));
      lists.forEach((lis) => lis.forEach((li) => (li.style.height = '')));
      // N'aligne que si toutes les cartes sont sur une même rangée (layout 4 colonnes).
      const singleRow = cards.length > 1 && cards.every((c) => c.offsetTop === cards[0].offsetTop);
      if (singleRow) {
        const maxRows = Math.max(...lists.map((l) => l.length));
        for (let i = 0; i < maxRows; i++) {
          let max = 0;
          lists.forEach((lis) => lis[i] && (max = Math.max(max, lis[i].offsetHeight)));
          lists.forEach((lis) => lis[i] && (lis[i].style.height = `${max}px`));
        }
      }
      lastWidth = grid.clientWidth;
    };

    // On ne ré-égalise QUE si la largeur change. Les changements de hauteur viennent de
    // nos propres mutations : les ignorer évite une boucle ResizeObserver (thrashing qui
    // bloquait le scroll via le scroll anchoring).
    const onMaybeResize = () => {
      if (grid.clientWidth !== lastWidth) equalize();
    };

    equalize();
    const ro = new ResizeObserver(onMaybeResize);
    ro.observe(grid);
    window.addEventListener('resize', onMaybeResize);
    if (document.fonts?.ready) document.fonts.ready.then(equalize);

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', onMaybeResize);
    };
  }, [billing]);

  return (
    <div className="couvreurs-page" style={{ paddingTop: '50px' }}>
      <div className="container">
        {/* ============ HERO ============ */}
        <section className="hero">
          <div className="hero-grid">
            <div>
              <div className="eyebrow">Pour les professionnels du toit</div>
              <h1 className="hero-title">
                Chiffrez une toiture en <span className="accent">moins de 60 secondes.</span>
              </h1>
              <p className="hero-sub">
                BIRDIA analyse la toiture de vos prospects depuis une simple adresse. <strong>Vous restez maître de votre métier</strong> — nous réduisons vos
                temps de déplacement, limitons le risque de chute pour vos équipes et professionnalisons votre chiffrage face au client.
              </p>

              <div className="hero-bullets-grid">
                {heroBullets.map((b) => (
                  <div className="hb-cell" key={b.title}>
                    <span className="hb-check">
                      <CheckIcon />
                    </span>
                    <div>
                      <strong>{b.title}</strong>
                      <span>{b.text}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="hero-ctas">
                <a href={bookYourDemoUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                  Réserver votre démo
                </a>
                <a href="#tarifs" className="btn btn-outline">
                  Voir les tarifs
                </a>
              </div>
            </div>

            {/* Vidéo */}
            <div>
              {HERO_VIDEO_URL ? (
                <div className="video-slot">
                  <iframe title="BIRDIA — démo couvreurs" src={HERO_VIDEO_URL} allowFullScreen />
                </div>
              ) : (
                <a href={bookYourDemoUrl} target="_blank" rel="noreferrer" className="video-slot" style={{ textDecoration: 'none' }}>
                  <div className="placeholder">
                    <div className="play-btn">
                      <PlayIcon />
                    </div>
                    <strong>Voir la démo (30 s)</strong>
                    Découvrez BIRDIA en action.
                  </div>
                </a>
              )}
            </div>
          </div>

          {/* Bandeau confiance 1 */}
          <div className="trust-strip">
            <div className="trust-header">
              <span className="trust-count">
                <strong>+300</strong> entreprises de couverture
              </span>
              <span className="trust-label">nous font confiance</span>
            </div>
            <div className="marquee">
              <div className="marquee-track">
                {[...partnerLogos, ...partnerLogos].map((logo, i) => (
                  <div className="logo-chip" key={`t1-${i}`} aria-hidden={i >= partnerLogos.length}>
                    <img src={logo.src} alt={logo.alt} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ COMMENT ÇA MARCHE ============ */}
        <section className="block" id="comment">
          <div className="section-head-centered">
            <div className="section-eyebrow">Comment ça marche</div>
            <h2 className="section-title">
              Quatre étapes, <span className="accent">zéro déplacement.</span>
            </h2>
            <p className="section-lead">Un parcours pensé pour les professionnels de la toiture : rapide, visuel, immédiatement exploitable en clientèle.</p>
          </div>

          <div className="steps">
            {steps.map((s) => (
              <div className="step" key={s.num}>
                <div className="step-num">{s.num}</div>
                {s.icon}
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ============ VOIR BIRDIA EN ACTION ============ */}
        <section className="block" id="demo" style={{ paddingTop: '24px' }}>
          <div className="video-block-grid">
            <div>
              <div className="section-eyebrow">Voir BIRDIA en action</div>
              <h2 className="section-title">
                Prise de côte, mesures, <span className="accent">maquette 3D</span> — en direct.
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--text-mute-strong)', marginTop: '16px' }}>
                Découvrez comment un couvreur peut, en quelques minutes, obtenir la surface exacte de rampant, mesurer chaque pan, identifier les zones
                dégradées et remettre un rapport visuel à son client.
              </p>

              <ul className="video-features">
                {[
                  'Prise de côte au centimètre depuis une image aérienne',
                  "Génération automatique d'une maquette 3D exploitable",
                  'Export du rapport prêt à joindre à votre devis',
                ].map((f) => (
                  <li key={f}>
                    <span className="check">
                      <CheckIcon size={12} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              {PRISE_DE_COTE_VIDEO_URL ? (
                <div className="video-slot" style={{ aspectRatio: '16 / 9' }}>
                  <iframe title="BIRDIA — prise de côte" src={PRISE_DE_COTE_VIDEO_URL} allowFullScreen />
                </div>
              ) : (
                <a href={bookYourDemoUrl} target="_blank" rel="noreferrer" className="video-slot" style={{ textDecoration: 'none', aspectRatio: '16 / 9' }}>
                  <div className="placeholder">
                    <div className="play-btn">
                      <PlayIcon />
                    </div>
                    <strong>Démo de la prise de côte</strong>
                    Découvrez la mesure au centimètre.
                  </div>
                </a>
              )}
            </div>
          </div>
        </section>

        {/* ============ MAQUETTE 3D ============ */}
        <section className="block" style={{ paddingTop: '24px' }}>
          <div className="section-head-centered" style={{ marginBottom: '32px' }}>
            <div className="section-eyebrow">Maquette 3D & plan des pans</div>
            <h2 className="section-title">
              Chaque pan, chaque linéaire, <span className="accent">chiffré au centimètre.</span>
            </h2>
          </div>

          <div className="maquette-wrap">
            <img src={MAQUETTE_IMG} alt="Maquette 3D BIRDIA — pans détaillés avec surfaces, pentes, faîtage, rives, égouts et noues mesurés au centimètre" />
          </div>
        </section>

        {/* ============ BANDEAU CONFIANCE 2 ============ */}
        <section style={{ padding: '8px 0 40px' }}>
          <div className="trust-strip" style={{ marginTop: 0 }}>
            <div className="trust-header">
              <span className="trust-count">
                <strong>+300</strong> entreprises de couverture
              </span>
              <span className="trust-label">utilisent BIRDIA</span>
            </div>
            <div className="marquee">
              <div className="marquee-track" style={{ animationDirection: 'reverse' }}>
                {[...partnerLogos, ...partnerLogos].map((logo, i) => (
                  <div className="logo-chip" key={`t2-${i}`} aria-hidden={i >= partnerLogos.length}>
                    <img src={logo.src} alt={logo.alt} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ TECHNOLOGIE FRANÇAISE ============ */}
        <section className="block" style={{ paddingTop: '24px' }}>
          <div className="tech-grid">
            <div>
              <div className="section-eyebrow">Deeptech française</div>
              <h2 className="section-title" style={{ marginBottom: '12px' }}>
                Une technologie <span className="accent">au service des professionnels de la toiture.</span>
              </h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '28px', fontSize: '16px' }}>
                Fruit de la recherche française, notre technologie unique reproduit le raisonnement d'un expert couvreur à partir d'images aériennes ultra haute
                définition.
              </p>

              <ul className="tech-list">
                {techPoints.map((p) => (
                  <li key={p.title}>
                    <span className="ico">{p.icon}</span>
                    <div>
                      <h4>{p.title}</h4>
                      <p>{p.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="tech-visual">
              <img src={ANALYSE_IMG} alt="Rapport d'analyse de toiture BIRDIA — vue HD, maquette Lidar 3D et détection des dégradations" />
            </div>
          </div>
        </section>

        {/* ============ TARIFS ============ */}
        <section className="block" id="tarifs" style={{ paddingTop: '24px' }}>
          <div className="section-head-centered">
            <div className="section-eyebrow">Nos offres 2026</div>
            <h2 className="section-title">
              Une seule promesse : <span className="accent">métrer, chiffrer, gagner</span>
            </h2>
            <p className="section-lead">
              De l'artisan solo aux multi-agences, chaque forfait vous fait gagner plus de temps sur vos chiffrages. Plus vous montez, plus vous automatisez.
            </p>
          </div>

          <div className="pricing-head-toggle">
            <div className="toggle">
              <button type="button" className={billing === 'monthly' ? 'active' : ''} onClick={() => setBilling('monthly')}>
                Mensuel
              </button>
              <button type="button" className={billing === 'yearly' ? 'active' : ''} onClick={() => setBilling('yearly')}>
                Annuel<span className="badge">−10 %</span>
              </button>
            </div>
            <div style={{ marginTop: '12px', fontSize: '13px', color: '#4a6379' }}>
              <strong style={{ color: 'var(--orange)' }}>Essai 7 jours gratuit sans engagement</strong> — valable sur tous les abonnements Essentiel, Pro et
              Expert.
            </div>
          </div>

          {/* Bandeau métrés */}
          <div className="metres-band">
            <div>
              <div className="mb-eyebrow">Dans chaque analyse BIRDIA</div>
              <div className="mb-title">Métrés au centimètre depuis une image aérienne HD.</div>
            </div>
            <div className="mb-col">
              <div className="mb-big">5 cm/px</div>
              <div className="mb-note">Résolution image</div>
            </div>
            <div className="mb-col">
              <div className="mb-mid">Plan détaillé des pans &amp; façades — maquette 3D réaliste</div>
              <div className="mb-note">Surface, pente, faîtage, rives, égouts, noues, périmètre + PDF client</div>
            </div>
            <div className="mb-col">
              <div className="mb-big">&lt; 5 min</div>
              <div className="mb-note">Rapport prêt à envoyer</div>
            </div>
          </div>

          <div className="pricing-grid" ref={pricingRef}>
            {plans.map((plan) => (
              <div className={`price-card${plan.featured ? ' featured' : ''}`} key={plan.name}>
                <div className="price-icon">{plan.icon}</div>
                <h3>{plan.name}</h3>
                <div className="price-subtitle">{plan.subtitle}</div>
                <div className="price-row">
                  <span className="price">{plan.price[billing]}</span>
                  <span className="price-suffix">{plan.suffix}</span>
                </div>
                <div className="price-ht">{plan.ht}</div>
                <div className="price-yearly">{plan.yearlyLine ? plan.yearlyLine[billing] : ' '}</div>
                <a
                  href={bookYourDemoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`cta-full${plan.cta.outline ? ' outline' : ''}`}
                  style={{ textDecoration: 'none' }}
                >
                  {plan.cta.label}
                </a>
                {plan.plusTag ? (
                  <div className="plus-tag">{plan.plusTag}</div>
                ) : (
                  // Réserve la même hauteur que le tag "+ Tout …" pour aligner la 1re ligne
                  // (nombre d'analyses) entre Essentiel, Pro et Expert.
                  <div className="plus-tag" aria-hidden="true" style={{ visibility: 'hidden' }}>
                    &nbsp;
                  </div>
                )}
                <ul className="features">
                  {plan.features.map((f, i) => (
                    <li className={f.muted ? 'muted' : ''} key={i}>
                      <span className="check">{f.muted ? '×' : '✓'}</span>
                      <span className="feature-text">{f.node}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pricing-custom">
            <div>
              <div className="pricing-custom-title">Sur-mesure — foncières, bailleurs, coopératives, diagnostiqueurs</div>
              <p style={{ margin: 0 }}>
                Volumes importants, multi-métiers, déploiement multi-entités, intégration personnalisée. Tarif adapté à votre activité, contractualisation par
                bon de commande ou contrat cadre.
              </p>
            </div>
            <Link to="/contact" className="btn btn-outline" style={{ whiteSpace: 'nowrap' }}>
              Nous contacter
            </Link>
          </div>
        </section>

        {/* ============ COMPARATIF DÉTAILLÉ ============ */}
        <section className="block" id="comparatif" style={{ paddingTop: '12px' }}>
          <div className="section-head-centered">
            <div className="section-eyebrow">Comparatif détaillé</div>
            <h2 className="section-title">
              Tous les métrés et fonctionnalités <span className="accent">en un coup d'œil.</span>
            </h2>
          </div>

          <div className="compare-wrap">
            <table className="compare-table">
              <thead>
                <tr>
                  <th className="col-feature">Fonctionnalités</th>
                  <th>À l'usage</th>
                  <th>Essentiel</th>
                  <th>Pro</th>
                  <th className="col-expert">Expert</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row, i) =>
                  'cells' in row ? (
                    <tr key={i}>
                      <td className="feature">{row.label}</td>
                      {row.cells.map((c, j) => renderCell(c, j))}
                    </tr>
                  ) : (
                    <tr className="group" key={i}>
                      <td colSpan={5}>{row.label}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* ============ FOOTER CTA ============ */}
        <section className="block" style={{ paddingTop: '24px' }}>
          <div className="footer-cta">
            <h2>Prêt à chiffrer vos premières toitures en 5 minutes ?</h2>
            <p>
              Rejoignez les artisans, PME et coopératives qui utilisent BIRDIA pour gagner du temps, sécuriser leurs équipes et remporter plus de chantiers.
            </p>
            <a href={bookYourDemoUrl} target="_blank" rel="noreferrer" className="btn">
              Réserver votre démo
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};
