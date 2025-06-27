import { PALETTE_COLORS } from '@/config/theme';
import { SxProps } from '@mui/material';

export const HeroPageStyle: SxProps = {
  minHeight: '70vh',
  width: '100%',
  margin: 0,
  padding: 0,
  bgcolor: PALETTE_COLORS.pine,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '& #container': {
    width: { xs: '90%', sm: '85%', md: '80%', lg: '75%' },
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  '& #container > .content': {
    flexBasis: '50%',
    height: '100%',
  },
  '& .MuiTypography-root': {
    color: 'white',
  },
  '& #container .MuiListItem-root': {
    padding: 0,
    mb: 3,
  },
  '& #container .MuiListItem-root svg': {
    color: 'white',
  },
  '& .image-container': {
    height: '100%',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  '& .image-container img': {
    borderRadius: '10px',
    width: '90%',
    height: '100%',
    overflow: 'hidden',
    aspectRatio: '16 / 9',
    objectFit: 'cover',
  },
  '.title-hero': {
    mb: 4,
    fontWeight: 'bold',
    fontSize: '3.3rem',
  },
};

export const FAQStyle: SxProps = {
  minHeight: '80vh',
  width: '100%',
  margin: 0,
  padding: 0,
  bgcolor: PALETTE_COLORS.white,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  '& #container-faq': {
    width: { xs: '55%', sm: '50%', md: '45%', lg: '40%' },
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
  '& #container-faq > .title-faq': {
    textAlign: 'center',
    mb: '5px',
    color: PALETTE_COLORS.neon_orange,
    fontWeight: 'bold',
  },
  '& #container-faq > .font-accordion': {
    fontSize: '2.5rem',
  },
  '& .accordion': {
    borderRadius: '10px',
    mb: '5px',
    padding: 0,
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.6)',
    border: 'none',
    overflow: 'hidden',
  },
  '& #container-faq .MuiAccordion-root svg': {
    color: PALETTE_COLORS.pine,
    fontSize: 30,
  },
  '#container-change': {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    margin: 6,
  },
  '#container-change .MuiTypography-root': {
    color: PALETTE_COLORS.neon_orange,
    mb: 3,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: '3rem',
  },
};

export const RoofDiadnostics: SxProps = {
  minHeight: '60vh',
  width: '100%',
  margin: 0,
  padding: 0,
  bgcolor: PALETTE_COLORS.pine,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '& #container-diagnostics': {
    width: { xs: '90%', sm: '85%', md: '80%', lg: '75%' },
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  '& #container-diagnostics > .content': {
    flexBasis: '50%',
    height: '100%',
  },
  '& .MuiTypography-root': {
    color: 'white',
    mb: 2,
  },
  '& #container-diagnostics .MuiListItem-root': {
    padding: 0,
    mb: 3,
  },
  '& #container-diagnostics .MuiListItem-root svg': {
    color: 'white',
  },
  '& .image-container': {
    height: '100%',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  '& .image-container img': {
    borderRadius: '10px',
    width: '90%',
    height: '100%',
    overflow: 'hidden',
    aspectRatio: '16 / 9',
    objectFit: 'cover',
  },
  '.title-disagnostics': {
    mb: 4,
    color: PALETTE_COLORS.neon_orange,
    fontWeight: 'bold',
    fontSize: '3rem',
  },
};
