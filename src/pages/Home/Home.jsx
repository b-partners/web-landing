import React from 'react';

import header from './assets/img/header.png';
import myVideo from './assets/img/video.gif';
import transactions from './assets/img/transactions.png';
import compta from './assets/img/compta.png';
import logo from './assets/img/logo.png';

import { ReactComponent as Check } from './assets/img/check.svg';
import { Pricing } from './Pricing';

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
                  <a href="inscription.html" className="nav__link" style={{ color: 'white' }}>
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
                <h1 className="home__title">Le compte pro optimisé pour votre business.</h1>
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
                  &nbsp; Compte pro avec IBAN EE
                </p>
                <p className="share__description">
                  <i className="fa fa-check" aria-hidden="true" />
                  &nbsp; Virements SEPA entrants et sortants illimités
                </p>
                <p className="share__description">
                  <i className="fa fa-check" aria-hidden="true" />
                  &nbsp; Virements instantanés jusqu'a 100 000€
                </p>
              </div>
              <div className="share__img">
                <img alt="ok" src={myVideo} />
              </div>
            </div>

            <div className="share__container bd-grid">
              <div className="share__data" id="deux">
                <h2 className="section-title-center">
                  Gérez vos cartes &nbsp;
                  <br />
                  facilement.
                </h2>
                <p className="share__description">
                  <i className="fa fa-check" aria-hidden="true" />
                  &nbsp; Émettez des cartes physiques et virtuelles
                </p>
                <p className="share__description">
                  <i className="fa fa-check" aria-hidden="true" />
                  &nbsp; Suivez les dépenses en temps réel pour toute votre équipe
                </p>
                <p className="share__description">
                  <i className="fa fa-check" aria-hidden="true" />
                  &nbsp; Bloquez et débloquez votre carte en un seul clic
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
                  &nbsp; Consacrez moins de temps aux tâches administratives
                </p>
                <p className="share__description">
                  <i className="fa fa-check" aria-hidden="true" />
                  &nbsp; Téléchargez votre RIB et vos reçus en un clic
                </p>
              </div>
              <div className="share__img">
                <img src={compta} alt="" />
              </div>
            </div>
          </section>

          <Pricing />
        </main>

        <script src="https://unpkg.com/scrollreveal" />

        <script src="public/assets/js/main.js" />
      </body>
    </div>
  );
}
