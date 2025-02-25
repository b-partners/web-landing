import { useEffect, useState } from 'react';

import { Box } from '@mui/material';

import { HeroDescriptionImageStyle as style } from './styles';

const imageSourceList = [
  '/assets/images/advertising/hero-carousel/1.jpg',
  '/assets/images/advertising/hero-carousel/2.jpg',
  '/assets/images/advertising/hero-carousel/3.jpg',
  '/assets/images/advertising/hero-carousel/4.jpg',
];

export const HeroDescriptionImage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timeout = setInterval(() => {
      setCurrentImage((last) => (last < 3 ? last + 1 : 0));
    }, 5000);
    return () => clearInterval(timeout);
  }, []);

  return (
    <Box sx={style}>
      {imageSourceList.map((src, index) => (
        <img key={src} style={{ opacity: currentImage === index ? 1 : 0 }} alt={`advertising ${index}`} src={src} />
      ))}
    </Box>
  );
};
