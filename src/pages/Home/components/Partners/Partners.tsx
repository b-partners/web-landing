import { MultipleCarousel } from '@/common/components';
import { Box } from '@mui/material';

type CarouselItem = {
  src: string;
  alt: string;
};

const CAROUSEL_ITEMS: CarouselItem[] = [
  {
    src: '/assets/images/referencies/accueil/maif.png',
    alt: 'maif',
  },
  {
    src: '/assets/images/referencies/accueil/le-contentin.png',
    alt: 'ca du contentin',
  },
  {
    src: '/assets/images/referencies/accueil/dijon-metropole.png',
    alt: 'Dijon Metropole',
  },
  {
    src: '/assets/images/referencies/accueil/cannes.png',
    alt: 'cannes',
  },
  {
    src: '/assets/images/referencies/accueil/chalon.png',
    alt: 'chalon',
  },
  {
    src: '/assets/images/referencies/accueil/valence-roman-algo.png',
    alt: 'valence-roman-algo',
  },
  {
    src: '/assets/images/referencies/accueil/sicoval.png',
    alt: 'sicoval',
  },
  {
    src: '/assets/images/referencies/accueil/ile-de-re.png',
    alt: 'CC ile de re',
  },
  {
    src: '/assets/images/referencies/accueil/abs.png',
    alt: 'Abaque Abs',
  },
  {
    src: '/assets/images/referencies/accueil/25-ans-europe.png',
    alt: '25-ans-europe',
  },
];

export function Partners() {
  console.log(CAROUSEL_ITEMS.length);
  return (
    <section className="partners">
      <h2 className="section-title">Ils nous font confiance</h2>
      <MultipleCarousel>
        {CAROUSEL_ITEMS.map((carousel) => (
          <Box sx={{ width: '300px', pb: 2, mb: 1 }}>
            <Box
              sx={{
                width: '100%',
                p: { sm: '5px', lg: '10px' },
              }}
            >
              <img {...carousel} style={{ width: '100%' }} />
            </Box>
          </Box>
        ))}
      </MultipleCarousel>
    </section>
  );
}
