import React from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import PropTypes from 'prop-types';

import './ShareCard.css';

export function ShareCard({ cardText, imgSrc }) {
  return (
    <div className="share__element">
      <div className='share-img-container'>
        <LazyLoadImage
          src={imgSrc}
          height="50"
          width="auto"
          PlaceholderSrc={imgSrc}
          effect="blur"
        />
      </div>
      <p className='share-description'>
        {cardText}
      </p>
    </div>
  );
}

ShareCard.propTypes = {
  cardText: PropTypes.string,
  imgSrc: PropTypes.string.isRequired
};

ShareCard.defaultProps = {
  cardText: 'card text',
};
