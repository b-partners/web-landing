import { ImageGallery } from '@/common/components';
import { useMediaQuery } from '@mui/material';

import Headline1 from '../assets/img/Headlines/Image_1.png';
import Headline2 from '../assets/img/Headlines/Image_2.png';
import Headline3 from '../assets/img/Headlines/Image_3.png';
import Headline4 from '../assets/img/Headlines/Image_4.png';
import Headline5 from '../assets/img/Headlines/Image_5.png';
import Headline6 from '../assets/img/Headlines/Image_6.png';
import Headline7 from '../assets/img/Headlines/Image_7.png';
import Headline8 from '../assets/img/Headlines/Image_8.png';
import Headline9 from '../assets/img/Headlines/Image_9.png';
import Headline10 from '../assets/img/Headlines/Image_10.png';
import Headline11 from '../assets/img/Headlines/Image_11.png';
import Headline12 from '../assets/img/Headlines/Image_12.png';
import Headline13 from '../assets/img/Headlines/Image_13.png';
import Headline14 from '../assets/img/Headlines/Image_14.png';
import Headline15 from '../assets/img/Headlines/Image_15.png';

const IMAGES = [
  Headline1,
  Headline2,
  Headline3,
  Headline4,
  Headline5,
  Headline6,
  Headline7,
  Headline8,
  Headline9,
  Headline9,
  Headline10,
  Headline11,
  Headline12,
  Headline13,
  Headline14,
  Headline15,
];

export function Headline() {
  const matches = useMediaQuery('(min-width: 768px)');
  return (
    <section className="headline bd-container" id="description">
      <h2 className="headline__title">Détectez et raisonnez par IA pour gagner {matches && <br />} en précision et en réactivité.</h2>

      <div className="headline_content">
        <article className="headline_article">
          <h3 className="headline__subtitle">
            Intelligence artificielle issue de la recherche française, souveraine, entraînée
            <br />
            sur l'ensemble du territoire français.
          </h3>
          <p className="headline__paragraph">
            BPartners est une startup issue de la recherche française. Labélisée entreprise DeepTech pour avoir conçu un outil de détection et mesure d’objets
            pour les artisans pour leur simplifier la vie. Cette technologie a été étendue aux collectivités et grandes groupes pour répondre à leurs besoins de
            détecter des objets d’intérêts pour mieux connaitre leur territoires et suivre son évolution.
          </p>
          <p className="headline__paragraph">
            La technologie repose sur de la détection automatisée des objets, l'extraction pour y appliquer des raisonnements opérationnels pour l'aide à la
            décision. Découvrez nos cas d'usages:
          </p>
        </article>
      </div>
      <ImageGallery images={IMAGES} />
    </section>
  );
}
