import { SxProps } from '@mui/material';

export const CTAStyle: SxProps = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '& .MuiButton-root': {
    fontSize: 18,
    paddingInline: 5,
    paddingBlock: 2,
    textTransform: 'uppercase',
  },
};
