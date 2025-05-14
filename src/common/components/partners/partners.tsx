import { Box } from '@mui/material';

import { MultipleCarousel } from '../Carousel';

type CarouselItem = {
  src: string;
  alt: string;
};

const CAROUSEL_ITEMS: CarouselItem[] = [
  {
    src: '/assets/images/references/2_region_ile_de_france.png',
    alt: 'maif',
  },
  {
    src: '/assets/images/references/8_cotentin.png',
    alt: 'ca du contentin',
  },
  {
    src: '/assets/images/references/4_dijon_metropole.png',
    alt: 'Dijon Metropole',
  },
  {
    src: '/assets/images/references/6_cannes.png',
    alt: 'cannes',
  },
  {
    src: '/assets/images/references/9_chalons.png',
    alt: 'chalons',
  },
  {
    src: '/assets/images/references/5_toulouse_metropole.png',
    alt: 'Toulouse Metropole',
  },
  {
    src: '/assets/images/references/7_valence_romans_agglo.png',
    alt: 'Valence Romans Agglo',
  },
  {
    src: '/assets/images/references/11_sicoval.png',
    alt: 'Sicoval',
  },
  {
    src: '/assets/images/references/12_cdcidr.png',
    alt: 'CDCIDR',
  },
  {
    src: '/assets/images/references/13_europe_vue_de_ciel.png',
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
