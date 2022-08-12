import React from 'react';
import PropTypes from 'prop-types';

import { Modal } from '../../../../common/components/Modal';
import { Button } from '../../../../common/components/Button';

export function Preregistration(props) {
  const { onSubmitEmail, onSubmitModal, onChange, showModal, toggle, loading } = props;
  return (
    <>
      <div className='preregistration__container'>
        <form className='preregistration__container__form' onSubmit={onSubmitEmail}>
          <input
            type='email'
            name='email'
            placeholder='Votre email @'
            className='preregistration__container__input'
            onChange={onChange}
            required
          />
        </form>
      </div>
      <Modal className='modal' showModal={showModal} toggle={toggle}>
        <form onSubmit={onSubmitModal}>
          <div className='floating-form'>
            <div className='floating-label'>
              <input
                className='floating-input'
                type='text'
                placeholder=' '
                name='last_name'
                onChange={onChange}
              />
              <span>Nom</span>
            </div>
            <div className='floating-label'>
              <input
                className='floating-input'
                type='text'
                placeholder=' '
                name='first_name'
                onChange={onChange}
              />
              <span>Prénom</span>
            </div>
            <div className='floating-label'>
              <input
                className='floating-input'
                type='text'
                placeholder=''
                name='phone_number'
                onChange={onChange}
                required
              />
              <span>Téléphone</span>
            </div>
            <Button type='submit' label='Se préinscrire' loading={loading} />
          </div>
        </form>
      </Modal>
    </>
  );
}

Preregistration.propTypes = {
  showModal: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  onSubmitEmail: PropTypes.func.isRequired,
  onSubmitModal: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
