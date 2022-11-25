import React from 'react'
import * as PropTypes from 'prop-types';

import { Button } from '../../../../../common/components/Button';
import Essentiel from '../../../assets/img/essentiel.png';
import Developpement from '../../../assets/img/developpement.png';
import Ambitieux from '../../../assets/img/ambitieux.png';

export function TableOffer(props) {
    const { setModalOpen } = props;
    return (
        <div className='offer__table-row bd-container'>
            <div className='offer__table-first__column'>
                <div className='offer__table-header'>
                    <h2 className='table__title'>Nos Offres</h2>
                </div>
                <div className='table-body-cell'>
                    <p>
                        Activation de l'assistant virtuel pour développer votre activité, relance client,
                        identification prospect et nouveaux chantiers.
                    </p>
                </div>
                <div className='table-body-cell'>
                    <p>
                        Collecter plus rapidement vos encaissements par QR code, Mails ou SMS.
                    </p>
                </div>
                <div className='table-body-cell'>
                    <p>
                        Bénéficier de notre outil de devis, facturation, comptabilité automatisée.
                    </p>
                </div>
                <div className='table-body-cell'>
                    <p>
                        Inclus services banques en ligne (1 compte pro, 1 RIB FR/ Accès mobile et Internet).
                    </p>
                </div>
                <div className='table-body-cell'>
                    <p>
                        Support 7 jours sur 7.
                    </p>
                </div>
                <div className='table-body-cell'>
                    <p>
                        Carte Mastercard physique incluse (puis 5€HT/carte/mois).
                    </p>
                </div>
                <div className='table-body-cell'>
                    <p>
                        Cartes virtuelles permanentes incluses (puis 2€HT/carte/mois).
                    </p>
                </div>
                <div className='table-body-cell'>
                    <p>
                        Cartes virtuelles à utilisation unique incluses.
                    </p>
                </div>
                <div className='table-body-cell'>
                    <p>
                        Virements et prélévements inclus (puis 0,40€ au-delà).
                    </p>
                </div>
                <div className='table-body-cell'>
                    <p>
                        Commissions de mouvements de comptes.
                    </p>
                </div>
                <div className='table-body-cell'>
                    <p>
                        Paiements hors zone euro (en devise).
                    </p>
                </div>
            </div>
            <div className='offer__table-column'>
                <div className='offer__table-header'>
                    <img src={Essentiel} alt="essentiel" className='offer-image' />
                    <h2>L'ESSENTIEL</h2>
                    <p className='offer-description'>
                        Tous les services essentiels pour gérer votre activité d'artisan ou d'indépendant
                    </p>
                    <span className='offer-price'>7€</span>/mois
                </div>
                <div className='table-body-cell'>
                    <p className='text-center'>
                        <i className="fa fa-check" aria-hidden="true" />
                    </p>
                </div>
                <div className='table-body-cell'>
                    <p className='text-center'>
                        <i className="fa fa-check" aria-hidden="true" /><br />
                        Mail / QR code: 1000€ inclus puis 2% SMS: 2% et 0,40€ par SMS
                    </p>
                </div>
                <div className='table-body-cell'>
                    <p className='text-center'>
                        <b className='offer-important-info'>1 Utilisateur</b>
                    </p>
                </div>
                <div className='table-body-cell'>
                    <p className='text-center'>
                        <i className="fa fa-check" aria-hidden="true" />
                    </p>
                </div>
                <div className='table-body-cell'>
                    <p className='text-center'>
                        <i className="fa fa-check" aria-hidden="true" />
                    </p>
                </div>
                <div className='table-body-cell'>
                    <p className='text-center'>
                        <i className="fa fa-check" aria-hidden="true" />
                    </p>
                </div>
                <div className='table-body-cell'>
                    { }
                </div>
                <div className='table-body-cell'>
                    { }
                </div>
                <div className='table-body-cell'>
                    <p className='text-center'>
                        <i className="fa fa-check" aria-hidden="true" /><br />
                        20 offerts
                    </p>
                </div>
                <div className='table-body-cell'>
                    <p className='text-center'>
                        <b className='offer-important-info'>60K€/an offerts</b>
                        <br />puis 0,15%
                    </p>
                </div>
                <div className='table-body-cell'>
                    <p className='text-center'>
                        <i className="fa fa-check" aria-hidden="true" /><br />
                        1 € HT + 1,9 %
                    </p>
                </div>
                <Button
                    type='submit'
                    label="C'est ça qu'il me faut"
                    preset="registration-button"
                    onClick={() => setModalOpen(true)}
                />
            </div>
            <div className='offer__table-column third-column'>
                <div className='offer__table-header'>
                    <img src={Developpement} alt="essentiel" className='offer-image' />
                    <h2>DEVELOPPEMENT</h2>
                    <p className='offer-description'>
                        Tous les services pour développer et gérer votre activité d'artisan ou d'indépendant
                    </p>
                    <span className='offer-price'>19€</span>/mois
                </div>
                <div className='table-body-cell'>
                    <p className='text-center'>
                        <i className="fa fa-check" aria-hidden="true" />
                    </p>
                </div>
                <div className='table-body-cell'>
                    <p className='text-center'>
                        <i className="fa fa-check" aria-hidden="true" /><br />
                        Mail / QR code: 1000€ inclus puis 2% SMS: 1,5% et 0,30€ par SMS
                    </p>
                </div>
                <div className='table-body-cell'>
                    <p className='text-center'>
                        <b className='offer-important-info'>1 Utilisateur</b>
                    </p>
                </div>
                <div className='table-body-cell'>
                    <p className='text-center'>
                        <i className="fa fa-check" aria-hidden="true" />
                    </p>
                </div>
                <div className='table-body-cell'>
                    <p className='text-center'>
                        <i className="fa fa-check" aria-hidden="true" />
                    </p>
                </div>
                <div className='table-body-cell'>
                    <p className='text-center'>
                        <i className="fa fa-check" aria-hidden="true" />
                    </p>
                </div>
                <div className='table-body-cell'>
                    <p className='text-center'>
                        <b className='offer-important-info'>1 carte offerte</b>
                    </p>
                </div>
                <div className='table-body-cell'>
                    <p className='text-center'>
                        <b className='offer-important-info'>2 cartes offertes</b>
                        <br />puis 1€HT/carte
                    </p>
                </div>
                <div className='table-body-cell'>
                    <p className='text-center'>
                        <i className="fa fa-check" aria-hidden="true" /><br />
                        50 offerts
                    </p>
                </div>
                <div className='table-body-cell'>
                    <p className='text-center'>
                        <b className='offer-important-info'>150K€/an offerts</b>
                        <br />puis 0,15%
                    </p>
                </div>
                <div className='table-body-cell'>
                    <p className='text-center'>
                        <i className="fa fa-check" aria-hidden="true" /><br />
                        1,9 %
                    </p>
                </div>
                <Button
                    type='submit'
                    label="C'est plutôt ça qu'il me faut"
                    preset="registration-button"
                    onClick={() => setModalOpen(true)}
                />
            </div>
            <div className='offer__table-column'>
                <div className='offer__table-header'>
                    <img src={Ambitieux} alt="essentiel" className='offer-image' />
                    <h2>L'AMBITIEUX</h2>
                    <p className='offer-description'>
                        Tous les services pour franchir un pallier dans votre croissance et
                        automatiser votre activité d'artisan ou d'indépendant
                    </p>
                    <span className='offer-price'>39€</span>/mois
                </div>
                <div className='table-body-cell'>
                    <p className='text-center'>
                        <i className="fa fa-check" aria-hidden="true" /><br />
                        Avec personnalisation
                    </p>
                </div>
                <div className='table-body-cell'>
                    <p className='text-center'>
                        <i className="fa fa-check" aria-hidden="true" /><br />
                        Mail / QR code: 1000€ inclus puis 2% SMS: 0,99% et 0,20€ par SMS
                    </p>
                </div>
                <div className='table-body-cell'>
                    <p className='text-center'>
                        <b className='offer-important-info'>4 Utilisateurs</b>
                    </p>
                </div>
                <div className='table-body-cell'>
                    <p className='text-center'>
                        <b className='offer-important-info'>4 Utilisateurs</b>
                    </p>
                </div>
                <div className='table-body-cell'>
                    <p className='text-center'>
                        <i className="fa fa-check" aria-hidden="true" />
                    </p>
                </div>
                <div className='table-body-cell'>
                    <p className='text-center'>
                        <b className='offer-important-info'>4 cartes offertes</b>
                    </p>
                </div>
                <div className='table-body-cell'>
                    <p className='text-center'>
                        <b className='offer-important-info'>2 cartes offertes</b>
                    </p>
                </div>
                <div className='table-body-cell'>
                    <p className='text-center'>
                        <b className='offer-important-info'>3 cartes offertes</b>
                        <br />puis 1€HT/carte
                    </p>
                </div>
                <div className='table-body-cell'>
                    <p className='text-center'>
                        <i className="fa fa-check" aria-hidden="true" /><br />
                        100 offerts
                    </p>
                </div>
                <div className='table-body-cell'>
                    <p className='text-center'>
                        <b className='offer-important-info'>1M€/an offerts</b>
                        <br />puis 0,15%
                    </p>
                </div>
                <div className='table-body-cell'>
                    <p className='text-center'>
                        <i className="fa fa-check" aria-hidden="true" /><br />
                        5 inclus puis 1.9%
                    </p>
                </div>
                <Button
                    type='submit'
                    label="C'est exactement cela qu'il me faut"
                    preset="registration-button"
                    onClick={() => setModalOpen(true)}
                />
            </div>
        </div>
    )
}
TableOffer.propTypes = {
    setModalOpen: PropTypes.func.isRequired
};