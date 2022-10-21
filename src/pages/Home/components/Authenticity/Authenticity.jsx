import React from 'react'
import mobile from '../../assets/img/transactions.gif';

export function Authenticity() {
  return (
    <section className='mobile section bd-container'>
      <div className='mobile__task'>
        <h2 className='mobile__title'>
          <b>Votre mobile s'occupe de gérer les tâches administratives,<br /> financières et commerciales  </b>
          pendant que vous faites votre métier d'artisan.
        </h2>
        <div className='mobile__task__container'>
          <div className='mobile__task__info'>
            <h3 className='task__info-title'>
              <span style={{ fontWeight: "700" }}>Notre authenticité</span><br />
              <span style={{ fontWeight: "200" }}>Votre force</span>
            </h3>
            <p style={{ textAlign: 'justify' }}>
              Aujourd'hui les artisans perdent entre 30% à 40% de leur temps sur des tâches administratives,
              financières ou de prospection laborieuse qui les éloignent de leur vrai métier.
              BPartners une application tout-en-un construite avec les artisans pour les artisans
              avec un but unique: <b>laisser votre téléphone générer ces tâches ardues pendant que vous
              reconcentrez sur la satisfaction de vos clients.</b>
            </p>
          </div>
          <div className='mobile__task__image'>
            <img alt="mobile_image" src={mobile} />
          </div>
        </div>
      </div>
    </section>
  )
}
