import { heroFontSize } from '@/config/bp-theme';
import { Box, Button, Stack, Typography } from '@mui/material';

export function Hero() {
  return (
    <Box width="100%" height="100%" display="flex" justifyContent="center" alignItems="center">
      <Stack
        direction="row"
        height="100vh"
        justifyContent="space-around"
        width={{ sm: '100vw', md: '90vw', lg: '75vw' }}
      >
        <Box flexBasis="50%" height="100%" display="flex" justifyContent="center" alignItems="center">
          <Box width="34vw">
            <Typography fontSize={heroFontSize} mb={4}>
              Vous êtes un couvreur ou une collectivité ? Bpartners est fait pour vous.
            </Typography>
            <Typography fontSize="18px" mb={4}>
              BPartners vous permet de générer en 1 clic l'analyse des toitures de vos prospects: prise de mesures,
              détection des revêtements, pentes, usures
            </Typography>
            <Stack direction="row" spacing={4}>
              <Button sx={{ px: 5, py: 2, borderRadius: 2, fontSize: 18 }}>Couvreurs</Button>
              <Button sx={{ px: 5, py: 2, borderRadius: 2, fontSize: 18 }}>Collectivités</Button>
            </Stack>
          </Box>
        </Box>
        <Box flexBasis="50%" height="100%" display="flex" justifyContent="center" alignItems="center">
          <Box position="relative" height="60vh" width="60vh">
            <img className="hero-image__bg" src="/assets/images/Compiegne.jpg" alt="Compiègne" />
            <div className="hero-image__tl">
              <img src="/assets/images/cities.png" alt="cities" />
            </div>
            <div className="hero-image__br">
              <img src="/assets/images/solar-panels.png" alt="solar panels" />
            </div>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
