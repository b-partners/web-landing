import { SxProps } from '@mui/material';

export const HeroStyle: SxProps = {
  marginBottom: 10,
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
  '& .cta-container': {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  '& .cta-container > .MuiButton-root': {
    fontSize: 25,
    paddingInline: 5,
    paddingBlock: 2,
    textTransform: 'uppercase',
  },
};
