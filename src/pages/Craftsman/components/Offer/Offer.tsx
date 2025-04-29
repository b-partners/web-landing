import { Dispatch, FC, SetStateAction } from 'react';

import { useMediaQuery } from '@mui/material';

import { OfferSwiper } from './OfferSwiper';
import { TableOffer } from './TableOffer';

export const Offer: FC<{ setModalOpen?: Dispatch<SetStateAction<boolean>> }> = ({ setModalOpen }) => {
  const matches = useMediaQuery('(min-width: 768px)');
  return (
    <div className="pricing" style={{paddingTop: "50px"}}>
      <h2 className="section-title pricing-title">Nos tarifs</h2>
      <section className="offer">
        {matches ? <TableOffer /> : <OfferSwiper setModalOpen={setModalOpen} />}
      </section>
    </div>
  );
};
