import { redirect } from '@/utils/redirect';
import { Box } from '@mui/material';

import { BpButton } from '../../../../../common/components/Button';
import Developpement from '../../../assets/img/developpement.png';
import Essentiel from '../../../assets/img/essentiel.png';
import { RedundantTableLine } from './RedundantTableLine';
import { OffersTableStyle } from './style';

export function TableOffer() {
  const goToSignUp = () => redirect('https://dashboard.bpartners.app/sign-up');
  const goToMeetTest = () => redirect('https://meet.brevo.com/bpartnersartisans/detection-dobjets-par-intelligence-artificielle-bpartners');

  return (
    <Box sx={OffersTableStyle} className="offer__table-row bd-container">
      <div className="offer__table-first__column">
        <div className="offer__table-header">
          <h2 className="table__title">Nos Offres</h2>
        </div>
        <div className="table-body-cell">
          <p>
            Activation de notre intelligence artificielle qui analyse les toitures (prise de mesures, détection des revêtements, pentes, usures, démoussage
            nécessaires) de vos prospects et organise le suivi des toitures de vos clients existants. <b>20 analyses de toitures incluses.</b>
          </p>
        </div>
        <div className="table-body-cell">
          <p>Outil de devis/facturation personnalisé, gestion des acomptes,relance impayés CRM, gestion des produits.</p>
        </div>
        <div className="table-body-cell">
          <p>Initiez la collecte de vos encaissements instantanément par QR code, Mails ou SMS en 1 clic. Lien de paiement intégré à la facture.</p>
        </div>
        <div className="table-body-cell">
          <p>Connectez votre compte bancaire pour visualiser votre trésorerie en continu.</p>
        </div>
        <div className="table-body-cell">
          <p>Support 7 jours sur 7.</p>
        </div>
      </div>
      <div className="offer__table-column">
        <div className="offer__table-header">
          <img src={Essentiel} alt="essentiel" className="offer-image" />
          <h2>L'Essentiel</h2>
          <div className="offer__category">
            <h3>Artisant couvreur</h3>
          </div>
          <span className="offer-price">49€</span>/mois
        </div>
        <div className="table-body-cell">
          <p className="text-center">
            <i className="fa fa-check" aria-hidden="true" />
            <br />1 utilisateur
          </p>
        </div>
        <div className="table-body-cell">
          <p className="text-center">
            <i className="fa fa-check" aria-hidden="true" />
          </p>
        </div>
        <div className="table-body-cell">
          <p className="text-center">
            <i className="fa fa-check" aria-hidden="true" />
            <br />
            0,99% commission
          </p>
        </div>
        <RedundantTableLine />
        <BpButton className="cta-btn" onClick={goToSignUp}>
          Testez 14 jours sans engagement
        </BpButton>
      </div>
      <div className="offer__table-column">
        <div className="offer__table-header">
          <img src={Developpement} alt="essentiel" className="offer-image" />
          <h2>Le Sur-mesure</h2>
          <div className="offer__category">
            <h3>Collectivités, Assureurs</h3>
          </div>
          <div className="contact-button" id="contact-offer-1" role="button">
            Contactez-nous
          </div>
        </div>
        <div className="table-body-cell">
          <p className="text-center">
            <i className="fa fa-check" aria-hidden="true" />
            <br />
            Avec personnalisation & branchement, plusieurs métiers et utilisateurs
          </p>
        </div>
        <div className="table-body-cell">
          <p className="text-center">
            <i className="fa fa-check" aria-hidden="true" />
          </p>
        </div>
        <div className="table-body-cell">
          <p className="text-center">
            <i className="fa fa-check" aria-hidden="true" />
            <br />
            en fonction du volume
          </p>
        </div>
        <RedundantTableLine />
        <BpButton className="cta-btn" onClick={goToMeetTest}>
          Testez sur 1km2 gratuitement
        </BpButton>
      </div>
    </Box>
  );
}
