import React from 'react';

import PropTypes from 'prop-types';

import './ShareCard.css';

export function ShareCard({ cardText, imgSrc }) {
  return (
    <div className="share__element">
      <div className='share-img-container'>
        <img
          src={imgSrc}
          alt={imgSrc}
          height='38'
          width='auto'
          className='share-img'
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
