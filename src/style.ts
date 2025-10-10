import { SxProps } from '@mui/material';

import { PALETTE_COLORS } from './config/theme';

export const birdiaNewVersionSnackBarStyle: SxProps = {
  alignItems: 'start',
  bgcolor: PALETTE_COLORS.peach,
  color: PALETTE_COLORS.white,
  fontWeight: 'bold',
  mb: 5,
  py: { xs: 1, md: 2 },
  fontSize: { xs: '0.8rem', md: '1.1rem' },
  '& .MuiSvgIcon-root': { mt: '2px' },
};
