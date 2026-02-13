import { Carousel } from '@/common/components';
import { Box, SxProps, Typography } from '@mui/material';

import { PresentationItem } from './components';

const PRESENTATION_SX: SxProps = {
  mb: 5,
  width: '100%',
  bgcolor: 'red',
  '& .carousel-root': { width: '100% !important' },
  '& .control-dots': {
    position: 'block !important',
    bottom: '0 !important',
    zIndex: 999,
    '& *': {
      borderColor: 'white !important',
    },
  },
};

const TYPOGRAPHY_LINK_SX: SxProps = {
  fontSize: '1rem',
  color: '#281A39',
  fontWeight: 'bold',
  mt: 1,
  textDecoration: 'underline',
  '&:hover': { textDecoration: 'underline' },
};

const CONTENT_SX: SxProps = {
  fontSize: '1.5rem',
  width: '90%',
  maxWidth: '600px',
  mx: 'auto',
  color: '#281A39',
  fontWeight: 'bold',
  textAlign: 'center',
};

export const Presentation = () => {
  return (
    <Box sx={PRESENTATION_SX}>
      <Carousel
        arrowSx={{
          top: '200px',
          fontSize: '3rem',
          color: 'white',
        }}
      >
        <PresentationItem bgimage={'/assets/images/about/ia.jpeg'}>
          <Typography sx={CONTENT_SX}>
            "On parle beaucoup d'IA en ce moment...
            <br /> 🤖
            <br />
            BIRDIA une solution pour la valorisation des orthophotographies hautes résolutions ?"
          </Typography>
          <Typography sx={TYPOGRAPHY_LINK_SX}>
            <a
              target="_blank"
              href={`https://www.linkedin.com/posts/gip-recia_on-parle-beaucoup-dia-en-ce-moment-activity-7208769385103015936-8INB?utm_source=share&utm_medium=member_desktop`}
              style={{ color: 'inherit' }}
            >
              GIP RECIA
            </a>
          </Typography>
        </PresentationItem>
        <PresentationItem bgimage={'/assets/images/about/laureat.jpeg'}>
          <Typography sx={CONTENT_SX}>
            "BIRDIA lauréat de la 7ième saison la French Assurtech pour sa technologie de prévention et réactivité à la gestion des sinistres."
          </Typography>
          <Typography sx={{ fontSize: '1rem', fontWeight: 'bold', mt: 2, lineHeight: '2rem' }}>
            <a
              target="_blank"
              href={`https://www.linkedin.com/posts/french-assurtech_startups-appelacandidature-innovation-activity-7212021771934265344-d2ek?utm_source=share&utm_medium=member_desktop`}
              style={{ color: 'inherit', textDecoration: 'underline' }}
            >
              French Assurtech
            </a>{' '}
            - Groupe Covéa | Groupama Centre-Atlantique | Groupe IMA | MAAF Assurances | MAIF | MACIF | Niort TECH | Mutuelle de Poitiers Assurances | Groupe
            P&V | CNP Assurances | Medef Deux-Sèvres
          </Typography>
        </PresentationItem>
        <PresentationItem bgimage={'/assets/images/about/startup.jpeg'}>
          <Typography sx={CONTENT_SX}>
            "Parmi les 20 startups finalistes du Trophée Start-up Numérique 2023, BIRDIA a remporté le premier prix dans la catégorie👏 Transformation numérique
            des entreprises"
          </Typography>
          <Typography sx={TYPOGRAPHY_LINK_SX}>
            <a
              target="_blank"
              href={`https://www.linkedin.com/posts/french-tech-paris-saclay_les-temps-forts-de-la-french-tech-paris-saclay-activity-7193225304364961792-RZ7B?utm_source=share&utm_medium=member_desktop`}
              style={{ color: 'inherit' }}
            >
              Institut Mines Telecom
            </a>
          </Typography>
        </PresentationItem>
        <PresentationItem bgimage={'/assets/images/about/airbus-site.webp'}>
          <Typography sx={CONTENT_SX}>"Monitoring roof health over time with Pléiades Neo</Typography>
          <Typography sx={CONTENT_SX}>BIRDIA: from ultra-HD roof diagnostics to satellite-based change detection"</Typography>
          <Typography sx={TYPOGRAPHY_LINK_SX}>
            <a
              target="_blank"
              href="https://space-solutions.airbus.com/resources/case-studies/pleiades-neo/monitoring-roof-health-over-time-with-pleiades-neo/"
              style={{ color: 'inherit' }}
            >
              Airbus
            </a>
          </Typography>
        </PresentationItem>
      </Carousel>
    </Box>
  );
};
