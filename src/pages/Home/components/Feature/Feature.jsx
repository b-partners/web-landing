import React from 'react';

import { ShareCard } from '../../../../common/components/ShareCard';
import Bank from '../../assets/img/bank.png';
import Euro from '../../assets/img/euro.png';
import Wallet from '../../assets/img/wallet.png';
import Trade from '../../assets/img/trade.png';

export function Feature() {
  return (
    <section className="share" id="share">
      <div className="share__container  bd-container">
        <ShareCard
          cardText="Obtenez votre compte professionnel avec un IBAN/RIB FR en quelques secondes."
          imgSrc={Bank}
        />
        <ShareCard
          cardText="Initiez vos virements et vos encaissements en 1 clic."
          imgSrc={Euro}
        />
        <ShareCard
          cardText="Obtenez votre carte physique ou virtuelle selon vos besoins."
          imgSrc={Wallet}
        />
        <ShareCard
          cardText="Agrégez vos comptes pour analyser vos performances."
          imgSrc={Trade}
        />
      </div>
    </section>
  );
}
