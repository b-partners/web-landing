import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import * as PropTypes from 'prop-types';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';

import { IconList } from '../../../../../common/components/IconList';
import { OfferCard } from '../../../../../common/components/OfferCard';
import Developpement from '../../../assets/img/developpement.png';
import Essentiel from '../../../assets/img/essentiel.png';

SwiperCore.use([Navigation]);

export function OfferSwiper(props) {
  const { setModalOpen } = props;
  return (
    <Swiper
      breakpoints={{
        // when window width is >= 640px
        640: {
          width: 640,
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          width: 768,
          slidesPerView: 2,
        },
      }}
      id="main"
      width="320"
      navigation
      spaceBetween={5}
      slidesPerView={1}
    >
      <SwiperSlide style={{ textAlign: 'center' }}>
        <OfferCard
          imageSrc={Essentiel}
          offer="L'Essentiel"
          sectorActivity="Professionnel de la toiture"
          price="49"
          cardText="Tous les services essentiels pour gérer votre activité d’artisan ou d'indépendant."
          buttonLabel="C'est ça qu'il me faut"
          setModalOpen={setModalOpen}
        >
          <ul>
            <IconList
              imageSrc=""
              listText="Activez notre intelligence artificielle dédiée à l’analyse de toitures : mesure automatique, détection des matériaux (ardoise, tuile, zinc…), estimation des pentes, identification des dégâts et des réparations. Suivi facilité pour vos clients, 20 diagnostics inclus."
            />
            <IconList
              imageSrc=""
              listText="Installer notre outil sur votre site internet et offrez à vos prospects la possibilité d’évaluer en toute autonomie leurs toitures."
            />
            <IconList imageSrc="" listText="Intégrez la communauté des couvreurs BIRDIA et recevez des chantiers autour de chez vous." />
            <IconList imageSrc="" listText="Support 7 jours sur 7." />
          </ul>
        </OfferCard>
      </SwiperSlide>
      <SwiperSlide>
        <OfferCard
          imageSrc={Developpement}
          offer="Le Sur-mesure"
          sectorActivity="Collectivités, Assureurs"
          cardText="Professionnel du bâti (Foncière, Diagnostiqueur, OPH, etc)"
          buttonLabel="C'est plutôt ça qu'il me faut"
          setModalOpen={setModalOpen}
        >
          <ul>
            <IconList
              imageSrc=""
              listText="Activez notre intelligence artificielle dédiée à l’analyse de toitures : mesure automatique, détection des matériaux (ardoise, tuile, zinc…), estimation des pentes, identification des dégâts et des réparations. Suivi facilité pour vos clients, 20 diagnostics inclus."
            />
            <IconList
              imageSrc=""
              listText="Installer notre outil sur votre site internet et offrez à vos prospects la possibilité d’évaluer en toute autonomie leurs toitures."
            />
            <IconList imageSrc="" listText="Intégrez la communauté des couvreurs BIRDIA et recevez des chantiers autour de chez vous" />
            <IconList imageSrc="" listText="Support 7 jours sur 7." />
          </ul>
        </OfferCard>
      </SwiperSlide>
    </Swiper>
  );
}

OfferSwiper.propTypes = {
  setModalOpen: PropTypes.func.isRequired,
};
