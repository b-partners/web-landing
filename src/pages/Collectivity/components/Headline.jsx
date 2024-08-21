import ImageGallery from 'react-image-gallery';

import { BP_COLOR } from '@/config';
import { Box, useMediaQuery } from '@mui/material';

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
import Headline16 from '../assets/img/Headlines/Image_16.png';
import Headline17 from '../assets/img/Headlines/Image_17.png';
import Headline18 from '../assets/img/Headlines/Image_18.png';

const IMAGES_SRC = [
  {
    original: Headline1,
    thumbnail: Headline1,
  },
  {
    original: Headline2,
    thumbnail: Headline2,
  },
  {
    original: Headline3,
    thumbnail: Headline3,
  },
  {
    original: Headline4,
    thumbnail: Headline4,
  },
  {
    original: Headline5,
    thumbnail: Headline5,
  },
  {
    original: Headline6,
    thumbnail: Headline6,
  },
  {
    original: Headline7,
    thumbnail: Headline7,
  },
  {
    original: Headline8,
    thumbnail: Headline8,
  },
  {
    original: Headline9,
    thumbnail: Headline9,
  },
  {
    original: Headline10,
    thumbnail: Headline10,
  },
  {
    original: Headline11,
    thumbnail: Headline11,
  },
  {
    original: Headline12,
    thumbnail: Headline12,
  },
  {
    original: Headline13,
    thumbnail: Headline13,
  },
  {
    original: Headline14,
    thumbnail: Headline14,
  },
  {
    original: Headline15,
    thumbnail: Headline15,
  },
  {
    original: Headline16,
    thumbnail: Headline16,
  },
  {
    original: Headline17,
    thumbnail: Headline17,
  },
  {
    original: Headline18,
    thumbnail: Headline18,
  },
];

const GALLERY_SX = {
  width: '98%',
  maxWidth: '800px',
  my: 2,
  mx: 'auto',
  '& .image-gallery-right-nav .image-gallery-svg, & .image-gallery-left-nav .image-gallery-svg': {
    width: '50px',
    height: '50px',
  },
  '& *:hover': {
    color: BP_COLOR['5'],
    borderColor: BP_COLOR['5'],
  },
  '& *.active': {
    borderColor: BP_COLOR['5'],
  },
};

export function Headline() {
  const matches = useMediaQuery('(min-width: 768px)');
  const IMAGES = IMAGES_SRC.map((image) => ({
    ...image,
    thumbnailHeight: '45px',
    thumbnailWidth: '50px',
    originalWidth: '100%',
    originalHeight: '400px',
  }));

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
        <Box sx={GALLERY_SX}>
          <ImageGallery infinite items={IMAGES} />
        </Box>
      </div>
    </section>
  );
}
