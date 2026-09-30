import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { Env } from '@/common/utils/env';
import { useUpdateMeta } from '@/common/utils/use-update-meta';

import './assets/css/tarifs.css';

/* ------------------------------------------------------------------ */
/* Placeholder « à compléter » — conservé verbatim depuis la maquette   */
/* ------------------------------------------------------------------ */
const Todo = ({ children }: { children: ReactNode }) => <mark className="todo">{children}</mark>;

/* ------------------------------------------------------------------ */
/* Offres À l'usage / Essentiel / Pro / Expert                         */
/* ------------------------------------------------------------------ */
type Plan = {
  name: string;
  who: string;
  price: string;
  unit: string;
  note?: string;
  ctaLabel: string;
  features: string[];
  featured?: boolean;
};

// Prix et contenu repris de l'offre déjà en ligne sur /couvreurs (src/pages/Craftsman/Craftsman.tsx).
const plans: Plan[] = [
  {
    name: "À l'usage",
    who: 'Pour tester ou pour un besoin ponctuel',
    price: '10 €',
    unit: 'par analyse, sans abonnement',
    ctaLabel: 'Tester sans engagement',
    features: [
      '1 analyse toiture à la demande',
      'Tous les métrés (2D + détaillés + 3D + export CAO/BIM)',
      'Rapport PDF + emprise GeoJSON',
      'Marque blanche / co-branding du rapport',
      'Assistance par courriel',
    ],
  },
  {
    name: 'Essentiel',
    who: "Pour l'artisan qui chiffre régulièrement",
    price: '49 €',
    unit: 'par mois',
    note: 'HT · engagement annuel 12 mois · 44 € / mois en facturation annuelle',
    ctaLabel: 'Essayer 7 jours sans engagement',
    features: [
      '10 analyses toiture incluses / mois',
      '5 € HT / analyse supplémentaire',
      'Tous les métrés (2D + détaillés + 3D + export CAO/BIM)',
      'Marque blanche / co-branding du rapport',
      'Bouton sur votre site pour génération de prospects',
      'Communauté BIRDIA — 1 chantier proposé / mois',
      'Assistance 7j/7 par courriel',
    ],
  },
  {
    name: 'Pro',
    who: "Pour l'entreprise de couverture qui développe son activité",
    price: '99 €',
    unit: 'par mois',
    note: 'HT · engagement annuel 12 mois · 89 € / mois en facturation annuelle',
    ctaLabel: 'Essayer 7 jours sans engagement',
    featured: true,
    features: [
      '+ Tout Essentiel',
      '25 analyses toiture incluses / mois',
      '4 € HT / analyse supplémentaire',
      'Communauté BIRDIA — +2 chantiers / mois',
      "Outil d'aide aux appels d'offres publics ou grands groupes",
      'Support prioritaire',
    ],
  },
  {
    name: 'Expert',
    who: 'Pour les équipes multi-utilisateurs et les intégrations',
    price: '199 €',
    unit: 'par mois',
    note: 'HT · engagement annuel 12 mois · 179 € / mois en facturation annuelle',
    ctaLabel: 'Essayer 7 jours sans engagement',
    features: [
      '+ Tout Pro',
      '60 analyses toiture incluses / mois',
      '3 € HT / analyse supplémentaire',
      'Communauté BIRDIA — +5 chantiers / mois',
      'Accès API & webhooks',
      'Suivi annuel (nouvelle passe automatique)',
      'Multi-agences / multi-marques',
      'Assistance dédiée 4 h ouvrées',
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
/* Comparatif : coût d'une inspection aujourd'hui                      */
/* ------------------------------------------------------------------ */
type CostCell = ReactNode;
type CostRow = { label: string; cells: [CostCell, CostCell, CostCell] };

const costRows: CostRow[] = [
  {
    label: 'Déplacement pour chiffrer',
    cells: ['Oui, à chaque demande', 'Oui, avec télépilote', 'Seulement pour les chantiers retenus'],
  },
  { label: 'Autorisation de vol', cells: ['Non', 'Souvent, en zone urbaine', 'Non'] },
  {
    label: 'Délai avant devis',
    cells: [<Todo key="j1">[À compléter : x jours]</Todo>, <Todo key="j2">[À compléter : x jours]</Todo>, <Todo key="m">[À compléter : x minutes]</Todo>],
  },
  {
    label: 'Coût par bâtiment',
    cells: [<Todo key="e1">[À compléter : x €]</Todo>, <Todo key="e2">[À compléter : x €]</Todo>, <Todo key="e3">[À compléter : x €]</Todo>],
  },
  { label: 'Analyse à grande échelle', cells: ['Non', 'Limitée', 'Oui, un territoire entier'] },
];

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */
const faqItems: { question: string; answer: ReactNode }[] = [
  {
    question: 'Y a-t-il des frais cachés ?',
    answer: (
      <>
        Non. Le prix couvre l'accès à la plateforme et les analyses incluses dans votre offre.{' '}
        <Todo>[À compléter : confirmer ce qui est inclus (images, exports, utilisateurs)]</Todo>
      </>
    ),
  },
  {
    question: 'Les images aériennes sont-elles incluses ?',
    answer: <Todo>[À compléter : oui / non, et d'où elles proviennent (IGN, PCRS, prestataire)]</Todo>,
  },
  {
    question: "Puis-je tester avant de m'engager ?",
    answer: (
      <>
        Oui, 7 jours sans engagement sur les offres Essentiel, Pro et Expert. <Todo>[À compléter : nombre d'analyses offertes pendant l'essai]</Todo>
      </>
    ),
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
          <div className="grid4">
            {plans.map((plan) => (
              <div className={`card price${plan.featured ? ' feat' : ''}`} key={plan.name}>
                <h3>{plan.name}</h3>
                <p className="who">{plan.who}</p>
                <div className="amount">{plan.price}</div>
                <div className="unit">{plan.unit}</div>
                {plan.note && <p className="fine">{plan.note}</p>}
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <a className="btn btn-orange" href={Env.DASHBOARD_REGISTRATION_URL}>
                  {plan.ctaLabel}
                </a>
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

      <section className="sec">
        <div className="wrap">
          <h2 className="t" style={{ color: 'var(--orange)' }}>
            Combien coûte une inspection aujourd'hui ?
          </h2>
          <p className="intro">Comparez avec les méthodes que vous utilisez déjà.</p>
          <div className="tscroll">
            <table className="cmp">
              <thead>
                <tr>
                  <th scope="col" />
                  <th scope="col">Visite terrain seule</th>
                  <th scope="col">Drone</th>
                  <th scope="col">BIRDIA, puis visite ciblée</th>
                </tr>
              </thead>
              <tbody>
                {costRows.map((row) => (
                  <tr key={row.label}>
                    <th scope="row" style={{ background: 'var(--white)', color: 'var(--ink)' }}>
                      {row.label}
                    </th>
                    {row.cells.map((cell, i) => (
                      <td key={i}>{cell}</td>
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
