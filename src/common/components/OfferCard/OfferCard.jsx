import React from 'react';
import PropTypes from 'prop-types';
import './OfferCard.css';
import { Button } from '../Button';

export function OfferCard({ imageSrc, offer, price, cardText, buttonLabel, setModalOpen }) {
    return (
        <div className='offer-card'>
            <div>
                <img src={imageSrc} alt={imageSrc} className='offer-image' />
            </div>
            <h2>
                {offer} <br />
                <span style={{ fontSize: '1.5rem' }}>{price}€</span>/mois
            </h2>
            <p style={{ marginBlock: '1.7rem', fontWeight: '700', padding: '0rem 1.5rem' }}>
                {cardText}
            </p>
            <Button
                type='submit'
                label={buttonLabel}
                preset="offer__card__button"
                onClick={() => setModalOpen(true)}
            />
            <Button type='submit' label="+ d'infos" preset="more-info__button" />
        </div>
    )
}

OfferCard.propTypes = {
    imageSrc: PropTypes.string,
    offer: PropTypes.string,
    price: PropTypes.string,
    cardText: PropTypes.string,
    buttonLabel: PropTypes.string,
    setModalOpen: PropTypes.func.isRequired
};

OfferCard.defaultProps = {
    imageSrc: 'random image',
    offer: 'image',
    price: '€',
    cardText: 'Card text',
    buttonLabel: 'primary'
};