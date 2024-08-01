/* eslint-disable no-restricted-globals */
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

import { AppBar, Stack } from '@mui/material';

import { useScrollPosition, useToggle } from '../../../../utils/hooks';
import '../../assets/css/forms.css';
import logo from '../../assets/img/logoFullWhite.webp';

const links = [
  { to: '/home', label: 'Accueil' },
  { to: '/craftsman', label: 'Couvreur' },
  { to: '/collectivity', label: 'Collectivité' },
  { to: '/about', label: 'À propos' },
  { to: '/contact', label: 'Contact' },
];

export function Header() {
  const [menuActive, toggleMenuActive] = useToggle(false);
  const [currentPath, setCurrentPath] = useState('');
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentPath(pathname);
  }, [pathname]);

  const navigate = useNavigate();

  const scrollPosition = useScrollPosition();

  const makeStyle = () => {
    if (scrollPosition !== 0) {
      return {
        background: 'linear-gradient(rgba(0, 0, 0, .3), rgba(0, 0, 0, .3))',
      };
    }
    if (currentPath === '/craftsman' || currentPath === '/home') {
      return {
        background: 'transparent',
      };
    }
    return {
      background: 'rgba(156, 37, 90, 1)',
    };
  };

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

const Data = () => {
  const [menuActive, toggleMenuActive] = useToggle(false);
  const [currentPath, setCurrentPath] = useState('');
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentPath(pathname);
  }, [pathname]);

  const navigate = useNavigate();

  const scrollPosition = useScrollPosition();

  const makeStyle = () => {
    if (scrollPosition !== 0) {
      return {
        background: 'linear-gradient(rgba(0, 0, 0, .3), rgba(0, 0, 0, .3))',
      };
    }
    if (currentPath === '/craftsman' || currentPath === '/home') {
      return {
        background: 'transparent',
      };
    }
    return {
      background: 'rgba(156, 37, 90, 1)',
    };
  };

  return (
    <header className="l-header" id="header" style={makeStyle()}>
      <nav
        className="nav"
        style={{
          backgroundImage: "url('../../assets/img/VAGUE.jpg')",
        }}
      >
        <button type="button" className="nav__logo" onClick={() => navigate('/home')}>
          <a href="#home">
            <img src={logo} alt="logo" width="170" height="55.01" />
          </a>
        </button>
        <div
          className={`nav__menu ${menuActive ? 'show-menu-container' : ''}`}
          onClick={toggleMenuActive}
          onKeyDown={toggleMenuActive}
          role="button"
          tabIndex={0}
        >
          <div
            className={`nav__menu ${menuActive ? 'show-menu' : ''}`}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
            role="button"
            tabIndex={0}
            id="nav-menu"
          >
            <ul className="nav__list">
              <li>
                <NavLink className="nav-bar-link" to="/home">
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-bar-link" to="/craftsman">
                  Couvreur
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-bar-link" to="/collectivity">
                  Collectivité
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-bar-link" to="/about">
                  À propos
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-bar-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-bar-link">
                <button type="button" className="navigation-button" id="blog-navigation">
                  <a name="link-4" href={process.env.REACT_APP_BLOG_URL}>
                    Blog
                  </a>
                </button>
              </li>
              <li className="nav-bar-link">
                <button type="button" className="navigation-button" id="dashboard-navigation">
                  <a name="link-5" href={process.env.REACT_APP_DASHBOARD_LOGIN_URL}>
                    Se connecter <i className="fa fa-user" style={{ marginLeft: '.6rem' }} />
                  </a>
                </button>
              </li>
              <li className="nav-bar-link">
                <button type="button" className="navigation-registration-button" id="dashboard-registration-navigation">
                  <a name="link-6" href={process.env.REACT_APP_DASHBOARD_REGISTRATION_URL}>
                    Je m'inscris
                  </a>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <button className="nav__toggle toggle-wrapper" id="nav-toggle" onClick={toggleMenuActive} type="button">
          <i className="fa fa-bars" style={{ color: 'white' }} />
        </button>
      </nav>
    </header>
  );
};
