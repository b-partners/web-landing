import React from 'react';

import * as PropTypes from 'prop-types';

import './Polygone.css';

export function Polygone(props) {
  const { description, color, position, borderLeft = '', borderRight = '', preset = '' } = props;
  let styles = {};

  if (position === 'polygone-right') {
    styles = {
      transform: 'rotate(90deg)',
    };
  } else if (position === 'polygone-up') {
    styles = {
      transform: 'rotate(180deg)',
    };
  } else if (position === 'polygone-left') {
    styles = {
      transform: 'rotate(-90deg)',
    };
  }
  return (
    <div
      className={`polygone__container ${position} ${borderLeft} ${borderRight} ${preset}`}
      style={{
        backgroundColor: color,
      }}
    >
      <div className="polygone__element">
        <p className="timeline-element" style={styles}>
          {description}
        </p>
        <svg className="polygone" width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.0825 29.1589C13.9615 32.7026 19.0385 32.7025 20.9175 29.1589L32.0926 8.08245C33.8583 4.75234 31.4444 0.740234 27.6751 0.740234H5.32488C1.55561 0.740234 -0.858271 4.75235 0.907421 8.08246L12.0825 29.1589Z"
            fill={color}
          />
        </svg>
      </div>
    </div>
  );
}

Polygone.propTypes = {
  description: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  borderRight: PropTypes.string,
  borderLeft: PropTypes.string,
  preset: PropTypes.string,
};
