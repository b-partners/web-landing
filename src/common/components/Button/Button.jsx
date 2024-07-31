import React from 'react';

import PropTypes from 'prop-types';

import './Button.css';

export function Button({ loading, type, id, preset, label, onClick }) {
  return (
    /* eslint-disable-next-line react/button-has-type */
    <button type={type} className={`btn ${preset}`} onClick={onClick} id={id}>
      {loading ? (
        <>
          <i className="fa fa-spinner fa-spin" />
          {label}
        </>
      ) : (
        label
      )}
    </button>
  );
}

Button.defaultProps = {
  onClick: () => {},
};

Button.propTypes = {
  loading: PropTypes.bool,
  type: PropTypes.string,
  id: PropTypes.string,
  preset: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  loading: false,
  id: '',
  type: 'button',
  preset: 'btn-primary',
  label: 'Valider',
};
