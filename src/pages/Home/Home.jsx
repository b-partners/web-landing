import React from 'react';

import { Box, Button, Stack, Typography } from '@mui/material';
import * as PropTypes from 'prop-types';

import './assets/css/hero.css';
import { Authenticity } from './components/Authenticity';
import { Distinction } from './components/Distinction';
import { Feature } from './components/Feature';
import { Footer } from './components/Footer';
import { GetInTouch } from './components/GetInTouch';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Offer } from './components/Offer';
import { Partners } from './components/Partners';
import { Solution } from './components/Solution';
import { Testimonial } from './components/Testimonial';

export function Home(props) {
  const { setModalOpen, onEmailChange, onEmailRegistration, user } = props;

  const homePageTitle = (
    <h1 className="home__title bd-container">
      L'assistant qui prend de la hauteur
      <br />
      <span style={{ fontWeight: '600' }}>
        et analyse vos toitures <br /> sur image HD.
      </span>
    </h1>
  );

  const homePageTextList = [
    'Analysez les toits de vos prospects automatiquement sur image HD 5 cm.',
    'Gagnez en réactivité avec des devis précis et techniques.',
    'Détectez, mesurez et qualifiez vos chantiers en 1 clic.',
    'Gagnez de nouveaux clients, facturez et encaissez.',
  ];

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
  );

  return (
    <div>
      <Header />
      <Box width="100%" height="100%" display="flex" justifyContent="center" alignItems="center">
        <Stack
          direction="row"
          height="100vh"
          justifyContent="space-around"
          width={{ sm: '100vw', md: '90vw', lg: '75vw' }}
        >
          <Box flexBasis="50%" height="100%" display="flex" justifyContent="center" alignItems="center">
            <Box width="34vw">
              <Typography fontSize="54px" mb={4}>
                Vous êtes un couvreur ou une collectivité ? Bpartners est fait pour vous.
              </Typography>
              <Typography fontSize="18px" mb={4}>
                BPartners vous permet de générer en 1 clic l'analyse des toitures de vos prospects: prise de mesures,
                détection des revêtements, pentes, usures
              </Typography>
              <Stack direction="row" spacing={4}>
                <Button sx={{ px: 5, py: 2, borderRadius: 2, fontSize: 18 }}>Couvreurs</Button>
                <Button sx={{ px: 5, py: 2, borderRadius: 2, fontSize: 18 }}>Collectivités</Button>
              </Stack>
            </Box>
          </Box>
          <Box flexBasis="50%" height="100%" display="flex" justifyContent="center" alignItems="center">
            <Box position="relative" height="60vh" width="60vh">
              <img className="hero-image__bg" src="/assets/images/Compiegne.jpg" alt="Compiègne" />
              <div className="hero-image__tl">
                <img src="/assets/images/cities.png" alt="cities" />
              </div>
              <div className="hero-image__br">
                <img src="/assets/images/solar-panels.png" alt="solar panels" />
              </div>
            </Box>
          </Box>
        </Stack>
      </Box>
      <Hero heroTitle={homePageTitle} textList={homePageTextList} heroAside={homePageAside} />
      <Feature />
      <Authenticity />
      <Solution />
      <Distinction />
      <Partners />
      <Offer setModalOpen={setModalOpen} />
      <Testimonial />
      <GetInTouch onEmailChange={onEmailChange} onEmailRegistration={onEmailRegistration} user={user} />
      <Footer onEmailChange={onEmailChange} onEmailRegistration={onEmailRegistration} user={user} />
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
