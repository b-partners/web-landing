import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

import * as PropTypes from 'prop-types';

import {Footer} from '../Home/components/Footer';
import {Header} from '../Home/components/Header';
import {Headline} from "./components/Headline";
import {Solution} from "./components/Solution";
import {UseCase} from "./components/UseCase";

export function Collectivity(props) {
    const {onEmailChange, onEmailRegistration, user} = props;
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div>
            <Header/>
            <Headline/>
            <Solution/>
            <UseCase/>
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
