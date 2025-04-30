import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { PALETTE_COLORS } from '@/config/theme';
import { Container } from '@mui/material';

import { ShareCard } from '../../../../common/components/ShareCard';
import Bank from '../../assets/img/bank.webp';
import Bill from '../../assets/img/bill.png';
import Bot from '../../assets/img/bot.png';
import Euro from '../../assets/img/euro.webp';
import Laptop from '../../assets/img/laptop.jpg';

export function Authenticity() {
  return (
    <>
      <section style={{ paddingBlock: '50px', backgroundColor: PALETTE_COLORS.pine }}>
        <Container>
          <div className="share__container  bd-container">
            <ShareCard cardText="Lancez l'analyse de la toiture avec simplement l'adresse de votre prospect." imgSrc={Bot} />
            <ShareCard cardText="Générez un rapport d'analyse, avec votre proposition commerciale." imgSrc={Bill} />
            <ShareCard cardText="Priorisez et programmez vos interventions." imgSrc={Euro} />
            <ShareCard cardText="Facturez et encaissez en 1 clic." imgSrc={Bank} />
          </div>
        </Container>
      </section>
      <section className="mobile" style={{ backgroundColor: PALETTE_COLORS.white }}>
        <div className="mobile__task bd-container">
          <div className="mobile__task__container">
            <div className="mobile__task__info">
              <h3 className="task__info-title">
                <span style={{ fontWeight: '700' }}>Notre authenticité</span>
                <br />
                <span style={{ fontWeight: '200' }}>Votre force</span>
              </h3>
              <p style={{ textAlign: 'justify' }}>
                Face aux enjeux climatiques, la recrudescence des intempéries engendre une surcharge de travail considérable pour les couvreurs français, qui{' '}
                <b>passent 20% à 30% de leur temps à se rendre chez des prospects pour faire des devis.</b>
              </p>
              <p style={{ textAlign: 'justify' }}>
                Issue de la recherche académique française, BIRDIA a développé{' '}
                <b>une IA reproduisant les étapes d'analyses des toitures d'un couvreur sur des images aériennes haute définition à 5 cm de précision</b>,
                permettant d'avoir les mesures, le chiffrage et l'urgence de l'intervention.
              </p>
              <b>- Moins de déplacements pour faire des devis techniques</b>
              <br />
              <b>+ Plus de réparation auprès de plus de clients.</b>
            </div>
            <div className="mobile__task__image" style={{ marginTop: '5px' }}>
              <LazyLoadImage src={Laptop} width="358" PlaceholderSrc={Laptop} effect="blur" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
