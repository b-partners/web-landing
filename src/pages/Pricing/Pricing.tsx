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
  unit: string;
  ctaLabel: string;
  featured?: boolean;
};

const plans: Plan[] = [
  { name: "À l'usage", who: 'Pour tester ou pour un besoin ponctuel', unit: 'par analyse, sans abonnement', ctaLabel: 'Tester sans engagement' },
  { name: 'Essentiel', who: "Pour l'artisan qui chiffre régulièrement", unit: 'par mois', ctaLabel: 'Choisir Essentiel' },
  {
    name: 'Pro',
    who: "Pour l'entreprise de couverture qui développe son activité",
    unit: 'par mois',
    ctaLabel: 'Choisir Pro',
    featured: true,
  },
  { name: 'Expert', who: 'Pour les équipes multi-utilisateurs et les intégrations', unit: 'par mois', ctaLabel: 'Choisir Expert' },
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
const featureRows = [
  "Analyse automatisée de l'état des toitures à partir d'images aériennes et satellitaires",
  'Métrés, mesures et prises de cotes à distance',
  'Détection des matériaux de couverture, des éléments techniques et des anomalies',
  'Estimation des pentes, hauteurs et surfaces réelles des rampants',
  "Identification de l'usure, de l'humidité, des moisissures et des risques d'infiltration",
  'Rapports PDF et exports GeoJSON, Excel, CityJSON',
  'Suivi de clients et de prospects',
  "Module d'analyse en marque blanche sur votre site",
  "Accès à la communauté BIRDIA et aux opportunités d'intervention",
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
        Oui, le test est sans engagement. <Todo>[À compléter : préciser : nombre d'analyses offertes, durée]</Todo>
      </>
    ),
  },
  {
    question: "Quelle est la durée d'engagement ?",
    answer: (
      <>
        L'offre À l'usage est sans abonnement. Les abonnements Essentiel, Pro et Expert sont{' '}
        <Todo>[À compléter : mensuels ou annuels : confirmer (les CGU mentionnent un engagement annuel)]</Todo>.
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
                <div className="amount">
                  <Todo>[À compléter : x € HT]</Todo>
                </div>
                <div className="unit">{plan.unit}</div>
                <ul>
                  <li>
                    <Todo>[À compléter : contenu de l'offre]</Todo>
                  </li>
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
                {featureRows.map((label) => (
                  <tr key={label}>
                    <th scope="row" style={{ background: 'var(--white)', color: 'var(--ink)', fontWeight: 400 }}>
                      {label}
                    </th>
                    <td>
                      <Todo>[À compléter : oui / non]</Todo>
                    </td>
                    <td>
                      <Todo>[À compléter : oui / non]</Todo>
                    </td>
                    <td>
                      <Todo>[À compléter : oui / non]</Todo>
                    </td>
                    <td>
                      <Todo>[À compléter : oui / non]</Todo>
                    </td>
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
