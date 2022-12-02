import React from 'react';

import { ShareCard } from '../../../../common/components/ShareCard';

export function Feature() {
  return (
    <section className="share" id="share">
      <div className="share__container bd-container">
        <ShareCard cardText="Obtenez votre compte professionnel avec un IBAN/RIB FR en quelques secondes." />
        <ShareCard cardText="Initiation des virements et des encaissements instantanés." />
        <ShareCard cardText="Une carte physique ou virtuelle selon vos besoins." />
        <ShareCard cardText="Agrégez vos comptes pour analyser vos performances." />
      </div>
    </section>
  );
}
