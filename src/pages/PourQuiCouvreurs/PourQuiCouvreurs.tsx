import { Link } from 'react-router-dom';

import { Env } from '@/common/utils/env';
import { useUpdateMeta } from '@/common/utils/use-update-meta';

import './assets/css/pour-qui-couvreurs.css';
import couvreurToiture from './assets/img/couvreur-toiture.webp';

const BENEFITS = [
  'Mesures et surfaces précises, sans monter sur le toit',
  'Détection des dommages et anomalies de matériaux',
  'Devis plus rapides et mieux acceptés, appuyés sur un rapport visuel',
];

const CARDS = [
  { title: 'Gain de temps', text: "Analysez une toiture avant même la première visite, à partir d'une simple adresse." },
  { title: 'Devis plus fiables', text: 'Mesures, matériaux et anomalies détectés automatiquement pour chiffrer avec précision.' },
  { title: 'Moins de déplacements', text: 'Priorisez vos visites sur les chantiers qui en ont réellement besoin.' },
  { title: 'Rapport client', text: 'Un rapport visuel clair à joindre à votre devis, pour rassurer vos clients.' },
];

const FAQ_ITEMS = [
  {
    question: 'BIRDIA remplace-t-il ma visite sur le chantier ?',
    answer:
      'Non. BIRDIA vous permet de préparer et de cibler vos visites ; la vérification sur place par un professionnel reste nécessaire avant toute décision opérationnelle.',
  },
  { question: "Ai-je besoin d'un drone ?", answer: "Non, aucun drone ni déplacement n'est nécessaire pour obtenir une première analyse." },
  {
    question: 'Comment rejoindre le réseau de couvreurs partenaires ?',
    answer: 'Rendez-vous sur notre page dédiée aux couvreurs partenaires pour vous inscrire.',
  },
];

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="var(--peach)" strokeWidth={2.5} aria-hidden="true">
    <path d="M5 12l5 5L20 7" />
  </svg>
);

export const PourQuiCouvreurs = () => {
  useUpdateMeta(
    'BIRDIA pour les couvreurs | Analyse de toiture par IA sans monter sur le toit',
    'BIRDIA aide les couvreurs à inspecter les toitures à distance : mesures, matériaux, anomalies et devis plus rapides, sans visite préalable.'
  );

  return (
    <div className="pour-qui-couvreurs-page">
      <section className="hero" style={{ paddingBottom: 0 }}>
        <div className="wrap pq-hero">
          <div>
            <h1>Couvreurs</h1>
            <p className="lead">Inspectez vos toitures à distance, en toute simplicité.</p>
            <p>
              Notre solution permet d'identifier sur des images HD allant jusqu'à 5 cm de précision les dommages, anomalies de matériaux et d'en prendre les
              mesures, avant même de vous déplacer chez le client.
            </p>
          </div>
          <div className="pq-illus">
            <img src={couvreurToiture} alt="Vue aérienne d'une toiture analysée par BIRDIA" />
          </div>
        </div>
      </section>

      <div style={{ height: '70px' }} />

      <section className="pq-top" aria-label="Pourquoi BIRDIA pour couvreurs">
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
          <h2 className="t">Ce que BIRDIA apporte aux couvreurs :</h2>
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
