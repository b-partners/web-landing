import React from 'react';
import * as PropTypes from 'prop-types';

import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation} from 'swiper';
import 'swiper/swiper-bundle.css';

import {OfferCard} from '../../../../../common/components/OfferCard';
import {IconList} from '../../../../../common/components/IconList';

import Essentiel from '../../../assets/img/essentiel.png';
import Developpement from '../../../assets/img/developpement.png';

SwiperCore.use([Navigation]);

export function OfferSwiper(props) {
    const {setModalOpen} = props;
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
            <SwiperSlide style={{textAlign: 'center'}}>
                <OfferCard
                    imageSrc={Essentiel}
                    offer="L'Essentiel"
                    price="7"
                    cardText="Tous les services essentiels pour gérer votre activité d’artisan ou d'indépendant."
                    buttonLabel="C'est ça qu'il me faut"
                    setModalOpen={setModalOpen}
                >
                    <ul>
                        <IconList
                            imageSrc=""
                            listText="Activation de l'assistant virtuel pour développer votre activité, relance client,
                            identification prospect et nouveaux chantiers."
                        />
                        <IconList
                            imageSrc=""
                            listText="Initiez la collecte de vos encaissements par QR code, Mails ou SMS en 1 clic.
                            (Mail / QR code: 1000€ inclus puis 1,5% SMS: 1,5% et 0,40€ par SMS)"
                        />
                        <IconList
                            imageSrc=""
                            listText="Bénéficier de notre outil de devis, facturation, comptabilité automatisée.
                            (1 Utilisateur)"
                        />
                        <IconList
                            imageSrc=""
                            listText="Inclus services banques en ligne 
                            (1 compte pro, 1 RIB FR/ Accès mobile et Internet)."
                        />
                        <IconList
                            imageSrc=""
                            listText="Support 7 jours sur 7."
                        />
                        <IconList
                            imageSrc=""
                            listText="Carte Mastercard physique incluse (puis 5€HT/carte/mois)."
                        />
                        <IconList
                            imageSrc=""
                            listText="Initiation de virements et de prélévements inclus (puis 0,40€ au-delà).
                            (20 offerts)"
                        />
                        <IconList
                            imageSrc=""
                            listText="Commissions de mouvements sur montants initiés depuis BPartners, 
                            exécuté par notre partenaire Swan.io.
                            (60K€/an offerts puis 0,15%)"
                        />
                        <IconList
                            imageSrc=""
                            listText="Retraits en France ou à l’étranger par Carte."
                        />
                        <IconList
                            imageSrc=""
                            listText="Paiements hors zone euro (en devise)."
                        />
                    </ul>
                </OfferCard>
            </SwiperSlide>
            <SwiperSlide>
                <OfferCard
                    imageSrc={Developpement}
                    offer="Developpement"
                    price="19"
                    cardText="Tous les services pour développer et gérer votre activité d’artisan ou d'indépendant."
                    buttonLabel="C'est plutôt ça qu'il me faut"
                    setModalOpen={setModalOpen}
                >
                    <ul>
                        <IconList
                            imageSrc=""
                            listText="Activation de l'assistant virtuel pour développer votre activité, relance client,
                            identification prospect et nouveaux chantiers."
                        />
                        <IconList
                            imageSrc=""
                            listText="Initiez la collecte de vos encaissements par QR code, Mails ou SMS en 1 clic.
                            Mail / QR code: 1000€ inclus puis 0,99% SMS: 0,99% et 0,30€ par SMS"
                        />
                        <IconList
                            imageSrc=""
                            listText="Bénéficier de notre outil de devis, facturation, comptabilité automatisée.
                            (1 Utilisateur)"
                        />
                        <IconList
                            imageSrc=""
                            listText="Inclus services banques en ligne 
                            (1 compte pro, 1 RIB FR/ Accès mobile et Internet)."
                        />
                        <IconList
                            imageSrc=""
                            listText="Support 7 jours sur 7."
                        />
                        <IconList
                            imageSrc=""
                            listText="Carte Mastercard physique incluse (puis 5€HT/carte/mois)."
                        />
                        <IconList
                            imageSrc=""
                            listText="Cartes virtuelles permanente incluses (puis 2€HT/carte/mois).
                            1 carte offerte"
                        />
                        <IconList
                            imageSrc=""
                            listText="Cartes virtuelles à utilisation unique incluses.
                            2 cartes offertes puis 1€HT/carte"
                        />
                        <IconList
                            imageSrc=""
                            listText="Initiation de virements et de prélévements inclus (puis 0,40€ au-delà).
                            (50 offerts)"
                        />
                        <IconList
                            imageSrc=""
                            listText="Commissions de mouvements sur montants initiés depuis BPartners, 
                            exécuté par notre partenaire Swan.io.
                            (150K€/an offerts puis 0,15%)"
                        />
                        <IconList
                            imageSrc=""
                            listText="Retraits en France ou à l’étranger par Carte."
                        />
                        <IconList
                            imageSrc=""
                            listText="Paiements hors zone euro (en devise)."
                        />
                    </ul>
                </OfferCard>
            </SwiperSlide>
        </Swiper>
    )
}

OfferSwiper.propTypes = {
    setModalOpen: PropTypes.func.isRequired
}