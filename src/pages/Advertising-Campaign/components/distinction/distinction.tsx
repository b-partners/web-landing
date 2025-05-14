import { FC } from 'react';

import { MultipleCarousel } from '@/common/components/Carousel';
import { Box, Typography } from '@mui/material';

import { DISTINCTION_CAROUSEL_ITEMS } from './constant';

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
    <section className="distinction" style={{ paddingBlock: '50px', margin: 0 }}>
      <h2 className="section-title">Nos distinctions</h2>
      <MultipleCarousel>
        {DISTINCTION_CAROUSEL_ITEMS.map((carousel) => (
          <DistinctionItem carousel={carousel} key={carousel.title} />
        ))}
      </MultipleCarousel>
    </section>
  );
}
