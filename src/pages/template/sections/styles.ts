import { PALETTE_COLORS } from '@/config/theme';
import { PaletteTwoTone } from '@mui/icons-material';
import { SxProps } from '@mui/material';

export const HeroPageStyle: SxProps = {
  minHeight: '100vh',
  width: '100%',
  margin: 0,
  padding: 0,
  bgcolor: PALETTE_COLORS.pine,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '& #container': {
    width: { xs: '100%', sm: '95%', md: '90%', lg: '85%' },
    height: '80%',
    display: 'flex',
    flexWrap: 'wrap',
  },
  '& #container > .content': {
    flexBasis: '50%',
    height: '100%',
  },
  '& .MuiTypography-root': {
    color: 'white',
  },
  '& #container .MuiListItem-root svg': {
    color: 'white',
  },
  '& .image-container': {
    height: '70%',
    overflow: 'hidden',
  },
};

export const FAQStyle: SxProps = {
  minHeight: '100vh',
  width: '100%',
  margin: 0,
  padding: 0,
  bgcolor: PALETTE_COLORS.white,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
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
};
