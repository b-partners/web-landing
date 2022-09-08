import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import './Pricing.css';

import essentiel from '../../assets/img/essentiel.png';
import ambitieux from '../../assets/img/ambitieux.png';
import developpement from '../../assets/img/developpement.png';
import confirmer from '../../assets/img/identity.png';
import valider from '../../assets/img/valider.png';

import { Preregistration } from '../Preregistration';
import { usePreregistration } from '../../../../utils/hooks';

export function Pricing() {
  const [open, setOpen] = React.useState(false);
  const {
    isLoading,
    showModal,
    toggle,
    handleEmailSubmit,
    handleModalSubmit,
    handleChange,
    preRegistration,
  } = usePreregistration();
  return (
    <div className='pricing__container'>
      <div className='pricing__main'>
        <h3 className='pricing__title'>
          Préinscrivez-vous et bénéficiez de la formule de votre <br />
          choix gratuite pendant 1 an (offre limitée au 500
          premiers clients)
        </h3>
        <div className='pricing__preregistration'>
          <Preregistration onSubmitEmail={handleEmailSubmit} onChange={handleChange} showModal={showModal}
            toggle={toggle} onSubmitModal={handleModalSubmit} loading={isLoading} preRegistration={preRegistration} />
        </div>
        <div className='background'>
          <div className='container'>
            <div className='pricing-table'>
              <div className='pricing-plan'>
                <h2 className='pricing-header'>L'ESSENTIEL</h2>
                <span className='pricing-price'>
                  9€
                  <span style={{ fontSize: 15 }}>/mois</span>
                </span>
                <div className='pricing-img-container'>
                  <img src={essentiel} alt='' className='pricing-img' />
                </div>
                <a href='src/pages/Home/Home#/' className='pricing-button'>
                  C'est ça qu'il me faut
                </a>
                <h4 className='pricing-subtitle'>
                  Tous les<mark className='highlighted-text'> services essentiels </mark>
                  pour gérer votre activité d’artisan ou d'indépendant
                </h4>
                <ul className='pricing-features'>
                  <li className='pricing-features-item'>
                    <i className="fa fa-check" aria-hidden="true" />
                    <strong>
                      Activation de la version standard de notre assistant virtuel pour générer de
                      nouvelles opportunités commerciales.
                    </strong>
                  </li>
                  <li className='pricing-features-item'>
                    <i className="fa fa-check" aria-hidden="true" />
                    <strong>
                      Collectez vos paiement par QR code, mails et SMS (accélérez la collecte de vos
                      revenus avec votre mobile, 1 000€ inclus puis 2% du montant par QR code/mail et 2%+0,40€ par SMS).
                    </strong>
                  </li>
                  <li className='pricing-features-item'>
                    <i className="fa fa-check" aria-hidden="true" />
                    <strong>
                      Bénéficiez de notre outil de devis, facturation, relance & comptabilité automatisée gratuitement
                      (1 utilisateur).
                    </strong>
                  </li>
                  <li className='pricing-features-item'>
                    <i className="fa fa-check" aria-hidden="true" />
                    <strong>
                      Inclus service de banque en ligne (1 compte pro, 1 RIB FR/ 1 accès mobile et internet).
                    </strong>
                  </li>
                  <li className='pricing-features-item'>
                    <i className="fa fa-check" aria-hidden="true" />
                    <strong>
                      1 carte mastercard physique incluse (puis 5€ HT/carte/mois).
                    </strong>
                  </li>
                  <li className='pricing-features-item'>
                    <i className="fa fa-check" aria-hidden="true" />
                    <strong>
                      Carte virtuelle permanente 2€ HT/mois
                    </strong>
                  </li>
                  <li className='pricing-features-item'>
                    <i className="fa fa-check" aria-hidden="true" />
                    <strong>
                      Carte virtuelle à utilisation unique 1€ HT par carte générée..
                    </strong>
                  </li>
                  <li className='pricing-features-item'>
                    <i className="fa fa-check" aria-hidden="true" />
                    <strong>
                      20  virements et prélèvements inclus puis 0,40€ au-delà.
                    </strong>
                  </li>
                  <li className='pricing-features-item'>
                    <i className="fa fa-check" aria-hidden="true" />
                    <strong>
                      60k€/an  de commissions de mouvements de compte incluses puis 0.15%.
                    </strong>
                  </li>
                  <li className='pricing-features-item'>
                    <i className="fa fa-check" aria-hidden="true" />
                    <strong>
                      Pour les retraits en France ou à l’étranger, plafonds de cartes, voir tarification
                      CGU signé avec notre partenaire swan.io.
                    </strong>
                  </li>
                  <li className='pricing-features-item'>
                    <i className="fa fa-check" aria-hidden="true" />
                    <strong> Support 7 jours sur 7.</strong>
                  </li>
                </ul>
              </div>

              <div className='pricing-plan' id='popular'>
                <h2 className='pricing-header'>DEVELOPPEMENT</h2>
                <span className='pricing-price'>
                  19€
                  <span style={{ fontSize: 15 }}>/mois</span>
                </span>
                <div className='pricing-img-container'>
                  <img src={developpement} alt='' className='pricing-img' />
                </div>
                <a href='src/pages/Home/Home#/' className='pricing-button'>
                  C'est plutôt ça qu'il me faut
                </a>
                <h4 className='pricing-subtitle'>
                  Tous les
                  <mark className='highlighted-text'>  services pour développer et gérer </mark>
                  votre activité d’artisan ou d'indépendant
                </h4>
                <ul className='pricing-features'>
                  <li className='pricing-features-item'>
                    <i className="fa fa-check" aria-hidden="true" />
                    <strong>
                      Activation de la version standard de l'assistant virtuel pour générer de nouvelles
                      opportunités commerciales et poursuivre votre développement.
                    </strong>
                  </li>
                  <li className='pricing-features-item'>
                    <i className="fa fa-check" aria-hidden="true" />
                    <strong>
                      Collectez vos paiement par QR code, mails et SMS (accélérez la collecte de vos revenus avec
                      votre mobile, 1 000€ inclus puis 1,50% du montant par QR code/mail et 1,5%+0,30€ par SMS).
                    </strong>
                  </li>
                  <li className='pricing-features-item'>
                    <i className="fa fa-check" aria-hidden="true" />
                    <strong>
                      Bénéficiez de notre outil de devis, facturation, comptabilité automatisée gratuitement
                      (1 utilisateur).
                    </strong>
                  </li>
                  <li className='pricing-features-item'>
                    <i className="fa fa-check" aria-hidden="true" />
                    <strong>
                      Inclus service de banque en ligne (1 compte pro, 1 RIB FR/ 1 accès mobile et internet).
                    </strong>
                  </li>
                  <li className='pricing-features-item'>
                    <i className="fa fa-check" aria-hidden="true" />
                    <strong>
                      1 carte mastercard physique incluse (puis 5€ HT/carte/mois).
                    </strong>
                  </li>
                  <li className='pricing-features-item'>
                    <i className="fa fa-check" aria-hidden="true" />
                    <strong>
                      1 Carte virtuelle permanente incluse puis 2€ HT/mois
                    </strong>
                  </li>
                  <li className='pricing-features-item'>
                    <i className="fa fa-check" aria-hidden="true" />
                    <strong>
                      2 Cartes virtuelles à utilisation unique incluses puis 1€ HT par carte générée.
                    </strong>
                  </li>
                  <li className='pricing-features-item'>
                    <i className="fa fa-check" aria-hidden="true" />
                    <strong>
                      50  virements et prélèvements inclus puis 0,40€ au-delà.
                    </strong>
                  </li>
                  <li className='pricing-features-item'>
                    <i className="fa fa-check" aria-hidden="true" />
                    <strong>
                      150k€/an  de commissions de mouvements de compte incluses puis 0.15%.
                    </strong>
                  </li>
                  <li className='pricing-features-item'>
                    <i className="fa fa-check" aria-hidden="true" />
                    <strong>
                      Pour les retrait en France ou à l’étranger, plafonds de cartes,
                      voir tarification CGU signé avec notre partenaire swan.io
                    </strong>
                  </li>
                  <li className='pricing-features-item'>
                    <i className="fa fa-check" aria-hidden="true" />
                    <strong>
                      Support  7 jours sur 7.
                    </strong>
                  </li>
                </ul>
              </div>

              <div className='pricing-plan'>
                <h2 className='pricing-header'>L'AMBITIEUX</h2>
                <span className='pricing-price'>
                  39€
                  <span style={{ fontSize: 15 }}>/mois</span>
                </span>
                <div className='pricing-img-container'>
                  <img src={ambitieux} alt='' className='pricing-img' />
                </div>
                <a href='src/pages/Home/Home#/' className='pricing-button'>
                  C'est exactement ça qu'il me faut
                </a>
                <h4 className='pricing-subtitle'>Tous les services
                  <mark className='highlighted-text'> franchir un pallier dans votre croissance
                    et automatiser votre forte activité </mark>
                  d’artisan & d'indépendant
                </h4>
                <ul className='pricing-features'>
                  <li className='pricing-features-item'>
                    <i className="fa fa-check" aria-hidden="true" />
                    <strong>
                      Activation de la version personnalisée de notre assistant virtuel
                      pour faire franchir un cap à votre activité.
                    </strong>
                  </li>
                  <li className='pricing-features-item'>
                    <i className="fa fa-check" aria-hidden="true" />
                    <strong>
                      Collectez vos paiement par QR code, mails et SMS (accélérez la collecte
                      de vos revenus avec votre mobile, 1 000€ inclus puis 0,99% du montant
                      par QR code/mail et 0,99%+0,20€ par SMS).
                    </strong>
                  </li>
                  <li className='pricing-features-item'>
                    <i className="fa fa-check" aria-hidden="true" />
                    <strong>
                      Bénéficiez de notre outil de devis, facturation, comptabilité automatisée
                      gratuitement (4 utilisateurs).
                    </strong>
                  </li>
                  <li className='pricing-features-item'>
                    <i className="fa fa-check" aria-hidden="true" />
                    <strong>
                      Inclus service de banque en ligne (1 compte pro, 1 RIB FR/ 4  accès mobile et internet).
                    </strong>
                  </li>
                  <li className='pricing-features-item'>
                    <i className="fa fa-check" aria-hidden="true" />
                    <strong>
                      2 cartes mastercard physiques incluses (puis 5€ HT/carte/mois).
                    </strong>
                  </li>
                  <li className='pricing-features-item'>
                    <i className="fa fa-check" aria-hidden="true" />
                    <strong>3 Cartes virtuelles permanentes incluses puis 2€ HT/mois.</strong>
                  </li>
                  <li className='pricing-features-item'>
                    <i className="fa fa-check" aria-hidden="true" />
                    <strong>
                      10 Cartes virtuelles à utilisation unique incluses puis 1€ HT par carte générée.
                    </strong>
                  </li>
                  <li className='pricing-features-item'>
                    <i className="fa fa-check" aria-hidden="true" />
                    <strong>
                      100  virements et prélèvements inclus puis 0,40€ au-delà.
                    </strong>
                  </li>
                  <li className='pricing-features-item'>
                    <i className="fa fa-check" aria-hidden="true" />
                    <strong>
                      1M€/an  de commissions de mouvements de compte incluses puis 0.15%.
                    </strong>
                  </li>
                  <li className='pricing-features-item'>
                    <i className="fa fa-check" aria-hidden="true" />
                    <strong>
                      Pour les retrait en France ou à l’étranger, plafonds de cartes,
                      voir tarification CGU signé avec notre partenaire swan.io
                    </strong>
                  </li>
                  <li className='pricing-features-item'>
                    <i className="fa fa-check" aria-hidden="true" />
                    <strong>7 jours sur 7.</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className='section decoration' id='decoration'>
        <h3 className='decoration-title'>Comment ouvrir un compte ?</h3>
        <div className='decoration__container'>
          <div className='decoration__data'>
            <div className='button-container'>
              <button type='button' className='connexion-button' onClick={() => setOpen(true)}>
                <i className="fab fa-apple fa-2x" style={{ marginRight: '.8rem' }} />
                Connexion avec Apple
              </button>
              <button type='button' className='connexion-button'>
                <i className="fab fa-google fa-2x" style={{ marginRight: '.8rem' }} />
                Connexion avec Google
              </button>
            </div>
            <h4 className='step-text'>Ouvrez votre compte en moins de 5 minutes sans paperasse</h4>
          </div>

          <div className='decoration__data'>
            <img src={confirmer} alt='' className='step-image2' />
            <h4 className='step-text'>Confirmez votre identité avec un selfie et une pièce d’identité</h4>
          </div>

          <div className='decoration__data'>
            <img src={valider} alt='' className='step-image2' />
            <h4 className='step-text'>
              Votre compte est validé &nbsp;
              <br />
              et votre IBAN prêt
            </h4>
          </div>
        </div>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            Envie de vous inscrire ?
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Une application mobile sera bientôt téléchargeable.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)} autoFocus>
              D'accord
            </Button>
          </DialogActions>
        </Dialog>
      </section>
    </div>
  );
}