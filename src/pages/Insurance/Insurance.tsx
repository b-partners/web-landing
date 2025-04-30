import { CSSProperties } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import InsuranceShow from './assets/img/insurance-show.jpg';
import { Headline } from './components';
import { PALETTE_COLORS } from '@/config/theme';

const INSURANCE_SHOW_STYLE: CSSProperties = {
  width: '100%',
};

export const Insurance = () => {
  return (
    <div>
      <div className="bd-container">
        <Headline />
      </div>
      <div style={{backgroundColor: PALETTE_COLORS.white, paddingBlock: "30px"}}>
      <div className="bd-container">
        <div style={{ marginTop: '50px' }}>
          <h2 className="trust-subtitle">Ils nous font confiance</h2>
          <p>
            BIRDIA est lauréat du concours French AssurTech 2024 regroupant 7 assureurs et mutuelles d’assurances (Groupama, MACIF, MAIF, Groupe P&V,
            Mutuelle de Poitiers Assurances, MAAF COVEA et CNP Assurances).
          </p>
        </div>
        <LazyLoadImage src={InsuranceShow} alt="InsuranceShow" style={INSURANCE_SHOW_STYLE} />
      </div>
      </div>
    </div>
  );
};
