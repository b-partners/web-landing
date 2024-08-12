import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import { BpButton } from '@/common/components/Button';
import { Menu as MenuIcon } from '@mui/icons-material';
import { AppBar, IconButton, Stack, Toolbar } from '@mui/material';
import { useDialog } from '@store/dialog';

import { HeaderMenuDialog } from './HeaderMenuDialog';
import { links } from './links';
import { HeaderAppBarStyle } from './styles';

export function Header() {
  const appBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
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
        <Link to="/home">
          <img src="/assets/images/logo.png" alt="logo" />
        </Link>
        <Stack direction="row" spacing={2}>
          {links.map(({ to, label }) => (
            <Link key={to} to={to}>
              <BpButton variant="text">{label}</BpButton>
            </Link>
          ))}
        </Stack>
        <BpButton name="login-button">Se connecter</BpButton>
        <IconButton onClick={openMenuDialog} name="menu-button">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
