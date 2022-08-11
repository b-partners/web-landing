import React, { useState } from 'react';

import artisans from '../../assets/img/artisans.jpg';
import assistant from '../../assets/img/home-overview.jpg';
import '../../assets/css/modal.css';
import '../../assets/css/input.css';
import '../../assets/css/spinner.css';
import { useToggle } from '../../../../utils/hooks';
import httpClient from '../../../../config/axios';

export function Welcome() {
  const [showModal, setToggleShowModal] = useToggle(false);
  const [isLoading, setIsLoading] = useState(false);
  const [preregistrationPayload, setPreregistrationPayload] = useState({
    first_name: '', last_name: '', society: '', email: '', phone_number: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setToggleShowModal(!showModal);
  };

  const sendData = async (payload) => {
    setIsLoading(true);
    try {
      await httpClient.post('/pre-registration', payload);
    } catch (e) {
      throw new Error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleModalSubmit = async (e) => {
    e.preventDefault();
    await sendData({ ...preregistrationPayload });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPreregistrationPayload((state) => ({ ...state, [name]: value }));
  };

  return (<section className='home' id='home'>
    <div className='home__container bd-container bd-grid'>
      <div className='home__data'>
        <h1 className='home__title'>
          L'assistant bancaire qui accélère le développent des artisans et indépendants.
        </h1>
        <div className='home__image'>
          <img alt='logo' src={artisans} style={{ width: '16.875rem' }} />
        </div>
        <p className='home__description'>
          Artisans, indépendants français, en plus des services bancaires classiques (obtention d’un RIB
          FR, virement,
          tenu de compte, cartes) offrez-vous l’assistant de votre réussite grâce à votre mobile
        </p>
        <a href='/src/pages' className='button__register'>
          Lancement de l’application mobile et web le 1 Novembre 2022 – Inscrivez-vous ici pour devenir
          les premiers
          utilisateurs
        </a>
        <div className='home__email'>
          <form className='home__email__form' onSubmit={handleSubmit}>
            <input
              type='email'
              name='email'
              placeholder='Votre email @'
              className='home__email__input'
              onChange={handleChange}
              required
            />
          </form>
        </div>
        <div
          className={`home__modal ${showModal ? '' : 'modal-hide'}`}
          onClick={setToggleShowModal}
          onKeyDown={setToggleShowModal}
          role='button'
          tabIndex={0}
        >
          <div
            className='modal__wrapper'
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
            role='button'
            tabIndex={0}
          >
            <form onSubmit={handleModalSubmit}>
              <div className='floating-form'>
                <div className='floating-label'>
                  <input
                    className='floating-input'
                    type='text'
                    placeholder=' '
                    name='last_name'
                    onChange={handleChange}
                  />
                  <span>Nom</span>
                </div>
                <div className='floating-label'>
                  <input
                    className='floating-input'
                    type='text'
                    placeholder=' '
                    name='first_name'
                    onChange={handleChange}
                  />
                  <span>Prénom</span>
                </div>
                <div className='floating-label'>
                  <input
                    className='floating-input'
                    type='text'
                    placeholder=''
                    name='phone_number'
                    onChange={handleChange}
                    required
                  />
                  <span>Téléphone</span>
                </div>
                <button type='submit' className='form__validate'>
                  {isLoading ? (<>
                    <i className='fa fa-spinner fa-spin' />
                    Loading
                  </>) : 'Valider'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='home__img'>
        <img className='home__img__overview' alt='assistant' src={assistant} style={{ width: '36.25rem' }} />
      </div>
    </div>
  </section>);
}
