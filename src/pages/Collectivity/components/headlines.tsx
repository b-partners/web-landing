import { ImageGallery } from '@/common/components';
import { BpButton } from '@/common/components/Button';
import { PALETTE_COLORS } from '@/config/theme';
import { Apartment, Assessment, CheckCircle, Forest, Layers, Timer } from '@mui/icons-material';
import { Box, Card, CardContent, Typography } from '@mui/material';

import Headline1 from '../assets/img/Headlines/1.jpg';
import Headline2 from '../assets/img/Headlines/2.jpg';
import Headline3 from '../assets/img/Headlines/3.jpg';
import Headline4 from '../assets/img/Headlines/4.jpg';
import Headline5 from '../assets/img/Headlines/5.jpg';
import Headline6 from '../assets/img/Headlines/6.jpg';

const collectivityBenefits = [
  {
    icon: <Assessment />,
    text: 'Valorisation des investissements PCRS : exploitez pleinement vos orthophotos et autres données géographiques, sans coût de relevés terrain',
  },
  {
    icon: <Apartment />,
    text: 'Suivi territorial automatisé : détectez les changements morphologiques, les constructions illégales ou les zones sensibles (îlots de chaleur, végétation à risque…)',
  },
  {
    icon: <CheckCircle />,
    text: 'Conformité réglementaire : appuyez vos politiques ZAN, LOM, et Climat & Résilience sur des indicateurs visuels à jour',
  },
  {
    icon: <Layers />,
    text: 'Intégration simple dans vos outils SIG : nos exports sont compatibles QGIS, Esri, et plateformes open data',
  },
  {
    icon: <Timer />,
    text: 'Réduction des délais d’intervention : identifiez rapidement les priorités sur le terrain',
  },
  {
    icon: <Forest />,
    text: 'Gain de temps et de fiabilité : fiabilisez la donnée en automatisant les relevés de terrain, sans déplacement',
  },
];

const BirdiaCollectivityCard = () => {
  return (
    <Card
      sx={{
        position: { xs: 'static', lg: 'absolute' },
        bottom: '0px',
        transform: 'translateY(30%)',
        bgcolor: PALETTE_COLORS.pine,
        borderRadius: '30px',
        width: '100%',
        my: 5,
        p: 2,
      }}
    >
      <CardContent>
        <Typography variant="h6" sx={{ mb: 3, textAlign: 'center', fontSize: { xs: '1.2rem', md: '1.5rem' }, color: PALETTE_COLORS.cream, fontWeight: 'bold' }}>
          Ce que BIRDIA apporte aux collectivités territoriales :
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'start', flexWrap: 'wrap', gap: 2 }}>
          {collectivityBenefits.map((item, index) => {
            const [title, description] = item.text.split(/ *: */);
            return (
              <Box key={index} sx={{ display: 'flex', alignItems: 'start', gap: 1, maxWidth: { xs: 'unset', md: '400px' } }}>
                <Box sx={{ mt: '3px', '& .MuiSvgIcon-root': { color: PALETTE_COLORS.cream } }}>{item.icon}</Box>
                <Typography variant="body1" sx={{ color: PALETTE_COLORS.cream }}>
                  <span style={{ fontWeight: 'bold' }}>{title}:</span> {description}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </CardContent>
    </Card>
  );
};

const IMAGES = [Headline1, Headline2, Headline3, Headline4, Headline5, Headline6];
const demoBrevoMeetLink = 'https://meet.brevo.com/bpartnerscollectivites/valorisation-images-aeriennes-par-ia-bpartners';

export const Headline = () => {
  return (
    <section style={{ marginTop: 140 }} className="headline" id="description">
      <Box className="bd-container" sx={{ minHeight: { xs: '0x', lg: '80vh', xl: '70vh', xxl: '55vh' }, position: 'relative' }}>
        <Typography sx={{ fontSize: { xs: '2rem', lg: '2.4rem' }, color: PALETTE_COLORS.neon_orange, fontWeight: 'bold' }}>
          Valorisez vos images aériennes pour éclairer la décision publique
        </Typography>

        <div className="headline_content">
          <article className="headline_article">
            <h3 className="headline__subtitle" style={{ color: PALETTE_COLORS.forest }}>
              Optimisez vos données PCRS et maîtrisez votre territoire grâce à l’intelligence artificielle.
            </h3>
            <p className="headline__paragraph">
              BIRDIA transforme vos images aériennes (PCRS, LiDAR, infrarouge…) en données d’aide à la décision concrètes, exploitables immédiatement dans vos
              outils SIG. Notre solution vous permet d’automatiser la détection des objets urbains (voirie, végétation, toitures, signalétique, zones
              imperméabilisées…) et de suivre leur évolution dans le temps pour alimenter vos politiques publiques.
            </p>
            <p className="headline__paragraph" style={{ marginTop: 15 }}>
              Grâce à une IA souveraine et frugale, entraînée sur les spécificités des réglementations françaises (ZAN, LOM, Climat & Résilience), BIRDIA vous
              aide à passer de l’image à l’action, plus vite, plus simplement.
            </p>
          </article>
        </div>
        <BirdiaCollectivityCard />
      </Box>
      <Box sx={{ width: '100%', px: 5, pt: 10, pb: 5, bgcolor: PALETTE_COLORS.pine }}>
        <Typography
          variant="h3"
          sx={{
            color: PALETTE_COLORS.cream,
            fontSize: { xs: '1.3rem', md: '2rem' },
            textAlign: 'center',
            maxWidth: '1000px',
            mx: 'auto',
            fontWeight: 'bold',
            my: 5,
          }}
        >
          Découvrez nos cas d'usage et testez vous-même sur votre territoire
        </Typography>
        <ImageGallery images={IMAGES} />
        <Box sx={{ display: 'flex', justifyContent: 'center', height: '6rem', alignItems: 'center' }}>
          <BpButton href={demoBrevoMeetLink}>RÉSERVEZ UNE DEMO GRATUITEMENT</BpButton>
        </Box>
      </Box>
    </section>
  );
};
