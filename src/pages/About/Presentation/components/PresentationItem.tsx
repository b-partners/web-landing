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

const TEXT_CONTAINE_STYLE = {
  width: '90%',
  maxWidth: { xs: '800px', xl: '1000px' },
  p: { xs: 5, lg: 7 },
  position: 'relative',
  zIndex: 1,
  '&::before': {
    content: '""',
    bgcolor: '#ffffff70',
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    'backdrop-filter': 'blur(10px)',
    zIndex: -1,
  },
};

export type PresentationItemProps = {
  bgimage: string;
  children: ReactNode;
};

export const PresentationItem: FC<PresentationItemProps> = ({ bgimage, children }) => {
  return (
    <Box sx={{ ...PRESENTATION_ITEM_SX, backgroundImage: `url("${bgimage}")` }}>
      <Box sx={TEXT_CONTAINE_STYLE}>{children}</Box>
    </Box>
  );
};
