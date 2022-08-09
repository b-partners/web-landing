import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

export function Card({ children }) {
  return <div className="card">{children}</div>;
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
};
