import { Link } from 'react-router-dom';

import { Env } from '@/common/utils/env';
import { useUpdateMeta } from '@/common/utils/use-update-meta';

import './assets/css/pour-qui.css';

const PERSONAS = [
  { to: '/pour-qui/couvreurs', title: 'Couvreurs', text: 'Inspectez vos toitures à distance, en toute simplicité.' },
  { to: '/pour-qui/assureurs', title: 'Assureurs', text: 'Connaissez vos risques pour mieux prévenir.' },
  { to: '/pour-qui/collectivites', title: 'Collectivités', text: 'Valorisez vos images PCRS comme jamais auparavant.' },
  {
    to: '/pour-qui/foncieres-bailleurs-gestionnaires-de-patrimoine',
    title: 'Foncières et bailleurs',
    text: "Pilotez l'état de votre patrimoine bâti depuis un seul tableau de bord.",
  },
  {
    to: '/particuliers/diagnostic-toiture',
    title: 'Particuliers',
    text: "Faites diagnostiquer votre toiture avant d'acheter, de vendre ou de rénover.",
  },
];

export const PourQui = () => {
  useUpdateMeta(
    'Pour qui est fait BIRDIA ? | Couvreurs, assureurs, collectivités, foncières, particuliers',
    "BIRDIA s'adresse aux couvreurs, aux assureurs, aux collectivités, aux foncières et bailleurs, ainsi qu'aux particuliers. Trouvez la page qui correspond à votre métier."
  );

  return (
    <div className="pour-qui-page">
      <section className="hero" style={{ paddingBottom: '70px' }}>
        <div className="wrap">
          <h1>Pour qui est fait BIRDIA ?</h1>
          <p className="lead">Une même IA, un usage différent selon votre métier.</p>
          <p>
            BIRDIA transforme les images aériennes haute résolution en données actionnables. Choisissez votre profil pour voir comment BIRDIA s'applique à votre
            activité.
          </p>
        </div>
      </section>

      <section className="sec white">
        <div className="wrap">
          <div className="pqgrid">
            {PERSONAS.map((persona) => (
              <Link className="pqcard" to={persona.to} key={persona.to}>
                <h3>{persona.title}</h3>
                <p>{persona.text}</p>
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
