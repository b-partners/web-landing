import { ReactNode } from 'react';

import { PALETTE_COLORS } from '@/config/theme';
import { Box, Typography } from '@mui/material';

import './ShareCard.css';

export const ShareCard = ({ cardText = 'card text', icon, cardTitle }: { cardTitle?: string; cardText?: string; icon?: ReactNode }) => {
  return (
    <Box sx={{ '& .MuiSvgIcon-root': { fontSize: '2.5rem', mb: 2 }, color: PALETTE_COLORS.cream }} className="share__element">
      <div className="share-img-container">{icon}</div>
      <Typography sx={{ color: PALETTE_COLORS.cream }}>
        <Typography component="span" sx={{ color: PALETTE_COLORS.cream, fontWeight: 'bold' }}>
          {cardTitle}
        </Typography>
        <br />
        {cardText}
      </Typography>
    </Box>
  );
};
