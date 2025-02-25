import { SxProps } from '@mui/material';

export const HeroStyle: SxProps = {
  '& .logo-container': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  '& .logo-container > img': {
    objectFit: 'contain',
    height: '20vh',
  },
  '& .description-container': {
    width: '100%',
    padding: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  '& .description-content': {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: '2vw',
    flexWrap: 'wrap',
    width: {
      xs: '90vw',
      md: '80vw',
      lg: '70vw',
    },
    height: '100%',
    padding: 2,
    bgcolor: (theme) => (theme as any).palette.primary.light,
  },
  '& .MuiTypography-root': {
    color: '#fff',
  },
};

export const FeaturesStyle: SxProps = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  padding: 5,
  '& .card-grid': {
    width: 'fit-content',
    display: 'grid',
    gap: 10,
    placeItems: 'center',
    placeContent: 'center',
    gridTemplateColumns: {
      sx: '90% 90% 90%',
      lg: '25% 25% 25%',
    },
  },
  '& .MuiCard-root': {
    width: '100%',
  },
  '& .MuiCardContent-root': {
    height: 120,
  },
};
