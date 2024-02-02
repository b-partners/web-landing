import React from 'react';
import * as PropTypes from 'prop-types';

import {Authenticity} from './components/Authenticity';
import {Distinction} from './components/Distinction';
import {Feature} from './components/Feature';
import {Footer} from './components/Footer';
import {GetInTouch} from './components/GetInTouch';
import {Header} from '../Home/components/Header';
import {Offer} from './components/Offer';
import {Solution} from './components/Solution';
import {Testimonial} from './components/Testimonial';
import {Welcome} from './components/Welcome';
import {Partners} from "./components/Partners";

export function Craftsman(props) {
    const {setModalOpen, onEmailChange, onEmailRegistration, user} = props;

    return (
        <div>
            <section className='banner__section'>
                <Header />
                <Welcome/>
            </section>
            <Feature/>
            <Authenticity/>
            <Solution/>
            <Distinction/>
            <Partners/>
            <Offer setModalOpen={setModalOpen}/>
            <Testimonial/>
            <GetInTouch onEmailChange={onEmailChange} onEmailRegistration={onEmailRegistration} user={user}/>
            <Footer onEmailChange={onEmailChange} onEmailRegistration={onEmailRegistration} user={user}/>
        </div>
    );
}

Craftsman.propTypes = {
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
