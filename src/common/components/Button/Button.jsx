import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export function Button({ loading , type , preset , label  }) {
  return (
    /* eslint-disable-next-line react/button-has-type */
    <button type={type} className={`btn ${preset}`}>
      {loading ? (<>
        <i className='fa fa-spinner fa-spin' />
        Loading
      </>) : label}
    </button>
  );
}

Button.propTypes = {
  loading: PropTypes.bool,
  type: PropTypes.string,
  preset: PropTypes.string,
  label: PropTypes.string,
};

Button.defaultProps = {
  loading: false,
  type: 'button',
  preset: 'btn-primary',
  label: 'Valider'
};
