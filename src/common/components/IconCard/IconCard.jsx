import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import PropTypes from 'prop-types';

import './IconCard.css';

export function IconCard({ imageSrc, paragraph }) {
  return (
    <div className="solution__data__item">
      <div className="icon-wrapper">
        <div className="image-wrapper">
          <LazyLoadImage
            src={imageSrc}
            alt="cardImage"
            height="38"
            width="38"
            PlaceholderSrc={imageSrc}
            effect="blur"
          />
        </div>
      </div>
      <p>{paragraph}</p>
    </div>
  );
}

IconCard.propTypes = {
  imageSrc: PropTypes.string,
  paragraph: PropTypes.string,
};

IconCard.defaultProps = {
  imageSrc: 'fa fa-bullseye fa-2x',
  paragraph: 'Icon card paragraph',
};
