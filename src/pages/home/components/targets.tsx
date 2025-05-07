import { FlexBox } from '@/common/components';
import { PALETTE_COLORS } from '@/config/theme';
import { Box, Divider, SxProps, Typography } from '@mui/material';

import { TARGETS } from '../utils/constant';
import { TargetItem } from './target-item';

const TARGET_SX: SxProps = {
  width: '100%',
  minHeight: '100vh',
  p: { xs: 10, xxl: 15 },
  bgcolor: PALETTE_COLORS.pine,
};

export const Targets = () => {
  return (
    <Box component="section" sx={TARGET_SX}>
      <Typography
        variant="h2"
        sx={{
          color: PALETTE_COLORS.cream,
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: {
            xs: '3rem',
            md: '5rem',
            xxl: '7rem',
          },
        }}
      >
        Vous êtes couvreurs, assureurs ou une collectivité ?
      </Typography>
      <Typography sx={{ color: PALETTE_COLORS.cream, textAlign: 'center', mt: 2, fontSize: { xs: '1rem', md: '1.5rem', xxl: '2rem' } }}>
        Notre IA reproduit l’expertise métier pour analyser des toitrues à distance
      </Typography>
      <Divider sx={{ height: '1px', width: '100%', mt: 4, bgcolor: PALETTE_COLORS.cream }} />
      <FlexBox sx={{ alignItems: 'stretch', mt: 5, gap: { xs: 5, xxl: 7 }, flexWrap: 'wrap' }}>
        {TARGETS.map((target) => (
          <TargetItem key={target.title} target={target} />
        ))}
      </FlexBox>
    </Box>
  );
};
