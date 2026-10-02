import { Link } from 'react-router-dom';

import { Env } from '@/common/utils/env';
import { useUpdateMeta } from '@/common/utils/use-update-meta';

import './assets/css/pour-qui-foncieres-bailleurs.css';

const BENEFITS = [
  "Vue d'ensemble de l'état des toitures de tout votre parc",
  "Priorisation des travaux selon l'urgence et le budget disponible",
  'Suivi dans le temps pour anticiper plutôt que subir les sinistres',
];

const CARDS = [
  { title: 'Vision consolidée du parc', text: "Un indicateur d'état par bâtiment, comparable d'un site à l'autre." },
  { title: 'Priorisation des travaux', text: 'Identifiez les toitures qui nécessitent une intervention en premier.' },
  { title: "Aide à l'arbitrage budgétaire", text: 'Des données objectives pour justifier vos décisions de maintenance ou de rénovation.' },
  { title: 'Suivi dans le temps', text: "Comparez l'évolution de l'état de vos biens d'une campagne d'images à l'autre." },
];

const FAQ_ITEMS = [
  {
    question: 'Combien de biens BIRDIA peut-il analyser à la fois ?',
    answer: '[À compléter : confirmer : volume maximal, délai de traitement pour un grand parc]',
  },
  {
    question: 'Les indicateurs sont-ils exportables vers notre outil de gestion de patrimoine ?',
    answer: 'Oui, nos exports (PDF, GeoJSON, Excel) s’intègrent à vos outils métiers.',
  },
  {
    question: 'BIRDIA remplace-t-il un diagnostic technique réglementaire ?',
    answer: 'Non. Les résultats de BIRDIA sont des aides à la priorisation ; un diagnostic réglementaire reste nécessaire avant toute décision opérationnelle.',
  },
];

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="var(--peach)" strokeWidth={2.5} aria-hidden="true">
    <path d="M5 12l5 5L20 7" />
  </svg>
);

const Illustration = () => (
  <svg viewBox="0 0 400 300" role="img" aria-label="Illustration patrimoine immobilier">
    <rect width={400} height={300} rx={20} fill="var(--green)" />
    <rect x={95} y={70} width={210} height={160} fill="var(--peach)" />
    <g fill="var(--deep)">
      <rect x={115} y={95} width={26} height={26} />
      <rect x={160} y={95} width={26} height={26} />
      <rect x={205} y={95} width={26} height={26} />
      <rect x={250} y={95} width={26} height={26} />
      <rect x={115} y={140} width={26} height={26} />
      <rect x={160} y={140} width={26} height={26} />
      <rect x={205} y={140} width={26} height={26} />
      <rect x={250} y={140} width={26} height={26} />
      <rect x={115} y={185} width={26} height={26} />
      <rect x={205} y={185} width={26} height={26} />
      <rect x={250} y={185} width={26} height={26} />
    </g>
    <rect x={160} y={185} width={26} height={45} fill="var(--orange)" />
    <rect x={95} y={230} width={210} height={10} fill="var(--deep)" />
  </svg>
);

export const PourQuiFoncieresBailleurs = () => {
  useUpdateMeta(
    'BIRDIA pour les foncières et bailleurs | Suivi du patrimoine bâti par IA',
    "BIRDIA aide les foncières, bailleurs sociaux et gestionnaires de patrimoine à suivre l'état des toitures de leur parc immobilier et à planifier leur entretien."
  );

  return (
    <div className="pour-qui-foncieres-bailleurs-page">
      <section className="hero" style={{ paddingBottom: 0 }}>
        <div className="wrap pq-hero">
          <div>
            <h1>Foncières, bailleurs et gestionnaires de patrimoine</h1>
            <p className="lead">Pilotez l'état de votre patrimoine bâti depuis un seul tableau de bord.</p>
            <p>
              Suivez l'état des toitures de votre parc, programmez vos travaux d'entretien et justifiez vos arbitrages budgétaires avec des données objectives,
              sans multiplier les visites techniques. BIRDIA transforme vos images aériennes en indicateurs comparables, bâtiment par bâtiment.{' '}
              <mark className="todo">[À compléter : confirmer le positionnement exact : persona non couvert par le contenu existant]</mark>
            </p>
          </div>
          <div className="pq-illus">
            <Illustration />
          </div>
        </div>
      </section>

      <div style={{ height: '70px' }} />

      <section className="pq-top" aria-label="Pourquoi BIRDIA pour foncières, bailleurs et gestionnaires de patrimoine">
        <div className="wrap">
          <ul className="pq-benefits">
            {BENEFITS.map((benefit) => (
              <li key={benefit}>
                <CheckIcon />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          <div className="pq-right">
            <h2>Analyse automatisée par intelligence artificielle</h2>
            <p>
              Détection, qualification et recommandation à partir d'images aériennes HD. En un clic, obtenez un diagnostic métier précis sans monter sur le
              toit.
            </p>
            <div className="btns">
              <Link className="btn btn-orange" to="/contact-demo">
                Réserver votre démo
              </Link>
              <a className="btn btn-white" href={Env.DASHBOARD_REGISTRATION_URL} target="_blank" rel="noreferrer">
                Tester sans engagement
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="sec white">
        <div className="wrap">
          <h2 className="t">Ce que BIRDIA apporte aux gestionnaires de patrimoine :</h2>
          <div className="grid2" style={{ marginTop: '30px' }}>
            {CARDS.map((card) => (
              <div className="card" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="wrap">
          <h2>FAQ</h2>
          <div className="faq-list">
            {FAQ_ITEMS.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer.startsWith('[À compléter') ? <mark className="todo">{item.answer}</mark> : item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <div className="cta-wrap" style={{ paddingTop: '80px' }}>
        <div className="wrap">
          <div className="cta">
            <h2>Passez à l'analyse intelligente, sans complexité</h2>
            <div className="btns">
              <Link className="btn btn-orange" to="/contact-demo">
                Réserver votre démo
              </Link>
              <a className="btn btn-white" href={Env.DASHBOARD_REGISTRATION_URL} target="_blank" rel="noreferrer">
                Tester sans engagement
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
