import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { Env } from '@/common/utils/env';
import { useUpdateMeta } from '@/common/utils/use-update-meta';

import './assets/css/fonctionnalites-metre-et-mesures.css';
import vue2d from './assets/img/vue-2d-contour-toiture.webp';
import vue3d from './assets/img/vue-3d-pans-mesures.webp';

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="var(--peach)" strokeWidth={2.5} aria-hidden="true">
    <path d="M5 12l5 5L20 7" />
  </svg>
);

const benefits = [
  'Surface totale et par pan, avec calcul de perte de matériaux à la pose',
  'Pente de chaque pan, en degrés',
  'Longueurs détaillées : égouts, rives, faîtages, arêtiers',
  'Vue 2D (contour) et vue 3D (pan par pan) de la même toiture',
];

const steps = [
  { title: 'Vous indiquez une adresse', text: "BIRDIA localise le bâtiment sur l'image aérienne la plus récente disponible pour le secteur." },
  { title: 'Vous tracez ou ajustez le contour', text: 'En vue 2D, le polygone du toit est proposé automatiquement et reste modifiable à la main.' },
  {
    title: "L'IA détecte les pans et les bordures",
    text: 'En vue 3D, chaque pan est isolé avec sa surface, sa pente et ses côtés (rive, égout, arêtier, faîtage).',
  },
  {
    title: 'Vous exportez le résultat',
    text: 'Rapport PDF détaillé : longueurs, surfaces, résumé par pan et calcul de perte, en un clic depuis la plateforme.',
  },
];

const exampleStats = [
  { value: '208,85 m²', label: 'surface totale (rampants)' },
  { value: '5', label: 'pans de toiture' },
  { value: '21°', label: 'pente dominante' },
  { value: '32,67 m', label: "d'arêtiers (4 segments)" },
];

const faqItems: { question: string; answer: ReactNode }[] = [
  {
    question: 'Quelle est la précision des mesures ?',
    answer: "Les images utilisées vont jusqu'à 5 cm de précision par pixel.",
  },
  {
    question: 'Les métrés remplacent-ils un relevé sur site ?',
    answer:
      "Non. Comme l'indique le rapport BIRDIA, ces calculs sont des estimations générées par IA statistique : leur exactitude n'est pas garantie et ils nécessitent la confirmation de votre expert toiture avant toute décision opérationnelle.",
  },
  {
    question: 'Comment est calculée la surface de matériau à commander ?',
    answer:
      'Le rapport propose un taux de perte à la pose, de 0 à 22,5 %, avec une recommandation par défaut à 10 %, appliqué à la surface totale et à chaque pan.',
  },
  {
    question: 'Dans quels formats puis-je récupérer les mesures ?',
    answer: 'En rapport PDF, directement depuis la plateforme, via le bouton « Exporter en PDF ».',
  },
];

export const FonctionnalitesMetresMesures = () => {
  useUpdateMeta(
    'Métrés et mesures de toiture par IA | BIRDIA',
    'BIRDIA calcule automatiquement surfaces, pentes et longueurs par pan de toiture à partir d’images aériennes haute résolution, avec vue 2D et 3D, sans monter sur le toit.'
  );

  return (
    <div className="fonctionnalites-metre-page">
      <section className="hero" style={{ paddingBottom: '70px' }}>
        <div className="wrap">
          <h1>Métrés et mesures</h1>
          <p className="lead">Des mesures précises, prises à distance.</p>
          <p>
            BIRDIA réalise des métrés, mesures et prises de cotes à distance, à partir d'images aériennes haute résolution. Plus besoin de monter sur le toit ou
            de dérouler un mètre pour chiffrer un chantier : le contour de la toiture, ses pans et leurs bordures sont mesurés automatiquement.
          </p>
        </div>
      </section>

      <section className="pq-top" aria-label="Ce que permet métrés et mesures">
        <div className="wrap">
          <ul className="pq-benefits">
            {benefits.map((benefit) => (
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
          <h2 className="t">Comment ça marche</h2>
          <ol className="steps" style={{ marginTop: '30px' }}>
            {steps.map((step) => (
              <li key={step.title}>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <h2 className="t" style={{ color: 'var(--orange)' }}>
            Vue 2D, vue 3D : le même bâtiment, deux niveaux de détail
          </h2>
          <p className="intro">Partez d'une simple adresse, affinez le contour du toit, puis basculez en 3D pour le détail pan par pan.</p>
          <div className="grid2">
            <div>
              <div className="shotwrap">
                <img src={vue2d} alt="Vue 2D : repérage du bâtiment et tracé du contour de toiture à partir d'une adresse" loading="lazy" />
              </div>
              <p className="shotcap">Vue 2D : repérage du bâtiment et tracé du contour de toiture à partir d'une adresse</p>
            </div>
            <div>
              <div className="shotwrap">
                <img
                  src={vue3d}
                  alt="Vue 3D : 4 pans détectés, surface totale et pente par pan, bordures (rive, égout, arêtier, faîtage) mesurées individuellement"
                  loading="lazy"
                />
              </div>
              <p className="shotcap">
                Vue 3D : 4 pans détectés, surface totale et pente par pan, bordures (rive, égout, arêtier, faîtage) mesurées individuellement
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec white">
        <div className="wrap">
          <div className="exbox">
            <h3>Exemple réel : 17 Rue Pierre Bénech, 31100 Toulouse</h3>
            <div className="exgrid">
              {exampleStats.map((stat) => (
                <div key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
            <p style={{ margin: '14px 0 0', fontSize: '14px', color: 'var(--muted)' }}>
              Le rapport exporté ajoute un calcul de perte de matériaux pour la pose (0 à 22,5 %), 10 % étant le taux recommandé par défaut : pour ce toit, cela
              porte la surface de 208,85 m² à 229,74 m² de matériau à prévoir.
            </p>
          </div>
        </div>
      </section>

      <section className="sec white">
        <div className="wrap">
          <div className="card" style={{ maxWidth: '760px', margin: '0 auto' }}>
            <h3>Une aide au chiffrage, pas un diagnostic opposable</h3>
            <p style={{ margin: 0 }}>
              Les mesures et métrés produits par BIRDIA sont des estimations issues d'une analyse automatisée. Ils doivent être vérifiés par un professionnel
              avant toute décision opérationnelle, et ne constituent pas un diagnostic réglementaire ou opposable.
            </p>
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
