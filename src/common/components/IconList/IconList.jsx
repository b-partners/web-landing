import React from 'react';

import CheckIcon from '@mui/icons-material/Check';
import PropTypes from 'prop-types';

import './IconList.css';

export function IconList({ icon = null, imageSrc = 'fa fa-bullseye fa-2x', listText = 'Icon text', textStyle = '', imageStyle = {} }) {
  return (
    <li className="home-list-item">
      {imageSrc === '' ? (
        <div>
          <CheckIcon className="icon-check" fontSize="inherit" aria-hidden="true" />
        </div>
      ) : icon ? (
        <>{icon}</>
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
