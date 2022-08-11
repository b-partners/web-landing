import React from 'react';

import logo from './assets/img/logo.png';

import { useToggle } from '../../utils/hooks';

export function Header() {
  const [menuActive, toggleMenuActive] = useToggle(false);
  const buttonStyle = { backgroundColor: 'transparent', border: 'none' };

  return (
    <header className="l-header" id="header">
      <nav className="nav bd-container">
        <a href="#home" className="nav__logo">
          <img src={logo} alt="logo" style={{ width: '10.625rem' }} />
        </a>
        <div className={`nav__menu ${menuActive ? 'show-menu' : ''}`} iiidid="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                Accueil
              </a>
            </li>
            <li className="nav__item">
              <a href="#share" className="nav__link">
                Fonctionnalités
              </a>
            </li>
            <li className="nav__item">
              <button type="button" className="nav__link" style={buttonStyle}>
                Se connecter
              </button>
            </li>
            <li className="nav__item" id="ouvrir-compte">
              <button type="button" className="nav__link" style={{ color: 'white', ...buttonStyle }}>
                Ouvrir un compte
              </button>
            </li>
          </ul>
        </div>
        <button className="nav__toggle toggle-wrapper" id="nav-toggle" onClick={toggleMenuActive} type="button">
          <i className="bx bx-grid-alt" />
        </button>
      </nav>
    </header>
  );
}
