import { Link } from 'react-router-dom';

import { Env } from '@/common/utils/env';
import { useUpdateMeta } from '@/common/utils/use-update-meta';

import './assets/css/diagnostic-toiture-particuliers.css';

const CARDS = [
  { title: 'Avant un achat', text: "Vérifiez l'état de la toiture d'un bien avant de vous engager." },
  { title: 'Avant une vente', text: "Anticipez les questions d'un acheteur sur l'état de votre toit." },
  { title: 'Avant des travaux', text: 'Identifiez les zones à traiter en priorité.' },
  { title: 'Un couvreur près de chez vous', text: 'Mise en relation avec un couvreur partenaire BIRDIA, si vous le souhaitez.' },
];

const FAQ_ITEMS = [
  { question: 'Le pré-diagnostic BIRDIA est-il gratuit ?', answer: '[À compléter : confirmer : gratuit ou payant pour un particulier]' },
  {
    question: 'Le pré-diagnostic remplace-t-il un diagnostic réglementaire (DPE, amiante...) ?',
    answer:
      "Non. Il s'agit d'une aide à l'analyse ; un diagnostic réglementaire réalisé par un professionnel habilité reste nécessaire pour toute transaction ou obligation légale.",
  },
  { question: 'Suis-je obligé de passer par un couvreur partenaire ?', answer: 'Non, la mise en relation est optionnelle.' },
];

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="var(--peach)" strokeWidth={2.5} aria-hidden="true">
    <path d="M5 12l5 5L20 7" />
  </svg>
);

const Illustration = () => (
  <svg viewBox="0 0 400 300" role="img" aria-label="Illustration maison individuelle">
    <rect width={400} height={300} rx={20} fill="var(--green)" />
    <path d="M90 170 L200 95 L310 170 V235 H90 Z" fill="var(--peach)" stroke="var(--deep)" strokeWidth={4} />
    <rect x={185} y={175} width={40} height={60} fill="var(--deep)" />
    <rect x={120} y={185} width={35} height={35} fill="var(--white)" stroke="var(--deep)" strokeWidth={3} />
    <rect x={245} y={185} width={35} height={35} fill="var(--white)" stroke="var(--deep)" strokeWidth={3} />
    <circle cx={320} cy={75} r={22} fill="var(--orange)" />
    <path d="M310 75 h20 M320 65 v20" stroke="var(--white)" strokeWidth={4} strokeLinecap="round" />
  </svg>
);

export const DiagnosticToitureParticuliers = () => {
  useUpdateMeta(
    'Diagnostic de toiture pour particuliers | BIRDIA',
    "Faites diagnostiquer l'état de votre toiture à distance, avant un achat, une vente ou des travaux, puis trouvez un couvreur partenaire BIRDIA près de chez vous."
  );

  return (
    <div className="diagnostic-toiture-particuliers-page">
      <section className="hero" style={{ paddingBottom: 0 }}>
        <div className="wrap pq-hero">
          <div>
            <h1>Particuliers</h1>
            <p className="lead">Faites diagnostiquer votre toiture avant d'acheter, de vendre ou de rénover.</p>
            <p>
              Obtenez un pré-diagnostic de votre toiture à partir d'une simple adresse, directement depuis des images aériennes haute définition. Vous êtes
              ensuite mis en relation, si vous le souhaitez, avec un couvreur partenaire BIRDIA près de chez vous.
            </p>
          </div>
          <div className="pq-illus">
            <Illustration />
          </div>
        </div>
      </section>

      <div style={{ height: '70px' }} />

      <section className="pq-top" aria-label="Pourquoi BIRDIA pour particuliers">
        <div className="wrap">
          <ul className="pq-benefits">
            <li>
              <CheckIcon />
              <span>Pré-diagnostic à distance, sans rendez-vous préalable</span>
            </li>
            <li>
              <CheckIcon />
              <span>Utile avant un achat, une vente ou des travaux de rénovation</span>
            </li>
            <li>
              <CheckIcon />
              <span>
                Mise en relation avec un <Link to="/partenaires-couvreurs">couvreur partenaire</Link> proche de chez vous
              </span>
            </li>
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
          <h2 className="t">Ce que BIRDIA vous apporte :</h2>
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
