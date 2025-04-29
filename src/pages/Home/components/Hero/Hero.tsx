import { useNavigate } from 'react-router-dom';

import { BpButton } from '@/common/components/Button';
import { Box, Container, Stack, Typography } from '@mui/material';

import '../../assets/css/hero.css';
import { HeroPageStyle } from './style';
import { PALETTE_COLORS } from '@/config/theme';

export function Hero() {
  const navigate = useNavigate();
  return (
    <Box sx={HeroPageStyle}>
      <Container id="home">
        <Stack className="hero-text" spacing={2}>
          <Typography className="header-title" style={{color: PALETTE_COLORS.forest}}>Couvreurs, Collectivités ou Assurances ?</Typography>
          <Typography className="header-description" style={{color: PALETTE_COLORS.forest}}>
            BIRDIA est une{' '}
            <span style={{ fontWeight: 'bold' }}>
              solution innovante qui utilise l’intelligence artificielle pour analyser des images aériennes haute définition 5cm de précision
            </span>
            , aidant ainsi les artisans couvreurs, les collectivités territoriales ou encore les assureurs à gagner en efficacité et réactivité. Notre technologie
            permet en <span style={{ fontWeight: 'bold' }}>1 clic détecter et analyser automatiquement</span> des objets d’intérêt, tels que{' '}
            <span style={{ fontWeight: 'bold' }}>
              l'état des toitures et végétations, la non-conformité d’un territoire ou les risques de sinistres facilitant ainsi la prise de décision.
            </span>
          </Typography>
          <Stack direction="column" sx={{ width: '100%', justifyContent: 'center' }}>
            <Stack direction="row" sx={{ justifyContent: 'center' }} spacing={2}>
              <BpButton
                onClick={() => {
                  navigate('/craftsman');
                }}
                sx={{ px: 5, py: 2, fontSize: 16, color: PALETTE_COLORS.white, bgcolor: PALETTE_COLORS.forest, ":hover": { bgcolor: PALETTE_COLORS.neon_orange} }}
              >
                Couvreurs
              </BpButton>
              <BpButton
                onClick={() => {
                  navigate('/collectivity');
                }}
                variant="outlined"
                sx={{ px: 5, py: 2, fontSize: 16, ":hover": { color: PALETTE_COLORS.neon_orange, borderColor: PALETTE_COLORS.neon_orange}, color: PALETTE_COLORS.forest, borderColor: PALETTE_COLORS.forest}}
              >
                Collectivités
              </BpButton>
              <BpButton
                onClick={() => {
                  navigate('/insurance');
                }}
                variant="outlined"
                sx={{ px: 5, py: 2, fontSize: 16, ":hover": { color: PALETTE_COLORS.neon_orange, borderColor: PALETTE_COLORS.neon_orange }, color: PALETTE_COLORS.forest, borderColor: PALETTE_COLORS.forest }}
              >
                Assurances
              </BpButton>
            </Stack>
            <a
              className="home-subscription-btn"
              href="https://meet.brevo.com/bpartnersartisans/reunion-de-15-minutes"
              rel="noreferrer"
              target="_blank"
              style={{
                backgroundColor: PALETTE_COLORS.forest,
                margin: '20px auto',
                padding: '18px 0px',
                width: '90%',
                color: 'white',
                borderRadius: '30px',
                maxWidth: '500px',
                transition: 'all linear .1s',
              }}
            >
              RÉSERVER MA DÉMO
            </a>
          </Stack>
        </Stack>
      </Container>
      <Box sx={{ bgcolor: PALETTE_COLORS.forest, p: 5 }}>
        <Container>
          <Box className="hero-images">
            <img src="/assets/images/hero/compiegne.jpg" alt="compiegne" />
            <img src="/assets/images/hero/cities.jpg" alt="cities" />
            <img src="/assets/images/hero/solar-panels.jpg" alt="solar-panels" />
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
