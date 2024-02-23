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
import {Hero} from "../Home/components/Hero";

export function Craftsman(props) {
    const {setModalOpen, onEmailChange, onEmailRegistration, user} = props;

    const CraftsmanPageTitle = (
        <h1 className="home__title bd-container">
            L'assistant intelligent qui accélère
            <br/>
            <span style={{fontWeight: '600'}}>
          la croissance des artisans et <br/> indépendants français.
        </span>
        </h1>
    )

    const CraftsmanPageTextList = [
        "Générez de nouveaux clients grâce à notre assistant commercial intelligent.",
        "Encaissez vos clients partout sur mobile ou à distance en 1 clic.",
        "Editez vos devis et factures facilement.",
        "Initiez des virements depuis votre compte pro de paiement FR."
    ]

    const CraftsmanAside = (
        <iframe
            title="bpartners_video"
            width="450"
            height="270"
            className="bp-description-video"
            id="bpvideo-1"
            src="https://www.youtube.com/embed/MTUPp2tqsL0?autoplay=0"
            allowFullScreen
        />
    )

    return (
        <div>
            <section className='banner__section'>
                <Header />
                <Hero
                    heroTitle={CraftsmanPageTitle}
                    textList={CraftsmanPageTextList}
                    heroAside={CraftsmanAside}
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
