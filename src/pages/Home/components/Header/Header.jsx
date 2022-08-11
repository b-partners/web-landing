import React from 'react';

import logo from '../../assets/img/logo.png';
import '../../assets/css/input.css';

import { useToggle } from '../../../../utils/hooks';
import { Modal } from '../../../../common/components/Modal';

export function Header() {
  const [menuActive, toggleMenuActive] = useToggle(false);
  const buttonStyle = { backgroundColor: 'transparent', border: 'none' };
  const [showModal, setToggleShowModal] = useToggle(false);
  const handleChange = () => {
  };

  return (<header className='l-header' id='header'>
      <nav className='nav bd-container'>
        <a href='src/pages/Home/components/Header/Header#home' className='nav__logo'>
          <img src={logo} alt='logo' style={{ width: '10.625rem' }} />
        </a>
        <div className={`nav__menu ${menuActive ? 'show-menu' : ''}`} id='nav-menu'>
          <ul className='nav__list'>
            <li className='nav__item'>
              <a href='src/pages/Home/components/Header/Header#home' className='nav__link active-link'>
                Accueil
              </a>
            </li>
            <li className='nav__item'>
              <a href='src/pages/Home/components/Header/Header#share' className='nav__link'>
                Fonctionnalités
              </a>
            </li>
            <li className='nav__item'>
              <button type='button' className='nav__link' style={buttonStyle} onClick={() => setToggleShowModal(true)}>
                Se connecter
              </button>
            </li>
            <li className='nav__item' id='ouvrir-compte'>
              <button type='button' className='nav__link' style={{ color: 'white', ...buttonStyle }}>
                Ouvrir un compte
              </button>
            </li>
          </ul>
        </div>
        <button className='nav__toggle toggle-wrapper' id='nav-toggle' onClick={toggleMenuActive} type='button'>
          <i className='bx bx-grid-alt' />
        </button>
      </nav>
      <Modal showModal={showModal} setToggleShowModal={setToggleShowModal}>
        <form onSubmit={() => {
        }}>
          <div className='floating-form'>
            <div className='floating-label'>
              <input
                className='floating-input'
                type='text'
                placeholder=''
                name='phone_number'
                onChange={handleChange}
              />
              <span>Téléphone</span>
            </div>
            <button type='submit' className='btn btn-primary'>Se connecter</button>
          </div>
        </form>
      </Modal>
    </header>);
}
