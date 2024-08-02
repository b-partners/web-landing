import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { BpButton } from '@/common/components/Button';
import { AppBar, Stack } from '@mui/material';

import logo from '../../assets/img/logo.png';

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
        height: {
          sx: '4rem',
          md: '4.5rem',
        },
        m: 0,
        px: 5,
        position: 'fixed',
        top: 0,
        left: 0,
        border: 'none',
        bgcolor: '#ffffff50',
        boxShadow: `2px 2px 10px #00000000`,
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backdropFilter: 'blur(5px)',
      }}
    >
      {/* <Box sx={{ position: 'absolute', height: '100%', width: '100%', bgcolor: '#ffffff90', filter: 'blur(1px)' }}></Box> */}
      <Stack
        direction="row"
        justifyContent="space-between"
        width={{
          xs: '90vw',
          md: '70vw',
          lg: '60vw',
        }}
        alignItems="center"
      >
        <Link to="/home">
          <img src={logo} alt="logo" width="170" height="55.01" />
        </Link>
        <Stack direction="row" alignItems="center" spacing={2}>
          {links.map(({ to, label }) => (
            <Link key={to} to={to}>
              <BpButton variant="text">{label}</BpButton>
            </Link>
          ))}
        </Stack>
        <BpButton>Se connecter</BpButton>
      </Stack>
    </AppBar>
  );
}
