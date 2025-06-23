import { Box } from '@mui/material';

import { MultipleCarousel } from '../Carousel';

type CarouselItem = {
  src: string;
  alt: string;
};

const CAROUSEL_ITEMS: CarouselItem[] = [
  {
    src: '/assets/images/references/2_region_ile_de_france.webp',
    alt: 'maif',
  },
  {
    src: '/assets/images/references/8_cotentin.webp',
    alt: 'ca du contentin',
  },
  {
    src: '/assets/images/references/4_dijon_metropole.webp',
    alt: 'Dijon Metropole',
  },
  {
    src: '/assets/images/references/6_cannes.webp',
    alt: 'cannes',
  },
  {
    src: '/assets/images/references/9_chalons.webp',
    alt: 'chalons',
  },
  {
    src: '/assets/images/references/5_toulouse_metropole.webp',
    alt: 'Toulouse Metropole',
  },
  {
    src: '/assets/images/references/7_valence_romans_agglo.webp',
    alt: 'Valence Romans Agglo',
  },
  {
    src: '/assets/images/references/11_sicoval.webp',
    alt: 'Sicoval',
  },
  {
    src: '/assets/images/references/12_cdcidr.webp',
    alt: 'CDCIDR',
  },
  {
    src: '/assets/images/references/13_europe_vue_de_ciel.webp',
    alt: 'Europe',
  },
];

export function Partners() {
  return (
    <section className="partners" style={{ paddingBlock: '50px', margin: 0 }}>
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
