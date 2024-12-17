import { FC } from 'react';

import { MultipleCarousel } from '@/common/components';
import { Box, Typography } from '@mui/material';

const CAROUSEL_ITEMS: CarouselItem[] = [
  {
    src: '/assets/images/referencies/french-assuretech.png',
    alt: 'FRENCH ASSURTECH',
    title: 'FRENCH ASSURTECH',
    description: 'Lauréat Promo #7 - 2024',
  },
  {
    src: '/assets/images/referencies/deep-tech.png',
    alt: 'Labelised DEEPTECH',
    title: 'Labelised DEEPTECH',
    description: 'Promo 2022',
  },
  {
    src: '/assets/images/referencies/imt-starter.png',
    alt: 'IMT Starter',
    title: 'IMT Starter',
    description: 'Lauréat 2023',
  },
  {
    src: '/assets/images/referencies/cea.png',
    alt: 'CEA',
    title: 'CEA',
    description: 'Promo 2022',
  },
  {
    src: '/assets/images/referencies/wilco.png',
    alt: 'WILCO',
    title: 'WILCO',
    description: "Intégration programme d'accélération ProTech 2024",
  },
];

type CarouselItem = { src: string; alt: string; title: string; description: string };
export const DistinctionItem: FC<{ carousel: CarouselItem }> = ({ carousel }) => {
  return (
    <Box sx={{ width: '300px', pb: 2, mb: 2 }}>
      <Box
        sx={{
          width: '100%',
          p: { sm: '5px', lg: '10px' },
        }}
      >
        <img src={carousel.src} alt={carousel.alt} style={{ width: '100%' }} />
      </Box>
      <Typography sx={{ fontWeight: 'bold', fontSize: '1rem', color: 'black', opacity: '.7' }}>{carousel.title}</Typography>
      <Typography sx={{ fontSize: '1rem', color: 'black', opacity: '.7' }}>{carousel.description}</Typography>
    </Box>
  );
};

export function Distinction() {
  return (
    <section className="distinction">
      <h2 className="section-title">Nos distinctions</h2>
      <MultipleCarousel>
        {CAROUSEL_ITEMS.map((carousel) => (
          <DistinctionItem carousel={carousel} key={carousel.title} />
        ))}
      </MultipleCarousel>
    </section>
  );
}
