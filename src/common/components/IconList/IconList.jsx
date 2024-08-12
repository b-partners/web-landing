import React from 'react';

import PropTypes from 'prop-types';

import './IconList.css';

export function IconList({ imageSrc = 'fa fa-bullseye fa-2x', listText = 'Icon text', textStyle = '', imageStyle = {} }) {
  return (
    <li className="home-list-item">
      {imageSrc === '' ? (
        <div>
          <i className="fa fa-check" aria-hidden="true" />
        </div>
      ) : (
        <div className="home-list-icon">
          <img src={imageSrc} height="17" width="17" alt={imageSrc} className="icon-list" style={imageStyle} />
        </div>
      )}
      <span className={`list-icon__text ${textStyle}`}>{listText}</span>
    </li>
  );
}

IconList.propTypes = {
  imageSrc: PropTypes.string,
  listText: PropTypes.string,
  textStyle: PropTypes.string,
};
