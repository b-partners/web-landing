import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { Env } from '@/common/utils/env';
import { useUpdateMeta } from '@/common/utils/use-update-meta';

import './assets/css/cas-clients.css';

const Todo = ({ children }: { children: ReactNode }) => <mark className="todo">{children}</mark>;

interface CaseStudy {
  id: string;
  tag: string;
  title: ReactNode;
  need: ReactNode;
}

const caseStudySolution = <Todo>[À compléter : ce que BIRDIA a analysé, sur quel territoire, avec quelles images]</Todo>;
const caseStudyQuote = <Todo>[À compléter : citation d'un interlocuteur nommé, avec fonction]</Todo>;

const caseStudyMetrics: { text: string; label: string }[] = [
  { text: '[À compléter : x]', label: 'bâtiments analysés' },
  { text: '[À compléter : x]', label: 'jours gagnés' },
  { text: '[À compléter : x %]', label: 'de déplacements évités' },
];

const caseStudies: CaseStudy[] = [
  {
    id: 'dijon-metropole',
    tag: 'Collectivité',
    title: 'Dijon Métropole',
    need: <Todo>[À compléter : cas d'usage traité, ex. suivi des toitures ou de la végétation]</Todo>,
  },
  {
    id: 'toulouse-metropole',
    tag: 'Collectivité',
    title: 'Toulouse Métropole',
    need: <Todo>[À compléter : cas d'usage traité]</Todo>,
  },
  {
    id: 'le-cotentin-communaute-d-agglomeration',
    tag: 'Collectivité',
    title: "Le Cotentin, communauté d'agglomération",
    need: (
      <>
        Mise en conformité loi LOM : visibilité et usure des passages piétons <Todo>[À compléter : confirmer le client associé]</Todo>
      </>
    ),
  },
  {
    id: 'cannes-pays-de-lerins',
    tag: 'Collectivité',
    title: 'Cannes Pays de Lérins',
    need: <Todo>[À compléter : cas d'usage traité]</Todo>,
  },
  {
    id: 'valence-romans-agglo',
    tag: 'Collectivité',
    title: 'Valence Romans Agglo',
    need: <Todo>[À compléter : cas d'usage traité]</Todo>,
  },
  {
    id: 'assureur',
    tag: 'Assurance',
    title: <Todo>[À compléter : assureur partenaire (ex. Matmut, si accord de citation)]</Todo>,
    need: <Todo>[À compléter : cas d'usage : souscription, prévention ou post-intempérie]</Todo>,
  },
];

interface Testimonial {
  initials: string;
  name: string;
  role: ReactNode;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    initials: 'AP',
    name: 'Arnaud P.',
    role: 'Gérant, entreprise de couverture (Cannes)',
    quote:
      "« L'outil Birdia est simple, rapide et fiable. Je peux générer un rapport technique avant même de visiter le chantier. Cela me fait gagner des heures chaque semaine, tout en améliorant la qualité de mes prestations. »",
  },
  {
    initials: 'JD',
    name: 'Joël D.',
    role: 'Couvreur expérimenté (Hauts-de-France)',
    quote:
      "« Birdia, c'est mon assistant digital. Je l'utilise au quotidien pour détecter les toits à rénover, et les clients adorent recevoir un rapport visuel clair. Même mes devis sont mieux acceptés grâce à ça. »",
  },
];

interface FaqItem {
  question: string;
  answer: ReactNode;
}

const faqItems: FaqItem[] = [
  {
    question: 'Les résultats de BIRDIA sont-ils vérifiés ?',
    answer: (
      <>
        Oui. Chaque analyse s'appuie sur des règles métier explicites et peut être contrôlée visuellement sur l'image source.{' '}
        <Todo>[À compléter : préciser le taux de précision mesuré et la méthode]</Todo>
      </>
    ),
  },
  {
    question: 'BIRDIA remplace-t-il une visite terrain ?',
    answer:
      'Non. BIRDIA vous permet de cibler et de préparer les visites : vous savez avant de vous déplacer où regarder et quoi vérifier. La visite terrain reste indispensable avant toute décision opérationnelle.',
  },
  {
    question: 'Puis-je tester BIRDIA sur mon territoire ou mes chantiers ?',
    answer: 'Oui. Réservez une démo et nous analysons un échantillon de votre choix.',
  },
];

interface TrustedLogo {
  label: string;
  href: string;
}

const trustedLogos: TrustedLogo[] = [
  { label: 'Dijon Métropole', href: '#dijon-metropole' },
  { label: 'Toulouse Métropole', href: '#toulouse-metropole' },
  { label: 'Le Cotentin', href: '#le-cotentin-communaute-d-agglomeration' },
  { label: 'Cannes Pays de Lérins', href: '#cannes-pays-de-lerins' },
  { label: 'Valence Romans Agglo', href: '#valence-romans-agglo' },
];

export const CaseStudies = () => {
  useUpdateMeta(
    'Cas clients BIRDIA | Résultats concrets en collectivités, assurance et couverture',
    'Découvrez comment collectivités, assureurs et couvreurs utilisent BIRDIA : besoins, solutions déployées et résultats chiffrés.'
  );

  return (
    <div className="cas-clients-page">
      <section className="hero" style={{ paddingBottom: '70px' }}>
        <div className="wrap">
          <h1>Cas clients</h1>
          <p className="lead">Des résultats mesurés, pas des promesses.</p>
          <p>
            Métropoles, agglomérations, assureurs et entreprises de couverture utilisent BIRDIA pour analyser leur bâti et leur territoire à distance. Pour
            chaque projet : le besoin de départ, ce que nous avons analysé, et ce que cela a changé.
          </p>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h2 className="t" style={{ color: 'var(--orange)' }}>
            Ils nous font confiance
          </h2>
          <div className="logos">
            {trustedLogos.map((logo) => (
              <a className="lg" href={logo.href} key={logo.href}>
                {logo.label}
              </a>
            ))}
          </div>
          <p className="fine" style={{ textAlign: 'center', marginTop: '12px' }}>
            <Todo>[À compléter : remplacer par les logos officiels, avec accord d'utilisation]</Todo>
          </p>
        </div>
      </section>

      <section className="sec white">
        <div className="wrap">
          <h2 className="t">Études de cas</h2>
          <div className="grid2">
            {caseStudies.map((caseStudy) => (
              <article className="card" id={caseStudy.id} key={caseStudy.id}>
                <span className="tag">{caseStudy.tag}</span>
                <h3>{caseStudy.title}</h3>
                <p>
                  <strong>Besoin :</strong> {caseStudy.need}
                </p>
                <p>
                  <strong>Solution :</strong> {caseStudySolution}
                </p>
                <div className="metrics">
                  {caseStudyMetrics.map((metric) => (
                    <div key={metric.label}>
                      <strong>
                        <Todo>{metric.text}</Todo>
                      </strong>
                      {metric.label}
                    </div>
                  ))}
                </div>
                <p className="fine">{caseStudyQuote}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec green">
        <div className="wrap">
          <h2 className="t">Ce qu'en disent les couvreurs</h2>
          <div className="grid2" style={{ marginTop: '30px' }}>
            {testimonials.map((testimonial) => (
              <div className="card" key={testimonial.initials}>
                <div className="stars" aria-label="5 étoiles sur 5">
                  ★★★★★
                </div>
                <p>{testimonial.quote}</p>
                <div className="person">
                  <span className="avatar">{testimonial.initials}</span>
                  <span>
                    <strong>{testimonial.name}</strong>
                    <br />
                    {testimonial.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <p className="intro" style={{ marginTop: '30px' }}>
            <Todo>[À compléter : widget ou lien vers les avis vérifiés Trustpilot / G2 / Capterra]</Todo>
          </p>
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
            <h2>Et si votre territoire était le prochain cas client ?</h2>
            <div className="btns">
              <Link className="btn btn-orange" to="/contact-demo">
                Réserver votre démo
              </Link>
              <a className="btn btn-white" href={Env.DASHBOARD_REGISTRATION_URL}>
                Tester sans engagement
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
