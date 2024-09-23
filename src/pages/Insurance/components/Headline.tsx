import { ImageGallery } from '@/common/components';

import Headline1 from '../assets/img/Headlines/headline-1.jpg';
import Headline2 from '../assets/img/Headlines/headline-2.jpg';
import Headline3 from '../assets/img/Headlines/headline-3.jpg';
import Headline4 from '../assets/img/Headlines/headline-4.jpg';
import Headline5 from '../assets/img/Headlines/headline-5.jpg';
import Headline6 from '../assets/img/Headlines/headline-6.jpg';
import Headline7 from '../assets/img/Headlines/headline-7.jpg';

const IMAGES = [Headline1, Headline2, Headline3, Headline4, Headline5, Headline6, Headline7];

export function Headline() {
  return (
    <section className="headline bd-container" id="description">
      <h2 className="headline__title">
        Détectez et raisonnez par IA sur des images HD pour optimiser la gestion de votre portefeuille d’assurés, anticiper les risques et gagner du temps après
        les sinistres.
      </h2>

      <div className="headline_content">
        <article className="headline_article">
          <h3 className="headline__subtitle">
            Une intelligence artificielle souveraine, conçue en France, pour vérifier à grande échelle la complétude des contrats d’assurance et évaluer les
            risques des portefeuilles IARD.
            <br />
            Que ce soit pour le marché particulier, tertiaire, ou les bâtiments agricoles, anticipez et agissez avant même que les réparations ne soient
            nécessaires
          </h3>
          <p className="headline__paragraph">
            Chez BPartners, nous avons transformé l’innovation en solution pratique. Issue de la recherche française et labellisée DeepTech, notre technologie a
            été initialement conçue pour simplifier la vie des artisans en détectant et mesurant des objets d’intérêt. Aujourd’hui, nous avons étendu cette
            expertise aux collectivités et aux grandes entreprises, leur permettant de mieux comprendre leur patrimoine et de suivre son évolution grâce à la
            détection automatisée et à l’analyse des objets.
          </p>
          <p className="headline__paragraph" style={{ marginTop: 15 }}>
            Notre solution combine la puissance de l’IA et de l’analyse prédictive pour vous aider à anticiper les risques, mieux gérer vos contrats d’assurance
            et prendre des décisions éclairées. Découvrez nos cas d’usage transformant la manière dont vous gérez vos portefeuilles d’assurés. Demandez votre
            démo.
          </p>
        </article>
      </div>
      <ImageGallery images={IMAGES} />
    </section>
  );
}
