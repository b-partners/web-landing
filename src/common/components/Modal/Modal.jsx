import React from 'react';
import PropTypes from 'prop-types';

export function Modal({ children, showModal, toggle }) {

  return (
    <div
      className={`modal ${showModal ? '' : 'modal-hide'}`}
      onClick={toggle}
      onKeyDown={toggle}
      role='button'
      tabIndex={0}
    >
      <div
        className='modal__content'
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
        role='button'
        tabIndex={0}
      >
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  showModal: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};
