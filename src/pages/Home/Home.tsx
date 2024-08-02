import { IconList } from '@/common/components/IconList';
import '@/common/components/Modal/Modal.css';
import { Box, Paper, Typography } from '@mui/material';
import CashRegisterEuro from '@pages/Home/assets/img/cash-register-euro.webp';
import PaidBill from '@pages/Home/assets/img/paid-bill.webp';
import QrCode from '@pages/Home/assets/img/qr-code-ext.webp';
import VirtualBot from '@pages/Home/assets/img/virtual-bot.webp';
import WelcomeSectionBg from '@pages/Home/assets/img/welcome-waves.webp';

import './assets/css/forms.css';
import './assets/css/spinner.css';
import { Authenticity } from './components/Authenticity/index.js';
import { Distinction } from './components/Distinction/index.js';
import { Feature } from './components/Feature/index.js';
import { Footer } from './components/Footer/index.js';
import { GetInTouch } from './components/GetInTouch/index.js';
import { Header } from './components/Header/index.js';
import { Hero } from './components/Hero/index.ts';
import { Offer } from './components/Offer/index.js';
import { Partners } from './components/Partners/index.js';
import { Solution } from './components/Solution/index.js';
import { Testimonial } from './components/Testimonial/index.js';

const textList = [
  'Analysez les toits de vos prospects automatiquement sur image HD 5 cm.',
  'Gagnez en réactivité avec des devis précis et techniques.',
  'Détectez, mesurez et qualifiez vos chantiers en 1 clic.',
  'Gagnez de nouveaux clients, facturez et encaissez.',
];
export function Home() {
  return (
    <Box>
      <Header />
      <Hero />
      <section className="home" id="home">
        <img
          src={WelcomeSectionBg}
          alt="waves-home"
          style={{
            position: 'absolute',
            bottom: '-.18rem',
            zIndex: '0',
          }}
        />
        <Typography variant="body2">
          L'assistant qui prend de la hauteur et analyse vos toitures sur image HD.
        </Typography>
        <div className="home__container bd-container bd-grid">
          <div className="home__data">
            <div className="home__list">
              <div className="home__list__col">
                <ul>
                  <IconList imageSrc={VirtualBot} listText={textList[0]} />
                  <IconList imageSrc={QrCode} listText={textList[1]} />
                </ul>
              </div>
              <div className="home__list__col">
                <ul>
                  <IconList imageSrc={PaidBill} listText={textList[2]} />
                  {textList[3] && <IconList imageSrc={CashRegisterEuro} listText={textList[3]} />}
                </ul>
              </div>
            </div>
            <Paper
              elevation={5}
              className="home-registration-form"
              sx={{
                padding: '20px',
              }}
            >
              <h2 className="registration-title">
                Curieux de voir comment gagner du temps et de nouveaux clients ? <br />
              </h2>
              <span>On vous montre ça en moins de 15 minutes dans une démo personnalisée.</span>
              <div className="home-registration-mail">
                <button className="home-registration-button" type="button">
                  <a
                    href="https://meet.brevo.com/bpartnersartisans/reunion-de-15-minutes"
                    rel="noreferrer"
                    target="_blank"
                  >
                    RÉSERVER MA DÉMO
                  </a>
                </button>
              </div>
            </Paper>
          </div>
          <div className="bpartners__video">
            <iframe
              title="bpartners_video"
              width="450"
              height="270"
              className="bp-description-video"
              id="bpvideo-2"
              src="https://youtube.com/embed/TqKR1BCru3Y?autoplay=0"
              allowFullScreen
            />
            <br />
            <div
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}
            >
              <a href="https://play.google.com/store/apps/details?id=com.bpartnersmobile&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
                <img
                  alt="Disponible sur Google Play"
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/fr_badge_web_generic.png"
                />
              </a>
              <a href="https://apps.apple.com/us/app/bpartners/id1668044300?itsct=apps_box_badge&amp;itscg=30200">
                <img
                  src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/fr-fr?size=250x83&amp;releaseDate=1680220800"
                  alt="Télécharger sur l'App Store"
                  style={{
                    borderRadius: '5px',
                    height: '45px',
                    width: 'auto',
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <Feature />
      <Authenticity />
      <Solution />
      <Distinction />
      <Partners />
      <Offer />
      <Testimonial />
      <GetInTouch />
      <Footer />
    </Box>
  );
}
