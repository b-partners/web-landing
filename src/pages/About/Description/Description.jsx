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
            Nous sommes BPartners SAS, l'assistant intelligent qui accélère la croissance et les encaissements
            des artisans et indépendants français.
          </p>
          <p className="description__second-paragraph">
            Nous avons développé une <b>solution de gestion d’entreprise unifiée pensée</b> avec <b>les
              artisans pour les artisans.</b> Notre ambition est de permettre à tous les artisans :
          </p>
          <ul className='description__list'>
            <li>d'automatiser leur édition de devis/factures</li>
            <li>d'avoir un outil pour encaisser leurs clients sur mobile via QR code/Lien/sms de paiement</li>
            <li>de les soulager de la relance client ou la recherche de nouveaux clients.</li>
          </ul>

          <p className='description__paragraph'>
            En parallèle, nous poursuivrons nos recherches  pour améliorer notre assistant commercial
            doté d’une Intelligence Artificielle pour identifier les opportunités business disponibles
            autour de chez eux à un instant T.
            Pour le lancement, nous avons réalisé des dizaines d’interviews métiers afin de mettre au
            point l'outil de gestion bancaire et d'activité dont avaient besoin les artisans français.
            En s’appuyant sur les données collectées et une collaboration (partage de PI)
            avec un laboratoire de recherche spécialisé en IA, BPartners offrira une expérience unique aux artisans,
            avec un accès aux dernières possibilités technologiques disponibles.
          </p>
          <p className='description__paragraph'>
            Concrètement, nous démarrons la commercialisation en proposant un compte aux artisans,
            autour duquel nous allons faire graviter toute la vie de l’entreprise avec des outils d’automatisation
            couvrant :
          </p>
          <ul style={{ listStyle: 'disc', marginLeft: '1.7rem' }}>
            <li>L’édition, la relance des devis et des factures impayées.</li>
            <li>Les encaissements sur mobile ou à distance.</li>
            <li>La comptabilité par auto catégorisation et agrégation des comptes.</li>
          </ul>
        </div>
        <div className="description__col2">
          <div>
            <LazyLoadImage
              alt="BpPhone"
              src={BpPhone}
              height={200}
              effect="blur"
            />
          </div>
        </div>
      </div>
    </section >
  );
}
