import React from 'react';
import * as PropTypes from 'prop-types';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';

import { OfferCard } from '../../../../../common/components/OfferCard';
import { IconList } from '../../../../../common/components/IconList';

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
                >
                    <ul>
                        <IconList
                            imageSrc=""
                            listText="Activation de l'assistant virtuel pour développer votre activité, relance client,
                            identification prospect et nouveaux chantiers."
                        />
                        <IconList
                            imageSrc=""
                            listText="Collectez plus rapidement vos encaissements par QR code, Mails ou SMS.
                            (Mail / QR code: 1000€ inclus puis 2% SMS: 2% et 0,40€ par SMS)"
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
                            listText="Supports 7 jours sur 7."
                        />
                        <IconList
                            imageSrc=""
                            listText="Carte Mastercard physique incluse (puis 5€HT/carte/mois)."
                        />
                        <IconList
                            imageSrc=""
                            listText="Virements et prélévements inclus (puis 0,40€ au-delà).
                            (20 offerts)"
                        />
                        <IconList
                            imageSrc=""
                            listText="Commissions de mouvements de comptes.
                            (60K€/an offerts puis 0,15%)"
                        />
                        <IconList
                            imageSrc=""
                            listText="Paiements hors zone euro (en devise).
                            1 € HT + 1,9 %"
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
                            listText="Collectez plus rapidement vos encaissements par QR code, Mails ou SMS.
                            Mail / QR code: 1000€ inclus puis 2% SMS: 1,5% et 0,30€ par SMS"
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
                            listText="Supports 7 jours sur 7."
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
                            listText="Virements et prélévements inclus (puis 0,40€ au-delà).
                            (50 offerts)"
                        />
                        <IconList
                            imageSrc=""
                            listText="Commissions de mouvements de comptes.
                            (150K€/an offerts puis 0,15%)"
                        />
                        <IconList
                            imageSrc=""
                            listText="Paiements hors zone euro (en devise).
                            1,9 %"
                        />
                    </ul>
                </OfferCard>
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
                >
                    <ul>
                        <IconList
                            imageSrc=""
                            listText="Activation de l'assistant virtuel pour développer votre activité, relance client,
                            identification prospect et nouveaux chantiers.(Avec personnalisation)"
                        />
                        <IconList
                            imageSrc=""
                            listText="Collectez plus rapidement vos encaissements par QR code, Mails ou SMS.
                            Mail / QR code: 1000€ inclus puis 2% SMS: 0,99% et 0,20€ par SMS"
                        />
                        <IconList
                            imageSrc=""
                            listText="Bénéficier de notre outil de devis, facturation, comptabilité automatisée.
                            (4 Utilisateurs)"
                        />
                        <IconList
                            imageSrc=""
                            listText="Inclus services banques en ligne 
                            (1 compte pro, 1 RIB FR/ Accès mobile et Internet, 4 Utilisateurs)."
                        />
                        <IconList
                            imageSrc=""
                            listText="Supports 7 jours sur 7."
                        />
                        <IconList
                            imageSrc=""
                            listText="Carte Mastercard physique incluse (puis 5€HT/carte/mois, 4 cartes offertes)."
                        />
                        <IconList
                            imageSrc=""
                            listText="Cartes virtuelles permanente incluses (puis 2€HT/carte/mois).
                            2 cartes offertes"
                        />
                        <IconList
                            imageSrc=""
                            listText="Cartes virtuelles à utilisation unique incluses.
                            3 cartes offertes puis 1€HT/carte"
                        />
                        <IconList
                            imageSrc=""
                            listText="Virements et prélévements inclus (puis 0,40€ au-delà).
                            (100 offerts)"
                        />
                        <IconList
                            imageSrc=""
                            listText="Commissions de mouvements de comptes.
                            (1M€/an offerts puis 0,15%)"
                        />
                        <IconList
                            imageSrc=""
                            listText="Paiements hors zone euro (en devise).
                            5 inclus puis 1.9%"
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