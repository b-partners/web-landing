import { SxProps } from '@mui/material';

export const uploadFileDialogStyle: SxProps = {
  '& .MuiDialogContent-root img': {
    objectFit: 'contain',
    height: '30vh',
  },
  '& .MuiDialogContent-root .image-container': {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    background: '#00000020',
    p: 1,
    borderRadius: 2,
    overflow: 'hidden',
  },
  '& svg': {
    color: '#fff',
  },
  '& .MuiAlert-root': {
    my: 1,
    '& svg': { color: '#000' },
  },
};

export const templateLoginStyle: SxProps = {
  width: '100%',
  height: '95vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '& .MuiCard-root': {
    width: '500px',
  },
  '& .message': {
    mb: 2,
    p: 1,
    bgcolor: '#00000020',
    borderRadius: 1,
  },
};

export const templateMenuStyle: SxProps = {
  width: '100%',
  height: '95vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '& .MuiCard-root': {
    width: '500px',
  },
};
