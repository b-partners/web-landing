import { Dispatch, FC, SetStateAction } from 'react';

import { useMediaQuery } from '@mui/material';

import WavesTopBg from '../../assets/img/waves-top-bg.png';
import { OfferSwiper } from './OfferSwiper';
import { TableOffer } from './TableOffer';

export const Offer: FC<{ setModalOpen?: Dispatch<SetStateAction<boolean>> }> = ({ setModalOpen }) => {
  const matches = useMediaQuery('(min-width: 768px)');
  return (
    <div className="pricing">
      <h2 className="section-title pricing-title">Nos tarifs</h2>
      <section className="offer">
        <img
          src={WavesTopBg}
          alt=" "
          loading="lazy"
          style={{
            position: 'absolute',
            zIndex: '1',
            right: '0',
            bottom: '-.08rem',
            filter: 'brightness(1.05)',
          }}
        />
        {matches ? <TableOffer /> : <OfferSwiper setModalOpen={setModalOpen} />}
      </section>
    </div>
  );
};
