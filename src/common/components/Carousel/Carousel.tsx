import { FC } from 'react';
import { Carousel as ReactResponsiveCarousel, CarouselProps as ReactResponsiveCarouselProps } from 'react-responsive-carousel';

import { BP_COLOR } from '@/config';
import { ArrowBackIos, ArrowForwardIos, Circle, CircleOutlined } from '@mui/icons-material';
import { IconButton, SxProps, useMediaQuery } from '@mui/material';

import './style.css';

export type CarouselProps = ReactResponsiveCarouselProps & {
  arrowSx?: SxProps;
};

export const Carousel: FC<Partial<CarouselProps>> = ({ children, arrowSx = {}, ...carouselProps }) => {
  const isLarge = useMediaQuery('(min-width:800px)');

  return (
    <ReactResponsiveCarousel
      autoPlay
      infiniteLoop
      showIndicators
      interval={5000}
      transitionTime={1000}
      animationHandler="fade"
      showThumbs={false}
      showStatus={false}
      showArrows={isLarge}
      renderArrowNext={(goToNextItem) => (
        <IconButton
          size="large"
          sx={{
            display: isLarge ? undefined : 'none',
            '&:hover': { color: BP_COLOR['5'] },
            fontSize: '2rem',
            position: 'absolute',
            zIndex: 10,
            right: '0',
            top: '20%',
            ...arrowSx,
          }}
          onClick={goToNextItem}
        >
          <ArrowForwardIos fontSize="inherit" />
        </IconButton>
      )}
      renderArrowPrev={(goToPrevItem) => (
        <IconButton
          size="large"
          sx={{
            display: isLarge ? undefined : 'none',
            '&:hover': { color: BP_COLOR['5'] },
            position: 'absolute',
            zIndex: 10,
            left: '0',
            top: '20%',
            ...arrowSx,
          }}
          onClick={goToPrevItem}
        >
          <ArrowBackIos fontSize="inherit" />
        </IconButton>
      )}
      renderIndicator={(goToClickedItem, isSelected) => (
        <IconButton
          size="small"
          onClick={goToClickedItem}
          sx={{ '&:hover': { color: BP_COLOR['5'] }, color: isSelected ? BP_COLOR['5'] : undefined, fontSize: '14px' }}
        >
          {isSelected ? <Circle fontSize="inherit" /> : <CircleOutlined fontSize="inherit" />}
        </IconButton>
      )}
      {...carouselProps}
    >
      {children}
    </ReactResponsiveCarousel>
  );
};
