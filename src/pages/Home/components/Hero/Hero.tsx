import { useNavigate } from 'react-router-dom';

import { BpButton } from '@/common/components/Button';
import { Box, Container, Stack, Typography } from '@mui/material';

import { HeroPageStyle } from './style';

export function Hero() {
  const navigate = useNavigate();
  return (
    <Container id="home" sx={HeroPageStyle}>
      <Stack className="hero-text" spacing={2}>
        <Typography className="header-title">Couvreurs, Collectivités ou Assurances ?</Typography>
        <Typography className="header-description">
          BPartners IA est une{' '}
          <span style={{ fontWeight: 'bold' }}>
            solution innovante qui utilise l’intelligence artificielle pour analyser des images aériennes haute définition 5cm de précision
          </span>
          , aidant ainsi les artisans couvreurs, les collectivités territoriales ou encore les assureurs à gagner en efficacité et réactivité. Notre technologie
          permet en <span style={{ fontWeight: 'bold' }}>1 clic détecter et analyser automatiquement</span> des objets d’intérêt, tels que{' '}
          <span style={{ fontWeight: 'bold' }}>
            l'état des toitures et végétations, la non-conformité d’un territoire ou les risques de sinistres facilitant ainsi la prise de décision.
          </span>
        </Typography>
        <Stack direction="row" spacing={2}>
          <BpButton
            onClick={() => {
              navigate('/craftsman');
            }}
            sx={{ px: 5, py: 2, fontSize: 16 }}
          >
            Couvreurs
          </BpButton>
          <BpButton
            onClick={() => {
              navigate('/collectivity');
            }}
            variant="outlined"
            sx={{ px: 5, py: 2, fontSize: 16 }}
          >
            Collectivités
          </BpButton>
          <BpButton
            onClick={() => {
              navigate('/insurance');
            }}
            variant="outlined"
            sx={{ px: 5, py: 2, fontSize: 16 }}
          >
            Assurances
          </BpButton>
        </Stack>
      </Stack>
      <Box className="hero-images">
        <img src="/assets/images/hero/compiegne.jpg" alt="compiegne" />
        <img src="/assets/images/hero/cities.jpg" alt="cities" />
        <img src="/assets/images/hero/solar-panels.jpg" alt="solar-panels" />
      </Box>
    </Container>
  );
}
