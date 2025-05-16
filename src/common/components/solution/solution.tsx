import { FC } from 'react';

import { ImageGallery } from '../ImageGallery';
import image1 from './assets/images/Image_1.png';
import image2 from './assets/images/Image_2.png';
import image3 from './assets/images/Image_3.png';
import image4 from './assets/images/Image_4.png';
import image5 from './assets/images/Image_5.png';
import image6 from './assets/images/Image_6.png';
import image7 from './assets/images/Image_7.png';
import image8 from './assets/images/Image_8.png';
import image9 from './assets/images/Image_9.png';

const IMAGES = [image1, image2, image3, image4, image5, image6, image7, image8, image9];

export const Solution: FC<{ images?: string[] }> = ({ images }) => {
  return (
    <section className="solution">
      <div className="bd-container">
        <h2 className="solution__title">
          <span style={{ fontWeight: '200' }}>
            Nous vous proposons
            <span style={{ fontWeight: '700' }}> une solution Tout-en-Un </span>
            <br /> pour faire
            <span style={{ fontWeight: '700' }}> grandir votre entreprise.</span>
          </span>
        </h2>
      </div>
      <ImageGallery images={images ?? IMAGES} />
    </section>
  );
};
