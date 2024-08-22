import { SxProps } from '@mui/material';

export const HeroPageStyle: SxProps = {
  marginBlock: '10vh',
  alignItems: 'center',
  '& .hero-text': {
    textAlign: 'center',
    alignItems: 'center',
    marginBlock: '15vh',
  },
  '& .header-title': {
    fontWeight: 900,
    fontSize: {
      xs: '2rem',
      xl: '4.6rem',
    },
    width: {
      xs: '80vw',
      md: '60vw',
    },
  },
  '& .header-description': {
    fontSize: { lg: '18px', md: '16px', xs: '14' },
    mb: 4,
    width: {
      xs: '90vw',
      md: '80vw',
      lg: '70vw',
    },
  },
  '& .hero-images': {
    position: 'relative',
    width: '100%',
  },
  '& .hero-images > img': {
    objectFit: 'cover',
  },
  '& .hero-images > img:not(:first-child)': {
    position: 'absolute',
    width: {
      xs: '50vw',
      md: '30vw',
    },
    height: {
      xs: '30vh',
      md: '35vh',
    },
  },
  '& .hero-images > img:first-child': {
    minHeight: '70vh',
    borderRadius: '2rem',
  },
  '& .hero-images > img:nth-child(2)': {
    bottom: '9px',
    right: 0,
    borderTop: '4px solid #f5f5f5',
    borderLeft: '4px solid #f5f5f5',
    borderTopLeftRadius: '2rem',
    borderBottomRightRadius: '2rem',
  },
  '& .hero-images > img:nth-child(3)': {
    top: 0,
    left: 0,
    borderBottom: '4px solid #f5f5f5',
    borderRight: '4px solid #f5f5f5',
    borderBottomRightRadius: '2rem',
    borderTopLeftRadius: '2rem',
  },
};
