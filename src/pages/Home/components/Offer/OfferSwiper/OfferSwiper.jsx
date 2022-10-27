import React from 'react';
import * as PropTypes from 'prop-types';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';

import { OfferCard } from '../../../../../common/components/OfferCard';

import Essentiel from '../../../assets/img/essentiel.png';
import Developpement from '../../../assets/img/developpement.png';
import Ambitieux from '../../../assets/img/ambitieux.png';

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
                    price="7"
                    cardText="Tous les services essentiels pour gérer votre activité d’artisan ou d'indépendant."
                    buttonLabel="C'est ça qu'il me faut"
                    setModalOpen={setModalOpen}
                />
            </SwiperSlide>
            <SwiperSlide>
                <OfferCard
                    imageSrc={Developpement}
                    offer="Developpement"
                    price="19"
                    cardText="Tous les services pour développer et gérer votre activité d’artisan ou d'indépendant."
                    buttonLabel="C'est plutôt ça qu'il me faut"
                    setModalOpen={setModalOpen}
                />
            </SwiperSlide>
            <SwiperSlide>
                <OfferCard
                    imageSrc={Ambitieux}
                    offer="L'Ambitieux"
                    price="39"
                    cardText="Tous les services franchir un pallier dans votre croissance
                    et automatiser votre forte activité d’artisan & d'indépendant."
                    buttonLabel="C'est exactement ça qu'il NOUS faut"
                    setModalOpen={setModalOpen}
                />
            </SwiperSlide>
        </Swiper>
    )
}
OfferSwiper.propTypes = {
    setModalOpen: PropTypes.func.isRequired
}