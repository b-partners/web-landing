/* eslint-disable max-len */
import React from 'react';

export function Offer() {
  return (
    <section id="offer_collectivity" className="bd-container">
      <h2 className="offer_collectivity__title">Nos offres</h2>
      <p className="headline__paragraph">
        Des modèles prêts à l’emploi et des itérations sans limites... Réservez votre démo et obtenez un test sur 1km2 de votre territoire.
      </p>
      <div className="offer_collectivity">
        <div className="offer_collectivity__item">
          <h2 className="text-center subtitle">Vous disposez déjà des images de votre territoire:</h2>
          <ul className="offer_item-content">
            <li>
              Détectez et qualifiez les objets déjà disponible dans la bibliothèque BPartners (bâti, végétation, sol artificialisé, signalisation au sol,
              installations solaires, zones de débroussaillages, etc...).
            </li>
          </ul>
          <span className="add-object">+ AJOUTEZ vos propres objets d‘intérêts et vos propres raisonnements.</span>
          <button className="button_style" type="button">
            <a href="https://meet.brevo.com/bpartnersartisans/detection-dobjets-par-intelligence-artificielle-bpartners" rel="noreferrer" target="_blank">
              RESERVEZ UNE DEMO GRATUITEMENT
            </a>
          </button>
        </div>
        <div className="offer_collectivity__item">
          <h2 className="text-center subtitle">Vous ne disposez PAS d’images de votre territoire:</h2>
          <ul className="offer_item-content">
            <li>Nous collectons les images de votre territoire.</li>
            <li>
              Détectez et qualifiez les objets déjà disponible dans la bibliothèque BPartners (bâti, végétations, sol artificialisé, signalisation au sol,
              installations solaires, zones de débroussaillages, etc...).
            </li>
          </ul>
          <span className="add-object">+ AJOUTEZ vos propres objets d‘intérêts et vos propres raisonnements.</span>
          <button className="button_style" type="button">
            <a href="https://meet.brevo.com/bpartnersartisans/detection-dobjets-par-intelligence-artificielle-bpartners" rel="noreferrer" target="_blank">
              RESERVEZ UNE DEMO GRATUITEMENT
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}
