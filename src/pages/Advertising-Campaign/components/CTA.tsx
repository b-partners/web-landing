import { Box, Button } from '@mui/material';

import { CTAStyle } from './styles';

export const CTAButton = () => {
  const handleClickCTA = () => window.open('https://meet.brevo.com/bpartnersartisans/reunion-de-15-minutes', '_blank');
  return (
    <Box sx={CTAStyle}>
      <Button variant="contained" onClick={handleClickCTA}>
        Réservez votre démo
      </Button>
    </Box>
  );
};
