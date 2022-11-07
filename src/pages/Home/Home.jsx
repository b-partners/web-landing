import React, { useEffect, useState } from 'react';
import * as PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import { Header } from './components/Header';
import { Feature } from './components/Feature';
import { Welcome } from './components/Welcome';
import { Offer } from './components/Offer';
import { Authenticity } from './components/Authenticity';
import { Solution } from './components/Solution';
import { Distinction } from './components/Distinction';
import { Testimonial } from './components/Testimonial';
import { GetInTouch } from './components/GetInTouch';
import { Footer } from './components/Footer';

export function Home(props) {
  const { setModalOpen, onEmailChange, onEmailRegistration, user } = props;
  const [backgroundColor, setBackgroundColor] = useState('');
  const { pathname } = useLocation();

  const handleChangeBackground = () => backgroundColor === 'gray' ? setBackgroundColor('') : setBackgroundColor('gray');

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
      <GetInTouch
        onEmailChange={onEmailChange}
        onEmailRegistration={onEmailRegistration}
        user={user}
      />
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
  onEmailChange: PropTypes.bool.isRequired,
  onEmailRegistration: PropTypes.bool.isRequired,
};
