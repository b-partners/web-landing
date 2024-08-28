import { FC } from 'react';
import { CarouselProps, Carousel as ReactResponsiveCarousel } from 'react-responsive-carousel';

import { BP_COLOR } from '@/config';
import { ArrowBackIos, ArrowForwardIos, Circle, CircleOutlined } from '@mui/icons-material';
import { BoxProps, IconButton } from '@mui/material';

import './style.css';

export const Carousel: FC<Partial<CarouselProps> & { itemWrapperSx?: BoxProps }> = ({ children, itemWrapperSx, ...carouselProps }) => {
  return (
    <ReactResponsiveCarousel
      autoPlay
      showArrows
      infiniteLoop
      interval={5000}
      transitionTime={1000}
      animationHandler="fade"
      showThumbs={false}
      showStatus={false}
      showIndicators
      renderArrowNext={(goToNextItem) => (
        <IconButton sx={{ '&:hover': { color: BP_COLOR['5'] }, position: 'absolute', zIndex: 999, right: '0', top: '20%' }} onClick={goToNextItem}>
          <ArrowForwardIos />
        </IconButton>
      )}
      renderArrowPrev={(goToPrevItem) => (
        <IconButton sx={{ '&:hover': { color: BP_COLOR['5'] }, position: 'absolute', zIndex: 999, left: '0', top: '20%' }} onClick={goToPrevItem}>
          <ArrowBackIos />
        </IconButton>
      )}
      renderIndicator={(goToClickedItem, isSelected) => (
        <IconButton
          size="small"
          onClick={goToClickedItem}
          sx={{ '&:hover': { color: BP_COLOR['5'] }, color: isSelected ? BP_COLOR['5'] : undefined, fontSize: '12px' }}
        >
          {isSelected ? <Circle fontSize="small" /> : <CircleOutlined fontSize="small" />}
        </IconButton>
      )}
      {...carouselProps}
    >
      {children}
    </ReactResponsiveCarousel>
  );
};
