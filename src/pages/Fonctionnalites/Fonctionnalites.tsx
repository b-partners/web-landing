import { Link } from 'react-router-dom';

import { Env } from '@/common/utils/env';
import { useUpdateMeta } from '@/common/utils/use-update-meta';

import './assets/css/fonctionnalites.css';

const FEATURES = [
  { to: '/fonctionnalites/metre-et-mesures', title: 'Métrés et mesures', text: 'Des mesures précises, prises à distance.' },
  {
    to: '/fonctionnalites/pre-diagnostic-et-etat-de-la-toiture',
    title: 'Pré-diagnostic et état de la toiture',
    text: 'Un état des lieux clair, avant même la visite.',
  },
  { to: '/fonctionnalites/donnees-imagerie-et-methode', title: "Données d'imagerie et méthode", text: 'Comment BIRDIA regarde vos bâtiments.' },
];

export const Fonctionnalites = () => {
  useUpdateMeta(
    "Fonctionnalités BIRDIA | Métrés, diagnostic et méthode d'analyse par IA",
    "Découvrez les fonctionnalités de BIRDIA : métrés et mesures à distance, pré-diagnostic et état de la toiture, méthode et données d'imagerie utilisées par l'IA."
  );

  return (
    <div className="fonctionnalites-page">
      <section className="hero" style={{ paddingBottom: '70px' }}>
        <div className="wrap">
          <h1>Fonctionnalités</h1>
          <p className="lead">Une IA qui transforme une image en données exploitables.</p>
          <p>
            D'une simple adresse à un rapport exploitable : voici comment BIRDIA mesure, qualifie et documente l'état d'une toiture, et sur quelles données elle
            s'appuie pour le faire.
          </p>
        </div>
      </section>

      <section className="sec white">
        <div className="wrap">
          <div className="pqgrid">
            {FEATURES.map((feature) => (
              <Link className="pqcard" to={feature.to} key={feature.to}>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
                <span className="pqgo">Découvrir →</span>
              </Link>
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
