import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { Env } from '@/common/utils/env';
import { useUpdateMeta } from '@/common/utils/use-update-meta';

import './assets/css/fonctionnalites-imagerie-methode.css';
import vue2d from './assets/img/vue-2d-contour-toiture.webp';
import vue3d from './assets/img/vue-3d-pans-mesures.webp';

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="var(--peach)" strokeWidth={2.5} aria-hidden="true">
    <path d="M5 12l5 5L20 7" />
  </svg>
);

const benefits = [
  "Images aériennes HD, jusqu'à 5 cm de précision, avec source et date identifiées",
  'Compatible avec vos données PCRS et LiDAR existantes',
  'IA hybride : deep learning pour la détection, règles métier pour la qualification',
  "Résultats traçables, fondés sur des critères explicites plutôt qu'une boîte noire",
];

const steps = [
  {
    title: 'Collecte des images',
    text: "BIRDIA s'appuie sur des orthophotos départementales, des données LiDAR, ou des images aériennes HD partenaires, chacune identifiée par sa source et son année (par exemple HAUTE-GARONNE_2022_5cm).",
  },
  {
    title: 'Détection par deep learning',
    text: "Les modèles d'IA identifient les objets d'intérêt sur l'image : pans de toiture, cheminées, obstacles, végétation, signalétique.",
  },
  {
    title: 'Qualification par raisonnement symbolique',
    text: 'Chaque objet détecté est qualifié selon des règles métier explicites (matériaux, usure, moisissure) et des contraintes réglementaires françaises (ZAN, LOM, Climat & Résilience).',
  },
  {
    title: 'Livrables exploitables',
    text: 'Les résultats sont consultables en vue 2D, en vue 3D interactive, et exportables en rapport PDF détaillé, directement depuis la plateforme.',
  },
];

const faqItems: { question: string; answer: ReactNode }[] = [
  {
    question: "D'où viennent les images utilisées par BIRDIA ?",
    answer:
      "D'orthophotos départementales (par exemple les campagnes PCRS), de données LiDAR, ou d'images aériennes HD fournies par nos partenaires. La qualité et la fréquence d'actualisation dépendent de leurs producteurs.",
  },
  {
    question: 'Puis-je savoir de quelle image provient une analyse ?',
    answer: "Oui. Chaque analyse affiche la source et l'année de l'image utilisée (par exemple HAUTE-GARONNE_2022_5cm) ainsi que ses coordonnées GPS.",
  },
  {
    question: "Pourquoi parler d'IA hybride plutôt que de boîte noire ?",
    answer:
      "Parce que notre IA ne se limite pas à une détection par deep learning : chaque résultat est ensuite qualifié selon des règles métier explicites, affiché en détail (type, taux, surface) et reste modifiable par un professionnel, ce qui rend l'analyse traçable.",
  },
  {
    question: 'Les données sont-elles hébergées en France ou en Europe ?',
    answer: 'Les données sont stockées sur des serveurs sécurisés situés en Europe.',
  },
];

export const FonctionnalitesImagerieMethode = () => {
  useUpdateMeta(
    "Données d'imagerie et méthode d'analyse | BIRDIA",
    'Découvrez les données utilisées par BIRDIA (orthophotos départementales HD, PCRS, LiDAR) et sa méthode d’IA hybride, qui combine deep learning et règles métier explicites.'
  );

  return (
    <div className="fonctionnalites-imagerie-methode-page">
      <section className="hero" style={{ paddingBottom: '70px' }}>
        <div className="wrap">
          <h1>Données d'imagerie et méthode</h1>
          <p className="lead">Comment BIRDIA regarde vos bâtiments.</p>
          <p>
            BIRDIA s'appuie sur des images aériennes haute définition, jusqu'à 5 cm de précision par pixel, datées et géolocalisées, ainsi que sur vos données
            PCRS et LiDAR existantes. Notre IA hybride associe deep learning et raisonnement symbolique : elle ne se contente pas de détecter des objets, elle
            les qualifie selon des règles métier et des contraintes réglementaires explicites.
          </p>
        </div>
      </section>

      <section className="pq-top" aria-label="Ce que permet données d'imagerie et méthode">
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
          <h2 className="t">Notre méthode, étape par étape</h2>
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
            De l'orthophoto départementale au rapport exploitable
          </h2>
          <p className="intro">Chaque analyse part d'une image aérienne datée et géolocalisée, avec son niveau de zoom et sa source clairement identifiés.</p>
          <div className="grid2">
            <div>
              <div className="shotwrap">
                <img
                  src={vue2d}
                  alt="Image source identifiée (ici HAUTE-GARONNE_2022_5cm, GPS 43.5844889, 1.4173278), avec choix du niveau de zoom et de la source d'image"
                  loading="lazy"
                />
              </div>
              <p className="shotcap">
                Image source identifiée (ici HAUTE-GARONNE_2022_5cm, GPS 43.5844889, 1.4173278), avec choix du niveau de zoom et de la source d'image
              </p>
            </div>
            <div>
              <div className="shotwrap">
                <img src={vue3d} alt="Le même bâtiment restitué en 3D, pan par pan, à partir de cette seule image source" loading="lazy" />
              </div>
              <p className="shotcap">Le même bâtiment restitué en 3D, pan par pan, à partir de cette seule image source</p>
            </div>
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
