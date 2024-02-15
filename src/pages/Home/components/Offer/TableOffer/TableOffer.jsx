import React from 'react';
import * as PropTypes from 'prop-types';

import {Button} from '../../../../../common/components/Button';
import Essentiel from '../../../assets/img/essentiel.png';
import Developpement from '../../../assets/img/developpement.png';
import {RedundantTableLine} from './RedundantTableLine';

export function TableOffer(props) {
    const {setModalOpen} = props;

    const handleOpenModal = () => {
        setModalOpen(true);
    }

    return (
        <div className='offer__table-row bd-container'>
            <div className='offer__table-first__column'>
                <div className='offer__table-header'>
                    <h2 className='table__title'>Nos Offres</h2>
                </div>
                <div className='table-body-cell'>
                    <p>
                        Activation de notre intelligence artificielle qui analyse les toitures
                        de vos prospects et organise le suivi des toitures de vos clients existants.
                    </p>
                </div>
                <div className='table-body-cell'>
                    <p>
                        Outil de devis/facturation personnalisé, gestion des acomptes,relance impayés CRM,
                        gestion des produits.
                    </p>
                </div>
                <div className='table-body-cell'>
                    <p>
                        Initiez la collecte de vos encaissements instantannément par QR code,
                        Mails ou SMS en 1 clic.
                        Lien de paiement intégré à la facture.
                    </p>
                </div>
                <div className='table-body-cell'>
                    <p>
                        Connectez votre compte bancaire pour visualiser votre trésorerie en continu.
                    </p>
                </div>
                <div className='table-body-cell'>
                    <p>
                        Support 7 jours sur 7.
                    </p>
                </div>
            </div>
            <div className='offer__table-column'>
                <div className='offer__table-header'>
                    <img src={Essentiel} alt="essentiel" className='offer-image'/>
                    <h2>L'Essentiel</h2>
                    <div className="offer__category">
                        <h3>Artisan & indépendant</h3>
                    </div>
                    <p className='offer-description'>
                        Tous les services essentiels pour gérer votre activité d'artisan ou d'indépendant
                    </p>
                    <span className='offer-price'>49€</span>/mois

                </div>
                <div className='table-body-cell'>
                    <p className='text-center'>
                        <i className="fa fa-check" aria-hidden="true"/><br/>
                        1 métier & 1 utilisateur
                    </p>
                </div>
                <div className='table-body-cell'>
                    <p className='text-center'>
                        <i className="fa fa-check" aria-hidden="true"/>
                    </p>
                </div>
                <div className='table-body-cell'>
                    <p className='text-center'>
                        <i className="fa fa-check" aria-hidden="true"/><br/>
                        0,99% commission
                    </p>
                </div>
                <RedundantTableLine/>
                <Button
                    type='submit'
                    id="offer-button-1"
                    label="C'est ça qu'il me faut"
                    preset="registration-button"
                    onClick={() => handleOpenModal()}
                />
            </div>
            <div className='offer__table-column'>
                <div className='offer__table-header'>
                    <img src={Developpement} alt="essentiel" className='offer-image'/>
                    <h2>Le Sur-mesure</h2>
                    <div className="offer__category">
                        <h3>Grandes entreprises artisanales, franchises, collectivités</h3>
                    </div>
                    <p className='offer-description'>
                        Tous les services pour franchir un pallier dans votre croissance et automatiser votre forte
                        activité
                    </p>
                    <div
                        className='contact-button'
                        id="contact-offer-1"
                        role="button"
                        tabIndex="0"
                        onClick={() => handleOpenModal()}
                        onKeyPress={() => {
                        }}
                    >
                        Contactez-nous
                    </div>
                </div>
                <div className='table-body-cell'>
                    <p className='text-center'>
                        <i className="fa fa-check" aria-hidden="true"/><br/>
                        Avec personnalisation & branchement, plusieurs métiers et utilisateurs
                    </p>
                </div>
                <div className='table-body-cell'>
                    <p className='text-center'>
                        <i className="fa fa-check" aria-hidden="true"/>
                    </p>
                </div>
                <div className='table-body-cell'>
                    <p className='text-center'>
                        <i className="fa fa-check" aria-hidden="true"/><br/>
                        en fonction du volume
                    </p>
                </div>
                <RedundantTableLine/>
                <Button
                    type='submit'
                    id="offer-button-2"
                    label="C'est plutôt ça qu'il me faut"
                    preset="registration-button"
                    onClick={() => handleOpenModal()}
                />
            </div>
        </div>
    )
}

TableOffer.propTypes = {
    setModalOpen: PropTypes.func.isRequired
};