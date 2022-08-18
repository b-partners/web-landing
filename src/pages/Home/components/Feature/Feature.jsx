import React from 'react';
import feature from '../../assets/img/transactions.gif';

export function Feature() {
  return (
    <section className="share section bd-container" id="share">
      <div className="share__container bd-grid">
        <div className="share__data">
          <h3 className="section-title-center">
            Bénéficiez de tous les outils d’une banque
            <br />
            traditionnelle adaptés à vos besoins
          </h3>
          <p className="share__description">
            <i className="fa fa-check" aria-hidden="true" />
            &nbsp; Obtenez votre compte professionnel avec un IBAN/RIB FR en 60 secondes.
          </p>
          <p className="share__description">
            <i className="fa fa-check" aria-hidden="true" />
            &nbsp; Virements SEPA entrants et sortants illimités.
          </p>
          <p className="share__description">
            <i className="fa fa-check" aria-hidden="true" />
            &nbsp; Virements instantanés jusqu'a 100 000€.
          </p>
          <p className="share__description">
            <i className="fa fa-check" aria-hidden="true" />
            &nbsp; Une carte bancaire physique ou virtuelle selon vos besoins.
          </p>
        </div>
        <div className="share__img">
          <img alt="ok" src={feature} />
        </div>
      </div>
    </section>
  );
}
