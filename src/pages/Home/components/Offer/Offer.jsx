import React from 'react';
import * as PropTypes from 'prop-types';

import { useMediaQuery } from '@mui/material';

import { OfferTable } from './OfferTable';
import { OfferSwiper } from './OfferSwiper';

export function Offer(props) {
  const { setModalOpen } = props;
  const matches = useMediaQuery('(min-width: 768px)');
  return (
    <section className='offer section'>
      {matches ?
        <OfferTable setModalOpen={setModalOpen} /> :
        <OfferSwiper setModalOpen={setModalOpen} />}
    </section>
  );
}
Offer.propTypes = {
  setModalOpen: PropTypes.func.isRequired
};