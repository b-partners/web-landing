/* eslint-disable no-restricted-globals */
import React, { useState, useCallback } from 'react';
import { Button as Buttons, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

import logo from '../../assets/img/logo.png';
import '../../assets/css/forms.css';

import { useToggle } from '../../../../utils/hooks';
import { Modal } from '../../../../common/components/Modal';
import httpClient from '../../../../config/axios';
import { Button } from '../../../../common/components/Button';

export function Header() {
  const [menuActive, toggleMenuActive] = useToggle(false);
  const [showModal, setToggleShowModal] = useToggle(false);
  const [open, setOpen] = useState(false);
  const [authPayload, setAuthPayload] = useState({
    phoneNumber: '',
    successUrl: process.env.REACT_APP_SUCCESS_URL,
    failureUrl: process.env.REACT_APP_FAILURE_URL,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);
  const [activeLink, setActiveLink] = useState('link-1');

  const handlePhoneNumberChange = event => {
    const { name, value } = event.target;
    setAuthPayload(prevState => ({ ...prevState, [name]: value.replace('+', '%2B') }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    setIsLoading(true);
    try {
      let { data: { redirectionUrl } } = await httpClient.post(`auth`, authPayload);
      redirectionUrl = redirectionUrl.replace('+', '%2B');
      location.assign(redirectionUrl);
    } catch (e) {
      throw new Error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateAccount = async () => {
    if (process.env.REACT_APP_ENV === 'production') {
      setOpen(true);
      return;
    }
    setIsCreatingAccount(true);
    try {
      const { data: url } = await httpClient.post('onboarding', {
        successUrl: process.env.REACT_APP_SUCCESS_URL,
        failureUrl: process.env.REACT_APP_FAILURE_URL,
      });
      location.assign(url);
    } catch (e) {
      throw new Error(e);
    } finally {
      setIsCreatingAccount(false);
    }
  };

  const handleClickLink = (e) =>
    setActiveLink(e.target.name);

  const getActiveClassName = useCallback((link) =>
    activeLink === link ? 'active-link' : ''
    , [activeLink]);

  return (<header className='l-header' id='header'>
    <nav className='nav bd-container'>
      <a href='#home' className='nav__logo'>
        <img src={logo} alt='logo' style={{ width: '10.625rem' }} />
      </a>
      <div className={`nav__menu ${menuActive ? 'show-menu' : ''}`} id='nav-menu'>
        <ul className='nav__list'>
          <li className='nav__item'>
            <a name="link-1" href='#home' onClick={handleClickLink} className={`${getActiveClassName('link-1')}`}>
              Accueil
            </a>
          </li>
          <li className='nav__item'>
            <a name="link-2" href='#share' onClick={handleClickLink} className={`${getActiveClassName('link-2')}`}>
              Fonctionnalités
            </a>
          </li>
          <li className='nav__item' id='ouvrir-compte'>
            <Button type='submit' loading={isCreatingAccount} label='Ouvrir un compte' onClick={handleCreateAccount} />
          </li>
        </ul>
      </div>
      <button className='nav__toggle toggle-wrapper' id='nav-toggle' onClick={toggleMenuActive} type='button'>
        <i className='bx bx-grid-alt' />
      </button>
    </nav>
    <Modal showModal={showModal} toggle={setToggleShowModal}>
      <form onSubmit={handleSubmit}>
        <div className='floating-form'>
          <div className='floating-label'>
            <input
              className='floating-input'
              type='text'
              placeholder=''
              name='phoneNumber'
              onChange={handlePhoneNumberChange}
              required
            />
            <span>Téléphone</span>
          </div>
          <Button type='submit' loading={isLoading} label='Se connecter' />
        </div>
      </form>
    </Modal>
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Envie de vous inscrire ?
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Un peu de patience l'application sera disponible le 1er Novembre 2022.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Buttons onClick={() => setOpen(false)} autoFocus>
          D'accord
        </Buttons>
      </DialogActions>
    </Dialog>
  </header>);
}
