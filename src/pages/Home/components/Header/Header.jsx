/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { Button as Buttons, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

import { Button } from '../../../../common/components/Button';
import { useToggle } from '../../../../utils/hooks';
import '../../assets/css/forms.css';
import logo from '../../assets/img/logo.png';

export function Header() {
  const [menuActive, toggleMenuActive] = useToggle(false);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <header className="l-header" id="header">
      <nav className="nav bd-container">
        <button type="button" className="nav__logo" onClick={() => navigate('/home')}>
          <a href="#home">
            <img src={logo} alt="logo" style={{ width: '10.625rem' }} />
          </a>
        </button>
        <div className={`nav__menu ${menuActive ? 'show-menu' : ''}`} id="nav-menu">
          <ul className="nav__list">
            <li>
              <NavLink className="nav-bar-link" to="/home">
                <a href="#home">Accueil</a>
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
            <li style={{ marginLeft: '.7rem' }}>
              <a name="link-4" href="https://dashboard-dev.bpartners.app/login">
                Se connecter
                <i className="fa fa-user" style={{ marginLeft: '.6rem' }} />
              </a>
            </li>
            <li className="nav__item" id="ouvrir-compte">
              <Button type="submit" label="Je m'inscris" onClick={() => setOpen(true)} />
            </li>
          </ul>
        </div>
        <button className="nav__toggle toggle-wrapper" id="nav-toggle" onClick={toggleMenuActive} type="button">
          <i className="bx bx-grid-alt" />
        </button>
      </nav>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Envie de vous inscrire ?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Un peu de patience l'application sera disponible le 12 Décembre 2022.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Buttons onClick={() => setOpen(false)} autoFocus>
            D'accord
          </Buttons>
        </DialogActions>
      </Dialog>
    </header>
  );
}
