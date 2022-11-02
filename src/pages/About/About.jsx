import React from 'react';
import * as PropTypes from 'prop-types';
import { Header } from '../Home/components/Header';
import { Description } from './Description';
import { History } from './History';
import { Solution } from '../Home/components/Solution';
import { Footer } from '../Home/components/Footer';

export function About(props) {
    const { onEmailChange, onEmailRegistration, user } = props;
    return (
        <div>
            <Header />
            <Description />
            <History />
            <Solution />
            <Footer onEmailChange={onEmailChange} onEmailRegistration={onEmailRegistration} user={user} />
        </div>
    )
}

About.propTypes = {
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
  