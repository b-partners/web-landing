import React from 'react';

import { ShareCard } from '../../../../common/components/ShareCard';

export function Feature() {
  return (
    <section className="share" id="share">
      <div className="share__container bd-container">
        <ShareCard cardText="Obtenez votre compte professionnel avec un IBAN/RIB FR en quelques secondes." />
        <ShareCard cardText="Initiez vos virements et vos encaissements en 1 clic." />
        <ShareCard cardText="Obtenez votre carte physique ou virtuelle selon vos besoins." />
        <ShareCard cardText="Agrégez vos comptes pour analyser vos performances." />
      </div>
    </section>
  );
}
