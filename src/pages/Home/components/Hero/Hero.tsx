import { BpButton } from '@/common/components/Button';
import { heroFontSize } from '@/config/bp-theme';
import { Grid, Stack, Typography } from '@mui/material';

export function Hero() {
  return (
    <Grid container spacing={2}>
      <Grid
        height={{ md: '100vh', xs: '60vh' }}
        display="flex"
        justifyContent={{ md: 'flex-end', xs: 'center' }}
        alignItems="center"
        item
        md={6}
        xs={12}
        pr={{ xs: 0, md: 10 }}
      >
        <Stack
          spacing={2}
          textAlign={{ xs: 'center', md: 'start' }}
          alignItems={{ xs: 'center', md: 'flex-start' }}
          width={{ xs: '85%', md: '75%', lg: '65%' }}
        >
          <Typography fontSize={heroFontSize}>Vous êtes un couvreur ou une collectivité ? Bpartners est fait pour vous.</Typography>
          <Typography fontSize={{ lg: '18px', md: '16px', xs: '14' }} mb={4}>
            BPartners vous permet de générer en 1 clic l'analyse des toitures de vos prospects: prise de mesures, détection des revêtements, pentes, usures
          </Typography>
          <Stack direction="row" spacing={4}>
            <BpButton sx={{ px: 5, py: 2, borderRadius: 2, fontSize: 16 }}>Couvreurs</BpButton>
            <BpButton variant="outlined" sx={{ px: 5, py: 2, borderRadius: 2, fontSize: 16 }}>
              Collectivités
            </BpButton>
          </Stack>
        </Stack>
      </Grid>
      <Grid
        display="flex"
        justifyContent={{ md: 'flex-start', xs: 'center' }}
        alignItems="center"
        item
        md={6}
        xs={12}
        pl={{ xs: 0, md: 10 }}
        sx={{
          '& img': {
            objectFit: 'contain',
            width: { lg: '35vw', md: '45vw', xs: '70vw' },
          },
        }}
      >
        <img src="/assets/images/hero-image.png" alt="Compiègne" />
      </Grid>
    </Grid>
  );
}
