import React from 'react';

import artisans from './assets/img/artisans.jpg';
import assistant from './assets/img/home-overview.jpg';

export function HomePage() {
  return (
    <section className="home" id="home">
      <div className="home__container bd-container bd-grid">
        <div className="home__data">
          <h1 className="home__title">
            L'assistant bancaire qui accélère le développent des artisans et indépendants.
          </h1>
          <div className="home__image">
            <img alt="logo" src={artisans} style={{ width: '270px' }} />
          </div>
          <p className="home__description">
            Artisans, indépendants français, en plus des services bancaires classiques (obtention d’un RIB FR, virement,
            tenu de compte, cartes) offrez-vous l’assistant de votre réussite grâce à votre mobile
          </p>
          <a href="src/pages/Home/Home#" className="button__registration">
            Lancement de l’application mobile et web le 1 Novembre 2022 – Inscrivez-vous ici pour devenir les premiers
            utilisateurs
          </a>
          <div className="home__email">
            <input
              type="email"
              placeholder="Votre email @"
              className="home__email__input"
            />
          </div>
        </div>

        <div className="home__img">
          <img className="home__img__overview" alt="assistant" src={assistant} style={{ width: '580px' }} />
        </div>
      </div>
    </section>
  );
}
