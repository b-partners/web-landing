import { FlexBox } from '@/common/components';
import { CTAButton, LinkButton } from '@/common/components/buttons';
import { Env } from '@/common/utils/env';
import { PALETTE_COLORS } from '@/config/theme';
import { Box, Divider, SxProps, Typography } from '@mui/material';

const SOLUTION_SX: SxProps = {
  p: { xs: 10, xxl: 15 },
};

export const Solution = () => {
  return (
    <Box sx={SOLUTION_SX}>
      <Typography
        variant="h2"
        sx={{ textAlign: { xs: 'center', md: 'start' }, fontWeight: 'bold', color: PALETTE_COLORS.forest, fontSize: { xs: '1.8rem', md: '2rem', xl: '3rem' } }}
      >
        Une solution de terrain,
        <br />
        validée par les professionnels de la toiture
      </Typography>
      <Typography
        sx={{ textAlign: { xs: 'center', md: 'start' }, color: PALETTE_COLORS.forest, mt: 4, fontSize: { xs: '1.2rem', md: '1.4rem', xl: '1.4rem' } }}
      >
        Notre IA reproduit l’expertise métier pour analyser des toitrues à distance
      </Typography>
      <Divider sx={{ height: '1px', width: '100%', bgcolor: PALETTE_COLORS.forest, mt: 4 }} />
      <FlexBox sx={{ mt: 5, alignItems: 'start', gap: 3, flexWrap: 'wrap', width: '100%' }}>
        <Box sx={{ flex: 1, minWidth: '400px' }}>
          <Typography
            variant="h3"
            sx={{
              fontSize: {
                xs: '1.7rem',
                xl: '2rem',
                xxl: '2.4rem',
              },
              textAlign: { xs: 'center', md: 'start' },
              mx: { xs: 'auto', md: '0' },
              fontWeight: 'bold',
              color: PALETTE_COLORS.neon_orange,
            }}
          >
            Rapide
          </Typography>
          <Typography
            sx={{
              textAlign: { xs: 'center', md: 'start' },
              mx: { xs: 'auto', md: '0' },
              maxWidth: '500px',
              color: PALETTE_COLORS.forest,
              mt: 2,
              fontSize: { xs: '1.3rem', md: '1.5rem', xxl: '2rem' },
            }}
          >
            Analyse simplifiée des structures en quelques clics, à partir d’images ultra HD.
          </Typography>
          <Typography
            variant="h3"
            sx={{
              mt: 4,
              fontSize: {
                xs: '1.7rem',
                xl: '2rem',
                xxl: '2.4rem',
              },
              textAlign: { xs: 'center', md: 'start' },
              mx: { xs: 'auto', md: '0' },
              fontWeight: 'bold',
              color: PALETTE_COLORS.neon_orange,
            }}
          >
            Précis
          </Typography>
          <Typography
            sx={{
              textAlign: { xs: 'center', md: 'start' },
              mx: { xs: 'auto', md: '0' },
              maxWidth: '500px',
              color: PALETTE_COLORS.forest,
              mt: 2,
              fontSize: { xs: '1.3rem', md: '1.5rem', xxl: '2rem' },
            }}
          >
            Évaluation techniques fiables, conformes aux réglementations et besoins terrain.
          </Typography>
          <FlexBox sx={{ justifyContent: { xs: 'center', md: 'start' }, mt: 7, gap: 4 }}>
            <CTAButton />
            <LinkButton
              to={Env.DASHBOARD_REGISTRATION_URL}
              variant="outlined"
              sx={{
                color: PALETTE_COLORS.forest,
                borderColor: PALETTE_COLORS.forest,
                '&:hover': {
                  borderColor: PALETTE_COLORS.neon_orange,
                  color: PALETTE_COLORS.neon_orange,
                },
              }}
            >
              Testez sans engagement
            </LinkButton>
          </FlexBox>
        </Box>
        <FlexBox sx={{ minWidth: '400px', flex: 1, justifyContent: 'end' }}>
          <img src={'/assets/images/b-image.png'} alt="BIRDIA" style={{ width: '90%', maxWidth: '550px' }} />
        </FlexBox>
      </FlexBox>
    </Box>
  );
};
