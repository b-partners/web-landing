import React from 'react';

import logo from './assets/img/logo.png';

import { useToggle } from '../../utils/hooks';

export function Header() {
  const [menuActive, toggleMenuActive] = useToggle(false);

  return (
    <header className="l-header" id="header">
      <nav className="nav bd-container">
        <a href="#home" className="nav__logo">
          <img src={logo} alt="logo" style={{ width: '170px' }} />
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
              <a href="#" className="nav__link">
                Se connecter
              </a>
            </li>
            <li className="nav__item" id="ouvrir-compte">
              <a href="#" className="nav__link" style={{ color: 'white' }}>
                Ouvrir un compte
              </a>
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
