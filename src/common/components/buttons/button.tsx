import { FC } from 'react';

import { PALETTE_COLORS } from '@/config/theme';
import { Button as MuiButton, ButtonProps as MuiButtonProps, SxProps } from '@mui/material';

export type ButtonColor = 'pine' | 'neon_orange' | 'white' | 'forest';

export type ButtonProps = Omit<MuiButtonProps, 'color'> & {
  color?: ButtonColor;
};

const BUTTON_COLOR: Record<ButtonColor, Partial<SxProps>> = {
  pine: {
    bgcolor: PALETTE_COLORS.pine,
    color: PALETTE_COLORS.white,
    '&:hover': {
      bgcolor: PALETTE_COLORS.neon_orange,
    },
  },
  forest: {
    bgcolor: PALETTE_COLORS.forest,
    color: PALETTE_COLORS.white,
    '&:hover': {
      bgcolor: PALETTE_COLORS.pine,
    },
  },
  white: {
    bgcolor: PALETTE_COLORS.white,
    color: PALETTE_COLORS.black,
    '&:hover': {
      bgcolor: PALETTE_COLORS.pine,
      colro: PALETTE_COLORS.white,
    },
  },
  neon_orange: {
    bgcolor: PALETTE_COLORS.neon_orange,
    color: PALETTE_COLORS.white,
    '&:hover': {
      bgcolor: PALETTE_COLORS.pine,
    },
  },
};

export const Button: FC<ButtonProps> = ({ color = 'neon_orange', sx = {}, children, ...props }) => {
  const sxColor = props.variant !== 'contained' ? ({} as Partial<SxProps>) : BUTTON_COLOR[color];

  return (
    <MuiButton variant="contained" sx={{ fontSize: { sm: '0.7rem', lg: '0.8rem', xl: '1rem' }, ...sxColor, ...sx }} {...props}>
      {children}
    </MuiButton>
  );
};
