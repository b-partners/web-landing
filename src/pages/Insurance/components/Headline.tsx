import { ImageGallery } from '@/common/components';
import { LinkButton } from '@/common/components/buttons';
import { PALETTE_COLORS } from '@/config/theme';
import { Extension, Handshake, Search, Shield, SmartToy, Thunderstorm } from '@mui/icons-material';
import { Box, Card, CardContent, Typography } from '@mui/material';

import Headline1 from '../assets/img/Headlines/1.jpg';
import Headline2 from '../assets/img/Headlines/2.jpg';
import Headline3 from '../assets/img/Headlines/3.jpg';
import Headline4 from '../assets/img/Headlines/4.jpg';
import Headline5 from '../assets/img/Headlines/5.jpg';
import Headline6 from '../assets/img/Headlines/6.jpg';

const insurerBenefits = [
  {
    icon: <Search />,
    text: 'Contrôle automatisé des toitures : pour fiabiliser la complétude des contrats',
  },
  {
    icon: <Shield />,
    text: 'Prévention proactive des sinistres : liés au vieillissement ou à la vétusté',
  },
  {
    icon: <SmartToy />,
    text: 'Connaissance fine des portefeuilles : en amont pour adapter les offres',
  },
  {
    icon: <Handshake />,
    text: 'Support dédié : pour vos équipes sinistres, data ou risques',
  },
  {
    icon: <Extension />,
    text: 'Intégration : dans vos outils métiers ou plateformes de souscription',
  },
  {
    icon: <Thunderstorm />,
    text: 'Détection post-intempéries : rapide des zones à risque',
  },
];

const BirdiaInsurerCard = () => {
  return (
    <Card
      sx={{
        position: 'static',
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
          Ce que BIRDIA apporte aux assureurs :
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'start', flexWrap: 'wrap', gap: 2 }}>
          {insurerBenefits.map((item, index) => {
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
const demoBrevoMeetLink = 'https://meet.brevo.com/birdia/detection-dobjets-par-intelligence-artificielle-bpartners';

export function Headline() {
  return (
    <section style={{ marginTop: 140 }} className="headline" id="description">
      <Box className="bd-container" sx={{ position: 'relative' }}>
        <Typography sx={{ fontSize: { xs: '2rem', lg: '2.4rem' }, color: PALETTE_COLORS.neon_orange, fontWeight: 'bold' }}>
          Prévenir les sinistres, maîtriser les risques : l’IA au service de l’assurance habitation
        </Typography>

        <div className="headline_content">
          <article className="headline_article">
            <h3 className="headline__subtitle" style={{ color: PALETTE_COLORS.forest }}>
              Optimisez la gestion de vos portefeuilles IARD grâce à l’intelligence artificielle appliquée aux images aériennes haute définition.
            </h3>
            <p className="headline__paragraph">
              BIRDIA propose une solution souveraine, conçue en France, pour automatiser l’analyse des toitures à grande échelle. Notre IA identifie les
              anomalies, anticipe les risques climatiques et vous aide à fiabiliser les données de souscription comme de gestion.
            </p>
            <p className="headline__paragraph" style={{ marginTop: 15 }}>
              De la vérification post-sinistre à la prévention proactive, notre technologie transforme les images HD (5 cm de résolution) en rapports
              exploitables pour qualifier l’état des biens assurés, mesurer les surfaces, détecter les matériaux et suivre l’évolution des bâtiments dans le
              temps.
            </p>
          </article>
        </div>
        <BirdiaInsurerCard />
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
          BIRDIA, une IA souveraine, labellisée DeepTech, déjà expérimentée par des acteurs majeurs de l’assurance.
        </Typography>
        <ImageGallery images={IMAGES} />
        <Box sx={{ display: 'flex', justifyContent: 'center', height: '6rem', alignItems: 'center' }}>
          <LinkButton to={demoBrevoMeetLink}>RÉSERVEZ UNE DEMO GRATUITEMENT</LinkButton>
        </Box>
      </Box>
    </section>
  );
}
