import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import PropTypes from 'prop-types';

export function ImageCard({ imageSrc, alt, cardText, styles }) {
  return (
    <div className="distinction__item" style={styles}>
      <LazyLoadImage
        src={imageSrc}
        height={120}
        PlaceholderSrc={alt}
        effect="blur"
        style={{ objectFit: 'contain', maxWidth: '160px' }}
      />
      <p style={{ width: '75%' }}>{cardText}</p>
    </div>
  );
}

ImageCard.propTypes = {
  imageSrc: PropTypes.string,
  alt: PropTypes.string,
  cardText: PropTypes.string,
  styles: PropTypes.objectOf(),
};

ImageCard.defaultProps = {
  imageSrc: 'fa fa-bullseye fa-2x',
  alt: 'fa fa-bullseye fa-2x',
  cardText: '',
  styles: {},
};
