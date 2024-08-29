import { FC, ReactNode } from 'react';

import { Box, SxProps } from '@mui/material';

const PRESENTATION_ITEM_SX: SxProps = {
  width: '100%',
  height: '100vh',
  maxHeight: { xs: '500px', xl: '600px' },
  backgroundPositionY: '50%',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
};

export type PresentationItemProps = {
  bgimage: string;
  children: ReactNode;
};

export const PresentationItem: FC<PresentationItemProps> = ({ bgimage, children }) => {
  return (
    <Box sx={{ ...PRESENTATION_ITEM_SX, backgroundImage: `url("${bgimage}")` }}>
      <Box sx={{ width: '90%', maxWidth: { xs: '800px', xl: '1000px' }, bgcolor: 'white', p: { xs: 5, lg: 7 } }}>{children}</Box>
    </Box>
  );
};
