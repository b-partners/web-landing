import { PALETTE_COLORS } from '@/config/theme';
import { Box, Typography } from '@mui/material';

export const Feature = () => {
  return (
    <Box component="section" id="share" style={{ padding: 50, backgroundColor: PALETTE_COLORS.pine }}>
      <Typography sx={{ mt: 5, color: PALETTE_COLORS.cream, fontWeight: 'bold', textAlign: 'center', fontSize: { xs: '2rem', lg: '2.5rem' } }}>
        Comment ça fonctionne ?
      </Typography>
    </Box>
  );
};
