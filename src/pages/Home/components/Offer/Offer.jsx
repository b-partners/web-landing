import React from 'react';
import * as PropTypes from 'prop-types';

import { useMediaQuery } from '@mui/material';

import { OfferTable } from './OfferTable';
import { OfferSwiper } from './OfferSwiper';

import WavesTopBg from '../../assets/img/waves-top-bg.png';

export function Offer(props) {
  const { setModalOpen } = props;
  const matches = useMediaQuery('(min-width: 768px)');
  return (
    <section className='offer'>
      <img src={WavesTopBg} alt=" " style={{
        position: 'absolute',
        zIndex: '-1',
        right: '0',
        bottom: '-.08rem'
      }}
      />
      {matches ?
        <OfferTable setModalOpen={setModalOpen} /> :
        <OfferSwiper setModalOpen={setModalOpen} />}
    </section>
  );
}
Offer.propTypes = {
  setModalOpen: PropTypes.func.isRequired
};