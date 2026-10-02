import { Link } from 'react-router-dom';

import { Env } from '@/common/utils/env';
import { useUpdateMeta } from '@/common/utils/use-update-meta';

import './assets/css/bpartners-devient-birdia.css';

const changes = [
  { strong: 'Le nom :', text: 'BPartners devient BIRDIA' },
  { strong: 'Le site :', text: 'bpartners.app redirige vers birdia.fr' },
  { strong: 'L’adresse de connexion :', text: 'dashboard.birdia.fr' },
  { strong: 'Le contact :', text: 'contact@birdia.fr' },
];

const unchanged = [
  { strong: 'La société :', text: 'BPartners SAS, SIREN 918 072 737' },
  { strong: 'Votre compte :', text: 'mêmes identifiants, mêmes données' },
  { strong: 'Vos contrats :', text: 'conditions et interlocuteurs inchangés' },
  { strong: 'L’équipe :', text: 'les mêmes personnes, issues de la recherche française' },
];

const timeline = [
  { year: '2022', text: 'Création de BPartners SAS à Paris, avec une application pensée pour les artisans du bâtiment.' },
  {
    year: '2023',
    text: "Notre IA d'analyse de toitures est repérée par Les Pépites Tech, le pôle Systematic Paris Region Deeptech et l'Institut Mines-Télécom, qui lui décerne le premier prix du Trophée Start-up Numérique, catégorie Transformation numérique des entreprises.",
  },
  {
    year: '2024',
    text: 'Lauréat du concours French AssurTech, aux côtés de Groupama, MACIF, MAIF, Groupe P&V, Mutuelle de Poitiers Assurances, MAAF COVEA et CNP Assurances.',
  },
  { year: 'Aujourd’hui', text: 'L’analyse d’images aériennes est devenue le cœur de notre activité. BPartners prend le nom de BIRDIA.' },
];

const faqItems = [
  {
    question: 'BPartners et BIRDIA, est-ce la même entreprise ?',
    answer: 'Oui. BIRDIA est la marque exploitée par la société BPartners SAS (SIREN 918 072 737). Seul le nom commercial change.',
  },
  {
    question: 'Mon compte BPartners fonctionne-t-il toujours ?',
    answer: (
      <>
        Oui. Vous vous connectez avec les mêmes identifiants sur{' '}
        <a href={Env.DASHBOARD_LOGIN_URL} target="_blank" rel="noreferrer">
          dashboard.birdia.fr
        </a>
        .
      </>
    ),
  },
  {
    question: 'Que devient le site bpartners.app ?',
    answer: 'Toutes les adresses bpartners.app redirigent automatiquement vers birdia.fr. Vos favoris continueront de fonctionner.',
  },
  {
    question: 'Mes contrats ou factures sont-ils modifiés ?',
    answer: 'Non. Vos conditions restent identiques. Les documents émis à partir d’aujourd’hui portent le nom BIRDIA.',
  },
  {
    question: 'Pourquoi le nom BIRDIA ?',
    answer:
      'Bird pour la vue du ciel, IA pour l’intelligence artificielle : le nom décrit ce que fait la solution, analyser le bâti depuis des images aériennes.',
  },
  {
    question: 'Qui contacter pour une question ?',
    answer: (
      <>
        Écrivez à <a href="mailto:contact@birdia.fr">contact@birdia.fr</a> ou appelez le <a href="tel:+33668624836">06 68 62 48 36</a>.
      </>
    ),
  },
];

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#FFB27D" strokeWidth={2.5} aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth={2.5} aria-hidden="true">
    <path d="M5 12l5 5L20 7" />
  </svg>
);

export const Rebranding = () => {
  useUpdateMeta(
    'BPartners devient BIRDIA | L’IA qui analyse les toitures depuis le ciel',
    'BPartners (bpartners.app) s’appelle désormais BIRDIA. Même société, même équipe, même compte : découvrez ce qui change et ce qui ne change pas.'
  );

  return (
    <div className="rebranding-page">
      <section className="hero">
        <div className="wrap">
          <h1>BPartners devient BIRDIA</h1>
          <p className="lead">Même société, même équipe, même compte. Un nom qui dit enfin ce que nous faisons : analyser le bâti depuis le ciel.</p>
          <p>
            Vous nous connaissiez sous le nom de BPartners ou via l’application bpartners.app ? Vous êtes au bon endroit. BIRDIA est la marque exploitée par la
            société BPartners SAS. Notre technologie, nos engagements et nos interlocuteurs restent les mêmes.
          </p>
          <p>
            BIRDIA transforme les images aériennes haute résolution (5 cm/pixel) en données exploitables grâce à une IA hybride, qui associe deep learning et
            raisonnement symbolique. Elle accompagne les couvreurs, les assureurs et les collectivités, directement dans leurs outils métiers ou SIG.
          </p>
        </div>
      </section>

      <div className="band">
        <div className="wrap">
          <div className="panel">
            <h2>Ce qui change pour vous, et ce qui ne change pas :</h2>
            <div className="cols">
              <div>
                <h3>Ce qui change</h3>
                <ul>
                  {changes.map((item) => (
                    <li key={item.strong}>
                      <ArrowIcon />
                      <span>
                        <strong>{item.strong}</strong> {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Ce qui ne change pas</h3>
                <ul>
                  {unchanged.map((item) => (
                    <li key={item.strong}>
                      <CheckIcon />
                      <span>
                        <strong>{item.strong}</strong> {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="story" aria-labelledby="rebranding-story-title">
        <div className="wrap">
          <h2 id="rebranding-story-title">De BPartners à BIRDIA</h2>
          <ol className="timeline">
            {timeline.map((item) => (
              <li key={item.year}>
                <span className="year">{item.year}</span>
                <p>{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="trio" aria-label="Pourquoi BIRDIA">
        <div className="left">
          <div>
            <h3>Bird</h3>
            <p>La vue du ciel : des images aériennes haute résolution, à 5 cm de précision.</p>
          </div>
          <div>
            <h3>IA</h3>
            <p>Une intelligence artificielle hybride qui reproduit l’expertise métier.</p>
          </div>
          <div>
            <h3>BIRDIA</h3>
            <p>Un nom qui décrit enfin ce que fait notre solution.</p>
          </div>
        </div>
        <div className="right">
          <h2>Analyse automatisée de toitures par intelligence artificielle</h2>
          <p>
            Détection, qualification et recommandation à partir d’images aériennes HD. En un clic, obtenez un diagnostic métier précis sans monter sur le toit.
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
      </section>

      <section className="faq" aria-labelledby="rebranding-faq-title">
        <div className="wrap">
          <h2 id="rebranding-faq-title">FAQ</h2>
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

      <div className="cta-wrap">
        <div className="wrap">
          <div className="cta">
            <h2>Passez à l’analyse intelligente, sans complexité</h2>
            <div className="btns">
              <Link className="btn btn-orange" to="/contact-demo">
                Réserver votre démo
              </Link>
              <a className="btn btn-white" href={Env.DASHBOARD_LOGIN_URL} target="_blank" rel="noreferrer">
                Se connecter
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
