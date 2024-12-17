import { FC, PropsWithChildren } from 'react';
import Carousel, { ResponsiveType } from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { Box, SxProps } from '@mui/material';

const RESPONSIVE: ResponsiveType = {
  superLargeDesktop: {
    breakpoint: { max: 5000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 800 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MULTIPLE_CAROUSEL_WRAPPER_SX: SxProps = {
  my: 3,
  mx: 'auto',
  width: '100%',
  maxWidth: '1000px',
  '& .react-multi-carousel-item': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  '& .react-multi-carousel-dot button': {
    borderColor: 'gray',
  },
  '& .react-multi-carousel-dot--active button': {
    transition: '.5s all linear',
    bgcolor: 'black',
  },
  '& .react-multiple-carousel__arrow--right': {
    transform: 'translateX(20px)',
  },
  '& .react-multiple-carousel__arrow--left': {
    transform: 'translateX(-20px)',
  },
};

export const MultipleCarousel: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box sx={MULTIPLE_CAROUSEL_WRAPPER_SX}>
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
        {children}
      </Carousel>
    </Box>
  );
};
