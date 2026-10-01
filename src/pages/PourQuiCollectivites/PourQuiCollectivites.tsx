import { Link } from 'react-router-dom';

import { Env } from '@/common/utils/env';
import { useUpdateMeta } from '@/common/utils/use-update-meta';

import './assets/css/pour-qui-collectivites.css';

const BENEFITS = [
  'Valorisation des investissements PCRS existants, sans relevés terrain',
  'Suivi territorial automatisé : constructions illégales, zones sensibles, îlots de chaleur',
  'Conformité réglementaire ZAN, LOM, Climat et Résilience',
];

const CARDS = [
  {
    title: 'Valorisation des investissements PCRS',
    text: 'Exploitez pleinement vos orthophotos et autres données géographiques, sans coût de relevés terrain.',
  },
  {
    title: 'Suivi territorial automatisé',
    text: 'Détectez les changements morphologiques, les constructions illégales ou les zones sensibles (îlots de chaleur, végétation à risque).',
  },
  { title: 'Conformité réglementaire', text: 'Appuyez vos politiques ZAN, LOM et Climat & Résilience sur des indicateurs visuels à jour.' },
  { title: 'Intégration simple dans vos outils SIG', text: 'Exports compatibles QGIS, Esri et plateformes open data.' },
  { title: "Réduction des délais d'intervention", text: 'Identifiez rapidement les priorités sur le terrain.' },
  { title: 'Gain de temps et de fiabilité', text: 'Fiabilisez la donnée en automatisant les relevés de terrain, sans déplacement.' },
];

const FAQ_ITEMS = [
  { question: 'Faut-il de nouvelles données pour utiliser BIRDIA ?', answer: 'Non, BIRDIA valorise vos orthophotos PCRS et données existantes.' },
  {
    question: 'Les résultats sont-ils compatibles avec nos outils SIG ?',
    answer: 'Oui, nos exports sont compatibles QGIS, Esri et les principales plateformes open data.',
  },
  {
    question: 'Comment BIRDIA distingue-t-il les besoins SIGistes et direction générale ?',
    answer:
      'Les équipes SIG disposent d’exports techniques détaillés ; les directions générales disposent d’indicateurs synthétiques orientés ROI et conformité réglementaire.',
  },
];

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="var(--peach)" strokeWidth={2.5} aria-hidden="true">
    <path d="M5 12l5 5L20 7" />
  </svg>
);

const Illustration = () => (
  <svg viewBox="0 0 400 300" role="img" aria-label="Illustration collectivité">
    <rect width={400} height={300} rx={20} fill="var(--green)" />
    <rect x={70} y={120} width={70} height={110} fill="var(--peach)" />
    <rect x={165} y={90} width={70} height={140} fill="var(--peach)" opacity={0.9} />
    <rect x={260} y={140} width={70} height={90} fill="var(--peach)" opacity={0.8} />
    <g fill="var(--deep)">
      <rect x={82} y={135} width={12} height={12} />
      <rect x={104} y={135} width={12} height={12} />
      <rect x={82} y={160} width={12} height={12} />
      <rect x={104} y={160} width={12} height={12} />
      <rect x={177} y={105} width={12} height={12} />
      <rect x={199} y={105} width={12} height={12} />
      <rect x={177} y={130} width={12} height={12} />
      <rect x={199} y={130} width={12} height={12} />
      <rect x={272} y={155} width={12} height={12} />
      <rect x={294} y={155} width={12} height={12} />
    </g>
    <path d="M60 230 H340" stroke="var(--deep)" strokeWidth={4} />
    <circle cx={330} cy={70} r={18} fill="var(--orange)" />
  </svg>
);

export const PourQuiCollectivites = () => {
  useUpdateMeta(
    "BIRDIA pour les collectivités | Valoriser les images PCRS par l'IA",
    'BIRDIA aide les collectivités territoriales à valoriser leurs données PCRS et LiDAR pour le suivi du bâti, la gestion du territoire et la conformité réglementaire.'
  );

  return (
    <div className="pour-qui-collectivites-page">
      <section className="hero" style={{ paddingBottom: 0 }}>
        <div className="wrap pq-hero">
          <div>
            <h1>Collectivités</h1>
            <p className="lead">Valorisez vos images aériennes pour éclairer la décision publique.</p>
            <p>
              BIRDIA transforme vos images aériennes (PCRS, LiDAR, infrarouge…) en données d'aide à la décision concrètes, exploitables immédiatement dans vos
              outils SIG. Grâce à une IA souveraine et frugale, entraînée sur les spécificités des réglementations françaises (ZAN, LOM, Climat & Résilience),
              BIRDIA vous aide à passer de l'image à l'action, plus vite, plus simplement.
            </p>
          </div>
          <div className="pq-illus">
            <Illustration />
          </div>
        </div>
      </section>

      <div style={{ height: '70px' }} />

      <section className="pq-top" aria-label="Pourquoi BIRDIA pour collectivités">
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
          <h2 className="t">Ce que BIRDIA apporte aux collectivités territoriales :</h2>
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
