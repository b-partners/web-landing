import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import * as PropTypes from 'prop-types';

import { Authenticity } from './components/Authenticity';
import { Distinction } from './components/Distinction';
import { Feature } from './components/Feature';
import { Footer } from './components/Footer';
import { GetInTouch } from './components/GetInTouch';
import { Header } from './components/Header';
import { Offer } from './components/Offer';
import { Solution } from './components/Solution';
import { Testimonial } from './components/Testimonial';
import { Welcome } from './components/Welcome';

export function Home(props) {
  const { setModalOpen, onEmailChange, onEmailRegistration, user } = props;
  const [backgroundColor, setBackgroundColor] = useState('');
  const { pathname } = useLocation();

  const handleChangeBackground = () =>
    backgroundColor === 'gray' ? setBackgroundColor('') : setBackgroundColor('gray');

  useEffect(() => {
    window.scrollTo(0, 0);
    handleChangeBackground();
  }, [pathname]);

  return (
    <div>
      <Header />
      <Welcome onEmailChange={onEmailChange} onEmailRegistration={onEmailRegistration} user={user} />
      <Feature />
      <Authenticity />
      <Solution backgroundColor={backgroundColor} />
      <Distinction />
      <Offer setModalOpen={setModalOpen} />
      <Testimonial />
      <GetInTouch onEmailChange={onEmailChange} onEmailRegistration={onEmailRegistration} user={user} />
      <Footer onEmailChange={onEmailChange} onEmailRegistration={onEmailRegistration} user={user} />
    </div>
  );
}

Home.propTypes = {
  setModalOpen: PropTypes.func.isRequired,
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    society: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
  onEmailChange: PropTypes.func.isRequired,
  onEmailRegistration: PropTypes.func.isRequired,
};
