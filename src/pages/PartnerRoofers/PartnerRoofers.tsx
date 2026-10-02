import { FormEvent, useRef } from 'react';
import { Link } from 'react-router-dom';

import { Env } from '@/common/utils/env';
import { useMailtoFallbackForm } from '@/common/utils/use-mailto-fallback-form';
import { useUpdateMeta } from '@/common/utils/use-update-meta';

import './assets/css/partenaires-couvreurs.css';

const FORM_SUBJECT = 'Réseau de couvreurs partenaires BIRDIA (birdia.fr/partenaires-couvreurs)';

// Avis repris de la page d'accueil (src/pages/home/utils/constant.tsx TESTIMONIALS).
const reviews = [
  {
    initials: 'IB',
    name: 'Idris B.',
    role: 'Artisan couvreur (35 - Ille-et-Vilaine)',
    quote:
      "Je ne perds plus de temps sur la route. Birdia me permet de faire des pré-diagnostics précis, directement depuis mon bureau. Depuis que j'ai intégré leur outil sur mon site, mes demandes de devis ont explosé.",
  },
  {
    initials: 'LM',
    name: 'Laurent M.',
    role: 'Responsable Innovation – Assureur Habitation',
    quote:
      'Birdia est un véritable game changer. L’outil est à la fois intuitif, puissant et ludique. En quelques clics, nous pouvons visualiser, détecter et évaluer des centaines de toitures. Cela change notre manière de penser la prévention et le service client.',
  },
  {
    initials: 'EC',
    name: 'Émilie C.',
    role: 'Responsable Souscription Habitation – Groupe IARD',
    quote:
      'Grâce à Birdia, nos équipes disposent d’une vision détaillée de chaque bien assuré. La précision de l’analyse des matériaux, de l’usure et des risques nous permet d’adapter finement les contrats. C’est un vrai plus pour la maîtrise technique et commerciale.',
  },
  {
    initials: 'NL',
    name: 'Nathalie L.',
    role: 'Responsable SIG',
    quote:
      'Enfin une solution qui valorise concrètement nos orthophotos PCRS. Avec Birdia, on extrait des données directement exploitables pour l’urbanisme, la végétation ou les risques. Le ROI est immédiat.',
  },
  {
    initials: 'JV',
    name: 'Julien V.',
    role: 'DSI',
    quote:
      'Birdia nous aide à créer de la donnée métier à partir des images que nous avons déjà. C’est un outil idéal pour simplifier les échanges avec les services techniques, les élus, et prendre de meilleures décisions.',
  },
];

const steps = [
  { title: "Vous indiquez l'adresse", text: "Aucune visite n'est nécessaire à ce stade." },
  { title: 'BIRDIA analyse la toiture', text: 'Surface, matériaux, usure, mousses, défauts de fixation.' },
  { title: 'Un couvreur vous recontacte', text: 'Avec un rapport et une proposition adaptée.' },
];

const faqItems = [
  {
    question: 'Comment rejoindre le réseau ?',
    answer: 'Remplissez le formulaire ci-dessous. Nous vous recontactons pour vérifier votre activité et activer votre compte.',
  },
  {
    question: 'Faut-il un drone ou une nacelle ?',
    answer: "Non. L'analyse se fait à partir d'images aériennes haute résolution, depuis votre bureau.",
  },
];

