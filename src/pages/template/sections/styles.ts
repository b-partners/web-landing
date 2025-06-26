import { PALETTE_COLORS } from '@/config/theme';
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
