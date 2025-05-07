import { FlexBox } from '@/common/components';
import { PALETTE_COLORS } from '@/config/theme';
import { Box, Button, Divider, SxProps, Typography, useMediaQuery } from '@mui/material';

const HOME_SX: SxProps = {
  width: '100%',
  minHeight: '100vh',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: 'url(/assets/images/background.webp)',
};

const HOME_CONTAINER_SX: SxProps = {
  p: { xs: 10, xxl: 15 },
  width: '100%',
  bgcolor: 'red',
  minHeight: '100vh',
  alignItems: 'start',
  flexDirection: 'column',
  background: 'linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2))',
};

export const Home = () => {
  const shouldShowDrawer = useMediaQuery('(max-width: 1100px)');

  return (
    <Box component="header" sx={HOME_SX}>
      <FlexBox sx={{ ...HOME_CONTAINER_SX, justifyContent: shouldShowDrawer ? 'center' : 'end' }}>
        <FlexBox sx={{ flexDirection: 'column', alignItems: 'start', gap: 4, maxWidth: { sm: '1000px', xxl: '1200px' } }}>
          <Typography
            variant="h2"
            sx={{
              textAlign: shouldShowDrawer ? 'center' : 'start',
              color: 'white',
              fontWeight: 600,
              fontSize: {
                xs: '3rem',
                sm: '4rem',
                md: '5rem',
                xxl: '7rem',
              },
            }}
          >
            Valorisez ce que vous voyez depuis le ciel
          </Typography>
          <Typography sx={{ textAlign: shouldShowDrawer ? 'center' : 'start', fontSize: { xs: '1rem', md: '1.3rem', xxl: '2rem' }, color: 'white' }}>
            BIRDIA analyse automatiquement les toitures à partir d’images aériennes ultra haute définition (5 cm de précision). Grâce à notre intelligence
            artificielle, couvreurs, assureurs, collectivité peuvent, en un clic, détecter l’état d’usure, les zones à risque ou les signes de dégradation d’une
            toiture, sans avoir à se déplacer.
          </Typography>
        </FlexBox>
        <Divider sx={{ mt: 4, height: '1px', width: '100%', bgcolor: 'white' }} />
        <FlexBox sx={{ justifyContent: shouldShowDrawer ? 'center' : 'space-between', width: '100%', mt: 4 }}>
          <Typography sx={{ color: 'white', fontSize: { sm: '1.2rem', xxl: '2rem' }, display: shouldShowDrawer ? 'none' : 'block' }}>
            Notre technologie permet ainsi de gagner un temps précieux, de fiabiliser les <br /> diagnostics et de faciliter la prise de décision.
          </Typography>
          <FlexBox sx={{ gap: 4 }}>
            <Button sx={{ fontSize: '1rem', bgcolor: PALETTE_COLORS.neon_orange, color: 'white', '&:hover': { bgcolor: PALETTE_COLORS.pine }, px: 2 }}>
              Réservez votre démo
            </Button>
            <Button
              variant="text"
              sx={{
                fontSize: '1rem',
                bgcolor: 'white',
                px: 2,
                color: PALETTE_COLORS.black,
                fontWeight: 'bold',
                '&:hover': { bgcolor: PALETTE_COLORS.pine, color: 'white' },
              }}
            >
              Se connecter
            </Button>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </Box>
  );
};
