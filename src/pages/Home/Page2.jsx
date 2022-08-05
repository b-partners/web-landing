import React from 'react';
import myVideo from './assets/img/video.gif';

export function Page2() {
  return (
    <section className="share section bd-container" id="share">
      <div className="share__container bd-grid">
        <div className="share__data">
          <h2 className="section-title-center">
            Bénéficiez de tous les outils d’une banque
            <br />
            traditionnelle adaptés à vos besoins
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
    </section>
  );
}
