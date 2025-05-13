import { LazyLoadImage } from 'react-lazy-load-image-component';

import { PALETTE_COLORS } from '@/config/theme';
import { Article, BarChart, Build, CheckCircle, Handshake, LocationOn, Plagiarism, Public, RequestQuote, Search, Security } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

import { ShareCard } from '../../../../common/components/ShareCard';
import Laptop from '../../assets/img/laptop.png';

const points = [
  {
    icon: <CheckCircle />,
    text: 'Un assistant expert, pas un remplaçant : Notre IA simule le regard métier d’un couvreur expérimenté',
  },
  {
    icon: <Search />,
    text: 'Pré-diagnostics à distance : Détection des zones à risque, des dégradations, et mesure de la pente et des hauteurs… sans monter sur le toit.',
  },
  {
    icon: <BarChart />,
    text: 'Plus de chantiers, moins de temps perdu : Gagnez en productivité en concentrant vos déplacements uniquement sur les projets prioritaires.',
  },
  {
    icon: <Handshake />,
    text: 'Une nouvelle expérience client : Fournissez à vos prospects un rapport technique clair dès la première prise de contact.',
  },
  {
    icon: <Build />,
    text: 'Réduction de la pénibilité : Moins d’allers-retours sur les toitures, plus de temps passé à réparer.',
  },
  {
    icon: <Security />,
    text: 'Moins de risques de chute : En évitant les diagnostics physiques systématiques, vous sécurisez vos équipes.',
  },
  {
    icon: <Public />,
    text: 'Une innovation française, née de la recherche publique : BIRDIA est une solution deeptech développée pour et avec les artisans.',
  },
];

export default function BirdiaPoints() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', mt: 4, gap: 2 }}>
      {points.map((point, index) => {
        const [title, description] = point.text.split(/ *: */);
        return (
          <Box key={index} sx={{ display: 'flex', alignItems: 'start', gap: 1 }}>
            {point.icon}
            <Typography variant="body1">
              <span style={{ fontWeight: 'bold' }}>{title}:</span> {description}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
}
export function Authenticity() {
  return (
    <>
      <section style={{ paddingBottom: '50px', backgroundColor: PALETTE_COLORS.pine }}>
        <div className="share__container bd-container" style={{ maxWidth: '1900px' }}>
          <ShareCard cardTitle="Saisissez une adresse : " cardText="notre IA localise et extrait l’image de la toiture." icon={<LocationOn />} />
          <ShareCard cardTitle="Lancez l’analyse : " cardText="matériaux, pentes, usure, humidité et plus encore." icon={<Plagiarism />} />
          <ShareCard
            cardText="exploitable pour vos devis ou la préparation des travaux."
            cardTitle="Obtenez un rapport visuel clair : "
            icon={<RequestQuote />}
          />
          <ShareCard cardTitle="Planifiez vos interventions : " cardText="en fonction de la gravité et de l’urgence." icon={<Article />} />
        </div>
      </section>
      <section className="mobile" style={{ backgroundColor: PALETTE_COLORS.white }}>
        <div className="mobile__task bd-container">
          <div className="mobile__task__container">
            <div className="mobile__task__info">
              <h3 style={{ fontWeight: 'bold' }} className="task__info-title">
                Une technologie engagée au service des artisans couvreurs
              </h3>
              <p style={{ textAlign: 'justify' }}>
                Fruit de la recherche française, notre technologie unique reproduit le raisonnement d’un expert couvreur à partir d’images aériennes ultra haute
                définition.
              </p>
              <BirdiaPoints />
            </div>
            <div className="mobile__task__image" style={{ marginTop: '5px' }}>
              <LazyLoadImage src={Laptop} width="358" alt={Laptop} effect="blur" style={{ marginTop: '30px' }} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
