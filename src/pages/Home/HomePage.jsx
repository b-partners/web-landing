import React, { useState } from 'react';
import axios from 'axios';

import artisans from './assets/img/artisans.jpg';
import assistant from './assets/img/home-overview.jpg';
import './assets/css/modal.css';
import './assets/css/input.css';
import './assets/css/spinner.css';
import { useToggle } from '../../utils/hooks';

export function HomePage() {
  const info = {
    email: '',
    lastName: '',
    firstName: '',
    tel: '',
  };

  const [modal, toggleModal] = useToggle(false);
  const [data, setData] = useState(info);
  const [loading, setLoading] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    toggleModal();
  };

  const sendData = () => {
    setLoading('loading');
    axios.post('https://jsonplaceholder.typicode.com/posts', info)
      .then((response) => {
        if (response !== null) {
          setLoading('');
          toggleModal();
        }
      })
      .catch((error) => {
        throw error;
      });
  };

  const checkInput = (e) => {
    if (data.firstName && data.lastName && data.tel !== '') {
      sendData();
      e.preventDefault();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <section className="home" id="home">
      <div className="home__container bd-container bd-grid">
        <div className="home__data">
          <h1 className="home__title">
            L'assistant bancaire qui accélère le développent des artisans et indépendants.
          </h1>
          <div className="home__image">
            <img alt="logo" src={artisans} style={{ width: '16.875rem' }} />
          </div>
          <p className="home__description">
            Artisans, indépendants français, en plus des services bancaires classiques (obtention d’un RIB FR, virement,
            tenu de compte, cartes) offrez-vous l’assistant de votre réussite grâce à votre mobile
          </p>
          <a href="src/pages/Home/Home#" className="button__registration">
            Lancement de l’application mobile et web le 1 Novembre 2022 – Inscrivez-vous ici pour devenir les premiers
            utilisateurs
          </a>
          <div className="home__email">
            <form className="home__email__form" onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Votre email @"
                className="home__email__input"
                onChange={handleChange}
                required
              />
            </form>
          </div>
          <div
            className={`home__modal ${modal ? '' : 'modal-hide'}`}
            onClick={toggleModal}
            onKeyDown={toggleModal}
            role="button"
            tabIndex={0}
          >
            <div
              className="modal__wrapper"
              onClick={(e) => e.stopPropagation()}
              onKeyDown={(e) => e.stopPropagation()}
              role="button"
              tabIndex={0}
            >
              <form onSubmit={checkInput}>
                <div className="floating-form">
                  <div className="floating-label">
                    <input
                      className="floating-input"
                      type="text"
                      placeholder=" "
                      name="lastName"
                      onChange={handleChange}
                      required
                    />
                    <span>Nom</span>
                  </div>
                  <div className="floating-label">
                    <input
                      className="floating-input"
                      type="text"
                      placeholder=" "
                      name="firstName"
                      onChange={handleChange}
                      required
                    />
                    <span>Prénom</span>
                  </div>
                  <div className="floating-label">
                    <input
                      className="floating-input"
                      type="tel"
                      placeholder=" "
                      name="tel"
                      onChange={handleChange}
                      required
                    />
                    <span>Téléphone</span>
                  </div>
                  <button type="button" onClick={checkInput} className="form__validate">
                    {loading === 'loading' ? (
                      <>
                        <i className="fa fa-spinner fa-spin" />
                        Loading
                      </>
                    ) : 'Valider'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="home__img">
          <img className="home__img__overview" alt="assistant" src={assistant} style={{ width: '36.25rem' }} />
        </div>
      </div>
    </section>
  );
}
