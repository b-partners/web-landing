import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

import * as PropTypes from 'prop-types';

import {Footer} from '../Home/components/Footer';
import {Header} from '../Home/components/Header';

export function Collectivity(props) {
    const {onEmailChange, onEmailRegistration, user} = props;
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div>
            <Header/>
            <div style={{minHeight: '400px'}}>
                <h1 style={{marginTop: '5rem'}}>Page collectivité</h1>
            </div>
            <Footer onEmailChange={onEmailChange} onEmailRegistration={onEmailRegistration} user={user}/>
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
