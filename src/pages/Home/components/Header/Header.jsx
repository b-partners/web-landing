/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';

import logo from '../../assets/img/logo.png';
import '../../assets/css/forms.css';

import { useToggle } from '../../../../utils/hooks';
import { Modal } from '../../../../common/components/Modal';
import httpClient from '../../../../config/axios';
import { Button } from '../../../../common/components/Button';

export function Header() {
  const [menuActive, toggleMenuActive] = useToggle(false);
  const buttonStyle = { backgroundColor: 'transparent', border: 'none' };
  const [showModal, setToggleShowModal] = useToggle(false);
  const [preventAccountCreationModal, togglePreventAccountCreationModal] = useToggle(false);
  const [authPayload, setAuthPayload] = useState({ phoneNumber: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);

  const handlePhoneNumberChange = event => {
    const { name, value } = event.target;
    setAuthPayload(prevState => ({ ...prevState, [name]: value.replace('+', '%2B') }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const { data: url } = await httpClient.post(`auth`, authPayload);
      location.assign(url);
    } catch (e) {
      throw new Error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateAccount = async () => {
    if (process.env.REACT_APP_ENV === 'production') {
        togglePreventAccountCreationModal();
        return;
    }
    setIsCreatingAccount(true);
    try {
      const { data: url } = await httpClient.get('onboarding', { params: { type: 'COMPANY' } });
      location.assign(url);
    } catch (e) {
      throw new Error(e);
    } finally {
      setIsCreatingAccount(false);
    }
  };
  return (<header className='l-header' id='header'>
    <nav className='nav bd-container'>
      <a href='#home' className='nav__logo'>
        <img src={logo} alt='logo' style={{ width: '10.625rem' }} />
      </a>
      <div className={`nav__menu ${menuActive ? 'show-menu' : ''}`} id='nav-menu'>
        <ul className='nav__list'>
          <li className='nav__item'>
            <a href='#home' className='nav__link active-link'>
              Accueil
            </a>
          </li>
          <li className='nav__item'>
            <a href='#share' className='nav__link'>
              Fonctionnalités
            </a>
          </li>
          <li className='nav__item'>
            <button type='button' className='nav__link' style={buttonStyle} onClick={() => setToggleShowModal(true)}>
              Se connecter
            </button>
          </li>
          <li className='nav__item' id='ouvrir-compte'>
            <Button type='submit' loading={isCreatingAccount} label='Ouvrir un compte' onClick={handleCreateAccount}/>
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
    <Modal showModal={preventAccountCreationModal} toggle={togglePreventAccountCreationModal}>
      <p>Un peu de patience l'application sera disponible le 01 Novembre 2022.</p>
    </Modal>
  </header>);
}
