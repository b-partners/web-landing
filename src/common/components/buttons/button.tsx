import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Env } from '@/common/utils/env';
import { PALETTE_COLORS } from '@/config/theme';
import { Button as MuiButton, ButtonProps as MuiButtonProps, SxProps } from '@mui/material';

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
  return (
    <LinkButton to={Env.CTA_URL} {...props}>
      Réserver votre démo
    </LinkButton>
  );
};

export const LoginButton: FC<ButtonProps> = (props) => {
  return (
    <LinkButton to={Env.DASHBOARD_LOGIN_URL} {...props}>
      Se connecter
    </LinkButton>
  );
};

export const LinkButton: FC<ButtonProps & { to: string }> = ({ children, ...props }) => {
  return (
    <Button component={Link} {...(props as ButtonProps)}>
      {children}
    </Button>
  );
};

export const Button: FC<ButtonProps> = ({ color = 'neon_orange', variant = 'contained', sx = {}, children, ...props }) => {
  const sxColor = variant !== 'contained' ? ({} as Partial<SxProps>) : BUTTON_COLOR[color];

  return (
    <MuiButton variant={variant} sx={{ fontSize: { sm: '0.7rem', lg: '0.8rem', xl: '1rem' }, fontWeight: 'normal', ...sxColor, ...sx } as SxProps} {...props}>
      {children}
    </MuiButton>
  );
};
