import { Dispatch, FC, SetStateAction } from 'react';

import { Pricing } from '@pages/Advertising-Campaign/Pricing';

export const Offer: FC<{ setModalOpen?: Dispatch<SetStateAction<boolean>> }> = () => {
  return (
    <div className="pricing" style={{ paddingTop: '50px' }}>
      <section className="offer">
        <Pricing />
      </section>
    </div>
  );
};
