import { BpButton } from '@/common/components/Button';
import { Box, Container, Stack, Typography } from '@mui/material';

import { HeroPageStyle } from './style';

export function Hero() {
  return (
    <Container id="home" sx={HeroPageStyle}>
      <Stack className="hero-text" spacing={2}>
        <Typography className="header-title">Couvreur ou collectivité ?</Typography>
        <Typography className="header-description">
          BPartners vous permet de générer en 1 clic l'analyse des toitures de vos prospects: prise de mesures, détection des revêtements, pentes, usures
        </Typography>
        <Stack direction="row" spacing={4}>
          <BpButton href="/craftsman" sx={{ px: 5, py: 2, fontSize: 16 }}>
            Couvreurs
          </BpButton>
          <BpButton href="/collectivity" variant="outlined" sx={{ px: 5, py: 2, fontSize: 16 }}>
            Collectivités
          </BpButton>
        </Stack>
      </Stack>
      <Box className="hero-images">
        <img src="/assets/images/hero/compiegne.webp" alt="compiegne" />
        <img src="/assets/images/hero/cities.webp" alt="cities" />
        <img src="/assets/images/hero/solar-panels.webp" alt="solar-panels" />
      </Box>
    </Container>
  );
}
