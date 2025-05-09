import { GetInTouch } from '@/common/components';
import { CTAButton } from '@/common/components/buttons';
import { IconList } from '@/common/components/IconList';
import { Box, Paper, Typography } from '@mui/material';
import { PALETTE_COLORS } from '@/config/theme';

import './assets/css/spinner.css';
import CashRegisterEuro from './assets/img/cash-register-euro.webp';
import PaidBill from './assets/img/paid-bill.webp';
import QrCode from './assets/img/qr-code-ext.webp';
import VirtualBot from './assets/img/virtual-bot.webp';
import { Authenticity } from './components/Authenticity';
import { Feature } from './components/Feature';
import { Offer } from './components/Offer';
import { Testimonial } from './components/Testimonial';

const textList = [
  'Analysez les toits de vos prospects à distance, sans monter sur une échelle.',
  'Mesurez les surfaces, les pentes et les hauteurs en 1 clic.',
  'Détectez les signes d’usure, d’humidité ou de dégradation.',
  'Gagnez en réactivité avec des rapports précis et fiables.',
];

export const Craftsman = () => {
  return (
    <Box sx={{ marginTop: '15vh' }}>
      <Box component="section" sx={{ height: '55vh', mb: 10, position: "relative", color: "white", paddingBottom: '50px' }} id="home">
        <Box sx={{ display: "flex", justifyContent: "space-between" }} className="bd-container bd-grid">
          <Box>
            <Typography variant="body2" sx={{ fontSize: '1.6rem' }}>
              L'assistant qui prend de la hauteur <span style={{ fontWeight: 'bold' }}>et analyse vos toitures sur image HD.</span>
            </Typography>
            <Typography sx={{ fontSize: '1.2rem', mt: 2 }}>
              Grâce à BIRDIA, analysez automatiquement les toitures de vos prospects à partir d’images aériennes ultra haute définition (5 cm de précision). Notre intelligence artificielle identifie les matériaux, détecte les zones d’usure, mesure les pentes et génère un diagnostic technique complet.
            </Typography>

            <Typography sx={{ mt: 3, fontWeight: "bold" }}>Vos bénéfices en un coup d’œil</Typography>
            <Box style={{ display: "flex" }}>
              <Box className="home__list__col">
                <ul>
                  <IconList imageSrc={VirtualBot} listText={textList[0]} imageStyle={{ filter: 'none' }} />
                  <IconList imageSrc={QrCode} listText={textList[1]} imageStyle={{ filter: 'none' }} />
                </ul>
              </Box>
              <Box className="home__list__col">
                <ul>
                  <IconList imageSrc={PaidBill} listText={textList[2]} imageStyle={{ filter: 'none' }} />
                  {textList[3] && <IconList imageSrc={CashRegisterEuro} listText={textList[3]} imageStyle={{ filter: 'none' }} />}
                </ul>
              </Box>
            </Box>
            <Paper
              elevation={5}
              className="home-registration-form"
              sx={{
                padding: '20px',
                bgcolor: PALETTE_COLORS.pine,
              }}
            >
              <Typography variant="h2" sx={{ fontSize: '1.3rem', fontWeight: 'bold', color: PALETTE_COLORS.cream }}>
                Curieux de voir comment ça fonctionne ?
              </Typography>
              <Typography sx={{ color: PALETTE_COLORS.cream, mt: 1 }}>Réservez votre démo de 15 minutes et testez sans engagement.</Typography>
              <CTAButton sx={{ mt: 2, width: 'fit-content', display: "block" }} />
            </Paper>
          </Box>
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
        </Box>
      </Box>
      <Feature />
      <Authenticity />
      <Offer />
      <Testimonial />
      <GetInTouch />
    </Box>
  );
};
