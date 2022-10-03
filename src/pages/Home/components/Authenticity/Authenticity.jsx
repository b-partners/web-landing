import React from 'react'

export function Authenticity() {
  return (
    <section className='mobile section bd-container'>
      <div className='mobile__task'>
        <h2 className='mobile__title'>
          <b>Votre mobile s'occupe de gérer les tâches administratives, financières et commerciales  </b>
          pendant que vous faites votre métier d'artisan.
        </h2>
        <div className='mobile__task__container'>
          <div className='mobile__task__info'>
            <h3 className='task__info-title'>
              <span style={{fontWeight:"700"}}>Notre authenticité</span><br />
              <span style={{fontWeight:"200"}}>Votre force</span>
            </h3>
            <p>
              Aujourd'hui les artisans perdent entre 30%40% de leur temps sur
              des tâches administratives, financières ou de prospection
              laborieuse qui les éloignent de leur vrai métier.
              BPartners une application tout-en-un construite avec les artisans
              pour les artisans avec un but unique, laisser votre téléphone
              générer les tâches administratives, financières et commerciales
              pénibles et pendant que vous reconcentrez sur la satisfaction de
              vos clients.
            </p>
            <button
              type='button'
              className='registration-button'
              style={{marginTop:"2rem"}}
            >
              Ça m'interesse
            </button>
          </div>
          <div className='mobile__task__image'>Image d'outil</div>
        </div>
      </div>
    </section>
  )
}
