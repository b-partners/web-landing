import { GetInTouch } from '@/common/components';
import { IconList } from '@/common/components/IconList';
import { CTAButton } from '@/common/components/buttons';
import { PALETTE_COLORS } from '@/config/theme';
import { Assessment, HomeWork, Straighten, WaterDamage } from '@mui/icons-material';
import { Box, Paper, Typography } from '@mui/material';

import './assets/css/spinner.css';
import { Authenticity } from './components/Authenticity';
import { Feature } from './components/Feature';
import { Offer } from './components/Offer';
import { Testimonial } from './components/Testimonial';

const textList = [
  { title: 'Analysez les toits de vos prospects à distance, sans monter sur une échelle.', icon: <HomeWork /> },
  { title: 'Mesurez les surfaces, les pentes et les hauteurs en 1 clic.', icon: <Straighten /> },
  { title: 'Détectez les signes d’usure, d’humidité ou de dégradation.', icon: <WaterDamage /> },
  { title: 'Gagnez en réactivité avec des rapports précis et fiables.', icon: <Assessment /> },
];

export const Craftsman = () => {
  return (
    <Box sx={{ marginTop: '15vh' }}>
      <Box component="section" sx={{ height: { xs: 'auto', lg: '55vh' }, mb: 10, position: 'relative', color: 'white', paddingBottom: '50px' }} id="home">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }} className="bd-container bd-grid">
          <Box sx={{ flex: 1 }}>
            <Typography variant="body2" sx={{ fontSize: '1.6rem' }}>
              L'assistant qui prend de la hauteur <span style={{ fontWeight: 'bold' }}>et analyse vos toitures sur image HD.</span>
            </Typography>
            <Typography sx={{ fontSize: '1.2rem', mt: 2 }}>
              Grâce à BIRDIA, analysez automatiquement les toitures de vos prospects à partir d’images aériennes ultra haute définition (5 cm de précision).
              Notre intelligence artificielle identifie les matériaux, détecte les zones d’usure, mesure les pentes et génère un diagnostic technique complet.
            </Typography>

            <Typography sx={{ mt: 3, fontWeight: 'bold' }}>Vos bénéfices en un coup d’œil</Typography>
            <Box style={{ display: 'flex' }}>
              <Box
                className="home__list__col"
                sx={{ '& .MuiSvgIcon-root': { mx: 1, mt: '8px', border: '1px solid var(--neon-orange)', p: '5px', fontSize: '2rem', borderRadius: '50%' } }}
              >
                <ul>
                  <IconList icon={textList[0].icon} listText={textList[0].title} imageStyle={{ filter: 'none' }} />
                  <IconList icon={textList[1].icon} listText={textList[1].title} imageStyle={{ filter: 'none' }} />
                </ul>
              </Box>
              <Box
                className="home__list__col"
                sx={{ '& .MuiSvgIcon-root': { mx: 1, mt: '8px', border: '1px solid var(--neon-orange)', p: '5px', fontSize: '2rem', borderRadius: '50%' } }}
              >
                <ul>
                  <IconList icon={textList[2].icon} listText={textList[2].title} imageStyle={{ filter: 'none' }} />
                  {textList[3] && <IconList icon={textList[3].icon} listText={textList[3].title} imageStyle={{ filter: 'none' }} />}
                </ul>
              </Box>
            </Box>
            <Paper
              elevation={5}
              className="home-registration-form"
              sx={{
                width: { xs: '100%', lg: '480px' },
                padding: '20px',
                position: { xs: 'static', lg: 'absolute' },
                bgcolor: PALETTE_COLORS.pine,
              }}
            >
              <Typography variant="h2" sx={{ fontSize: '1.3rem', fontWeight: 'bold', color: PALETTE_COLORS.cream }}>
                Curieux de voir comment ça fonctionne ?
              </Typography>
              <Typography sx={{ color: PALETTE_COLORS.cream, mt: 1 }}>Réservez votre démo de 15 minutes et testez sans engagement.</Typography>
              <CTAButton sx={{ mt: 2, width: 'fit-content', display: 'block' }} />
            </Paper>
          </Box>
          <div style={{ flex: 1, minWidth: '450px' }} className="bpartners__video">
            <iframe
              title="BIRDIA_video"
              width="450px"
              height="270px"
              style={{ marginBlock: 'auto' }}
              id="bpvideo-2"
              src="https://youtube.com/embed/mtcMeFWvNQI?autoplay=0"
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
