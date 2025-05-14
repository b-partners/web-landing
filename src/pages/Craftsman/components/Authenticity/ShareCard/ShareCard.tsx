import { ReactNode } from 'react';

import { PALETTE_COLORS } from '@/config/theme';
import { Box, Typography } from '@mui/material';

import './ShareCard.css';

export const ShareCard = ({ cardText = 'card text', icon, cardTitle }: { cardTitle?: string; cardText?: string; icon?: ReactNode }) => {
  return (
    <Box
      sx={{
        maxWidth: { xs: 'unset', lg: '250px' },
        flex: 1,
        '& .MuiSvgIcon-root': { mx: 'auto', display: 'block', mt: 5, fontSize: '2.5rem', mb: 2 },
        color: PALETTE_COLORS.cream,
      }}
      className="share__element"
    >
      <Box className="share-img-container">{icon}</Box>
      <Typography sx={{ textAlign: 'center', width: '100%', color: PALETTE_COLORS.cream }}>
        <Typography component="span" sx={{ color: PALETTE_COLORS.cream, fontWeight: 'bold' }}>
          {cardTitle}
        </Typography>
        <br />
        {cardText}
      </Typography>
    </Box>
  );
};
