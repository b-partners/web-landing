import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Env } from '@/common/utils/env';

import './assets/css/navbar.css';
import { LINKS } from './utils/constants';

export const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const showLoginButton = location.pathname !== '/diagnostic-toiture-particulier';

  return (
    <header className="site-header">
      <nav className={`site-nav${open ? ' open' : ''}`} aria-label="Navigation principale">
        <Link className="site-logo" to="/" aria-label="BIRDIA, accueil">
          <img src="/assets/images/logo.webp" alt="BIRDIA" />
        </Link>
        <button
          className="site-burger"
          type="button"
          aria-expanded={open}
          aria-controls="site-nav-menu"
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
        <ul className="site-menu" id="site-nav-menu">
          {LINKS.map(({ to, label }) => {
            const isExternal = to.startsWith('http');
            return (
              <li key={to}>
                {isExternal ? (
                  <a href={to} target="_blank" rel="noreferrer">
                    {label}
                  </a>
                ) : (
                  <Link to={to} className={location.pathname === to ? 'active' : ''}>
                    {label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
        <div className="site-nav-cta">
          {showLoginButton ? (
            <>
              <Link className="site-btn site-btn-dark" to="/contact-demo">
                Réserver votre démo
              </Link>
              <a className="site-link-orange" href={Env.DASHBOARD_LOGIN_URL}>
                Se connecter
              </a>
            </>
          ) : (
            <a className="site-btn site-btn-dark" href={process.env.ROOF_ANALYSE_URL} target="_blank" rel="noreferrer">
              Obtenez votre diagnostic gratuitement
            </a>
          )}
        </div>
      </nav>
    </header>
  );
};
