import { FC } from 'react';

import { Box, Button, SxProps } from '@mui/material';

import { CTAStyle } from './styles';

export const bookYourDemoUrl = 'https://meet.brevo.com/birdia/reunion-de-15-minutes';

export const reserveDemo = () => window.open(bookYourDemoUrl, '_blank');
export const createAnAccount = () => window.open('https://dashboard.birdia.fr/sign-up', '_blank');

export const CTAButton: FC<{ sx?: SxProps }> = ({ sx = {} }) => {
  return (
    <Box sx={CTAStyle}>
      <Button variant="contained" onClick={reserveDemo} sx={{ ...sx }}>
        Réservez votre démo
      </Button>
    </Box>
  );
};

export const CreateAccountButton: FC<{ sx?: SxProps }> = ({ sx = {} }) => {
  return (
    <Box sx={CTAStyle}>
      <Button variant="contained" onClick={createAnAccount} sx={{ ...sx }}>
        Essai gratuit 14 jours
      </Button>
    </Box>
  );
};
