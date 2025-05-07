import { FlexBox } from '@/common/components';
import { CTAButton, LinkButton } from '@/common/components/buttons';
import { Env } from '@/common/utils/env';
import { PALETTE_COLORS } from '@/config/theme';
import { SxProps, Typography } from '@mui/material';
import { Box } from '@mui/system';

import analyseCarousel from '../assets/images/analyses-carousel/1.jpg';
import { ANALYSES } from '../utils/constant';
import { AnalayseItem } from './analyse-item';

const ANALAYSE_SX: SxProps = {
  alignItems: 'stretch',
  flexWrap: 'wrap',
};

export const Analayse = () => {
  return (
    <FlexBox component="section" sx={ANALAYSE_SX}>
      <Box sx={{ flex: 1 }}>
        {ANALYSES.map((analyse) => (
          <AnalayseItem key={analyse.title} analyse={analyse} />
        ))}
      </Box>
      <FlexBox sx={{ flexDirection: 'column', px: 6, flex: 1, bgcolor: 'white', p: 5, minWidth: '700px' }}>
        <Typography
          variant="h2"
          sx={{
            maxWidth: '1000px',
            mx: 'auto',
            width: '100%',
            textAlign: 'center',
            color: PALETTE_COLORS.neon_orange,
            fontWeight: 'bold',
            fontSize: { xs: '2rem', md: '2.5rem', xl: '3rem', xxl: '4rem' },
          }}
        >
          Analyse automatisée de toitures par intelligence artificielle
        </Typography>
        <Typography sx={{ px: 6, fontSize: { xs: '1rem', xl: '1.3rem' }, textAlign: 'center', mt: 5, maxWidth: '1200px', mx: 'auto' }}>
          Détection, qualification et recommandation à partir d’images aériennes HD. En un clic, obtenez un diagnostic métier précis sans monter sur le toit.
        </Typography>
        <FlexBox sx={{ mt: 3 }}>
          <img src={analyseCarousel} style={{ width: '55%', marginTop: '30px', display: 'block', marginBlock: 'auto', borderRadius: '30px' }} />
        </FlexBox>
        <FlexBox sx={{ my: 5, gap: 4 }}>
          <CTAButton />
          <LinkButton
            variant="outlined"
            sx={{
              borderColor: PALETTE_COLORS.forest,
              color: PALETTE_COLORS.forest,
              '&:hover': { color: PALETTE_COLORS.cream, borderColor: PALETTE_COLORS.pine, bgcolor: PALETTE_COLORS.pine },
            }}
            to={Env.DASHBOARD_REGISTRATION_URL}
          >
            Testez sans engagement
          </LinkButton>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};
