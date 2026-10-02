import { ReactNode, useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { Env } from '@/common/utils/env';
import { useUpdateMeta } from '@/common/utils/use-update-meta';

import './assets/css/tarifs.css';

/* ------------------------------------------------------------------ */
/* Placeholder « à compléter » — conservé verbatim depuis la maquette   */
/* ------------------------------------------------------------------ */
const Todo = ({ children }: { children: ReactNode }) => <mark className="todo">{children}</mark>;

/* ------------------------------------------------------------------ */
/* Icônes des offres — reprises telles quelles de /couvreurs            */
/* (src/pages/Craftsman/Craftsman.tsx) pour la cohérence visuelle.      */
/* ------------------------------------------------------------------ */
const ClockIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);
const BackArrowIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 7l-5 5 5 5" />
    <circle cx="12" cy="12" r="10" />
  </svg>
);
const TrendIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12l2-2 4 4 8-8 4 4" />
  </svg>
);
const ShieldIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6z" />
  </svg>
);

/* ------------------------------------------------------------------ */
/* Offres À l'usage / Essentiel / Pro / Expert                         */
/* ------------------------------------------------------------------ */
type Billing = 'monthly' | 'yearly';

type Plan = {
  name: string;
  who: string;
  icon: ReactNode;
  price: Record<Billing, string>;
  suffix: string;
  ht: string;
  yearlyLine?: Record<Billing, ReactNode>;
  ctaLabel: string;
  ctaOutline?: boolean;
  plusTag?: string;
  featured?: boolean;
  features: { node: ReactNode; muted?: boolean }[];
};

