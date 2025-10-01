import { SxProps } from '@mui/material';

export const navigationPlanStyle: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  '& .MuiStack-root': {
    mt: 13,
    mb: 2,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    '& > *': {
      flexBasis: '30%',
    },
  },
};
