import { SxProps } from '@mui/material';

export const HeroDescriptionImageStyle: SxProps = {
  position: 'relative',
  minHeight: 400,
  flexGrow: 1,
  borderRadius: '1vw',
  border: '3px solid white',
  flexBasis: {
    sx: '100%',
    md: '50%',
  },
  '& img': {
    borderRadius: '1vw',
    position: 'absolute',
    transition: 'all 1s',
    objectFit: 'cover',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
  },
};

export const HeroDescriptionTextStyle: SxProps = {
  minHeight: 200,
  marginBottom: 10,
  padding: 2,
  flexBasis: {
    sx: '100%',
    md: '50%',
  },
  '& .menu': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 2,
    marginLeft: 5,
  },
  '& .menu > .menu-icon-container': {
    width: 50,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  '& .menu > .menu-icon-container > .MuiSvgIcon-root': {
    color: 'white',
    fontSize: 40,
  },
  '& .free-icon-container': {
    height: 35,
    width: 35,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '3px solid white',
    borderRadius: '50%',
  },
  '& .menu > .MuiTypography-root': {
    fontWeight: 'bold',
  },
  '& .free-icon-container > .MuiTypography-root': {
    fontSize: 13,
    fontWeight: 'bold',
  },
  '& .description-title-container': {
    marginBottom: 5,
  },
  '& .description-title-container > .MuiTypography-root > img': {
    objectFit: 'contain',
    height: 35,
    background: '#fff',
    borderRadius: 5,
    transform: 'translateY(25%)',
  },
  '& .description-title-container > .MuiTypography-root': {
    fontSize: 30,
  },
};

export const CTAStyle: SxProps = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingBlock: 5,
  '& .MuiButton-root': {
    fontSize: 25,
    paddingInline: 5,
    paddingBlock: 2,
    textTransform: 'uppercase',
  },
};
