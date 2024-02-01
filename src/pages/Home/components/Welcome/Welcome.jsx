/* eslint-disable jsx-a11y/media-has-caption */

/* eslint-disable max-len */
import React from 'react';

import Paper from '@mui/material/Paper';

import {IconList} from '../../../../common/components/IconList';
import '../../../../common/components/Modal/Modal.css';
import '../../assets/css/forms.css';
import '../../assets/css/spinner.css';
import CashRegisterEuro from '../../assets/img/cash-register-euro.webp';
import PaidBill from '../../assets/img/paid-bill.webp';
import QrCode from '../../assets/img/qr-code-ext.webp';
import VirtualBot from '../../assets/img/virtual-bot.webp';
import WelcomeSectionBg from '../../assets/img/welcome-waves.webp';
import AnnotatorDevices from '../../assets/img/annotator-devices.png';

export function Welcome () {

    return (
        <section className="home" id="home">
            <img
                src={WelcomeSectionBg}
                alt="waves-home"
                style={{
                    position: 'absolute',
                    bottom: '-.18rem',
                    zIndex: '0',
                }}
            />
            <p className="welcoming">Bienvenue sur BPartners</p>
            <h1 className="home__title bd-container">
                L'assistant qui prend de la hauteur
                <br/>
                <span style={{fontWeight: '600'}}>
          et analyse vos toitures <br/> sur image HD.
        </span>
            </h1>
            <div className="home__container bd-container bd-grid">
                <div className="home__data">
                    <div className="home__list">
                        <div className="home__list__col">
                            <ul>
                                <IconList
                                    imageSrc={VirtualBot}
                                    listText="Analysez les toits de vos prospects automatiquement sur image HD 5 cm."
                                />
                                <IconList
                                    imageSrc={QrCode}
                                    listText="Gagnez en réactivité avec des devis précis et techniques."
                                />
                            </ul>
                        </div>
                        <div className="home__list__col">
                            <ul>
                                <IconList imageSrc={PaidBill} listText="Détectez, mesurez et qualifiez vos chantiers en 1 clic."/>
                                <IconList
                                    imageSrc={CashRegisterEuro}
                                    listText="Gagnez de nouveaux clients, facturez et encaissez."
                                />
                            </ul>
                        </div>
                    </div>
                    <Paper
                        elevation={5}
                        className="home-registration-form"
                        sx={{
                            padding: '20px',
                        }}
                    >
                        <h2 className="registration-title">
                            Curieux de voir comment gagner du temps et de nouveaux clients ? <br/>
                        </h2>
                        <span>
                            On vous montre ça en moins de 15 minutes dans une démo personnalisée.
                        </span>
                        <div className="home-registration-mail">
                            <button className='home-registration-button' type='button'>
                                <a
                                    href='https://meet.brevo.com/bpartnersartisans/reunion-de-15-minutes'
                                    rel='noreferrer'
                                    target='_blank'
                                >
                                    RÉSERVER MA DÉMO
                                </a>
                            </button>
                        </div>
                    </Paper>
                </div>
                <div className="bpartners__video">
                    <img
                        src={AnnotatorDevices}
                        alt="annotator-devices"
                        height="270"
                        width="450"
                    />
                    <br/>
                    <div
                        style={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-evenly',
                        }}
                    >
                        <a href="https://play.google.com/store/apps/details?id=com.bpartnersmobile&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
                            <img
                                alt="Disponible sur Google Play"
                                src="https://play.google.com/intl/en_us/badges/static/images/badges/fr_badge_web_generic.png"
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