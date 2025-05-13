import { Link, useLocation } from 'react-router-dom';

import { PALETTE_COLORS } from '@/config/theme';
import { SxProps, Typography, useMediaQuery } from '@mui/material';

import { CTAButton, LoginButton } from '../buttons';
import { FlexBox } from '../flex-box';
import { NavbarButtonDrawer } from './navbar-button-drawer';
import { LINKS } from './utils/constants';

const NAVBAR_SX: SxProps = {
  gap: {
    md: 3,
    lg: 5,
    xl: 10,
  },
  zIndex: 99999,
  position: 'fixed',
  justifyContent: 'space-between',
  backdropFilter: 'blur(5)',
};

const NAVBAR_CONTAINER_SX: SxProps = {
  px: 5,
  py: {
    sm: '10px',
    xl: '10px',
  },
  width: '100%',
  justifyContent: 'space-between',
};

const LINK_ITEM_SX: SxProps = {
  fontSize: {
    sm: '0.8rem',
    xl: '1.1rem',
  },
  fontWeight: 600,
  transition: 'all linear .3s',
  '&:hover': {
    color: PALETTE_COLORS.neon_orange,
  },
};

export const Navbar = () => {
  const isLg = useMediaQuery('(min-width:1500px)');
  const shouldShowDrawer = useMediaQuery('(max-width: 1100px)');

  return (
    <FlexBox
      component="nav"
      sx={{
        ...NAVBAR_SX,
        top: shouldShowDrawer ? 0 : '10px',
        left: shouldShowDrawer ? 0 : '5%',
        px: '20px',
        width: shouldShowDrawer ? '100%' : '90%',
        bgcolor: shouldShowDrawer ? 'rgba(0,0,0,.4)' : 'white',
        borderRadius: shouldShowDrawer ? 'Opx' : '30px'
      }}
    >
      <img src="/assets/images/logo.png" alt="BIRDIA" style={{marginLeft: '10px', height: isLg ? '30px' : '22px' }} />
      {shouldShowDrawer ? <NavbarButtonDrawer /> : <NavbarContent />}
    </FlexBox>
  );
};

const NavbarContent = () => {
  const location = useLocation();
  return (
    <FlexBox sx={NAVBAR_CONTAINER_SX}>
      <FlexBox sx={{ gap: { sm: 2, md: 3, xl: 5 } }} component="ul">
        {LINKS.map(({ to, label }) => (
          <Typography
            to={to}
            key={to}
            component={Link}
            sx={{
              ...LINK_ITEM_SX,
              color: location.pathname === to ? PALETTE_COLORS.neon_orange : undefined,
            }}
          >
            {label}
          </Typography>
        ))}
      </FlexBox>
      <FlexBox sx={{ gap: 5 }}>
        <CTAButton color="forest" />
        <LoginButton variant="text" />
      </FlexBox>
    </FlexBox>
  );
};
