/* eslint-disable jsx-a11y/media-has-caption */

/* eslint-disable max-len */
import React from 'react';

import { useMediaQuery } from '@mui/material';

import Headline1 from '../assets/img/Headline/HEADLINE_1.png';
import Headline2 from '../assets/img/Headline/HEADLINE_2.jpg';
import Headline3 from '../assets/img/Headline/HEADLINE_3.jpg';

export function Headline() {
  const matches = useMediaQuery('(min-width: 768px)');
  return (
    <section className="headline bd-container" id="description">
      <h2 className="headline__title">
        Détectez et raisonnez par IA pour gagner {matches && <br />} en précision et en réactivité.
      </h2>

      <div className="headline_content">
        <article className="headline_article">
          <h3 className="headline__subtitle">
            Intelligence artificielle issue de la recherche française, souveraine, entraînée
            <br />
            sur l'ensemble du territoire français.
          </h3>
          <p className="headline__paragraph">
            BPartners est une startup issue de la recherche française. Labélisée entreprise DeepTech pour avoir conçu un
            outil de détection et mesure d’objets pour les artisans pour leur simplifier la vie. Cette technologie a été
            étendue aux collectivités et grandes groupes pour répondre à leurs besoins de détecter des objets d’intérêts
            pour mieux connaitre leur territoires et suivre son évolution.
          </p>
          <p className="headline__paragraph">
            La technologie repose sur de la détection automatisée des objets, l'extraction pour y appliquer des
            raisonnements opérationnels pour l'aide à la décision. Découvrez nos cas d'usages:
          </p>
        </article>
        <aside className="box-img-row headline_aside">
          <div className="usecase-box-img">
            <img src={Headline1} alt={Headline1} />
            <span>Détection</span>
          </div>
          <div className="usecase-box-img">
            <img src={Headline2} alt={Headline2} />
            <span>Qualification</span>
          </div>
          <div className="usecase-box-img">
            <img src={Headline3} alt={Headline3} />
            <span>Géométrisation</span>
          </div>
        </aside>
      </div>
    </section>
  );
}
