import { FC } from 'react';
import ReactImageGallery, { ReactImageGalleryProps } from 'react-image-gallery';

import { BP_COLOR } from '@/config';
import { Box, SxProps } from '@mui/material';

export type ImageGalleryProps = {
  sx?: SxProps;
  images: string[];
  reactGalleryImageProps?: Partial<Omit<ReactImageGalleryProps, 'items'>>;
};

const GALLERY_SX: SxProps = {
  width: '98%',
  maxWidth: '800px',
  my: 2,
  mx: 'auto',
  '& .image-gallery-right-nav .image-gallery-svg, & .image-gallery-left-nav .image-gallery-svg': {
    width: '50px',
    height: '50px',
  },
  '& *:hover': {
    color: BP_COLOR['5'],
    borderColor: BP_COLOR['5'],
  },
  '& *.active': {
    borderColor: BP_COLOR['5'],
  },
};

export const ImageGallery: FC<ImageGalleryProps> = ({ sx = {}, images, reactGalleryImageProps = {} }) => {
  const IMAGES = images.map((image) => ({
    thumbnail: image,
    original: image,
    thumbnailHeight: '45px',
    thumbnailWidth: '50px',
    originalWidth: '100%',
    originalHeight: '400px',
  }));

  return (
    <Box sx={{ ...GALLERY_SX, ...sx }}>
      <ReactImageGallery autoPlay infinite items={IMAGES as any} {...reactGalleryImageProps} />
    </Box>
  );
};
