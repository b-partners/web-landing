import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import { BpButton } from '@/common/components/Button';
import { PALETTE_COLORS } from '@/config/theme';
import { Menu as MenuIcon } from '@mui/icons-material';
import { AppBar, Box, IconButton, Stack, Toolbar } from '@mui/material';
import { useDialog } from '@store/dialog';

import { ButtonActions } from './ButtonActions';
import { HeaderMenuDialog } from './HeaderMenuDialog';
import { links } from './links';
import { HeaderAppBarStyle } from './styles';

export function Header() {
  const appBarRef = useRef<HTMLDivElement>(null);

  const gotToHome = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    gotToHome();
    window.addEventListener('scroll', () => {
      if (appBarRef.current) {
        const { scrollY } = window;
        if (scrollY < 10) {
          appBarRef.current.classList.remove('opaque');
        } else {
          appBarRef.current.classList.add('opaque');
        }
      }
    });
  }, []);
  const { open: openDialog } = useDialog();

  const openMenuDialog = () => openDialog(<HeaderMenuDialog />);

  return (
    <AppBar ref={appBarRef} sx={HeaderAppBarStyle}>
      <Toolbar>
        <Link to="/home" onClick={gotToHome}>
          <img src="/assets/images/logo.png" alt="logo" style={{ height: '40px' }} />
        </Link>
        <Stack direction="row" spacing={2}>
          {links.map(({ to, label }) => (
            <Link key={to} to={to}>
              <BpButton sx={{ color: PALETTE_COLORS.pine }} variant="text">
                {label}
              </BpButton>
            </Link>
          ))}
        </Stack>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <ButtonActions />
        </Box>
        <IconButton onClick={openMenuDialog} name="menu-button">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
