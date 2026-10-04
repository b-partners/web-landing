import { Link } from 'react-router-dom';

import { Env } from '@/common/utils/env';
import { useUpdateMeta } from '@/common/utils/use-update-meta';

import './assets/css/fonctionnalites-pre-diagnostic.css';
import imageSource from './assets/img/image-source-hd-cheminees-moisissure.webp';
import panneauAnalyse from './assets/img/panneau-analyse-pre-diagnostic.webp';

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="var(--peach)" strokeWidth={2.5} aria-hidden="true">
    <path d="M5 12l5 5L20 7" />
  </svg>
);

const benefits = [
  'Détection et qualification des matériaux de couverture (type, revêtements)',
  "Taux d'usure, de moisissure et d'humidité estimés",
  'Repérage des cheminées, obstacles et zones de moisissure, chacune mesurée séparément',
  "Score « intervention nécessaire » en pourcentage, et champ de commentaire d'expert",
];

const steps = [
  { title: 'Identification des matériaux', text: 'Type de couverture (toit, tuiles…), revêtements principaux et secondaires, pente.' },
  {
    title: "Indicateurs d'usure",
    text: "Niveau d'usure qualitatif (par ex. « Minime »), taux d'usure, taux de moisissure et taux d'humidité, calculés automatiquement.",
  },
  {
    title: 'Détail par anomalie',
    text: "Chaque cheminée, zone de moisissure ou obstacle est délimité sur l'image et mesuré individuellement, avec sa propre surface en m².",
  },
  {
    title: "Score d'intervention et validation humaine",
    text: "Un score en pourcentage résume l'urgence d'intervention ; un champ « Commentaire de l'expert » permet à votre équipe de confirmer ou ajuster l'analyse avant de la transmettre au client.",
  },
];

const exampleStats = [
  { value: '21,62 %', label: 'score « intervention nécessaire »' },
  { value: '71,03 %', label: 'taux de moisissure' },
  { value: 'Minime', label: "niveau d'usure global" },
  { value: '5', label: 'anomalies distinctes détectées' },
];

const faqItems = [
  {
    question: "Le score d'intervention est-il reconnu réglementairement ?",
    answer:
      "Non. C'est un indicateur propre à BIRDIA, pensé pour prioriser les interventions. Il ne remplace pas un diagnostic réglementaire (DPE, amiante, etc.) réalisé par un professionnel habilité.",
  },
  {
    question: 'Quels types de désordres BIRDIA détecte-t-il ?',
    answer: 'Usure, moisissure (plusieurs teintes distinguées), humidité, cheminées et autres obstacles visibles depuis une image aérienne haute définition.',
  },
  {
    question: "Un professionnel peut-il corriger l'analyse ?",
    answer:
      "Oui. Chaque résultat reste modifiable, et un champ de commentaire d'expert permet de documenter la validation humaine avant transmission au client.",
  },
  {
    question: 'Le pré-diagnostic est-il fiable à 100 % ?',
    answer:
      "Non, aucun modèle d'IA n'est infaillible. Le rapport précise explicitement qu'il est généré par IA statistique et nécessite la confirmation de votre expert toiture.",
  },
];

export const FonctionnalitesPreDiagnostic = () => {
  useUpdateMeta(
    'Pré-diagnostic et état de la toiture par IA | BIRDIA',
    "BIRDIA détecte les matériaux, l'usure, la moisissure et les anomalies d'une toiture, et calcule un score d'intervention en pourcentage, avec commentaire d'expert."
  );

  return (
    <div className="fonctionnalites-pre-diagnostic-page">
      <section className="hero" style={{ paddingBottom: '70px' }}>
        <div className="wrap">
          <h1>Pré-diagnostic et état de la toiture</h1>
          <p className="lead">Un état des lieux clair, avant même la visite.</p>
          <p>
            BIRDIA identifie et qualifie les matériaux de couverture, les éléments techniques et les anomalies visibles depuis le ciel : usure, humidité,
            moisissures, obstacles. Le résultat est résumé en un score d'intervention en pourcentage, et chaque anomalie reste modifiable par votre expert
            toiture.
          </p>
        </div>
      </section>

      <section className="pq-top" aria-label="Ce que permet pré-diagnostic et état de la toiture">
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
          <h2 className="t">Ce que contient un pré-diagnostic</h2>
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
            Un rapport détaillé, anomalie par anomalie
          </h2>
          <p className="intro">
            Chaque élément détecté (cheminée, moisissure, obstacle) est délimité sur l'image et mesuré séparément, avec un champ libre pour le commentaire de
            l'expert.
          </p>
          <div className="grid2">
            <div>
              <div className="shotwrap">
                <img
                  src={panneauAnalyse}
                  alt="Panneau d'analyse : revêtement, usure, taux de moisissure (71,03 %), obstacle détecté, et score « Intervention nécessaire » à 21,62 %"
                  loading="lazy"
                />
              </div>
              <p className="shotcap">
                Panneau d'analyse : revêtement, usure, taux de moisissure (71,03 %), obstacle détecté, et score « Intervention nécessaire » à 21,62 %
              </p>
            </div>
            <div>
              <div className="shotwrap">
                <img
                  src={imageSource}
                  alt="Image source haute définition utilisée pour la détection : cheminées et zones de moisissure visibles depuis le ciel"
                  loading="lazy"
                />
              </div>
              <p className="shotcap">Image source haute définition utilisée pour la détection : cheminées et zones de moisissure visibles depuis le ciel</p>
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
              Le rapport détaille chaque anomalie séparément, avec sa surface : 1 cheminée (1,16 m²), 4 zones de moisissure de teintes différentes (noircie,
              couleur, claire) et 1 obstacle, chacune illustrée sur l'image source.
            </p>
          </div>
        </div>
      </section>

      <section className="sec white">
        <div className="wrap">
          <div className="card" style={{ maxWidth: '760px', margin: '0 auto' }}>
            <h3>Une aide à la priorisation, validée par un professionnel</h3>
            <p style={{ margin: 0 }}>
              Rapport généré par IA statistique nécessitant confirmation par votre expert toiture. Le pré-diagnostic ne se substitue ni à une visite terrain, ni
              à une expertise technique, ni à un diagnostic réglementaire opposable.
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
