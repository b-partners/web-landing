import React from 'react';

import header from './assets/img/header.png';
import myVideo from './assets/img/video.gif';
import transactions from './assets/img/transactions.png';
import moto from './assets/img/motorbiking.png';
import voiture from './assets/img/sports-car.png';
import fusee from './assets/img/start-up.png';
import compta from './assets/img/compta.png';
import connexion from './assets/img/connexion.png';
import confirmer from './assets/img/identity.png';
import valider from './assets/img/valider.png';
import logo from './assets/img/logo.png';

import { ReactComponent as Check } from './assets/img/check.svg';
import { ReactComponent as Apple } from './assets/img/apple-store.svg';
import { ReactComponent as Google } from './assets/img/google-store.svg';

export function Home() {
  return (
    <div>
      <body>
        <a href="src/pages/Home/Home#" className="scrolltop" id="scroll-top">
          <i className="bx bx-up-arrow-alt scrolltop__icon" />
        </a>

        <header className="l-header" id="header">
          <nav className="nav bd-container">
            <a href="src/pages/Home/Home#" className="nav__logo">
              <img alt="logo" src={logo} style={{ width: '170px' }} />
            </a>
            <div className="nav__menu" iidid="nav-menu">
              <ul className="nav__list">
                <li className="nav__item">
                  <a href="src/pages/Home/Home#home" className="nav__link active-link">
                    Accueil
                  </a>
                </li>
                <li className="nav__item">
                  <a href="src/pages/Home/Home#share" className="nav__link">
                    Fonctionnalités
                  </a>
                </li>
                <li className="nav__item">
                  <a href="src/pages/Home/Home" className="nav__link">
                    Se connecter
                  </a>
                </li>
                <li className="nav__item" id="ouvrir-compte">
                  <a
                    href="inscription.html"
                    className="nav__link"
                    style={{ color: 'white' }}
                  >
                    Ouvrir un compte
                  </a>
                </li>
              </ul>
            </div>

            <div className="nav__toggle" id="nav-toggle">
              <i className="bx bx-grid-alt" />
            </div>
          </nav>
        </header>
        <main className="l-main">
          <section className="home" id="home">
            <div className="home__container bd-container bd-grid">
              <div className="home__img">
                <img alt="ok" src={header} />
              </div>

              <div className="home__data">
                <h1 className="home__title">
                  Le compte pro optimisé pour votre business.
                </h1>
                <p className="home__description">
                  <span id="img" className="valign">
                    <Check />
                  </span>
                  Automatisez la gestion de vos finances
                  <br />
                  <span id="img" className="valign">
                    <Check />
                  </span>
                  Mettez fin aux notes de frais
                  <br />
                  <span id="img" className="valign">
                    <Check />
                  </span>
                  Simplifiez vraiment votre comptabilité
                </p>
                <a href="src/pages/Home/Home#" className="button">
                  Inscrivez vous dès maintenant
                </a>
              </div>
            </div>
          </section>

          <section className="share section bd-container" id="share">
            <div className="share__container bd-grid">
              <div className="share__data">
                <h2 className="section-title-center">
                  Envoyez et recevez des paiements
                  <br />
                  sans frais cachés.
                </h2>
                <p className="share__description">
                  <i className="fa fa-check" aria-hidden="true" />
                  {' '}
                  Compte pro avec
                  IBAN EE
                </p>
                <p className="share__description">
                  <i className="fa fa-check" aria-hidden="true" />
                  {' '}
                  Virements SEPA
                  entrants et sortants illimités
                </p>
                <p className="share__description">
                  <i className="fa fa-check" aria-hidden="true" />
                  {' '}
                  Virements
                  instantanés jusqu'a 100 000€
                </p>
              </div>
              <div className="share__img">
                <img alt="ok" src={myVideo} />
              </div>
            </div>

            <div className="share__container bd-grid">
              <div className="share__data" id="deux">
                <h2 className="section-title-center">
                  Gérez vos cartes
                  {' '}
                  <br />
                  facilement.
                </h2>
                <p className="share__description">
                  <i className="fa fa-check" aria-hidden="true" />
                  {' '}
                  Émettez des
                  cartes physiques et virtuelles
                </p>
                <p className="share__description">
                  <i className="fa fa-check" aria-hidden="true" />
                  {' '}
                  Suivez les
                  dépenses en temps réel pour toute votre équipe
                </p>
                <p className="share__description">
                  <i className="fa fa-check" aria-hidden="true" />
                  {' '}
                  Bloquez et
                  débloquez votre carte en un seul clic
                </p>
              </div>
              <div className="share__img">
                <img src={transactions} alt="" />
              </div>
            </div>

            <div className="share__container bd-grid">
              <div className="share__data">
                <h2 className="section-title-center">
                  Votre comptabilité
                  <br />
                  simplifiée.
                </h2>
                <p className="share__description">
                  <i className="fa fa-check" aria-hidden="true" />
                  {' '}
                  Consacrez moins
                  de temps aux tâches administratives
                </p>
                <p className="share__description">
                  <i className="fa fa-check" aria-hidden="true" />
                  {' '}
                  Téléchargez
                  votre RIB et vos reçus en un clic
                </p>
              </div>
              <div className="share__img">
                <img src={compta} alt="" />
              </div>
            </div>
          </section>

          <h2 className="section-title">Flexible et transparent</h2>

          <div className="background">
            <div className="container">
              <div className=" pricing-table">
                <div className="pricing-plan">
                  <img src={moto} alt="" className="pricing-img" />
                  <h2 className="pricing-header">BASIC</h2>
                  <span className="pricing-price">
                    9€
                    <span style={{ fontSize: 15 }}>/mois</span>
                  </span>
                  <a href="src/pages/Home/Home#/" className="pricing-button">
                    Ouvrir un compte
                  </a>
                  <ul className="pricing-features">
                    <li className="pricing-features-item">
                      <span style={{ fontSize: 12 }}>
                        <strong>
                          Les services essentiels pour gérer votre activité
                          d'indépendant.
                        </strong>
                      </span>
                    </li>
                    <li className="pricing-features-item">
                      Service de banque en ligne
                    </li>
                    <li className="pricing-features-item">
                      <strong>30</strong>
                      {' '}
                      jours gratuits et sans engagement.
                    </li>
                    <li className="pricing-features-item">
                      <strong>60k€/an</strong>
                      {' '}
                      de commissions de mouvements de
                      compte incluses à hauteur puis 0,15%
                    </li>
                    <li className="pricing-features-item">
                      <strong>1</strong>
                      {' '}
                      seul utilisateur (1 carte Mastercard
                      Business)
                    </li>
                    <li className="pricing-features-item">
                      Cartes virtuelles à
                      {' '}
                      <strong>2€/mois</strong>
                      , par carte.
                    </li>
                    <li className="pricing-features-item">
                      <strong>200€</strong>
                      {' '}
                      de retraits gratuits par mois, puis
                      1% du montant.
                    </li>
                    <li className="pricing-features-item">
                      <strong>1500€</strong>
                      {' '}
                      de plafond pour vos retraits.
                    </li>
                    <li className="pricing-features-item">
                      <strong>2%</strong>
                      {' '}
                      pour les paiements hors zone euro.
                    </li>
                    <li className="pricing-features-item">
                      <strong>30</strong>
                      {' '}
                      virements et prélèvements puis 0,50€
                      au delà.
                    </li>
                    <li className="pricing-features-item">
                      Support
                      {' '}
                      <strong>7 jours sur 7</strong>
                    </li>
                  </ul>
                </div>

                <div className="pricing-plan" id="popular">
                  <div className="pined">
                    <div className="popular-label">Populaire</div>
                  </div>
                  <img src={fusee} alt="" className="pricing-img" id="fusee" />
                  <h2 className="pricing-header">PREMIUM</h2>
                  <span className="pricing-price">
                    39€
                    <span style={{ fontSize: 15 }}>/mois</span>
                  </span>
                  <a href="src/pages/Home/Home#/" className="pricing-button is-featured">
                    Ouvrir un compte
                  </a>
                  <ul className="pricing-features">
                    <li className="pricing-features-item">
                      <span style={{ fontSize: 12 }}>
                        <strong>
                          Le forfait qui inclut toutes nos Fonctionnalités et un
                          support prioritaire.
                        </strong>
                      </span>
                    </li>
                    <li className="pricing-features-item">
                      Service de banque en ligne
                    </li>
                    <li className="pricing-features-item">
                      <strong>30</strong>
                      {' '}
                      jours gratuits et sans engagement.
                    </li>
                    <li className="pricing-features-item">
                      <strong>1000k€/an</strong>
                      {' '}
                      de commissions de mouvements de
                      compte incluses à hauteur puis 0,15%.
                    </li>
                    <li className="pricing-features-item">
                      <strong>1</strong>
                      {' '}
                      seul utilisateur (1 carte Mastercard
                      Business) et accès comptable.
                    </li>
                    <li className="pricing-features-item">
                      Cartes virtuelles à
                      {' '}
                      <strong>2€/mois</strong>
                      , par carte.
                    </li>
                    <li className="pricing-features-item">
                      <strong>200€</strong>
                      {' '}
                      de retraits gratuits par mois, puis
                      1% du montant.
                    </li>
                    <li className="pricing-features-item">
                      <strong>2500€</strong>
                      {' '}
                      de plafond pour vos retraits.
                    </li>
                    <li className="pricing-features-item">
                      <strong>1,7%</strong>
                      {' '}
                      pour les paiements hors zone euro.
                    </li>
                    <li className="pricing-features-item">
                      <strong>100</strong>
                      {' '}
                      virements et prélèvements puis 0,20€
                      au delà.
                    </li>
                    <li className="pricing-features-item">
                      Fonctionnalités avancées (multi-comptes, virements
                      groupés)
                    </li>
                    <li className="pricing-features-item">
                      Pack comptabilité (reçus digitalisés, auto-détection de la
                      TVA, labels)
                    </li>
                    <li className="pricing-features-item">
                      Support
                      {' '}
                      <strong> prioritaire 7 jours sur 7</strong>
                    </li>
                  </ul>
                </div>

                <div className="pricing-plan">
                  <img src={voiture} alt="" className="pricing-img" />
                  <h2 className="pricing-header">STANDARD</h2>
                  <span className="pricing-price">
                    19€
                    <span style={{ fontSize: 15 }}>/mois</span>
                  </span>
                  <a href="src/pages/Home/Home#/" className="pricing-button">
                    Ouvrir un compte
                  </a>
                  <ul className="pricing-features">
                    <li className="pricing-features-item">
                      <span style={{ fontSize: 12 }}>
                        <strong>
                          Le compte complet pour faciliter votre gestion
                          bancaire et comptable.
                        </strong>
                      </span>
                    </li>
                    <li className="pricing-features-item">
                      Service de banque en ligne
                    </li>
                    <li className="pricing-features-item">
                      <strong>30</strong>
                      {' '}
                      jours gratuits et sans engagement.
                    </li>
                    <li className="pricing-features-item">
                      <strong>150k€/an</strong>
                      {' '}
                      de commissions de mouvements de
                      compte incluses à hauteur puis 0,15%.
                    </li>
                    <li className="pricing-features-item">
                      <strong>1</strong>
                      {' '}
                      seul utilisateur (1 carte Mastercard
                      Business) et accès comptable.
                    </li>
                    <li className="pricing-features-item">
                      Cartes virtuelles à
                      {' '}
                      <strong>2€/mois</strong>
                      , par carte.
                    </li>
                    <li className="pricing-features-item">
                      <strong>200€</strong>
                      {' '}
                      de retraits gratuits par mois, puis
                      1% du montant.
                    </li>
                    <li className="pricing-features-item">
                      <strong>1.9%</strong>
                      {' '}
                      pour les paiements hors zone euro.
                    </li>
                    <li className="pricing-features-item">
                      <strong>60</strong>
                      {' '}
                      virements et prélèvements puis 0,30€
                      au delà.
                    </li>
                    <li className="pricing-features-item">
                      Fonctionnalités avancées (multi-comptes, virements
                      groupés)
                    </li>
                    <li className="pricing-features-item">
                      Pack comptabilité (reçus digitalisés, auto-détection de la
                      TVA, labels)
                    </li>
                    <li className="pricing-features-item">
                      Support
                      {' '}
                      <strong>7 jours sur 7</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <section className="decoration section bd-container" id="decoration">
            <h2 className="section-title">Comment ouvrir un compte ?</h2>
            <div className="decoration__container bd-grid">
              <div className="decoration__data">
                <img src={connexion} alt="" className="step-image" />
                <h4 className="step-text">
                  Ouvrez votre compte en moins de 5 minutes sans paperasse
                </h4>
              </div>

              <div className="decoration__data">
                <img src={confirmer} alt="" className="step-image2" />
                <h4 className="step-text">
                  Confirmez votre identité avec un selfie et une pièce
                  d’identité
                </h4>
              </div>

              <div className="decoration__data">
                <img src={valider} alt="" className="step-image2" />
                <h4 className="step-text">
                  Votre compte est validé
                  {' '}
                  <br />
                  et votre IBAN prêt
                </h4>
              </div>
            </div>
          </section>
          <section className="send section">
            <h2 className="section-title">Ouvrir un compte dès maintenant</h2>
            <div className="texte">
              30 jours gratuits et sans engagement, à partir de 9€ par mois.
            </div>
            <div className="compte">
              <Apple alt="" class="dl" />
              <Google alt="" class="dl" />
              <br />
            </div>
            <div className="texte2">
              <p>⭐ ⭐ ⭐ ⭐ ⭐ 4.8/5</p>
            </div>
            <div className="texte3">
              <p>Note basée sur + de 18 200 avis</p>
            </div>
          </section>
        </main>

        <footer className="footer section">
          <div className="footer__container bd-container bd-grid">
            <div className="footer__content">
              <Apple alt="" />
              <br />
              <Google alt="" />
            </div>
            <div className="footer__content">
              <h3 className="footer__title">Support</h3>
              <ul>
                <li>
                  <a href="src/pages/Home/Home#" className="footer__link">
                    Presse
                    {' '}
                  </a>
                </li>
                <li>
                  <a href="src/pages/Home/Home#" className="footer__link">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="src/pages/Home/Home#" className="footer__link">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer__content">
              <h3 className="footer__title">À propos</h3>
              <ul>
                <li>
                  <a href="src/pages/Home/Home#" className="footer__link">
                    Confidentialité
                  </a>
                </li>
                <li>
                  <a href="src/pages/Home/Home#" className="footer__link">
                    Mentions Légales
                  </a>
                </li>
                <li>
                  <a href="src/pages/Home/Home#" className="footer__link">
                    Conditions générales
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer__content">
              <h3 className="footer__title">Réseaux</h3>
              <a href="src/pages/Home/Home#" className="footer__social">
                <i className="bx bxl-facebook-circle" />
              </a>
              <a href="src/pages/Home/Home#" className="footer__social">
                <i className="bx bxl-twitter" />
              </a>
              <a href="src/pages/Home/Home#" className="footer__social">
                <i className="bx bxl-instagram-alt" />
              </a>
            </div>
          </div>

          <p className="footer__copy">&#169; 2021 BPartners. All right reserved</p>
        </footer>

        <script src="https://unpkg.com/scrollreveal" />

        <script src="public/assets/js/main.js" />
      </body>
    </div>
  );
}
