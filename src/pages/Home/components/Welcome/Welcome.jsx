/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable max-len */
import React from 'react';
import {makeStyles} from '@mui/styles';

import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import * as PropTypes from 'prop-types';

import {Button} from '../../../../common/components/Button';
import {IconList} from '../../../../common/components/IconList';
import '../../../../common/components/Modal/Modal.css';
import '../../assets/css/forms.css';
import '../../assets/css/spinner.css';
import CashRegisterEuro from '../../assets/img/cash-register-euro.webp';
import PaidBill from '../../assets/img/paid-bill.webp';
import QrCode from '../../assets/img/qr-code-ext.webp';
import VirtualBot from '../../assets/img/virtual-bot.webp';
import WelcomeSectionBg from '../../assets/img/welcome-waves.webp';

export function Welcome(props) {
    const {onEmailChange, onEmailRegistration, user} = props;

    const useStyles = makeStyles({
        field: {
            width: '60%',
            height: 'inherit',
            overflow: 'hidden',
            borderRadius: '25px 0px 0px 25px'
        },
    });

    const classes = useStyles();

    return (
        <section className="home" id="home">
            <img
                src={WelcomeSectionBg}
                alt=" "
                style={{
                    position: 'absolute',
                    bottom: '-.18rem',
                    zIndex: '0'
                }}
            />
            <p className='welcoming'>Bienvenue sur BPartners</p>
            <h1 className="home__title bd-container">
                L'assistant intelligent qui accélère<br/>
                <span style={{fontWeight: '600'}}>
          la croissance des artisans et <br/> indépendants français.
        </span>
            </h1>
            <div className="home__container bd-container bd-grid">
                <div className="home__data">
                    <div className="home__list">
                        <div className="home__list__col">
                            <ul>
                                <IconList imageSrc={VirtualBot}
                                          listText="Générez de nouveaux clients grâce à notre assistant commercial intelligent."/>
                                <IconList imageSrc={QrCode}
                                          listText="Encaissez vos clients partout sur mobile ou à distance en 1 clic."/>
                            </ul>
                        </div>
                        <div className="home__list__col">
                            <ul>
                                <IconList
                                    imageSrc={PaidBill}
                                    listText="Editez vos devis et factures facilement."
                                />
                                <IconList
                                    imageSrc={CashRegisterEuro}
                                    listText="Initiez des virements depuis votre compte pro de paiement FR."
                                />
                            </ul>
                        </div>
                    </div>
                    <Paper elevation={5} className="home-registration-form"
                           sx={{
                               padding: '20px'
                           }}
                    >
                        <h2 className="registration-title">
                            Renseignez votre mail et <br/>
                            rejoignez les artisans de demain.
                        </h2>
                        <div className='home-registration-mail'>
                            <TextField
                                className={classes.field}
                                name="email"
                                label="Email"
                                type="mail"
                                variant="filled"
                                onChange={onEmailChange}
                                value={user && user.email}
                                required
                            />
                            <Button
                                type="button"
                                id="registration-button-1"
                                label="Ça m'intéresse"
                                preset="home-registration-button"
                                onClick={onEmailRegistration}
                            />
                        </div>
                    </Paper>
                </div>
                <div className='bpartners__video'>
                    <iframe
                        title="bpartners_video"
                        width="450"
                        height="270"
                        className="bp-description-video"
                        id="bpvideo-1"
                        src="https://www.youtube.com/embed/a38imldPQYc?autoplay=0"
                        frameBorder="0"
                        allowFullScreen
                    />
                    <br/>
                    <div style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-evenly'
                    }}>
                        <a href='https://play.google.com/store/apps/details?id=com.bpartnersmobile&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                            <img
                                alt='Disponible sur Google Play'
                                src='https://play.google.com/intl/en_us/badges/static/images/badges/fr_badge_web_generic.png'
                            />
                        </a>
                        <a href="https://apps.apple.com/us/app/bpartners/id1668044300?itsct=apps_box_badge&amp;itscg=30200">
                            <img
                                src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/fr-fr?size=250x83&amp;releaseDate=1680220800"
                                alt="Télécharger sur l'App Store"
                                style={{
                                    borderRadius: '5px',
                                    height: '45px',
                                    width: 'auto',
                                }}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

Welcome.propTypes = {
    user: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        society: PropTypes.string,
        phone: PropTypes.string,
        email: PropTypes.string,
    }).isRequired,
    onEmailChange: PropTypes.func.isRequired,
    onEmailRegistration: PropTypes.func.isRequired,
};