export const PartnerRoofers = () => {
  useUpdateMeta(
    'Réseau de couvreurs partenaires BIRDIA | Trouver un couvreur ou rejoindre le réseau',
    'Particulier : trouvez un couvreur partenaire BIRDIA près de chez vous. Couvreur : rejoignez le réseau et recevez des demandes qualifiées avec un pré-diagnostic de toiture.'
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
    <div className="partenaires-couvreurs-page">
      <section className="hero" style={{ paddingBottom: '70px' }}>
        <div className="wrap">
          <h1>Réseau de couvreurs partenaires</h1>
          <p className="lead">Des couvreurs équipés de BIRDIA, près de chez vous.</p>
          <p>
            Nos couvreurs partenaires utilisent BIRDIA pour analyser les toitures à distance avant de se déplacer. Vous obtenez un diagnostic plus précis, et un
            devis appuyé sur un rapport visuel clair.
          </p>
        </div>
      </section>

      <section className="trio" aria-label="Deux parcours">
        <div className="left">
          <div>
            <h3>Vous êtes un particulier</h3>
            <p>Décrivez votre projet et votre adresse. Un couvreur partenaire proche de chez vous vous recontacte avec un pré-diagnostic de votre toiture.</p>
          </div>
          <div>
            <h3>Vous êtes couvreur</h3>
            <p>Rejoignez le réseau pour recevoir des demandes qualifiées, déjà accompagnées d'une analyse de toiture.</p>
          </div>
          <div>
            <h3>Un seul outil</h3>
            <p>Mesures, état de la couverture, urgence d'intervention : tout est dans le rapport BIRDIA.</p>
          </div>
        </div>
        <div className="right">
          <h2>Comment ça marche</h2>
          <ol className="steps" style={{ textAlign: 'left' }}>
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

      <section className="sec white" id="formulaire">
        <div className="wrap">
          <h2 className="t">Faites votre demande</h2>
          <p className="intro">Choisissez votre profil, nous orientons votre demande.</p>
          <form className="f" ref={formRef} onSubmit={handleSubmit}>
            <div className="full">
              <label htmlFor="profil">Vous êtes</label>
              <select id="profil" name="profil" required defaultValue="">
                <option value="">Choisir</option>
                <option>Particulier : je cherche un couvreur</option>
                <option>Couvreur : je veux rejoindre le réseau</option>
              </select>
            </div>
            <div>
              <label htmlFor="nom">Nom</label>
              <input id="nom" name="nom" autoComplete="family-name" required />
            </div>
            <div>
              <label htmlFor="prenom">Prénom</label>
              <input id="prenom" name="prenom" autoComplete="given-name" required />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" autoComplete="email" required />
            </div>
            <div>
              <label htmlFor="tel">Téléphone</label>
              <input id="tel" name="tel" type="tel" autoComplete="tel" />
            </div>
            <div className="full">
              <label htmlFor="adresse">Adresse du bâtiment ou zone d'intervention</label>
              <input id="adresse" name="adresse" autoComplete="street-address" required />
            </div>
            <div className="full">
              <label htmlFor="msg">Votre projet</label>
              <textarea id="msg" name="message" />
            </div>
            <p className="fine full">
              Vos données sont utilisées uniquement pour traiter votre demande. Voir notre{' '}
              <Link to="/confidentialite">politique de protection des données</Link>.
            </p>
            <button className="btn btn-orange" type="submit">
              Envoyer ma demande
            </button>
            {message && (
              <p className="form-msg full" role="status">
                {message}
              </p>
            )}
          </form>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <h2 className="t" style={{ color: 'var(--orange)' }}>
            Avis vérifiés
          </h2>
          <div className="grid2" style={{ marginTop: '30px' }}>
            {reviews.map((review) => (
              <div className="card" key={review.initials}>
                <div className="stars" aria-label="5 étoiles sur 5">
                  ★★★★★
                </div>
                <p>{review.quote}</p>
                <div className="person">
                  <span className="avatar">{review.initials}</span>
                  <span>
                    <strong>{review.name}</strong>
                    <br />
                    {review.role}
                  </span>
                </div>
              </div>
            ))}
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
                <p>{item.answer.startsWith('[À compléter') ? <mark className="todo">{item.answer}</mark> : item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <div className="cta-wrap" style={{ paddingTop: '80px' }}>
        <div className="wrap">
          <div className="cta">
            <h2>Couvreur ? Gagnez du temps dès votre prochain devis</h2>
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
