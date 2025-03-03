import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { RESPONSIVE } from '@/common/components';
import { Box, Typography } from '@mui/material';
import { DistinctionItem } from '@pages/Home/components/Distinction';
import { DISTINCTION_CAROUSEL_ITEMS } from '@pages/Home/components/Distinction/constant';

import { DistinctionStyle as style } from './styles';

export const Distinction = () => {
  return (
    <Box sx={style}>
      <Typography>Nos distinctions</Typography>
      <Box>
        <Carousel
          showDots
          infinite
          autoPlay
          keyBoardControl
          draggable={false}
          swipeable={false}
          autoPlaySpeed={5_000}
          transitionDuration={500}
          responsive={RESPONSIVE}
          removeArrowOnDeviceType={['mobile']}
        >
          {DISTINCTION_CAROUSEL_ITEMS.map((carousel) => (
            <DistinctionItem carousel={carousel} key={carousel.title} />
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};
