import { Link, useLocation, useNavigate } from 'react-router-dom';

import { PALETTE_COLORS } from '@/config/theme';
import { Button, useMediaQuery } from '@mui/material';

import { AdCtaButton, CTAButton, LoginButton } from '../buttons';
import { FlexBox } from '../flex-box';
import { NavbarButtonDrawer } from './navbar-button-drawer';
import { LINK_ITEM_SX, NAVBAR_CONTAINER_SX, NAVBAR_SX } from './style';
import { LINKS } from './utils/constants';

export const Navbar = () => {
  const navigate = useNavigate();
  const shouldShowDrawer = useMediaQuery('(max-width: 1100px)');

  return (
    <FlexBox component="nav" sx={NAVBAR_SX(shouldShowDrawer)}>
      <img src={shouldShowDrawer ? '/assets/images/logo-text-white.png' : '/assets/images/logo.webp'} alt="BIRDIA" onClick={() => navigate('/')} />
      {shouldShowDrawer ? <NavbarButtonDrawer /> : <NavbarContent />}
    </FlexBox>
  );
};

const NavbarContent = () => {
  const location = useLocation();

  const showLoginButton = location.pathname !== '/diagnostic-avant-vente';

  return (
    <FlexBox sx={NAVBAR_CONTAINER_SX}>
      <FlexBox className="menu-flex-container" component="ul">
        {LINKS.map(({ to, label }) => (
          <Button
            to={to}
            key={to}
            component={Link}
            sx={{
              ...LINK_ITEM_SX,
              color: location.pathname === to ? PALETTE_COLORS.neon_orange : PALETTE_COLORS.black,
            }}
          >
            {label}
          </Button>
        ))}
      </FlexBox>
      {showLoginButton && (
        <FlexBox sx={showLoginButton && { gap: 5 }}>
          <CTAButton color="forest" />
          <LoginButton variant="text" />
        </FlexBox>
      )}
      {!showLoginButton && <AdCtaButton sx={{ px: 5, transform: 'translateX(12%)' }} color="forest" />}
    </FlexBox>
  );
};
