import { CSSProperties } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { PALETTE_COLORS } from '@/config/theme';
import { Typography } from '@mui/material';

import InsuranceShow from './assets/img/insurance-show.jpg';
import { Headline } from './components';

const INSURANCE_SHOW_STYLE: CSSProperties = {
  width: '100%',
  marginBottom: '50px',
  borderRadius: '5px',
};

export const Insurance = () => {
  return (
    <div>
      <Headline />
      <div>
        <div className="bd-container">
          <div style={{ marginBlock: '50px' }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, color: PALETTE_COLORS.forest, fontWeight: 'bold' }}>
              {' '}
              Ils nous font confiance
            </Typography>
            <Typography sx={{ fontSize: { xs: '1.rem', md: '1.1rem' }, mt: 2 }}>
              BIRDIA est lauréat du concours French AssurTech 2024 regroupant 7 assureurs et mutuelles d’assurances (Groupama, MACIF, MAIF, Groupe P&V, Mutuelle
              de Poitiers Assurances, MAAF COVEA et CNP Assurances).
            </Typography>
          </div>
          <LazyLoadImage src={InsuranceShow} alt="InsuranceShow" style={INSURANCE_SHOW_STYLE} />
        </div>
      </div>
    </div>
  );
};
