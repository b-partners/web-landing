import React, { useEffect } from 'react';
import * as PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import { Header } from '../Home/components/Header';
import { Description } from './Description';
import { History } from './History';
import { Solution } from '../Home/components/Solution';
import { Footer } from '../Home/components/Footer';

export function About(props) {
  const { onEmailChange, onEmailRegistration, user } = props;
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Header />
      <Description />
      <History />
      <Solution />
      <Footer onEmailChange={onEmailChange} onEmailRegistration={onEmailRegistration} user={user} />
    </div>
  );
}

About.propTypes = {
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
