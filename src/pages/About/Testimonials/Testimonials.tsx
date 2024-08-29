import { Carousel } from '@/common/components';
import { Box, Typography } from '@mui/material';

import { TestimonialItem } from './components';

export const Testimonials = () => {
  return (
    <Box sx={{ mb: '50px', '& .carousel-root': { minHeight: '420px' } }}>
      <Carousel
        arrowSx={{
          fontSize: '3rem',
        }}
      >
        <TestimonialItem
          title={{ underlined: 'Les Pépites Tech', simple: 'de Janvier 2023' }}
          redirect={'https://lespepitestech.com/startup-de-la-french-tech/bpartners-artisans-independants'}
          content={`"Issue de la recherche académique française, BPartners a développé une IA reproduisant les étapes d'analyses des toitures d'un couvreur sur des images aériennes haute définition à 5 cm de précision, permettant d'avoir les mesures, le chiffrage et l'urgence de l'intervention."`}
        >
          <Typography sx={{ width: 'fit-content', fontWeight: 'bold', mx: 'auto', textAlign: 'start', fontSize: '1rem', mt: 1, opacity: 0.8 }}>
            - Moins de déplacements pour faire des devis techniques <br />+ Plus de réparation auprès de plus de clients
          </Typography>
        </TestimonialItem>
        <TestimonialItem
          title={{ underlined: "J'aime les startups" }}
          redirect={'https://www.jaimelesstartups.fr/bpartners-artisans-independants/'}
          content={`"La startup BPartners a conçu une application sous forme d'un assistant qui prend de la hauteur et analyse vos toitures sur image HD."`}
        >
          <Typography sx={{ fontSize: '1rem', mt: 1, fontWeight: 'bold' }}>#Startup #B2B #ComputerVision & #TechDernière</Typography>
        </TestimonialItem>
        <TestimonialItem
          title={{ underlined: 'Systematic Paris Region Deeptech Ecosystem' }}
          redirect={'https://systematic-paris-region.org/nouveaux-membres-2023-bienvenue-a-bord-3/'}
          content={`"BPartners fait partie des 10 nouveaux membres ayant rejoint le Pôle en mars 2023, une technologie innovante au service des collectivités, assureurs et artisans couvreurs !"`}
        />
        <TestimonialItem
          title={{ underlined: 'La BRED', simple: 'banque des entreprises' }}
          redirect={'https://www.bred.fr/actualites/les-laureats-du-concours-regional-creation-d-entreprise-ile-de-france'}
          content={`"BPartners est lauréat du Concours Régional Ile-de-France de Création d'Entreprise organisé par la BRED & la Chambre de Commerce de l'Industrie de l'Ile-de-France . Tout ce dont un artisan couvreur a besoin se trouve dans BPartners."`}
        />
      </Carousel>
    </Box>
  );
};
