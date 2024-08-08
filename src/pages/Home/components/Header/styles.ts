import { SxProps } from '@mui/material';

export const HeaderAppBarStyle: SxProps = {
  height: {
    sx: '4rem',
    md: '4.5rem',
  },
  m: 0,
  px: 5,
  position: 'fixed',
  top: 0,
  left: 0,
  border: 'none',
  bgcolor: '#ffffff50',
  boxShadow: `2px 2px 10px #00000000`,
  width: '100vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backdropFilter: 'blur(5px)',
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
      md: '75vw',
    },
  },
  '& img': {
    objectFit: 'contain',
    height: 45,
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
