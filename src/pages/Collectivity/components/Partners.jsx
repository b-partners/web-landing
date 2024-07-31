/* eslint-disable jsx-a11y/media-has-caption */

/* eslint-disable max-len */
import React from 'react';

import CCI from '../assets/img/partners/cci.png';
import CEA from '../assets/img/partners/cea.png';
import DeepTech from '../assets/img/partners/deeptech.png';
import FrenchTech from '../assets/img/partners/frenchtech.png';
import IMT from '../assets/img/partners/imt.png';

export function Partners() {
  return (
    <section className="partners_collectivity bd-container" id="description">
      <h2 className="text-center trust-subtitle">Ils nous font déjà confiance</h2>
      <ul className="award_list">
        <li>
          Entreprise by Commissariat à l’Energie Atomique “CEA”, labélisée French Tech Seed et Deeptech par BPI France
          pour notre IA souveraine.
        </li>
        <li>Plusieurs collectivités françaises (exécution sur +de 500Km2 sur plusieurs objets d‘intérêts).</li>
        <li>Lauréat de l'entreprise innovante 2022 par CCI & Banque Populaire IDF.</li>
      </ul>

      <div className="partners_logo">
        <div className="partners-item1">
          <h3>Partenaires</h3>
          <div className="partners_img_container">
            <img src={CEA} alt="Fintecture Logo" style={{ objectFit: 'contain', maxWidth: '200px' }} />
            <img src={FrenchTech} alt="AwsStartups Logo" style={{ objectFit: 'contain', maxWidth: '110px' }} />
            <img src={IMT} alt="AwsStartups Logo" style={{ objectFit: 'contain', maxWidth: '200px' }} />
          </div>
        </div>
        <div className="partners-item2">
          <h3>Labélisation 2023</h3>
          <div className="partners_img_container">
            <img src={DeepTech} alt="AwsStartups Logo" style={{ objectFit: 'contain', maxWidth: '200px' }} />
            <img src={CCI} alt="AwsStartups Logo" style={{ objectFit: 'contain', maxWidth: '200px' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
