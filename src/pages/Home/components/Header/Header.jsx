import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { AppBar, Stack } from '@mui/material';

import logo from '../../assets/img/logoFullWhite.webp';

const links = [
  { to: '/home', label: 'Accueil' },
  { to: '/craftsman', label: 'Couvreur' },
  { to: '/collectivity', label: 'Collectivité' },
  { to: '/about', label: 'À propos' },
  { to: '/contact', label: 'Contact' },
];

export function Header() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AppBar
      sx={{
        height: '4rem',
        m: 0,
        px: 5,
        position: 'fixed',
        top: 0,
        left: 0,
        border: 'none',
        boxShadow: '5px 5px 10px #00000023',
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Link to="/home">
          <img src={logo} alt="logo" width="170" height="55.01" />
        </Link>
        <Stack direction="row" alignItems="center" spacing={2}>
          {links.map(({ to, label }) => (
            <Link style={{ color: '#fff' }} key={to} to={to}>
              {label}
            </Link>
          ))}
        </Stack>
      </Stack>
    </AppBar>
  );
}
