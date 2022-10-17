import React from 'react';
import { ShareCard } from '../../../../../common/components/ShareCard';


export function Feature() {
  return (
    <section className="share section bd-container" id="share">
      <div className="share__container">
        <ShareCard cardText="Obtenez votre compte professionnel avec un IBAN/RIB FR en quelques secondes." />
        <ShareCard cardText="Virements et encaissements instantanés" />
        <ShareCard cardText="Une carte bancaire physique ou virtuelle selon vos besoins." />
        <ShareCard cardText="Agrégez vos comptes bancaires pour analyser vos performances." />
      </div>
    </section>
  );
}
