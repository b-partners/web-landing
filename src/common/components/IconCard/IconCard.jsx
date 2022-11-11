import React from 'react';

import PropTypes from 'prop-types';

import './IconCard.css';

export function IconCard({ imageSrc, paragraph }) {
  return (
    <div className="solution__data__item">
      <div className="icon-wrapper">
        <div className="image-wrapper">
          <img src={imageSrc} alt="" className="card-image" />
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
