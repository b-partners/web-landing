import React from 'react';
import './Pricing.css';

import moto from '../assets/img/motorbiking.png';
import voiture from '../assets/img/sports-car.png';
import fusee from '../assets/img/start-up.png';
import connexion from '../assets/img/connexion.png';
import confirmer from '../assets/img/identity.png';
import valider from '../assets/img/valider.png';

import { ReactComponent as Apple } from '../assets/img/apple-store.svg';
import { ReactComponent as Google } from '../assets/img/google-store.svg';

export function Pricing() {
  return (
    <div className="pricing__container">
      <div className="pricing__main">
        <a href="src/pages/Home/Home#" className="button pricing__button">
          Préinscrivez-vous et bénéficiez de la formule de votre choix gratuite pendant 1 an (offre limité au 500
          premiers clients)
        </a>
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
                      <strong>Les services essentiels pour gérer votre activité d'indépendant.</strong>
                    </span>
                  </li>
                  <li className="pricing-features-item">Service de banque en ligne</li>
                  <li className="pricing-features-item">
                    <strong>30</strong>
                    &nbsp; jours gratuits et sans engagement.
                  </li>
                  <li className="pricing-features-item">
                    <strong>60k€/an</strong>
                    &nbsp; de commissions de mouvements de compte incluses à hauteur puis 0,15%
                  </li>
                  <li className="pricing-features-item">
                    <strong>1</strong>
                    &nbsp; seul utilisateur (1 carte Mastercard Business)
                  </li>
                  <li className="pricing-features-item">
                    Cartes virtuelles à &nbsp;
                    <strong>2€/mois</strong>
                    , par carte.
                  </li>
                  <li className="pricing-features-item">
                    <strong>200€</strong>
                    &nbsp; de retraits gratuits par mois, puis 1% du montant.
                  </li>
                  <li className="pricing-features-item">
                    <strong>1500€</strong>
                    &nbsp; de plafond pour vos retraits.
                  </li>
                  <li className="pricing-features-item">
                    <strong>2%</strong>
                    &nbsp; pour les paiements hors zone euro.
                  </li>
                  <li className="pricing-features-item">
                    <strong>30</strong>
                    &nbsp; virements et prélèvements puis 0,50€ au delà.
                  </li>
                  <li className="pricing-features-item">
                    Support &nbsp;
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
                      <strong>Le forfait qui inclut toutes nos Fonctionnalités et un support prioritaire.</strong>
                    </span>
                  </li>
                  <li className="pricing-features-item">Service de banque en ligne</li>
                  <li className="pricing-features-item">
                    <strong>30</strong>
                    &nbsp; jours gratuits et sans engagement.
                  </li>
                  <li className="pricing-features-item">
                    <strong>1000k€/an</strong>
                    &nbsp; de commissions de mouvements de compte incluses à hauteur puis 0,15%.
                  </li>
                  <li className="pricing-features-item">
                    <strong>1</strong>
                    &nbsp; seul utilisateur (1 carte Mastercard Business) et accès comptable.
                  </li>
                  <li className="pricing-features-item">
                    Cartes virtuelles à &nbsp;
                    <strong>2€/mois</strong>
                    , par carte.
                  </li>
                  <li className="pricing-features-item">
                    <strong>200€</strong>
                    &nbsp; de retraits gratuits par mois, puis 1% du montant.
                  </li>
                  <li className="pricing-features-item">
                    <strong>2500€</strong>
                    &nbsp; de plafond pour vos retraits.
                  </li>
                  <li className="pricing-features-item">
                    <strong>1,7%</strong>
                    &nbsp; pour les paiements hors zone euro.
                  </li>
                  <li className="pricing-features-item">
                    <strong>100</strong>
                    &nbsp; virements et prélèvements puis 0,20€ au delà.
                  </li>
                  <li className="pricing-features-item">Fonctionnalités avancées (multi-comptes, virements groupés)</li>
                  <li className="pricing-features-item">
                    Pack comptabilité (reçus digitalisés, auto-détection de la TVA, labels)
                  </li>
                  <li className="pricing-features-item">
                    Support &nbsp;
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
                      <strong>Le compte complet pour faciliter votre gestion bancaire et comptable.</strong>
                    </span>
                  </li>
                  <li className="pricing-features-item">Service de banque en ligne</li>
                  <li className="pricing-features-item">
                    <strong>30</strong>
                    &nbsp; jours gratuits et sans engagement.
                  </li>
                  <li className="pricing-features-item">
                    <strong>150k€/an</strong>
                    &nbsp; de commissions de mouvements de compte incluses à hauteur puis 0,15%.
                  </li>
                  <li className="pricing-features-item">
                    <strong>1</strong>
                    &nbsp; seul utilisateur (1 carte Mastercard Business) et accès comptable.
                  </li>
                  <li className="pricing-features-item">
                    Cartes virtuelles à &nbsp;
                    <strong>2€/mois</strong>
                    , par carte.
                  </li>
                  <li className="pricing-features-item">
                    <strong>200€</strong>
                    &nbsp; de retraits gratuits par mois, puis 1% du montant.
                  </li>
                  <li className="pricing-features-item">
                    <strong>1.9%</strong>
                    &nbsp; pour les paiements hors zone euro.
                  </li>
                  <li className="pricing-features-item">
                    <strong>60</strong>
                    &nbsp; virements et prélèvements puis 0,30€ au delà.
                  </li>
                  <li className="pricing-features-item">Fonctionnalités avancées (multi-comptes, virements groupés)</li>
                  <li className="pricing-features-item">
                    Pack comptabilité (reçus digitalisés, auto-détection de la TVA, labels)
                  </li>
                  <li className="pricing-features-item">
                    Support &nbsp;
                    <strong>7 jours sur 7</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pricing__section">
        <section className="decoration" id="decoration">
          <h3 className="decoration-title">Comment ouvrir un compte ?</h3>
          <div className="decoration__container">
            <div className="decoration__data">
              <img src={connexion} alt="" className="step-image" />
              <h4 className="step-text">Ouvrez votre compte en moins de 5 minutes sans paperasse</h4>
            </div>

            <div className="decoration__data">
              <img src={confirmer} alt="" className="step-image2" />
              <h4 className="step-text">Confirmez votre identité avec un selfie et une pièce d’identité</h4>
            </div>

            <div className="decoration__data">
              <img src={valider} alt="" className="step-image2" />
              <h4 className="step-text">
                Votre compte est validé &nbsp;
                <br />
                et votre IBAN prêt
              </h4>
            </div>
          </div>
        </section>
        <section className="send">
          <h2 className="decoration-title">Ouvrir un compte dès maintenant</h2>
          <div className="texte">30 jours gratuits et sans engagement, à partir de 9€ par mois.</div>
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
      </div>
    </div>
  );
}
