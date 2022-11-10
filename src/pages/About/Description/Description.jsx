import React from 'react'
import logo from '../../Home/assets/img/logo.png';
import WavesTopBg from '../../Home/assets/img/waves-top-bg.png';

export function Description() {
  return (
    <section className='description' id='description'>
      <img src={WavesTopBg} alt=" " style={{
        position: 'absolute',
        zIndex: '-1',
        right: '0',
        bottom: '-0.05rem'
      }} />
      <div className='description__container bd-container'>
        <div className='description__col1'>
          <h2 className='description__title'>À propos</h2>
          <p className='description__paragraph'>
            Nous sommes BPartners SAS, l'assistant bancaire qui accélère
            la croissance et les encaissements des artisans et indépendants français.
            Nous avons développé une solution de gestion d’entreprise unifiée pensée avec
            les artisans pour les artisans. <br />
            Notre ambition est de permettre à tous les artisans :
            <ul style={{ listStyle: 'disc', marginLeft: '1.7rem' }}>
              <li>d'ouvrir un compte bancaire traditionnel</li>
              <li>d'automatiser leur édition de devis/factures</li>
              <li>d'avoir un outil pour encaisser leurs clients sur mobile via
                QR code/Lien/sms de paiement
              </li>
              <li>de les soulager dans la relance clients ou la recherche de nouveaux clients. </li>
            </ul>
          </p>
          <p className='description__paragraph'>
            En parallèle, nous poursuivrons nos recherches  pour améliorer notre assistant commercial
            doté d’une Intelligence Artificielle pour identifier les opportunités business disponible
            autour de chez eux à un instant T.
            Pour le lancement, nous avons réalisé des dizaines d’interviews métiers et pris contact
            avec les Chambres des Métiers et de l’Artisanat (« CMA ») françaises afin de mettre au
            point l'outil de gestion bancaire et d'activité dont avaient besoin les artisans français.
            En s’appuyant sur les données collectées, l’expertise des CMAs et une collaboration (partage de PI)
            avec un laboratoire de recherche spécialisé en IA , BPartners offrira une expérience unique aux artisans,
            avec un accès aux dernières possibilités technologiques disponibles.
          </p>
          <p className='description__paragraph'>
            Concrètement nous démarrons la commercialisation en proposant un compte bancaire aux artisans,
            autour duquel nous allons faire graviter toute la vie de l’entreprise avec des outils d’automatisation
            couvrant :
            <ul style={{ listStyle: 'disc', marginLeft: '1.7rem' }}>
              <li>L’édition, la relance des devis et factures impayées.</li>
              <li>Les encaissements sur mobile ou à distance.</li>
              <li>La comptabilité par auto catégorisation et agrégation des comptes.</li>
            </ul>
          </p>
        </div>
        <div className='description__col2'>
          <img src={logo} alt='logo'
            className='description__logo'
          />
        </div>
      </div>
    </section>
  )
}
