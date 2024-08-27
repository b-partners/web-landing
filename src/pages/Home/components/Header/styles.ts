import { SxProps } from '@mui/material';

export const HeaderAppBarStyle: SxProps = {
  height: {
    sx: '4rem',
    md: '4.5rem',
  },
  '&.opaque': {
    boxShadow: '1px 7px 10px -5px rgba(0,0,0,0.2)',
    bgcolor: '#ffffff90',
  },
  m: 0,
  transition: 'all 500ms',
  px: 5,
  position: 'fixed',
  top: 0,
  left: 0,
  border: 'none',
  bgcolor: '#ffffff50',
  width: '100vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backdropFilter: 'blur(5px)',
  boxShadow: 'none',
  '& .MuiStack-root': {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: '1',
    display: {
      xs: 'none',
      md: 'flex',
    },
  },
  '& .MuiToolbar-root': {
    display: 'flex',
    justifyContent: 'space-between',
    width: {
      xs: '100vw',
      lg: '96vw',
    },
  },
  '& img': {
    objectFit: 'contain',
    height: 45,
  },
  '& [name="signup-button"]': {
    display: {
      xs: 'none',
      md: 'flex',
    },
  },
  '& [name="login-button"]': {
    display: {
      xs: 'none',
      md: 'flex',
    },
  },
  '& [name="menu-button"]': {
    display: {
      xs: 'flex',
      md: 'none',
    },
  },
};

export const HeaderMenuDialogStyle: SxProps = {
  '& .MuiStack-root': {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  '& .MuiIconButton-root': {
    marginRight: 1,
  },
};
