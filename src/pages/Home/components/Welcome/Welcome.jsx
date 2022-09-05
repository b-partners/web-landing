import React from 'react';

import { usePreregistration } from '../../../../utils/hooks';
import { Preregistration } from '../Preregistration';

import artisans from '../../assets/img/artisans.jpg';
import assistant from '../../assets/img/home-overview.png';
import '../../../../common/components/Modal/Modal.css';
import '../../assets/css/forms.css';
import '../../assets/css/spinner.css';

export function Welcome() {
  const {
    preRegistration,
    isLoading,
    showModal,
    toggle,
    handleEmailSubmit,
    handleModalSubmit,
    handleChange
  } = usePreregistration();

  return (<section className='home' id='home'>
    <div className='home__container bd-container bd-grid'>
      <div className='home__data'>
        <h1 className='home__title'>
          L'assistant bancaire qui accélère le développement
          des artisans et indépendants.
        </h1>
        <div className='home__image'>
          <img alt='logo' src={artisans} style={{ width: '16.875rem' }} />
        </div>
        <p className='home__description'>
          Artisans, indépendants français, en plus des services bancaires classiques (obtention d’un RIB
          FR, virement,
          tenu de comptes, cartes), offrez-vous l’assistant de votre réussite grâce à votre mobile.
        </p>
        <button type='button' className='button button--pricing'>
          Lancement de l’application mobile et web le 1er Novembre 2022 – Inscrivez-vous ici pour devenir
          les premiers
          utilisateurs.
        </button>
        <Preregistration
          onSubmitEmail={handleEmailSubmit}
          onChange={handleChange}
          showModal={showModal}
          toggle={toggle}
          onSubmitModal={handleModalSubmit}
          loading={isLoading}
          preRegistration={preRegistration} />
      </div>
      <div className='home__img'>
        <img className='home__img__overview' alt='assistant' src={assistant} style={{ width: '36.25rem' }} />
      </div>
    </div>
  </section>);
}
