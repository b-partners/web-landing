import { Link } from 'react-router-dom';

import { BpButton } from '@/common/components/Button';
import { redirect } from '@/utils/redirect';
import { CheckCircleOutlined } from '@mui/icons-material';
import { Box, SxProps } from '@mui/material';

import Developpement from '../../../assets/img/developpement.png';
import Essentiel from '../../../assets/img/essentiel.png';

const OFFERS_TABLE_STYLE: SxProps = {
  '& .cta-btn': { position: 'absolute', bottom: 0, transform: 'translateY(50%)', scale: 1.2 },
};

const RedundantTableLine = () => {
  return (
    <>
      <div className="table-body-cell">
        <p className="text-center">
          <CheckCircleOutlined />
        </p>
      </div>
    </>
  );
};

export function TableOffer() {
  const goToSignUp = () => redirect('https://dashboard.birdia.fr/sign-up');
  const goToMeetTest = () => redirect('https://meet.brevo.com/birdia/reunion-de-15-minutes');

  return (
    <Box sx={OFFERS_TABLE_STYLE} className="offer__table-row bd-container">
      <div className="offer__table-first__column">
        <div className="offer__table-header">
          <h2 className="table__title">Nos Offres</h2>
        </div>
        <div className="table-body-cell">
          <p>
            Activez notre intelligence artificielle dédiée à l’analyse de toitures : mesure automatique, détection des matériaux (ardoise, tuile, zinc…),
            estimation des pentes, identification des dégâts et des réparations. Suivi facilité pour vos clients, 20 diagnostics inclus.
          </p>
        </div>
        <div className="table-body-cell">
          <p>Installer notre outil sur votre site internet et offrez à vos prospects la possibilité d’évaluer en toute autonomie leurs toitures.</p>
        </div>
        <div className="table-body-cell">
          <p>Intégrez la communauté des couvreurs BIRDIA et recevez des chantiers autour de chez vous.</p>
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
            <h3>Professionnel de la toiture</h3>
          </div>
          <span className="offer-price">49€</span>/mois
        </div>
        <div className="table-body-cell">
          <p className="text-center">
            <CheckCircleOutlined />
            <br />1 utilisateur
          </p>
        </div>
        <div className="table-body-cell">
          <p className="text-center">
            <CheckCircleOutlined />
          </p>
        </div>
        <div className="table-body-cell">
          <p className="text-center">
            <CheckCircleOutlined />
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
            <h3>Professionnel du bâti (Foncière, Diagnostiqueur, OPH, etc)</h3>
          </div>
          <Link className="contact-button" id="contact-offer-1" to="/contact">
            Contactez-nous
          </Link>
        </div>
        <div className="table-body-cell">
          <p className="text-center">
            <CheckCircleOutlined />
            <br />
            Avec personnalisation & branchement, plusieurs métiers et utilisateurs
          </p>
        </div>
        <div className="table-body-cell">
          <p className="text-center">
            <CheckCircleOutlined />
          </p>
        </div>
        <div className="table-body-cell">
          <p className="text-center">
            <CheckCircleOutlined />
            <br />
            Intégration API
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
