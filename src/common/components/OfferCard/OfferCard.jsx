import React, {useState} from 'react';
import {useSwiper} from 'swiper/react';

import {Dialog, DialogActions, DialogContent} from '@mui/material';
import PropTypes from 'prop-types';

import {Button} from '../Button';
import './OfferCard.css';

export function OfferCard({imageSrc, offer, sectorActivity, price, cardText, buttonLabel, setModalOpen, children}) {
    const [openModalInfo, setOpenModalInfo] = useState(false);
    const swiper = useSwiper();
    return (
        <>
            <div className="offer-card">
                <div>
                    <img src={imageSrc} alt={imageSrc} className="card-offer-image"/>
                </div>
                <div className="offer-card__info">
                    <h2>
                        {offer}
                    </h2>
                    <h3>{sectorActivity}</h3>
                    {price && <h4>
                        <span
                            style={{fontSize: '1.8rem', color: 'rgba(156, 37, 90, 1)'}}>
                            {price}€
                        </span>/mois
                    </h4>}
                </div>
                <p
                    style={{
                        marginBlock: '1.7rem',
                        fontWeight: '400',
                        padding: '0rem 1.5rem',
                        minHeight: '95.05px',
                    }}
                >
                    {cardText}
                </p>
                <Button type="submit" label={buttonLabel} preset="offer__card__button"
                        onClick={() => setModalOpen(true)}/>
                <Button type="submit" label="+ d'infos" preset="more-info__button"
                        onClick={() => setOpenModalInfo(true)}/>
            </div>
            <Dialog open={openModalInfo} onClose={() => setOpenModalInfo(false)}>
                <DialogContent>{children}</DialogContent>
                <DialogActions
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Button
                        type="submit"
                        label={buttonLabel}
                        preset="offer-registration-button"
                        onClick={() => setModalOpen(true)}
                    />
                    {!swiper.isEnd && (
                        <Button
                            onClick={() => {
                                setOpenModalInfo(false);
                                swiper.slideNext();
                            }}
                            label="Voir l’offre supplémentaire"
                            preset="btn-secondary"
                        />
                    )}
                </DialogActions>
            </Dialog>
        </>
    );
}

OfferCard.propTypes = {
    imageSrc: PropTypes.string,
    offer: PropTypes.string,
    sectorActivity: PropTypes.string,
    price: PropTypes.string,
    cardText: PropTypes.string,
    buttonLabel: PropTypes.string,
    setModalOpen: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,
};

OfferCard.defaultProps = {
    imageSrc: 'random image',
    offer: 'image',
    sectorActivity: 'artisan',
    price: '',
    cardText: 'Card text',
    buttonLabel: 'primary',
};
