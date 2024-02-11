/* eslint-disable max-len */
import React from "react";

export function Offer () {
    return (
        <section id='offer' className='bd-container'>
            <div className='section-container'>
                <h1>Nos offres</h1>
                <p>Des modèles prêts à l’emploi et des itérations sans limites...</p>
                <div className='offer'>
                    <div className='offer_item'>
                        <h2 className='text-center subtitle'>Vous disposez déjà des images de votre territoire:</h2>
                        <ul className='offer_item-content'>
                            <li>Détectez les objets déjà disponible dans la bibliothèque BPartners (toits, piscine, arbres,
                                panneaux solaires, espaces verts, surfaces agricoles)
                            </li>
                        </ul>
                        <span className='add-object'>+ AJOUTEZ vos propres objets d‘intérêts vos propres objets d‘intérêt</span>
                        <button className='button_style' type='button'>
                            <a
                                href='https://meet.brevo.com/bpartnersartisans/detection-dobjets-par-intelligence-artificielle-bpartners'
                                rel='noreferrer'
                                target='_blank'
                            >
                                CONTACTEZ-NOUS
                            </a>
                        </button>
                    </div>
                    <div className='offer_item'>
                        <h2 className='text-center subtitle'>Vous ne disposez PAS d’images de votre territoire:</h2>
                        <ul className='offer_item-content'>
                            <li>Nous collectons les images de votre territoire.</li>
                            <li>Détectez les objets déjà disponible dans la bibliothèque BPartners (toits, piscine, arbres,
                                panneaux solaires, espaces verts, surfaces agricoles)
                            </li>
                        </ul>
                        <span className='add-object'>+ AJOUTEZ vos propres objets d‘intérêts vos propres objets d‘intérêt</span>
                        <button className='button_style' type='button'>
                            <a
                                href='https://meet.brevo.com/bpartnersartisans/detection-dobjets-par-intelligence-artificielle-bpartners'
                                rel='noreferrer'
                                target='_blank'
                            >
                                CONTACTEZ-NOUS
                            </a>
                        </button>
                    </div>
                </div>
                <h3 className='text-center trust-subtitle'>Ils nous font déjà confiance</h3>
                <ul className='award_list'>
                    <li>Entreprise by Commissariat à l’Energie Atomique “CEA”, labélisée French Tech Seed et Deeptech par BPI
                        France pour notre IA souveraine.
                    </li>
                    <li>Collectivités françaises (exécution sur une agglomération de 100Km2 sur plusieurs objets d‘intérêts).
                    </li>
                    <li>Lauréat de l'entreprise innovante 2022 par CCI & Banque Populaire IDF.</li>
                </ul>
            </div>
        </section>
    );
};