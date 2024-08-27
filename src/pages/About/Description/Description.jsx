import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import BpPhone from '../../Home/assets/img/bp-phone.png';

export function Description() {
  return (
    <section className="description" id="description">
      <div className="description__container bd-container">
        <div className="description__col1">
          <h2 className="description__title">À propos</h2>
          <p className="description__first-paragraph">
            BPartners est une solution qui valorise des images aériennes par IA pour faire gagner du temps, des clients aux artisans et de la réactivité aux
            collectivités.
            <br />
            Nous appliquons un raisonnement symbolique au Deeplearning pour qualifier les objets détectés pour l'aide à la décision. <br />
            BPartners a développé un système de recommandation hybride transformant le raisonnement des artisans et des collectivités en une base de
            connaissances dirigée pour détecter des objets d'intérêt (toitures, végétations, signalisation, etc) et y applique un raisonnement pour qualifier
            l'objet (état de dégradation dans le temps, risques inhérents, etc).
          </p>
          <p className="description__second-paragraph">
            La solution est embarquée dans une application <b>Tout-en-un</b>, permettant:
          </p>
          <ul className="description__list">
            <li>
              (pour le cas des artisans couvreurs) de mettre à disposition une intelligence artificielle, qui leur fait gagner du temps et réduit les
              déplacements en analysant leurs toitures sur des images ultra HD 5 cm de précision.
            </li>
            <li>d'automatiser leur édition de devis/factures</li>
            <li>d'avoir un outil pour encaisser leurs clients sur mobile via QR code/Lien/sms de paiement</li>
            <li>de les soulager de la relance client ou la recherche de nouveaux clients.</li>
          </ul>
        </div>
        <div className="description__col2">
          <div>
            <LazyLoadImage alt="BpPhone" src={BpPhone} height={200} effect="blur" />
          </div>
        </div>
      </div>
    </section>
  );
}
