import React from 'react';

import PropTypes from 'prop-types';

import './ShareCard.css';

export function ShareCard({ cardText }) {
  return (
    <div className="share__element">
      <i className="fa fa-check" aria-hidden="true" /> <br />
      {cardText}
    </div>
  );
}

ShareCard.propTypes = {
  cardText: PropTypes.string,
};

ShareCard.defaultProps = {
  cardText: 'card text',
};
