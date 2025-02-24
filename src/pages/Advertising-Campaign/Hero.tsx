import { Box, Button } from '@mui/material';

import { HeroDescriptionImage as DescriptionImage, HeroDescriptionText as DescriptionText } from './components';
import { HeroStyle as style } from './styles';

export const Hero = () => {
  const handleClickCTA = () => window.open('https://meet.brevo.com/bpartnersartisans/reunion-de-15-minutes', '_blank');

  return (
    <Box sx={style}>
      <Box className="logo-container">
        <img alt="Bp IA Logo" src="/assets/images/bp-ia-logo.png" />
      </Box>
      <Box className="description-container">
        <Box className="description-content">
          <DescriptionText />
          <DescriptionImage />
        </Box>
      </Box>
      <Box className="cta-container">
        <Button variant="contained" onClick={handleClickCTA}>
          Réservez votre démo
        </Button>
      </Box>
    </Box>
  );
};
