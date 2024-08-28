import { FC } from 'react';
import { CarouselProps, Carousel as ReactResponsiveCarousel } from 'react-responsive-carousel';

import { BP_COLOR } from '@/config';
import { ArrowBackIos, ArrowForwardIos, Circle, CircleOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';

import './style.css';

export const Carousel: FC<Partial<CarouselProps>> = ({ children, ...carouselProps }) => {
  return (
    <ReactResponsiveCarousel
      autoPlay
      showArrows
      infiniteLoop
      showIndicators
      interval={5000}
      transitionTime={1000}
      animationHandler="fade"
      showThumbs={false}
      showStatus={false}
      renderArrowNext={(goToNextItem) => (
        <IconButton size="large" sx={{ '&:hover': { color: BP_COLOR['5'] }, position: 'absolute', zIndex: 10, right: '0', top: '20%' }} onClick={goToNextItem}>
          <ArrowForwardIos fontSize="large" />
        </IconButton>
      )}
      renderArrowPrev={(goToPrevItem) => (
        <IconButton size="large" sx={{ '&:hover': { color: BP_COLOR['5'] }, position: 'absolute', zIndex: 10, left: '0', top: '20%' }} onClick={goToPrevItem}>
          <ArrowBackIos fontSize="large" />
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
