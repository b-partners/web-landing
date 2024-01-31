import React from 'react';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import BpPhone from '../../Home/assets/img/bp-phone.png';

export function Description() {
    return (
        <section className="description" id="description">
            <div className="description__container bd-container">
                <div className="description__col1">
                    <h2 className="description__title">À propos</h2>
                    <p className="description__first-paragraph">
                        Nous sommes BPartners SAS, l'assistant intelligent qui accélère la croissance et les
                        encaissements
                        des artisans et indépendants français.
                    </p>
                    <p className="description__second-paragraph">
                        Nous avons développé une <b>solution de gestion d’entreprise unifiée pensée</b> avec <b>les
                        artisans pour les artisans.</b> Notre ambition est de permettre à tous les artisans :
                    </p>
                    <ul className='description__list'>
                        <li>d'automatiser leur édition de devis/factures</li>
                        <li>d'avoir un outil pour encaisser leurs clients sur mobile via QR code/Lien/sms de paiement
                        </li>
                        <li>de les soulager de la relance client ou la recherche de nouveaux clients.</li>
                        <li>(pour le cas des artisans couvreurs) de mettre à disposition une intelligence
                            artificielle, qui leur fait gagner
                            du temps et réduit les déplacements en analysant leurs toitures sur des images ultra HD 5 cm
                            de
                            précision.
                        </li>
                    </ul>
                </div>
                <div className="description__col2">
                    <div>
                        <LazyLoadImage
                            alt="BpPhone"
                            src={BpPhone}
                            height={200}
                            effect="blur"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
