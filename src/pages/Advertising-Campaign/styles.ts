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

export const DetectionTypeStyle: SxProps = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '& .content': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    border: (theme) => `2px solid ${(theme as any).palette.primary.light}`,
    marginBlock: 5,
    borderRadius: 5,
    paddingBlock: 5,
    width: {
      xs: '90%',
      lg: '60%',
    },
  },
  '& .content > .MuiTypography-root': {
    fontSize: 30,
    fontWeight: 'bold',
    marginBlock: 5,
    textAlign: 'center',
  },
  '& .MuiAlert-root': {
    width: '70%',
    m: 1,
    bgcolor: '#004aad',
  },
  '& .MuiAlert-message': {
    color: '#fff',
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold',
  },
};

export const RatingStyle: SxProps = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  '& > .MuiTypography-root': {
    fontSize: 30,
    fontWeight: 'bold',
    marginBlock: 5,
    textAlign: 'center',
  },
  '& .rating-items-list': {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  '& .MuiCard-root': {
    m: 2,
    width: {
      xs: '90%',
      md: '70%',
      lg: '40%',
    },
  },
  '& .MuiCardContent-root': {
    minHeight: 200,
  },
};
