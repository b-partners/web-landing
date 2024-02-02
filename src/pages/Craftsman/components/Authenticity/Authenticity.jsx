import React from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import CraftingTools from '../../assets/img/crafting-tools.webp';
import WavesTopBg from '../../assets/img/auth-top-waves.png';
import WavesBottomBg from '../../assets/img/auth-bottom-waves.png';

import { ShareCard } from '../../../../common/components/ShareCard';
import Bank from '../../assets/img/bank.webp';
import Euro from '../../assets/img/euro.webp';
import Bot from '../../assets/img/bot.png';
import Bill from '../../assets/img/bill.png';

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
        <div className="share__container  bd-container">
          <ShareCard
            cardText="Générez de nouveaux clients grâce à notre assistant commercial intelligent."
            imgSrc={Bot}
          />
          <ShareCard
            cardText="Editez vos devis et factures facilement."
            imgSrc={Bill}
          />
          <ShareCard
            cardText="Encaissez vos clients partout sur mobile ou à distance en 1 clic."
            imgSrc={Euro}
          />
          <ShareCard
            cardText="Agrégez vos comptes et suivez finement votre trésorerie."
            imgSrc={Bank}
          />
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
                Aujourd'hui, les artisans consacrent entre 20 % à 30 % de leur temps sur des tâches administratives,
                financières ou de la prospection laborieuse qui les éloignent de leur vrai métier.
                BPartners est une application tout-en-un construite avec les artisans pour les artisans
                avec un but unique : <b>laisser votre téléphone gérer ces tâches ardues pendant que vous vous
                  reconcentrez sur la satisfaction de vos clients.</b>
              </p>
            </div>
            <div className='mobile__task__image'>
              <LazyLoadImage
                src={CraftingTools}
                height='350'
                width='358'
                PlaceholderSrc={CraftingTools}
                effect="blur"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
