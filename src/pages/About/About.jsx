import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import * as PropTypes from 'prop-types';

import { Footer } from '../Home/components/Footer';
import { Solution } from '../Home/components/Solution';
import { Description } from './Description';
import { History } from './History';

export function About(props) {
  const { onEmailChange, onEmailRegistration, user } = props;
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
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
