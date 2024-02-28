import React from 'react';

import TZan1 from "../assets/img/ZAN/Table-ZAN/zan1.jpg"
import TZan2 from "../assets/img/ZAN/Table-ZAN/zan2.jpg";
import TZan3 from "../assets/img/ZAN/Table-ZAN/zan3.jpg";
import TZan4 from "../assets/img/ZAN/Table-ZAN/zan4.jpg";
import TZan5 from "../assets/img/ZAN/Table-ZAN/zan5.jpg";
import TZan6 from "../assets/img/ZAN/Table-ZAN/zan6.jpg";

import Zan1 from "../assets/img/ZAN/ZAN_1.jpg"
import Zan2 from "../assets/img/ZAN/ZAN_2.jpg"
import Zan3 from "../assets/img/ZAN/ZAN_3.jpg"
import Zan4 from "../assets/img/ZAN/ZAN_4.jpg"
import Zan5 from "../assets/img/ZAN/ZAN_5.jpg"
import Zan6 from "../assets/img/ZAN/ZAN_6.jpg"

export function UseCaseItem1() {
    return (
        <div className="usecase__item">
            <div className='usecase__item-section1'>
                <article className='article'>
                    <h3>Etape 1 : Détection automatique brute</h3>
                </article>
                <aside>
                    <div className='box-img-row'>
                        <div className='usecase-box-img'>
                            <img src={Zan1} alt='AwsStartups Logo'/>
                        </div>
                        <div className='usecase-box-img'>
                            <img src={Zan2} alt='AwsStartups Logo'/>
                        </div>
                        <div className='usecase-box-img'>
                            <img src={Zan3} alt='AwsStartups Logo'/>
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
                            <img src={Zan4} alt='AwsStartups Logo'/>
                        </div>
                        <div className='usecase-box-img'>
                            <img src={Zan5} alt='AwsStartups Logo'/>
                        </div>
                        <div className='usecase-box-img'>
                            <img src={Zan6} alt='AwsStartups Logo'/>
                        </div>
                    </div>
                </aside>
            </div>
            <div className='usecase__item-section1'>
                <article className='article'>
                    <h3>Etape 3 : Mesure de l'OCS, calcul du potentiel / la nécessité de désimperméabilisation</h3>
                </article>
                <aside>
                    <div className='box-img-col'>
                        <ol className="zan_order-list">
                            <li>Comptabilisation des arbres individualisés.</li>
                            <li>Calcul surface de trottoires imperméables.</li>
                            <li>Mesure de l'artificialisation et déduction du potentiel de désimperméabilisation
                                de la zone.
                            </li>
                            <li>Comparaison temporelle, évolution.</li>
                        </ol>
                        <div className='usecase-table'>
                            <div className='offer__table-row bd-container'>
                                <div className='offer__table-first__column usecase-table-column'>
                                    <div className='table-body-cell'>
                                        <b className='logo-color'>
                                            Post vérification et validation humaine
                                        </b>
                                    </div>
                                    <div className='table-body-cell'>
                                        <img src={TZan5} alt='AwsStartups Logo'/>
                                    </div>
                                    <div className='table-body-cell'>
                                        <img src={TZan6} alt='AwsStartups Logo'/>
                                    </div>
                                    <div className='table-body-cell'>
                                        <img src={TZan2} alt='AwsStartups Logo'/>
                                    </div>
                                </div>
                                <div className='offer__table-first__column usecase-table-column'>
                                    <div className='table-body-cell'>
                                        <b className='logo-color'>
                                            Geométrisation
                                        </b>
                                    </div>
                                    <div className='table-body-cell'>
                                        <img src={TZan1} alt='AwsStartups Logo'/>
                                    </div>
                                    <div className='table-body-cell'>
                                        <img src={TZan3} alt='AwsStartups Logo'/>
                                    </div>
                                    <div className='table-body-cell'>
                                        <img src={TZan4} alt='AwsStartups Logo'/>
                                    </div>
                                </div>
                                <div className='offer__table-first__column usecase-table-column'>
                                    <div className='table-body-cell'>
                                        <b className='logo-color'>
                                            Calcul du taux d'artificialisation de la dalle
                                        </b>
                                    </div>
                                    <div className='table-body-cell'>
                                        <p>
                                            86%
                                        </p>
                                    </div>
                                    <div className='table-body-cell'>
                                        <p>
                                            75%
                                        </p>
                                    </div>
                                    <div className='table-body-cell'>
                                        <p>
                                            97%
                                        </p>
                                    </div>
                                </div>
                                <div className='offer__table-first__column usecase-table-column'>
                                    <div className='table-body-cell'>
                                        <b className='logo-color'>
                                            Calcul du taux de perméabilité de la dalle
                                        </b>
                                    </div>
                                    <div className='table-body-cell'>
                                        <p>
                                            14%
                                        </p>
                                    </div>
                                    <div className='table-body-cell'>
                                        <p>
                                            25%
                                        </p>
                                    </div>
                                    <div className='table-body-cell'>
                                        <p>
                                            3%
                                        </p>
                                    </div>
                                </div>
                                <div className='offer__table-first__column usecase-table-column'>
                                    <div className='table-body-cell'>
                                        <b className='logo-color'>
                                            Potentiel / la nécessité de desimperméabilisation des trottoirs de la zone
                                            (trottoirs sans arbres, ex: 20% des trottoirs à perméabiliser)
                                        </b>
                                    </div>
                                    <div className='table-body-cell'>
                                        <p>
                                            4%
                                        </p>
                                    </div>
                                    <div className='table-body-cell'>
                                        <p>
                                            5%
                                        </p>
                                    </div>
                                    <div className='table-body-cell'>
                                        <p>
                                            14%
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}
