import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { ShareCard } from '../../../../common/components/ShareCard';
import AnnotatorDashboard from '../../assets/img/annotator-dashboard.png';
import WavesBottomBg from '../../assets/img/auth-bottom-waves.png';
import WavesTopBg from '../../assets/img/auth-top-waves.png';
import Bank from '../../assets/img/bank.webp';
import Bill from '../../assets/img/bill.png';
import Bot from '../../assets/img/bot.png';
import Euro from '../../assets/img/euro.webp';

export function Authenticity() {
  return (
    <>
      <section className="bp-tagline-section">
        <img
          src={WavesTopBg}
          alt=" "
          style={{
            position: 'absolute',
            zIndex: '1',
            top: '-0.05rem',
            right: '0',
          }}
        />
        <img
          src={WavesBottomBg}
          alt=" "
          style={{
            position: 'absolute',
            zIndex: '1',
            bottom: '0',
            right: '0',
          }}
        />
        <div className="share__container  bd-container">
          <ShareCard
            cardText="Lancez l'analyse de la toiture avec simplement l'adresse de votre prospect."
            imgSrc={Bot}
          />
          <ShareCard cardText="Générez un rapport d'analyse, avec votre proposition commerciale." imgSrc={Bill} />
          <ShareCard cardText="Priorisez et programmez vos interventions." imgSrc={Euro} />
          <ShareCard cardText="Facturez et encaissez en 1 clic." imgSrc={Bank} />
        </div>
      </section>
      <section className="mobile">
        <img
          src={WavesTopBg}
          alt=" "
          style={{
            position: 'absolute',
            zIndex: '-1',
            right: '0',
            bottom: '-.05rem',
          }}
        />
        <div className="mobile__task bd-container">
          <div className="mobile__task__container">
            <div className="mobile__task__info">
              <h3 className="task__info-title">
                <span style={{ fontWeight: '700' }}>Notre authenticité</span>
                <br />
                <span style={{ fontWeight: '200' }}>Votre force</span>
              </h3>
              <p style={{ textAlign: 'justify' }}>
                Face aux enjeux climatiques, la recrudescence des intempéries engendre une surcharge de travail
                considérable pour les couvreurs français, qui{' '}
                <b>passent 20% à 30% de leur temps à se rendre chez des prospects pour faire des devis.</b>
              </p>
              <p style={{ textAlign: 'justify' }}>
                Issue de la recherche académique française, BPartners a développé{' '}
                <b>
                  une IA reproduisant les étapes d'analyses des toitures d'un couvreur sur des images aériennes haute
                  définition à 5 cm de précision
                </b>
                , permettant d'avoir les mesures, le chiffrage et l'urgence de l'intervention.
              </p>
              <b>- Moins de déplacements pour faire des devis techniques</b>
              <br />
              <b>+ Plus de réparation auprès de plus de clients.</b>
            </div>
            <div className="mobile__task__image">
              <LazyLoadImage src={AnnotatorDashboard} width="358" PlaceholderSrc={AnnotatorDashboard} effect="blur" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
