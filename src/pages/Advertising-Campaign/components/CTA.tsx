import { Box, Button } from '@mui/material';

import { CTAStyle } from './styles';

export const reserveDemo = () => window.open('https://meet.brevo.com/bpartnersartisans/reunion-de-15-minutes', '_blank');

export const CTAButton = () => {
  return (
    <Box sx={CTAStyle}>
      <Button variant="contained" onClick={reserveDemo}>
        Réservez votre démo
      </Button>
    </Box>
  );
};
