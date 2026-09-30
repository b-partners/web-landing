import { FormEvent, useRef } from 'react';
import { Link } from 'react-router-dom';

import { useMailtoFallbackForm } from '@/common/utils/use-mailto-fallback-form';
import { useUpdateMeta } from '@/common/utils/use-update-meta';

import './assets/css/contact-demo.css';

const FORM_SUBJECT = 'Réserver une démo BIRDIA (birdia.fr/contact-demo)';

export const ContactDemo = () => {
  useUpdateMeta(
    'Réserver une démo BIRDIA | Contact',
    'Réservez une démonstration de BIRDIA sur vos propres bâtiments ou votre territoire, ou contactez notre équipe pour toute question.'
  );

  const formRef = useRef<HTMLFormElement>(null);
  const { message, submit } = useMailtoFallbackForm(FORM_SUBJECT);

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
    <div className="contact-demo-page">
      <section className="hero" style={{ paddingBottom: '70px' }}>
        <div className="wrap">
          <h1>Réserver votre démo</h1>
          <p className="lead">Voyez BIRDIA à l’œuvre sur vos propres bâtiments.</p>
          <p>
            En 30 minutes, nous analysons avec vous une adresse, un portefeuille ou une zone de votre territoire. Pour toute autre question, le même formulaire
            nous parvient directement.
          </p>
        </div>
      </section>

      <section className="sec white">
        <div className="wrap split">
          <div>
            <h2 style={{ fontSize: '24px', fontWeight: 600, margin: '0 0 12px' }}>L’équipe BIRDIA</h2>
            <p style={{ margin: '0 0 6px' }}>
              <a href="tel:+33668624836">06 68 62 48 36</a>
            </p>
            <p style={{ margin: '0 0 18px' }}>
              <a className="link-orange" href="mailto:contact@birdia.fr">
                contact@birdia.fr
              </a>
            </p>
            <p style={{ margin: '0 0 4px', fontWeight: 600 }}>Adresse</p>
            <p style={{ margin: '0 0 18px' }}>
              <mark className="todo">[À compléter : une seule adresse : 14 rue Soleillet 75020 ou 8 rue Puget 75018]</mark>
            </p>
            <p style={{ margin: '0 0 4px', fontWeight: 600 }}>Pendant la démo</p>
            <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '15px' }}>
              <li>Analyse en direct d’un exemple choisi par vous</li>
              <li>Lecture du rapport et des indicateurs</li>
              <li>Réponses sur le prix et l’intégration</li>
            </ul>
          </div>

          <form className="f" ref={formRef} onSubmit={handleSubmit}>
            <div>
              <label htmlFor="nom">Nom</label>
              <input id="nom" name="nom" autoComplete="family-name" required />
            </div>
            <div>
              <label htmlFor="prenom">Prénom</label>
              <input id="prenom" name="prenom" autoComplete="given-name" required />
            </div>
            <div>
              <label htmlFor="email">Email professionnel</label>
              <input id="email" name="email" type="email" autoComplete="email" required />
            </div>
            <div>
              <label htmlFor="tel">Téléphone</label>
              <input id="tel" name="tel" type="tel" autoComplete="tel" />
            </div>
            <div>
              <label htmlFor="org">Organisation</label>
              <input id="org" name="organisation" autoComplete="organization" required />
            </div>
            <div>
              <label htmlFor="profil">Vous êtes</label>
              <select id="profil" name="profil" required defaultValue="">
                <option value="">Choisir</option>
                <option>Couvreur</option>
                <option>Assureur, courtier ou expert</option>
                <option>Collectivité</option>
                <option>Autre</option>
              </select>
            </div>
            <div className="full">
              <label htmlFor="demande">Votre demande</label>
              <select id="demande" name="demande" defaultValue="Réserver une démo">
                <option>Réserver une démo</option>
                <option>Poser une question</option>
                <option>Partenariat</option>
                <option>Presse</option>
              </select>
            </div>
            <div className="full">
              <label htmlFor="msg">Message</label>
              <textarea id="msg" name="message" placeholder="Adresse, territoire ou volume à analyser" />
            </div>
            <p className="fine full">
              Vos données sont utilisées uniquement pour traiter votre demande. Voir notre{' '}
              <Link to="/confidentialite">politique de protection des données</Link>.
            </p>
            <button className="btn btn-orange" type="submit">
              Réserver ma démo
            </button>
            {message && (
              <p className="form-msg full" role="status">
                {message}
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
};
