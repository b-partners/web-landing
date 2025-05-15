import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { PALETTE_COLORS } from '@/config/theme';

import descriptionImage from '../assets/description.png';

export function Description() {
  return (
    <section className="description" id="description">
      <div className="description__container bd-container">
        <div className="description__col1">
          <h2 className="description__title" style={{ color: PALETTE_COLORS.black }}>
            À propos
          </h2>
          <p className="description__first-paragraph" style={{ color: PALETTE_COLORS.black }}>
            La puissance de la recherche française, au service du terrain.
            <br />
            <br />
            BIRDIA est une startup deeptech née de la recherche académique française, avec une ambition simple : transformer l’innovation en solution concrète,
            utile au quotidien des artisans, des assureurs, des collectivités et des gestionnaires de patrimoine.
            <br />
            <br />
            Notre technologie d’intelligence artificielle hybride associe Deep Learning et raisonnement symbolique pour analyser des images aériennes ultra
            haute définition (5 cm/pixel). Elle ne se contente pas de détecter des objets — elle les qualifie intelligemment, en intégrant des règles métier et
            des contraintes territoriales : état d’usure, risques, conformité réglementaire, etc.
          </p>
          <p className="description__second-paragraph">
            BIRDIA transforme ces images en données actionnables, directement intégrables dans vos outils métiers ou SIG. Nous aidons ainsi :
          </p>
          <ul className="description__list">
            <li style={{ marginBlock: 10, fontWeight: 'normal' }}>
              Les artisans couvreurs, en automatisant l’analyse de toiture, la génération de devis, le suivi client, et la détection d’opportunités commerciales
              ;
            </li>
            <li style={{ marginBlock: 10, fontWeight: 'normal' }}>
              Les collectivités, en valorisant leurs bases PCRS et données DSI pour anticiper, planifier et mieux piloter la transformation de leurs territoires
              ;
            </li>
            <li style={{ marginBlock: 10, fontWeight: 'normal' }}>
              Les assureurs, en automatisant le diagnostic visuel, la gestion du risque, la prévention, et la complétude des contrats.
            </li>
          </ul>
        </div>
        <div className="description__col2">
          <div style={{ paddingInline: '25px' }}>
            <LazyLoadImage alt="BpPhone" src={descriptionImage} width={500} effect="blur" style={{ marginBlock: 'auto', borderRadius: '15px' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
