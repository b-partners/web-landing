import React from 'react';
import * as PropTypes from 'prop-types';

import {Authenticity} from '../Home/components/Authenticity';
import {Distinction} from '../Home/components/Distinction';
import {Feature} from '../Home/components/Feature';
import {Footer} from '../Home/components/Footer';
import {GetInTouch} from '../Home/components/GetInTouch';
import {Header} from '../Home/components/Header';
import {Offer} from '../Home/components/Offer';
import {Solution} from '../Home/components/Solution';
import {Testimonial} from '../Home/components/Testimonial';
import {Partners} from "../Home/components/Partners";
import {Hero} from "./components/Hero";

export function Craftsman(props) {
    const {setModalOpen, onEmailChange, onEmailRegistration, user} = props;

    return (
        <div>
            <section className='banner__section'>
                <Header />
                <Hero />
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
