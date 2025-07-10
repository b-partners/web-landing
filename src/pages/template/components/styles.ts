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
};
