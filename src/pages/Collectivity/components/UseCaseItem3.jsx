import React from 'react';

import CRes1 from "../assets/img/CLIMAT_RESILIENCE/CLIMAT_RESILIENCE_1.png"
import CRes2 from "../assets/img/CLIMAT_RESILIENCE/CLIMAT_RESILIENCE_2.png"
import CRes3 from "../assets/img/CLIMAT_RESILIENCE/CLIMAT_RESILIENCE_3.png"
import CRes4 from "../assets/img/CLIMAT_RESILIENCE/CLIMAT_RESILIENCE_4.png"
import CRes5 from "../assets/img/CLIMAT_RESILIENCE/CLIMAT_RESILIENCE_5.png"
import CRes6 from "../assets/img/CLIMAT_RESILIENCE/CLIMAT_RESILIENCE_6.jpg"
import CRes7 from "../assets/img/CLIMAT_RESILIENCE/CLIMAT_RESILIENCE_7.jpg"

export function UseCaseItem3() {
    return (
        <div className="usecase__item">
            <h2 className='logo-color'>SUIVI VEGETALISATION - CLIMAT RESILIENCE</h2>
            <div className='usecase__item-section1'>
                <article className='article'>
                    <h3>Etape 1 : Détection automatique brute</h3>
                </article>
                <aside>
                    <div className='box-img-row'>
                        <div className='usecase-box-img'>
                            <img src={CRes1} alt='AwsStartups Logo'/>
                        </div>
                        <div className='usecase-box-img'>
                            <img src={CRes2} alt='AwsStartups Logo'/>
                        </div>
                        <div className='usecase-box-img'>
                            <img src={CRes3} alt='AwsStartups Logo'/>
                        </div>
                    </div>
                </aside>
            </div>
            <div className='usecase__item-section1'>
                <article className='article'>
                    <h3>Etape 2 : Post-traitement Détection d'anomalie et Géométrisation</h3>
                </article>
                <aside>
                    <div className='box-img-row'>
                        <div className='usecase-box-img'>
                            <img src={CRes4} alt='AwsStartups Logo'/>
                        </div>
                        <div className='usecase-box-img' style={{display: 'flex', justifyContent: 'center'}}>
                            <img src={CRes5} alt='AwsStartups Logo'
                                 style={{maxHeight: '250px'}}/>
                        </div>
                        <div className='usecase-box-img'>
                            <img src={CRes6} alt='AwsStartups Logo'/>
                        </div>
                    </div>
                </aside>
            </div>
            <div className='usecase__item-section1'>
                <article className='article'>
                    <h3>Etape 3 : Mapping des essences, analyse de l'évolution des arbres, végétation</h3>
                </article>
                <aside>
                    <div className='usecase-box-img' style={{marginRight: '3.5rem'}}>
                        <img src={CRes7} alt='AwsStartups Logo'/>
                    </div>
                    <div className='box-img-col'>
                        <ol className="zan_order-list">
                            <li>Comptabilisation des espaces arborés et des arbres individualisés.</li>
                            <li>Mesure de l'artificialisation.</li>
                            <li>Comparaison temporelle, évolution.</li>
                            <li>Ajout analyse images obliques.</li>
                            <li>Ajouter des essences d'arbres.</li>
                        </ol>
                    </div>
                </aside>
            </div>
        </div>
    );
}