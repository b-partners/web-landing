import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import * as PropTypes from 'prop-types';

import { Comparison } from './components/Comparison';
import { Headline } from './components/Headline';
import { Offer } from './components/Offer';
import { Partners } from './components/Partners';
import { Solution } from './components/Solution';
import { UseCase } from './components/UseCase';

export function Collectivity(props) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Headline />
      <Solution />
      <UseCase />
      <Comparison />
      <Offer />
      <Partners />
    </div>
  );
}

Collectivity.propTypes = {
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
