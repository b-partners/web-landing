import React from 'react';
import CraftingTools from '../../assets/img/crafting-tools.png';
import WavesTopBg from '../../assets/img/auth-top-waves.png';
import WavesBottomBg from '../../assets/img/auth-bottom-waves.png';

export function Authenticity() {
  return (
    <>
      <section className='bp-tagline-section'>
        <img src={WavesTopBg} alt=" " style={{
          position: 'absolute',
          zIndex: '1',
          top: '-0.05rem',
          right: '0'
        }}
        />
        <img src={WavesBottomBg} alt=" " style={{
          position: 'absolute',
          zIndex: '1',
          bottom: '0',
          right: '0'
        }}
        />
        <div>
          <h2 className='mobile__title'>
            <b className='text__highlight'>Votre mobile s'occupe de gérer les <br />tâches administratives,
              financières et <br />commerciales  </b>
            pendant que vous faites <br />votre métier d'artisan.
          </h2>
        </div>
      </section>
      <section className='mobile'>
        <img src={WavesTopBg} alt=" " style={{
          position: 'absolute',
          zIndex: '-1',
          right: '0',
          bottom: '-.05rem'
        }}
        />
        <div className='mobile__task bd-container'>
          <div className='mobile__task__container'>
            <div className='mobile__task__info'>
              <h3 className='task__info-title'>
                <span style={{ fontWeight: "700" }}>Notre authenticité</span><br />
                <span style={{ fontWeight: "200" }}>Votre force</span>
              </h3>
              <p style={{ textAlign: 'justify' }}>
                Aujourd'hui, les artisans consacrent entre 30 % à 40 % de leur temps sur des tâches administratives,
                financières ou de la prospection laborieuse qui les éloignent de leur vrai métier.
                BPartners est une application tout-en-un construite avec les artisans pour les artisans
                avec un but unique : <b>laisser votre téléphone gérer ces tâches ardues pendant que vous vous
                  reconcentrez sur la satisfaction de vos clients.</b>
              </p>
            </div>
            <div className='mobile__task__image'>
              <img alt="mobile_image" src={CraftingTools} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
