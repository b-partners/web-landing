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
          sectorActivity="Artisan & indépendant"
          price="49"
          cardText="Tous les services essentiels pour gérer votre activité d’artisan ou d'indépendant."
          buttonLabel="C'est ça qu'il me faut"
          setModalOpen={setModalOpen}
        >
          <ul>
            <IconList
              imageSrc=""
              listText="Activation de notre intelligence artificielle qui analyse les toitures de vos
                            prospects et organise le suivi des toitures de vos clients existants."
            />
            <IconList
              imageSrc=""
              listText="Outil de devis/facturation personnalisé, gestion des acomptes,relance impayés CRM,
                             gestion des produits."
            />
            <IconList
              imageSrc=""
              listText="Initiez la collecte de vos encaissements instantannément par QR code,
                             Mails ou SMS en 1 clic. Lien de paiement intégré à la facture. (0,99%)"
            />
            <IconList imageSrc="" listText="Connectez votre compte bancaire pour visualiser votre trésorerie en continu." />
            <IconList imageSrc="" listText="Support 7 jours sur 7." />
          </ul>
        </OfferCard>
      </SwiperSlide>
      <SwiperSlide>
        <OfferCard
          imageSrc={Developpement}
          offer="Le Sur-mesure"
          sectorActivity="Grandes entreprises artisanales, franchises, collectivités"
          cardText="Tous les services pour franchir un pallier dans votre croissance et
                     automatiser votre forte activité"
          buttonLabel="C'est plutôt ça qu'il me faut"
          setModalOpen={setModalOpen}
        >
          <ul>
            <IconList
              imageSrc=""
              listText="Activation de notre Intelligence artificielle qui génère des prospects en temps
                             réel pour développer votre activité et obtenir de nouveaux clients.
                             (Avec personnalisation & branchement, plusieurs métiers et utilisateurs)"
            />
            <IconList
              imageSrc=""
              listText="Outil de devis/facturation personnalisé, gestion des acomptes,relance impayés CRM,
                             gestion des produits."
            />
            <IconList
              imageSrc=""
              listText="Initiez la collecte de vos encaissements instantannément par QR code,
                             Mails ou SMS en 1 clic. Lien de paiement intégré à la facture. (En fonction du volume)"
            />
            <IconList imageSrc="" listText="Connectez votre compte bancaire pour visualiser votre trésorerie en continu." />
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
