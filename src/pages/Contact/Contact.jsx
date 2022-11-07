import React, { useEffect } from 'react';
import * as PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import { Header } from '../Home/components/Header';
import { Footer } from '../Home/components/Footer';
import { Location } from './Location';
import { ContactForm } from './ContactForm';

export function Contact(props) {
    const { onEmailChange, onEmailRegistration, user } = props;
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    return (
        <div className='contact'>
            <Header />
            <Location />
            <ContactForm />
            <Footer onEmailChange={onEmailChange} onEmailRegistration={onEmailRegistration} user={user} />
        </div>
    )
}

Contact.propTypes = {
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