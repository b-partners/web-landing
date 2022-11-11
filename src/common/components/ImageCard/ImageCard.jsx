import React from 'react';

import PropTypes from 'prop-types';

import './ImageCard.css';

export function ImageCard({ imageSrc, alt, cardText }) {
  return (
    <div className="distinction__item">
      <img alt={alt} src={imageSrc} style={{ height: '120px' }} />
      <p>{cardText}</p>
    </div>
  );
}

ImageCard.propTypes = {
  imageSrc: PropTypes.string,
  alt: PropTypes.string,
  cardText: PropTypes.string,
};

ImageCard.defaultProps = {
  imageSrc: 'fa fa-bullseye fa-2x',
  alt: 'fa fa-bullseye fa-2x',
  cardText: 'Icon text',
};
