import { FlexBox } from '@/common/components';
import { PALETTE_COLORS } from '@/config/theme';
import { Box, SxProps, Typography } from '@mui/material';

import poster from '../assets/images/keys.png';

const MOVIES_SX: SxProps = {
  flexWrap: 'wrap',
  width: '100%',
  gap: 20,
};

export const Movies = () => {
  return (
    <FlexBox component="section" sx={MOVIES_SX}>
      <FlexBox sx={{ mx: 2, justifyContent: { xs: 'center', md: 'end' }, flex: 1, minWidth: '400px' }}>
        <img src={poster} style={{ width: '100%', borderRadius: '30px', maxWidth: '600px' }} alt="BIRDIA" />
      </FlexBox>
      <Box sx={{ flex: 1, minWidth: '450px' }}>
        <FlexBox sx={{ flexDirection: 'column', gap: 3, alignItems: { xs: 'center', md: 'start' }, py: 5, px: 4, minHeight: '250px', bgcolor: 'white' }}>
          <Typography
            variant="h3"
            sx={{ textAlign: { xs: 'center', md: 'start' }, fontWeight: 'bold', fontSize: { xs: '1.8rem', xl: '2.2rem', xxl: '2.6rem' } }}
          >
            <span style={{ color: PALETTE_COLORS.neon_orange }}>Rentabilité</span>
            {'  '}
            <span style={{ color: PALETTE_COLORS.black }}>immédiate</span>
          </Typography>
          <Typography sx={{ maxWidth: '700px', textAlign: { xs: 'center', md: 'start' }, fontSize: { xs: '1rem', xl: '1.3rem' } }}>
            Réduisez vos coûts d’intervention en limitant les inspections manuelles. Investissez dans une solution intelligente qui s’amortit par son efficacité
            et sa précision.
          </Typography>
        </FlexBox>
        <FlexBox
          sx={{ flexDirection: 'column', gap: 3, alignItems: { xs: 'center', md: 'start' }, py: 5, px: 4, minHeight: '250px', bgcolor: PALETTE_COLORS.pine }}
        >
          <Typography
            variant="h3"
            sx={{ textAlign: { xs: 'center', md: 'start' }, fontWeight: 'bold', fontSize: { xs: '1.8rem', xl: '2.5rem', xxl: '2.8rem' } }}
          >
            <span style={{ color: PALETTE_COLORS.cream }}>Prise de décision</span>
            {'  '}
            <span style={{ color: PALETTE_COLORS.neon_orange }}>optimisée</span>
          </Typography>
          <Typography sx={{ maxWidth: '700px', textAlign: { xs: 'center', md: 'start' }, fontSize: { xs: '1rem', xl: '1.3rem' }, color: PALETTE_COLORS.cream }}>
            Des données précises à portée de main pour agir rapidement. Nos analyses prédictives vous aident à détecter les non-conformités avant qu’elles ne
            deviennent problématiques.
          </Typography>
        </FlexBox>
        <FlexBox
          sx={{ flexDirection: 'column', gap: 3, alignItems: { xs: 'center', md: 'start' }, py: 5, px: 4, minHeight: '250px', bgcolor: PALETTE_COLORS.peach }}
        >
          <Typography
            variant="h3"
            sx={{ textAlign: { xs: 'center', md: 'start' }, fontWeight: 'bold', fontSize: { xs: '1.8rem', xl: '2.5rem', xxl: '2.8rem' } }}
          >
            <span style={{ color: PALETTE_COLORS.black }}>Processus d’analyse</span>
            {'  '}
            <span style={{ color: PALETTE_COLORS.neon_orange }}>simplifié</span>
          </Typography>
          <Typography sx={{ maxWidth: '700px', textAlign: { xs: 'center', md: 'start' }, fontSize: { xs: '1rem', xl: '1.3rem' }, color: PALETTE_COLORS.black }}>
            Des données précises à portée de main pour agir rapidement. Nos analyses prédictives vous aident à détecter les non-conformités avant qu’elles ne
            deviennent problématiques.
          </Typography>
        </FlexBox>
      </Box>
    </FlexBox>
  );
};
