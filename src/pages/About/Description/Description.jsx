import React from 'react'
import logo from '../../Home/assets/img/logo.png';

export function Description() {
  return (
    <section className='description section bd-container'>
      <div className='description__container'>
        <div className='description__col1'>
          <h2 className='description__title'>À propos</h2>
          <p className='description__paragraph'>
            Nous sommes BPartners SAS, l'assistant bancaire qui va accélérer
            la croissance et les encaissements des artisans et indépendants français.
            Nous avons développé une solution de gestion d’entreprise unifiée pensée avec
            les artisans pour les artisans. <br />
            Notre ambition c'est de permettre à tous  tous les artisans :
            <ul style={{ listStyle: 'disc', marginLeft: '1.7rem' }}>
              <li>d'ouvrir un compte bancaire traditionnel</li>
              <li>d'automatiser leur édition de devis/facturation</li>
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
            point l'outil de gestion bancaire et d'activité dont avait besoin les artisans français.
            En s’appuyant sur les données collectées, l’expertise des CMAs et une collaboration (partage de PI)
            avec un laboratoire de recherche spécialisé en IA , BPartners offrira une expérience unique aux artisans,
            avec un accès aux dernières possibilités technologiques disponible.
          </p>
          <p className='description__paragraph'>
            Concrètement nous démarrons la commercialisation en proposons un compte bancaire aux artisans,
            autour duquel nous allons faire graviter toute la vie de l’entreprise avec des outils d’automatisation
            couvrant :
            L’édition et la relance des devis et factures.
            Les encaissements sur mobile ou à distance.
            La comptabilité par auto catégorisation et agrégation des comptes.
            Tout ce qui est nécessaire à l’artisan pour faire grandir son entreprise se trouve dans BPartners.
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
