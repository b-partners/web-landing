import { FC } from 'react';

import { PALETTE_COLORS } from '@/config/theme';
import { Box, Button, SxProps } from '@mui/material';

import { CTAStyle } from './styles';

export const reserveDemo = () => window.open('https://meet.brevo.com/bpartnersartisans/reunion-de-15-minutes', '_blank');
export const createAnAccount = () => window.open('https://dashboard.bpartners.app/sign-up', '_blank');

export const CTAButton: FC<{ sx?: SxProps }> = ({ sx = {} }) => {
  return (
    <Box sx={CTAStyle}>
      <Button variant="contained" onClick={reserveDemo} sx={{ bgcolor: PALETTE_COLORS.pine, ...sx }}>
        Réservez votre démo
      </Button>
    </Box>
  );
};

export const CreateAccountButton: FC<{ sx?: SxProps }> = ({ sx = {} }) => {
  return (
    <Box sx={CTAStyle}>
      <Button variant="contained" onClick={createAnAccount} sx={{ bgcolor: PALETTE_COLORS.pine, ...sx }}>
        Essai gratuit 14 jour
      </Button>
    </Box>
  );
};
