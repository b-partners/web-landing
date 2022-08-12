import React from 'react';
import './Pricing.css';

import essentiel from '../../assets/img/essentiel.png';
import ambitieux from '../../assets/img/ambitieux.png';
import developpement from '../../assets/img/developpement.png';
import connexion from '../../assets/img/connexion.png';
import confirmer from '../../assets/img/identity.png';
import valider from '../../assets/img/valider.png';

import { ReactComponent as Apple } from '../../assets/img/apple-store.svg';
import { ReactComponent as Google } from '../../assets/img/google-store.svg';
import { Preregistration } from '../Preregistration';
import { usePreregistration } from '../../../../utils/hooks';

export function Pricing() {
  const { isLoading, showModal, toggle, handleEmailSubmit, handleModalSubmit, handleChange } = usePreregistration();

  return (
    <div className="pricing__container">
      <div className="pricing__main">
        <a href="src/pages/Home/Home#" className="button pricing__button">
          Préinscrivez-vous et bénéficiez de la formule de votre choix gratuite pendant 1 an (offre limité au 500
          premiers clients)
        </a>
        <Preregistration onSubmitEmail={handleEmailSubmit} onChange={handleChange} showModal={showModal} toggle={toggle}
                         onSubmitModal={handleModalSubmit} loading={isLoading} />
        <div className="background">
          <div className="container">
            <div className="pricing-table">
              <div className="pricing-plan">
                <h2 className="pricing-header">L'ESSENTIEL</h2>
                <span className="pricing-price">
                  9€
                  <span style={{ fontSize: 15 }}>/mois</span>
                </span>
                <div className="pricing-img-container">
                  <img src={essentiel} alt="" className="pricing-img" />
                </div>
                <a href="src/pages/Home/Home#/" className="pricing-button">
                  C'est ça qu'il me faut
                </a>
                <ul className="pricing-features">
                  <li className="pricing-features-item">
                    <span style={{ fontSize: 12 }}>
                      <strong>
                        Tous les services essentiels pour gérer votre activité d'artisan ou d'indépendant.
                      </strong>
                    </span>
                  </li>
                  <li className="pricing-features-item">
                    <strong>
                      Activation de la version standard de notre assistant virtuelle pour faire grossir votre activité.
                    </strong>
                  </li>
                  <li className="pricing-features-item">
                    <strong>Service de banque en ligne (RIB/Virement/carte à partir de 2€/mois).</strong>
                  </li>
                  <li className="pricing-features-item">
                    <strong>
                      Bénéficiez de notre outil de devis, facturation, comptabilité automatisée (1 utilisateur).
                    </strong>
                  </li>
                  <li className="pricing-features-item">
                    <strong>
                      Collectez vos paiment par QR code, SMS et mails (2% de frais pour accélérer la collecte).
                    </strong>
                  </li>
                  <li className="pricing-features-item">
                    <strong>60k€/an</strong>
                    &nbsp; de commissions de mouvements de compte incluses puis 0.15%.
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
                <h2 className="pricing-header">DEVELOPPEMENT</h2>
                <span className="pricing-price">
                  19€
                  <span style={{ fontSize: 15 }}>/mois</span>
                </span>
                <div className="pricing-img-container">
                  <img src={developpement} alt="" className="pricing-img" />
                </div>
                <a href="src/pages/Home/Home#/" className="pricing-button">
                  C'est plutôt ça qu'il me faut
                </a>
                <ul className="pricing-features">
                  <li className="pricing-features-item">
                    <span style={{ fontSize: 12 }}>
                      <strong>
                        Tous les services pour développer et gérer votre activité d'artisan ou d'indépendant.
                      </strong>
                    </span>
                  </li>
                  <li className="pricing-features-item">
                    <strong>
                      Activation de la version standard de l'assistant virtuelle pour faire grossir votre activité.
                    </strong>
                  </li>
                  <li className="pricing-features-item">
                    <strong>Service de banque en ligne (RIB/Virement/carte à partir de 2€/mois).</strong>
                  </li>
                  <li className="pricing-features-item">
                    <strong>
                      Bénéficiez de notre outil de devis, facturation, comptabilité automatisée (1 utilisateur).
                    </strong>
                  </li>
                  <li className="pricing-features-item">
                    <strong>
                      Collectez vos paiment par QR code, SMS et mails (1,5% de frais pour accélérer la collecte).
                    </strong>
                  </li>
                  <li className="pricing-features-item">
                    <strong>150k€/an</strong>
                    &nbsp; de commissions de mouvements de compte incluses puis 0,15%.
                  </li>
                  <li className="pricing-features-item">
                    <strong>200€</strong>
                    &nbsp; de retraits gratuits par mois, puis 1% du montant.
                  </li>
                  <li className="pricing-features-item">
                    <strong>1,9%</strong>
                    &nbsp; pour les paiements hors zone euro.
                  </li>
                  <li className="pricing-features-item">
                    <strong>60</strong>
                    &nbsp; virements et prélèvements puis 0,30€ au delà.
                  </li>
                  <li className="pricing-features-item">
                    Support &nbsp;
                    <strong>7 jours sur 7</strong>
                  </li>
                </ul>
              </div>

              <div className="pricing-plan">
                <h2 className="pricing-header">L'AMBITIEUX</h2>
                <span className="pricing-price">
                  39€
                  <span style={{ fontSize: 15 }}>/mois</span>
                </span>
                <div className="pricing-img-container">
                  <img src={ambitieux} alt="" className="pricing-img" />
                </div>
                <a href="src/pages/Home/Home#/" className="pricing-button">
                  C'est exactement ça qu'il me faut
                </a>
                <ul className="pricing-features">
                  <li className="pricing-features-item">
                    <span style={{ fontSize: 12 }}>
                      <strong>
                        Tous les services pour franchir un pallier dans votre creoissance et automatiser votre forte
                        activité d'artisan & d'indépendant.
                      </strong>
                    </span>
                  </li>
                  <li className="pricing-features-item">
                    <strong>
                      Activation de la version personnalisée de notre assistant virtuelle pour faire grossir votre
                      activité.
                    </strong>
                  </li>
                  <li className="pricing-features-item">
                    <strong>Service de banque en ligne (RIB/Virement/carte à partir de 2€/mois).</strong>
                  </li>
                  <li className="pricing-features-item">
                    <strong>
                      Bénéficiez de notre outil de devis, facturation, comptabilité automatisée (multi utilisateur).
                    </strong>
                  </li>
                  <li className="pricing-features-item">
                    <strong>
                      Collectez vos paiment par QR code, SMS et mails (0,99% de frais pour accélérer la collecte).
                    </strong>
                  </li>
                  <li className="pricing-features-item">
                    <strong>1000k€/an</strong>
                    &nbsp; de commissions de mouvements de compte incluses puis 0,15%.
                  </li>
                  <li className="pricing-features-item">
                    <strong>200€</strong>
                    &nbsp; de retraits gratuits par mois, puis 1% du montant.
                  </li>
                  <li className="pricing-features-item">
                    <strong>1,7%</strong>
                    &nbsp; pour les paiements hors zone euro.
                  </li>
                  <li className="pricing-features-item">
                    <strong>100</strong>
                    &nbsp; virements et prélèvements puis 0,20€ au delà.
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
