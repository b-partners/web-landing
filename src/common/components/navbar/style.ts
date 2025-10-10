import { PALETTE_COLORS } from '@/config/theme';
import { SxProps } from '@mui/material';

export const NAVBAR_SX = (shouldShowDrawer: boolean): SxProps => ({
  gap: {
    md: 2,
    lg: 5,
    xl: 10,
  },
  zIndex: 99999,
  position: 'fixed',
  justifyContent: 'space-between',
  backdropFilter: 'blur(5)',
  top: shouldShowDrawer ? 0 : '10px',
  left: shouldShowDrawer ? 0 : '5%',
  px: '10px',
  width: shouldShowDrawer ? '100%' : '90%',
  bgcolor: shouldShowDrawer ? 'rgba(0,0,0,.4)' : 'white',
  borderRadius: shouldShowDrawer ? 'Opx' : '30px',
  '& img': { cursor: 'pointer', marginLeft: '10px', height: { xs: '22px', lg: '30px' } },
});

export const NAVBAR_CONTAINER_SX: SxProps = {
  px: 5,
  py: '5px',
  width: '100%',
  justifyContent: 'space-between',
  display: 'flex',
  '& .menu-flex-container': {
    justifyContent: 'space-between',
    flexGrow: 1,
    maxWidth: { xs: '100%', md: '60%' },
  },
};

export const LINK_ITEM_SX: SxProps = {
  fontSize: {
    sm: '0.7rem',
    xl: '0.8rem',
  },
  fontWeight: 600,
  transition: 'all linear .3s',
  '&:hover': {
    color: PALETTE_COLORS.neon_orange,
  },
};
