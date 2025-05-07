import { FC } from 'react';

import { PALETTE_COLORS } from '@/config/theme';
import { Button as MuiButton, ButtonProps as MuiButtonProps, SxProps } from '@mui/material';
import { Link } from 'react-router-dom';
import { Env } from '@/common/utils/env';

export type ButtonColor = 'pine' | 'neon_orange' | 'white' | 'forest';

export type ButtonProps = Omit<MuiButtonProps, 'color' | 'sx'> & {
  color?: ButtonColor;
  sx?: Partial<SxProps>;
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
      color: PALETTE_COLORS.white,
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

export const CTAButton: FC<ButtonProps> = (props) => {
  // TODO: REFACTOR: MuiButtonProps doesn't infer passed component props
  const propsValues = {
    component: Link,
    to: Env.CTA_URL,
    ...props
  } as ButtonProps

  return (
    <Button {...propsValues}>
      Réserver votre démo
    </Button>
  )
}

export const LoginButton: FC<ButtonProps> = (props) => {
  // TODO: REFACTOR: MuiButtonProps doesn't infer passed component props
  const propsValues = {
    component: Link,
    to: Env.DASHBOARD_LOGIN_URL,
    ...props
  } as ButtonProps

  return (
    <Button {...propsValues}>
      Se connecter
    </Button>
  )
}

export const Button: FC<ButtonProps> = ({ color = 'neon_orange', sx = {}, children, ...props }) => {
  const sxColor = props.variant !== 'contained' ? ({} as Partial<SxProps>) : BUTTON_COLOR[color];

  return (
    <MuiButton variant="contained" sx={{ fontSize: { sm: '0.7rem', lg: '0.8rem', xl: '1rem' }, ...sxColor, ...sx } as SxProps} {...props}>
      {children}
    </MuiButton>
  );
};

