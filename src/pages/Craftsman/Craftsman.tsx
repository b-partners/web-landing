import { IconList } from '@/common/components/IconList';
import { Paper, Typography } from '@mui/material';
import CashRegisterEuro from '@pages/Home/assets/img/cash-register-euro.webp';
import PaidBill from '@pages/Home/assets/img/paid-bill.webp';
import QrCode from '@pages/Home/assets/img/qr-code-ext.webp';
import VirtualBot from '@pages/Home/assets/img/virtual-bot.webp';
import WelcomeSectionBg from '@pages/Home/assets/img/welcome-waves.webp';

import { Footer } from '../Home/components/Footer';
import './assets/css/forms.css';
import './assets/css/spinner.css';
import { Authenticity } from './components/Authenticity';
import { Feature } from './components/Feature';

const textList = [
  'Analysez les toits de vos prospects automatiquement sur image HD 5 cm.',
  'Gagnez en réactivité avec des devis précis et techniques.',
  'Détectez, mesurez et qualifiez vos chantiers en 1 clic.',
  'Gagnez de nouveaux clients, facturez et encaissez.',
];

export const Craftsman = () => {
  return (
    <>
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
        <div className="home__container bd-container bd-grid">
          <div className="home__data">
            <Typography variant="body2" sx={{ fontSize: '1.6rem' }}>
              L'assistant qui prend de la hauteur <span style={{ fontWeight: 'bold' }}>et analyse vos toitures sur image HD.</span>
            </Typography>
            <div className="home__list">
              <div className="home__list__col">
                <ul>
                  <IconList imageSrc={VirtualBot} listText={textList[0]} imageStyle={{ filter: 'none' }} />
                  <IconList imageSrc={QrCode} listText={textList[1]} imageStyle={{ filter: 'none' }} />
                </ul>
              </div>
              <div className="home__list__col">
                <ul>
                  <IconList imageSrc={PaidBill} listText={textList[2]} imageStyle={{ filter: 'none' }} />
                  {textList[3] && <IconList imageSrc={CashRegisterEuro} listText={textList[3]} imageStyle={{ filter: 'none' }} />}
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
                  <a href="https://meet.brevo.com/bpartnersartisans/reunion-de-15-minutes" rel="noreferrer" target="_blank">
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
                <img alt="Disponible sur Google Play" src="https://play.google.com/intl/en_us/badges/static/images/badges/fr_badge_web_generic.png" />
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
      <Footer />
    </>
  );
};
