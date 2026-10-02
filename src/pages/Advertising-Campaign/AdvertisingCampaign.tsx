import { FormEvent, useRef } from 'react';
import { Link } from 'react-router-dom';

import { useMailtoFallbackForm } from '@/common/utils/use-mailto-fallback-form';
import { useUpdateMeta } from '@/common/utils/use-update-meta';
import { useUtmParams } from '@/common/utils/use-utm-params';

import './assets/css/campagne-publicitaire.css';

const FORM_SUBJECT = 'BIRDIA (birdia.fr/campagne-publicitaire)';

export const AdvertisingCampaign = () => {
  useUpdateMeta(
    "BIRDIA | Analysez vos toitures à distance grâce à l'IA",
    'Analyse de toitures par IA à partir d’images aériennes HD. Réservez votre démo gratuite.'
  );

  const formRef = useRef<HTMLFormElement>(null);
  const { message, submit } = useMailtoFallbackForm(FORM_SUBJECT);
  const utm = useUtmParams();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = formRef.current;
    if (!form || !form.reportValidity()) return;

    const data = new FormData(form);
    const fields: Record<string, string> = { page: window.location.pathname };
    data.forEach((value, key) => {
      if (typeof value === 'string' && value) fields[key] = value;
    });
    submit(fields);
  };

  return (
    <div className="campagne-publicitaire-page">
      <section className="hero" style={{ paddingBottom: '60px' }}>
        <div className="wrap split" style={{ alignItems: 'center' }}>
          <div>
            <h1>Analysez vos toitures à distance, sans monter sur le toit</h1>
            <p className="lead">Une IA française qui lit les images aériennes à 5 cm de précision.</p>
            <ul style={{ paddingLeft: '18px', margin: '0 0 20px' }}>
              <li>Surfaces, matériaux, usure et défauts détectés en un clic</li>
              <li>Aucun drone, aucun déplacement</li>
              <li>Lauréat French AssurTech 2024</li>
            </ul>
          </div>

          <div className="card">
            <h3 style={{ marginBottom: '16px' }}>Réservez votre démo gratuite</h3>
            <form className="f" ref={formRef} onSubmit={handleSubmit}>
              <input type="hidden" name="utm_source" defaultValue={utm.utm_source ?? ''} />
              <input type="hidden" name="utm_campaign" defaultValue={utm.utm_campaign ?? ''} />
              <div>
                <label htmlFor="n">Nom et prénom</label>
                <input id="n" name="nom" autoComplete="name" required />
              </div>
              <div>
                <label htmlFor="e">Email professionnel</label>
                <input id="e" name="email" type="email" autoComplete="email" required />
              </div>
              <div>
                <label htmlFor="p">Vous êtes</label>
                <select id="p" name="profil" required defaultValue="">
                  <option value="">Choisir</option>
                  <option>Couvreur</option>
                  <option>Assureur</option>
                  <option>Collectivité</option>
                </select>
              </div>
              <button className="btn btn-orange" type="submit">
                Réserver ma démo
              </button>
              <p className="fine">
                <Link to="/confidentialite">Données personnelles</Link>.
              </p>
              {message && (
                <p className="form-msg full" role="status">
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
