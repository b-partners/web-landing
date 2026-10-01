import { Link } from 'react-router-dom';

import { Env } from '@/common/utils/env';
import { useUpdateMeta } from '@/common/utils/use-update-meta';

import './assets/css/pour-qui-assureurs.css';

const BENEFITS = [
  'Contrôle automatisé des toitures à grande échelle',
  'Prévention proactive des sinistres liés au vieillissement ou à la vétusté',
  'Détection rapide des zones à risque après intempéries',
];

const CARDS = [
  { title: 'Contrôle automatisé des toitures', text: 'Pour fiabiliser la complétude des contrats.' },
  { title: 'Connaissance fine des portefeuilles', text: 'En amont, pour adapter les offres.' },
  { title: 'Prévention proactive des sinistres', text: 'Liés au vieillissement ou à la vétusté.' },
  { title: 'Détection post-intempéries', text: 'Rapide des zones à risque.' },
];

const FAQ_ITEMS = [
  {
    question: 'BIRDIA remplace-t-il une expertise terrain ?',
    answer:
      "Non. Les résultats de BIRDIA sont des aides à l'analyse et à la priorisation ; ils doivent être vérifiés par un expert avant toute décision de souscription ou d'indemnisation.",
  },
  {
    question: 'Les résultats de BIRDIA sont-ils intégrables à nos outils de souscription ?',
    answer: 'Oui, via API, dans vos outils métiers ou plateformes de souscription.',
  },
  {
    question: 'BIRDIA est-il réservé aux grands groupes ?',
    answer: 'Non. BIRDIA est lauréat French AssurTech 2024, aux côtés de sept assureurs et mutuelles de toutes tailles.',
  },
];

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="var(--peach)" strokeWidth={2.5} aria-hidden="true">
    <path d="M5 12l5 5L20 7" />
  </svg>
);

const Illustration = () => (
  <svg viewBox="0 0 400 300" role="img" aria-label="Illustration assurance">
    <rect width={400} height={300} rx={20} fill="var(--green)" />
    <path d="M200 50 L300 85 V160 C300 215 255 250 200 265 C145 250 100 215 100 160 V85 Z" fill="var(--peach)" stroke="var(--deep)" strokeWidth={4} />
    <path d="M165 160 l25 25 55 -60" stroke="var(--deep)" strokeWidth={8} fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx={90} cy={60} r={20} fill="var(--orange)" />
    <circle cx={330} cy={230} r={14} fill="var(--orange)" />
  </svg>
);

export const PourQuiAssureurs = () => {
  useUpdateMeta(
    'BIRDIA pour les assureurs | Prévenir les sinistres, maîtriser les risques toiture',
    'BIRDIA aide les assureurs IARD à contrôler automatiquement les toitures de leur portefeuille, anticiper les risques climatiques et fiabiliser la souscription.'
  );

  return (
    <div className="pour-qui-assureurs-page">
      <section className="hero" style={{ paddingBottom: 0 }}>
        <div className="wrap pq-hero">
          <div>
            <h1>Assureurs</h1>
            <p className="lead">Prévenir les sinistres, maîtriser les risques : l'IA au service de l'assurance habitation.</p>
            <p>
              BIRDIA propose une solution souveraine, conçue en France, pour automatiser l'analyse des toitures à grande échelle. Notre IA identifie les
              anomalies, anticipe les risques climatiques et vous aide à fiabiliser les données de souscription comme de gestion.
            </p>
          </div>
          <div className="pq-illus">
            <Illustration />
          </div>
        </div>
      </section>

      <div style={{ height: '70px' }} />

      <section className="pq-top" aria-label="Pourquoi BIRDIA pour assureurs">
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
          <h2 className="t">Ce que BIRDIA apporte aux assureurs :</h2>
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
