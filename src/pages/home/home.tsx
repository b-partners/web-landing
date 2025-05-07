import { FlexBox } from '@/common/components';
import { CTAButton, LinkButton } from '@/common/components/buttons';
import { Env } from '@/common/utils/env';
import { PALETTE_COLORS } from '@/config/theme';
import { Box, Typography } from '@mui/material';

import { Analayse, Hero, Movies, Solution, Targets } from './components';

export const Home = () => {
  return (
    <>
      <Hero />
      <Targets />
      <Analayse />
      <Solution />
      <Movies />
      <Box sx={{ p: { xs: 10, xxl: 15 } }}>
        <FlexBox
          sx={{
            px: 5,
            py: 10,
            gap: 5,
            flexDirection: 'column',
            width: { xs: '100%', xl: '90%' },
            mx: 'auto',
            bgcolor: PALETTE_COLORS.pine,
            borderRadius: '30px',
          }}
        >
          <Typography
            variant="h2"
            sx={{
              maxWidth: '1300px',
              textAlign: 'center',
              fontWeight: 'bold',
              color: PALETTE_COLORS.white,
              fontSize: { xs: '3rem', md: '3.5rem', xl: '4rem' },
            }}
          >
            Passez à l’analyse intelligente, sans compléxité
          </Typography>
          <FlexBox sx={{ gap: 5 }}>
            <CTAButton />
            <LinkButton color="white" to={Env.DASHBOARD_REGISTRATION_URL}>
              Tester gratuitement
            </LinkButton>
          </FlexBox>
        </FlexBox>
      </Box>
    </>
  );
};
