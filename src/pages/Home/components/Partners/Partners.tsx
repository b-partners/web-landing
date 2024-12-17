import { MultipleCarousel } from '@/common/components';
import { Box } from '@mui/material';

type CarouselItem = {
  src: string;
  alt: string;
};

const CAROUSEL_ITEMS: CarouselItem[] = [
  {
    src: '/assets/images/referencies/maif.png',
    alt: 'maif',
  },
  {
    src: '/assets/images/referencies/le-contentin.png',
    alt: 'ca du contentin',
  },
  {
    src: '/assets/images/referencies/dijon-metropole.png',
    alt: 'Dijon Metropole',
  },
  {
    src: '/assets/images/referencies/cannes.png',
    alt: 'cannes',
  },
  {
    src: '/assets/images/referencies/chalon.png',
    alt: 'chalon',
  },
  {
    src: '/assets/images/referencies/valence-roman-algo.png',
    alt: 'valence-roman-algo',
  },
  {
    src: '/assets/images/referencies/sicoval.png',
    alt: 'sicoval',
  },
  {
    src: '/assets/images/referencies/ile-de-re.png',
    alt: 'CC ile de re',
  },
  {
    src: '/assets/images/referencies/abs.png',
    alt: 'Abaque Abs',
  },
  {
    src: '/assets/images/referencies/25-ans-europe.png',
    alt: '25-ans-europe',
  },
];

export function Partners() {
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
