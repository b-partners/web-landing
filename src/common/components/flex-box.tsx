import { FC } from 'react';

import { Box, BoxProps } from '@mui/material';

export const FlexBox: FC<BoxProps> = ({ sx = {}, children, ...props }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', ...sx }} {...props}>
    {children}
  </Box>
);
