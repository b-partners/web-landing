import { PALETTE_COLORS } from '@/config/theme';
import { SxProps } from '@mui/material';

export const directoryStyle: SxProps = {
  minHeight: '100vh',
  background: '#fff',
  position: 'relative',
  '& .hero': {
    minHeight: '40vh',
    width: '100%',
    borderRadius: '0 0 3rem 3rem',
    background: PALETTE_COLORS['pine'],
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    py: 3,
  },
  '& .hero > .MuiBox-root': {
    transform: { md: 'translateY(10%)' },
  },
  '& .hero-left': {
    width: { xs: '100%', md: '45%' },
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    mt: 2,
  },
  '& .hero-left-container .MuiButton-root': {
    mt: 3,
  },
  '& .hero-left-container .title': {
    fontSize: { xs: '1.8rem', sm: '2rem' },
  },
  '& .hero-right': {
    width: { xs: '100%', md: '55%' },
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    textAlign: 'justify',
    mt: { xs: 2, md: 0 },
  },
  '& .hero-right-container': {
    mt: { xs: 2, sm: 0 },
    width: {
      xs: '90%',
      sm: '80%',
    },
    padding: '2rem',
    background: PALETTE_COLORS['cream'],
    borderRadius: '3rem',
  },
  '& .hero-right-container .title': {
    color: PALETTE_COLORS['neon_orange'],
    fontSize: {
      xs: '1.6rem',
      sm: '2rem',
    },
  },
  '& .hero-right-container .button-container': {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    fontSize: '10rem',
  },
  '& .hero .MuiButton-root': {
    fontSize: '1rem',
  },
  '& .content': {
    p: 2,
  },
  '& .content-schedules': {
    p: 3,
    borderRadius: 5,
    background: PALETTE_COLORS['cream'],
  },
  '& .content-schedules > .MuiStack-root': {
    background: PALETTE_COLORS['cream'],
    borderRadius: 3,
    overflow: 'hidden',
  },
  '& .content-schedules .MuiStack-root > .MuiBox-root': {
    display: 'flex',
    justifyContent: 'space-between',
    py: 0.5,
    px: 2,
  },
  '& .content-schedules .MuiStack-root > .bg-neon-light': {
    background: PALETTE_COLORS['neon_orange_light'],
  },
  '& .content-other-informations': {
    mb: 2,
    borderRadius: 5,
    background: PALETTE_COLORS['cream'],
  },
  '& .content-activity': {
    gap: 2,
    display: 'flex',
  },
  '& .content-activity > .MuiBox-root': {
    borderRadius: 5,
    p: 3,
    background: PALETTE_COLORS['cream'],
    flexGrow: 1,
    minWidth: {
      xs: '100%',
      md: '40%',
    },
  },
  '& .content-map-container': {
    mt: 2,
    p: 3,
    borderRadius: 5,
    background: PALETTE_COLORS['cream'],
    minHeight: '41vh',
    position: 'relative',
  },
  '& .content-right': {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  '& .content-right > MuiBox-root': {
    flexGrow: 1,
  },
};

export const directoryListStyles: SxProps = {
  '& .title': {
    mb: 2,
    background: PALETTE_COLORS['forest'],
    '& .MuiTypography-root': {
      color: 'white !important',
      fontSize: '1rem',
      fontWeight: 'bold',
    },
  },
};
