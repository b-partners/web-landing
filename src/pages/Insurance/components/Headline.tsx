import { ImageGallery } from '@/common/components';
import { BpButton } from '@/common/components/Button';
import { PALETTE_COLORS } from '@/config/theme';
import { Box, Typography } from '@mui/material';

import Headline1 from '../assets/img/Headlines/headline-1.jpg';
import Headline2 from '../assets/img/Headlines/headline-2.jpg';
import Headline3 from '../assets/img/Headlines/headline-3.jpg';
import Headline4 from '../assets/img/Headlines/headline-4.jpg';
import Headline5 from '../assets/img/Headlines/headline-5.jpg';
import Headline6 from '../assets/img/Headlines/headline-6.jpg';
import Headline7 from '../assets/img/Headlines/headline-7.jpg';

const IMAGES = [Headline1, Headline2, Headline3, Headline4, Headline5, Headline6, Headline7];
const demoBrevoMeetLink = 'https://meet.brevo.com/bpartnersartisans/detection-dobjets-par-intelligence-artificielle-bpartners';

export function Headline() {
  return (
    <section style={{ marginTop: 140 }} className="headline bd-container" id="description">
      <Typography sx={{ fontSize: { xs: "2rem", lg: '2.4rem' }, color: PALETTE_COLORS.pine, fontWeight: 'bold' }}>
        Prévenir les sinistres, maîtriser les risques : l’IA au service de l’assurance habitation
      </Typography>

      <div className="headline_content">
        <article className="headline_article">
          <h3 className="headline__subtitle" style={{ color: PALETTE_COLORS.forest }}>
            Optimisez la gestion de vos portefeuilles IARD grâce à l’intelligence artificielle appliquée aux images aériennes haute définition.
          </h3>
          <p className="headline__paragraph">
            BIRDIA propose une solution souveraine, conçue en France, pour automatiser l’analyse des toitures à grande échelle. Notre IA identifie les anomalies, anticipe les risques climatiques et vous aide à fiabiliser les données de souscription comme de gestion.
          </p>
          <p className="headline__paragraph" style={{ marginTop: 15 }}>
            De la vérification post-sinistre à la prévention proactive, notre technologie transforme les images HD (5 cm de résolution) en rapports exploitables pour qualifier l’état des biens assurés, mesurer les surfaces, détecter les matériaux et suivre l’évolution des bâtiments dans le temps.
          </p>
        </article>
      </div>
      <ImageGallery images={IMAGES} />
      <Box sx={{ display: 'flex', justifyContent: 'center', height: '6rem', alignItems: 'center' }}>
        <BpButton href={demoBrevoMeetLink}>RÉSERVEZ UNE DEMO GRATUITEMENT</BpButton>
      </Box>
    </section>
  );
}
