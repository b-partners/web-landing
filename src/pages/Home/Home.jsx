import React from 'react';
import * as PropTypes from 'prop-types';

import {Authenticity} from './components/Authenticity';
import {Distinction} from './components/Distinction';
import {Feature} from './components/Feature';
import {Footer} from './components/Footer';
import {GetInTouch} from './components/GetInTouch';
import {Header} from './components/Header';
import {Offer} from './components/Offer';
import {Solution} from './components/Solution';
import {Testimonial} from './components/Testimonial';
import {Hero} from './components/Hero';
import {Partners} from "./components/Partners";

export function Home(props) {
    const {setModalOpen, onEmailChange, onEmailRegistration, user} = props;

    const homePageTitle = (
        <h1 className="home__title bd-container">
            L'assistant qui prend de la hauteur
            <br/>
            <span style={{fontWeight: '600'}}>
          et analyse vos toitures <br/> sur image HD.
        </span>
        </h1>
    )

    const homePageTextList = [
        "Analysez les toits de vos prospects automatiquement sur image HD 5 cm.",
        "Gagnez en réactivité avec des devis précis et techniques.",
        "Détectez, mesurez et qualifiez vos chantiers en 1 clic.",
        "Gagnez de nouveaux clients, facturez et encaissez."
    ]

    const homePageAside = (
        <iframe
            title="bpartners_video"
            width="450"
            height="270"
            className="bp-description-video"
            id="bpvideo-2"
            src="https://youtube.com/embed/TqKR1BCru3Y?autoplay=0"
            allowFullScreen
        />
    )

    return (
        <div>
            <section className='banner__section'>
                <Header />
                <Hero
                    heroTitle={homePageTitle}
                    textList={homePageTextList}
                    heroAside={homePageAside}
                />
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

Home.propTypes = {
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
