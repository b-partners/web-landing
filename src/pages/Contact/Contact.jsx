import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import * as PropTypes from 'prop-types';

import { Footer } from '../Home/components/Footer';
import { ContactForm } from './ContactForm';
import { Location } from './Location';

export function Contact(props) {
  const { onEmailChange, onEmailRegistration, user } = props;
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="contact">
      <Location />
      <ContactForm />
      <Footer onEmailChange={onEmailChange} onEmailRegistration={onEmailRegistration} user={user} />
    </div>
  );
}

Contact.propTypes = {
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