// Prix et contenu repris de l'offre déjà en ligne sur /couvreurs (src/pages/Craftsman/Craftsman.tsx).
const plans: Plan[] = [
  {
    name: "À l'usage",
    who: 'Pour tester ou pour un besoin ponctuel',
    icon: <ClockIcon />,
    price: { monthly: '10 €', yearly: '10 €' },
    suffix: '/ analyse',
    ht: 'Prix HT · aucun abonnement',
    ctaLabel: 'Tester sans engagement',
    ctaOutline: true,
    features: [
      { node: '1 analyse toiture à la demande' },
      { node: 'Tous les métrés (2D + détaillés + 3D + export CAO/BIM)' },
      { node: 'Rapport PDF + emprise GeoJSON' },
      { node: 'Marque blanche / co-branding du rapport' },
      { node: 'Assistance par courriel' },
    ],
  },
  {
    name: 'Essentiel',
    who: "Pour l'artisan qui chiffre régulièrement",
    icon: <BackArrowIcon />,
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
    ctaLabel: 'Essayer 7 jours sans engagement',
    features: [
      { node: '10 analyses toiture incluses / mois' },
      { node: '5 € HT / analyse supplémentaire' },
      { node: 'Tous les métrés (2D + détaillés + 3D + export CAO/BIM)' },
      { node: 'Marque blanche / co-branding du rapport' },
      { node: 'Bouton sur votre site pour génération de prospects' },
      { node: 'Communauté BIRDIA — 1 chantier proposé / mois' },
      { node: 'Assistance 7j/7 par courriel' },
    ],
  },
  {
    name: 'Pro',
    who: "Pour l'entreprise de couverture qui développe son activité",
    icon: <TrendIcon />,
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
    ctaLabel: 'Essayer 7 jours sans engagement',
    ctaOutline: true,
    plusTag: '+ Tout Essentiel',
    featured: true,
    features: [
      { node: '25 analyses toiture incluses / mois' },
      { node: '4 € HT / analyse supplémentaire' },
      { node: 'Communauté BIRDIA — +2 chantiers / mois' },
      { node: "Outil d'aide aux appels d'offres publics ou grands groupes" },
      { node: 'Support prioritaire' },
    ],
  },
  {
    name: 'Expert',
    who: 'Pour les équipes multi-utilisateurs et les intégrations',
    icon: <ShieldIcon />,
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
    ctaLabel: 'Essayer 7 jours sans engagement',
    ctaOutline: true,
    plusTag: '+ Tout Pro',
    features: [
      { node: '60 analyses toiture incluses / mois' },
      { node: '3 € HT / analyse supplémentaire' },
      { node: 'Communauté BIRDIA — +5 chantiers / mois' },
      { node: 'Accès API & webhooks' },
      { node: 'Suivi annuel (nouvelle passe automatique)' },
      { node: 'Multi-agences / multi-marques' },
      { node: 'Assistance dédiée 4 h ouvrées' },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Assureurs / Collectivités                                           */
/* ------------------------------------------------------------------ */
const quotePlans: { name: string; who: string; unit: string; features: string[] }[] = [
  {
    name: 'Assureurs',
    who: 'Portefeuilles IARD et MRH, courtiers, experts',
    unit: 'selon le nombre de biens analysés',
    features: ['Contrôle automatisé des toitures', 'Détection post-intempéries', 'Intégration API à vos outils de souscription', 'Support dédié'],
  },
  {
    name: 'Collectivités',
    who: 'Communes, EPCI, métropoles',
    unit: "selon la surface du territoire et les cas d'usage",
    features: [
      'Valorisation de vos orthophotos PCRS',
      'Détection des objets urbains',
      'Exports compatibles QGIS et Esri',
      'Accompagnement ZAN, LOM, Climat et Résilience',
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Comparatif : ce qui est inclus dans chaque offre                    */
/* ------------------------------------------------------------------ */
// Cases par offre reprises du comparatif déjà en ligne sur /couvreurs (Craftsman.tsx compareRows).
const featureRows: { label: string; cells: [boolean, boolean, boolean, boolean] }[] = [
  { label: "Analyse automatisée de l'état des toitures à partir d'images aériennes et satellitaires", cells: [true, true, true, true] },
  { label: 'Métrés, mesures et prises de cotes à distance', cells: [true, true, true, true] },
  { label: 'Détection des matériaux de couverture, des éléments techniques et des anomalies', cells: [true, true, true, true] },
  { label: 'Estimation des pentes, hauteurs et surfaces réelles des rampants', cells: [true, true, true, true] },
  { label: "Identification de l'usure, de l'humidité, des moisissures et des risques d'infiltration", cells: [true, true, true, true] },
  { label: 'Rapports PDF et exports GeoJSON, Excel, CityJSON', cells: [true, true, true, true] },
  { label: 'Suivi de clients et de prospects', cells: [false, true, true, true] },
  { label: "Module d'analyse en marque blanche sur votre site", cells: [true, true, true, true] },
  { label: "Accès à la communauté BIRDIA et aux opportunités d'intervention", cells: [false, true, true, true] },
];

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */
const faqItems: { question: string; answer: ReactNode }[] = [
  {
    question: "Puis-je tester avant de m'engager ?",
    answer: <>Oui, 7 jours sans engagement sur les offres Essentiel, Pro et Expert, avec 2 analyses incluses pour tester.</>,
  },
  {
    question: "Quelle est la durée d'engagement ?",
    answer: (
      <>
        L'offre À l'usage est sans abonnement. Les abonnements Essentiel, Pro et Expert sont facturés mensuellement ou annuellement, avec un engagement de 12
        mois — la facturation annuelle donne un tarif mensuel réduit.
      </>
    ),
  },
  {
    question: 'Qui peut souscrire ?',
    answer:
      'BIRDIA est réservé aux professionnels disposant d’un SIRET actif : couvreurs, étancheurs, charpentiers, diagnostiqueurs, bureaux d’études, assureurs, collectivités et activités assimilées.',
  },
  {
    question: 'Comment est calculé le prix pour une collectivité ou un assureur ?',
    answer: (
      <>
        Sur devis, selon <Todo>[À compléter : la surface du territoire ou le nombre de biens, les cas d'usage et le volume d'images]</Todo>.
      </>
    ),
  },
];

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */
export const Pricing = () => {
  useUpdateMeta(
    "Tarifs BIRDIA | Offres À l'usage, Essentiel, Pro et Expert",
    "Tarifs de BIRDIA, l'analyse de toitures par IA : offre À l'usage sans abonnement, abonnements Essentiel, Pro et Expert pour les professionnels, devis pour assureurs et collectivités."
  );

  const [billing, setBilling] = useState<Billing>('yearly');
  const pricingRef = useRef<HTMLDivElement>(null);

  // Aligne chaque rangée de features sur la hauteur max de cette rangée entre les
  // cartes (uniquement en desktop 4 colonnes), comme sur /couvreurs.
  useLayoutEffect(() => {
    const grid = pricingRef.current;
    if (!grid) return;

    let lastWidth = -1;
    const equalize = () => {
      const cards = Array.from(grid.querySelectorAll<HTMLElement>('.price-card'));
      const lists = cards.map((c) => Array.from(c.querySelectorAll<HTMLElement>('.features li')));
      lists.forEach((lis) => lis.forEach((li) => (li.style.height = '')));
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
    <div className="tarifs-page">
      <section className="hero" style={{ paddingBottom: '70px' }}>
        <div className="wrap">
          <h1>Tarifs</h1>
          <p className="lead">Quatre offres pour les professionnels du bâti, un devis pour les grands comptes.</p>
          <p>
            Commencez à l'usage, sans abonnement, puis passez à l'offre qui correspond à votre volume. Assureurs et collectivités : le prix dépend du nombre de
            biens ou de la surface analysée, nous établissons un devis.
          </p>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap" style={{ maxWidth: '1200px' }}>
          <div className="pricing-head-toggle">
            <div className="toggle">
              <button type="button" className={billing === 'monthly' ? 'active' : ''} onClick={() => setBilling('monthly')}>
                Mensuel
              </button>
              <button type="button" className={billing === 'yearly' ? 'active' : ''} onClick={() => setBilling('yearly')}>
                Annuel<span className="badge">−10 %</span>
              </button>
            </div>
            <div style={{ marginTop: '12px', fontSize: '13px', color: 'var(--muted)' }}>
              <strong style={{ color: 'var(--orange)' }}>Essai 7 jours gratuit sans engagement</strong> — valable sur tous les abonnements Essentiel, Pro et
              Expert.
            </div>
          </div>

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
                <div className="price-subtitle">{plan.who}</div>
                <div className="price-row">
                  <span className="price">{plan.price[billing]}</span>
                  <span className="price-suffix">{plan.suffix}</span>
                </div>
                <div className="price-ht">{plan.ht}</div>
                <div className="price-yearly">{plan.yearlyLine ? plan.yearlyLine[billing] : ' '}</div>
                <a href={Env.DASHBOARD_REGISTRATION_URL} className={`cta-full${plan.ctaOutline ? ' outline' : ''}`}>
                  {plan.ctaLabel}
                </a>
                {plan.plusTag ? (
                  <div className="plus-tag">{plan.plusTag}</div>
                ) : (
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
          <p className="fine" style={{ textAlign: 'center', marginTop: '18px' }}>
            Prix hors taxes. Offres réservées aux professionnels disposant d'un SIRET actif. Détail dans les <Link to="/cgu">CGU</Link> et les CGV.
          </p>
        </div>
      </section>

      <section className="sec green">
        <div className="wrap">
          <h2 className="t">Assureurs et collectivités</h2>
          <div className="grid2" style={{ marginTop: '30px' }}>
            {quotePlans.map((plan) => (
              <div className="card price" key={plan.name}>
                <h3>{plan.name}</h3>
                <p className="who">{plan.who}</p>
                <div className="amount">Sur devis</div>
                <div className="unit">{plan.unit}</div>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <Link to="/contact-demo" className="btn btn-orange">
                  Demander un devis
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec white">
        <div className="wrap">
          <h2 className="t">Ce qui est inclus dans chaque offre</h2>
          <div className="tscroll">
            <table className="cmp">
              <thead>
                <tr>
                  <th scope="col">Fonctionnalité</th>
                  <th scope="col">À l'usage</th>
                  <th scope="col">Essentiel</th>
                  <th scope="col">Pro</th>
                  <th scope="col">Expert</th>
                </tr>
              </thead>
              <tbody>
                {featureRows.map((row) => (
                  <tr key={row.label}>
                    <th scope="row" style={{ background: 'var(--white)', color: 'var(--ink)', fontWeight: 400 }}>
                      {row.label}
                    </th>
                    {row.cells.map((included, i) => (
                      <td key={i}>{included ? '✓' : '—'}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="wrap">
          <h2>FAQ</h2>
          <div className="faq-list">
            {faqItems.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <div className="cta-wrap" style={{ paddingTop: '80px' }}>
        <div className="wrap">
          <div className="cta">
            <h2>Calculons ensemble le coût pour votre activité</h2>
            <div className="btns">
              <Link to="/contact-demo" className="btn btn-orange">
                Réserver votre démo
              </Link>
              <a className="btn btn-white" href={Env.DASHBOARD_REGISTRATION_URL}>
                Tester sans engagement
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
