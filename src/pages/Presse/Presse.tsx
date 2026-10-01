import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { Env } from '@/common/utils/env';
import { useUpdateMeta } from '@/common/utils/use-update-meta';

import './assets/css/presse.css';

const facts: { term: string; description: ReactNode; link?: string }[] = [
  {
    term: 'Société',
    description: (
      <>
        BPartners SAS, marque BIRDIA
        <br />
        SIREN 918 072 737
      </>
    ),
  },
  { term: 'Création', description: '2022, à Paris' },
  { term: 'Ancien nom', description: 'BPartners (bpartners.app)', link: '/bpartners-devient-birdia' },
  { term: 'Technologie', description: 'IA hybride : deep learning et raisonnement symbolique' },
  { term: 'Précision', description: 'Images aériennes haute résolution, 5 cm/pixel' },
  { term: 'Marchés', description: 'Couvreurs, assureurs IARD, collectivités territoriales' },
];

// TODO(presse): retrouver l'URL réelle de chaque article et la brancher ici (voir docs/new-pages.md).
const quotes = [
  {
    source: 'Les Pépites Tech, janvier 2023',
    text: "« Issue de la recherche académique française, BIRDIA a développé une IA reproduisant les étapes d'analyses des toitures d'un couvreur sur des images aériennes haute définition à 5 cm de précision, permettant d'avoir les mesures, le chiffrage et l'urgence de l'intervention. »",
  },
  {
    source: 'Systematic Paris Region, mars 2023',
    text: '« BIRDIA fait partie des 10 nouveaux membres ayant rejoint le Pôle en mars 2023, une technologie innovante au service des collectivités, assureurs et artisans couvreurs ! »',
  },
  {
    source: 'Institut Mines-Télécom, 2023',
    text: '« Parmi les 20 startups finalistes du Trophée Start-up Numérique 2023, BIRDIA a remporté le premier prix dans la catégorie Transformation numérique des entreprises. »',
  },
  {
    source: 'GIP RECIA',
    text: "« On parle beaucoup d'IA en ce moment… BIRDIA, une solution pour la valorisation des orthophotographies hautes résolutions ? »",
  },
  {
    source: 'French AssurTech, 2024',
    text: 'BIRDIA est lauréat du concours French AssurTech 2024, qui réunit sept assureurs et mutuelles : Groupama, MACIF, MAIF, Groupe P&V, Mutuelle de Poitiers Assurances, MAAF COVEA et CNP Assurances.',
  },
];

export const Presse = () => {
  useUpdateMeta(
    'Espace presse BIRDIA | Communiqués et distinctions',
    "Espace presse de BIRDIA (ex-BPartners), l'IA française qui analyse les toitures à partir d'images aériennes : chiffres clés, distinctions, articles et contact presse."
  );

  return (
    <div className="presse-page">
      <section className="hero">
        <div className="wrap">
          <h1>Espace presse</h1>
          <p className="lead">BIRDIA, l'IA française qui analyse les toitures et le bâti à partir d'images aériennes.</p>
          <p>
            Issue de la recherche académique française, BIRDIA a développé une intelligence artificielle hybride, qui associe deep learning et raisonnement
            symbolique, pour analyser des images aériennes ultra haute définition (5 cm/pixel). Elle ne se contente pas de détecter des objets : elle les
            qualifie selon des règles métier et des contraintes territoriales, comme l'état d'usure, les risques ou la conformité réglementaire.
          </p>
          <p>
            Couvreurs, assureurs et collectivités l'utilisent pour inspecter les toitures à distance, prévenir les sinistres et valoriser leurs données PCRS.
            Vous trouverez ici nos chiffres clés, nos distinctions et les articles qui parlent de nous.
          </p>
        </div>
      </section>

      <div className="band">
        <div className="wrap">
          <div className="panel">
            <h2>BIRDIA en bref :</h2>
            <dl className="facts">
              {facts.map((fact) => (
                <div key={fact.term}>
                  <dt>{fact.term}</dt>
                  <dd>{fact.link ? <Link to={fact.link}>{fact.description}</Link> : fact.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <div style={{ background: 'var(--green)', height: '60px' }} />

      <section className="quotes" aria-labelledby="presse-quotes-title">
        <div className="wrap">
          <h2 id="presse-quotes-title">Ils parlent de nous</h2>
          <div className="qgrid">
            {quotes.map((quote) => (
              <article className="q" key={quote.source}>
                <span className="bubble">{quote.source}</span>
                <blockquote>{quote.text}</blockquote>
                {/* TODO(presse): lien réel vers l'article, voir docs/new-pages.md */}
                <p className="src">
                  <a href="#">Lire l'article</a>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="releases" aria-labelledby="presse-releases-title">
        <div className="wrap">
          <h2 id="presse-releases-title">Communiqués de presse</h2>
          <ul className="rel">
            <li>
              <div>
                <span className="date">2026</span>
                <strong>BPartners devient BIRDIA</strong>
              </div>
              <Link className="btn btn-orange" to="/bpartners-devient-birdia">
                Lire le communiqué
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="contact-presse" aria-labelledby="presse-contact-title">
        <div className="wrap">
          <h2 id="presse-contact-title">Contact presse</h2>
          <p>Pour une interview, une démonstration ou des visuels supplémentaires :</p>
          <p>
            <a href="mailto:contact@birdia.fr">contact@birdia.fr</a> · <a href="tel:+33668624836">06 68 62 48 36</a>
          </p>
        </div>
      </section>

      <div className="cta-wrap">
        <div className="wrap">
          <div className="cta">
            <h2>Voir BIRDIA en action</h2>
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
