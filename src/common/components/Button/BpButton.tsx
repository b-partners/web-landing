import { FC } from 'react';

import { Button, CircularProgress } from '@mui/material';

import { BpButtonProps } from './types';

export const BpButton: FC<BpButtonProps> = ({ loading, variant, ...props }) => (
  <Button {...props} disabled={loading} variant={variant || 'contained'} startIcon={loading && <CircularProgress size="25px" />} />
);
