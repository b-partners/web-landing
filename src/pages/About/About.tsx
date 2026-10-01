import { Link } from 'react-router-dom';

import { Env } from '@/common/utils/env';
import { useUpdateMeta } from '@/common/utils/use-update-meta';

import './assets/css/a-propos.css';
import { teamMembers } from './resources/team';

const audiences = [
  {
    title: 'Couvreurs',
    text: "Analyse de toiture automatisée, génération de devis, suivi client et détection d'opportunités commerciales.",
    link: '/pour-qui/couvreurs',
  },
  {
    title: 'Collectivités',
    text: 'Valorisation des bases PCRS et des données DSI pour anticiper, planifier et piloter la transformation du territoire.',
    link: '/pour-qui/collectivites',
  },
  {
    title: 'Assureurs',
    text: 'Diagnostic visuel automatisé, gestion du risque, prévention et complétude des contrats.',
    link: '/pour-qui/assureurs',
  },
];

const faqItems = [
  {
    question: 'Qui est derrière BIRDIA ?',
    answer: 'BIRDIA est une startup deeptech parisienne, marque de la société BPartners SAS (SIREN 918 072 737), issue de la recherche académique française.',
  },
  {
    question: 'BIRDIA est-il un service de drone ?',
    answer:
      "Non. BIRDIA analyse des images aériennes haute résolution existantes (avion, orthophotos PCRS). Aucun vol de drone ni déplacement sur site n'est nécessaire.",
  },
  {
    question: 'Un humain valide-t-il les résultats ?',
    answer:
      "Oui, toujours. L'IA hybride de BIRDIA applique des règles métier explicites, ce qui rend chaque résultat traçable. Ses résultats sont des aides à l'analyse et à la priorisation : ils sont vérifiés par un professionnel avant toute décision opérationnelle, et aucune décision n'est prise de manière exclusivement automatisée.",
  },
];

export const About = () => {
  useUpdateMeta(
    'À propos de BIRDIA | Startup deeptech issue de la recherche française',
    'BIRDIA est une startup deeptech française qui transforme les images aériennes en données actionnables pour les couvreurs, assureurs et collectivités. Notre histoire, notre technologie, notre équipe.'
  );

  return (
    <div className="a-propos-page">
      <section className="hero">
        <div className="wrap">
          <h1>À propos</h1>
          <p className="lead">La puissance de la recherche française, au service du terrain.</p>
          <p>
            BIRDIA est une startup deeptech née de la recherche académique, avec une ambition simple : transformer l'innovation en solution concrète, utile au
            quotidien des artisans, des assureurs, des collectivités et des gestionnaires de patrimoine.
          </p>
          <p>
            BIRDIA est la marque de la société BPartners SAS. Anciennement connue sous le nom BPartners,{' '}
            <Link to="/bpartners-devient-birdia">l'entreprise a changé de nom</Link> pour refléter son cœur de métier : l'analyse du bâti depuis le ciel.
          </p>
        </div>
      </section>

      <div className="band">
        <div className="wrap">
          <div className="panel">
            <h2>Une IA hybride, pas une boîte noire :</h2>
            <div className="cols">
              <div>
                <h3>Deep learning</h3>
                <ul>
                  <li>
                    <span>Détecte les objets sur des images aériennes ultra haute définition (5 cm/pixel) : toitures, voirie, végétation, signalétique.</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3>Raisonnement symbolique</h3>
                <ul>
                  <li>
                    <span>
                      Qualifie ces objets avec des règles métier et des contraintes territoriales explicites : état d'usure, risques, conformité réglementaire.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ background: 'var(--green)', height: '60px' }} />

      <section className="sec white" aria-labelledby="a-propos-audiences-title">
        <div className="wrap">
          <h2 className="t" id="a-propos-audiences-title">
            Nous aidons trois métiers
          </h2>
          <p className="intro">BIRDIA transforme les images en données actionnables, directement intégrables dans vos outils métiers ou SIG.</p>
          <div className="grid3">
            {audiences.map((audience) => (
              <div className="card" key={audience.title}>
                <h3>{audience.title}</h3>
                <p>{audience.text}</p>
                <Link className="link-orange" to={audience.link}>
                  Découvrir
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec team" aria-labelledby="a-propos-team-title">
        <div className="wrap">
          <h2 className="t" id="a-propos-team-title" style={{ color: 'var(--orange)' }}>
            L'équipe
          </h2>
          <div className="grid4">
            {teamMembers.map((member) => (
              <div className="card" key={member.initials}>
                {member.photo ? (
                  <img className="avatar" src={member.photo} alt={member.name} />
                ) : (
                  <div className="avatar" aria-hidden="true">
                    {member.initials}
                  </div>
                )}
                <h3>{member.name}</h3>
                <p className="who">
                  {member.role}
                  {member.roleTodo && (
                    <>
                      {' '}
                      <mark className="todo">[À compléter : {member.roleTodo}]</mark>
                    </>
                  )}
                </p>
                <p>{member.bio ?? <mark className="todo">[À compléter : photo et 2 lignes de parcours]</mark>}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec green" aria-labelledby="a-propos-recognition-title">
        <div className="wrap">
          <h2 className="t" id="a-propos-recognition-title">
            Reconnus par l'écosystème
          </h2>
          <p className="intro">
            Trophée Start-up Numérique 2023 (1er prix, Institut Mines-Télécom), membre du pôle Systematic Paris Region Deeptech depuis 2023, lauréat French
            AssurTech 2024.
          </p>
          <div className="btns">
            <Link className="btn btn-orange" to="/presse">
              Voir l'espace presse
            </Link>
            <Link className="btn btn-white" to="/cas-clients">
              Voir nos cas clients
            </Link>
          </div>
        </div>
      </section>

      <section className="faq" aria-labelledby="a-propos-faq-title">
        <div className="wrap">
          <h2 id="a-propos-faq-title">FAQ</h2>
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
