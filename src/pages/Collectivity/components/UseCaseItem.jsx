import React from 'react';
import {IconList} from "../../../common/components/IconList";
import Zan1 from "../assets/img/ZAN/zan1.jpg";
import Zan2 from "../assets/img/ZAN/zan2.jpg";
import Zan3 from "../assets/img/ZAN/zan3.jpg";
import Zan4 from "../assets/img/ZAN/zan4.jpg";
import Zan5 from "../assets/img/ZAN/zan5.jpg";
import Zan6 from "../assets/img/ZAN/zan6.jpg";

export function UseCaseItem() {
    return (
        <div className="usecase__item">
            <div className='usecase__item-section1'>
                <article className='article'>
                    <h2 className='usecase-title'>Artificialisation - ZAN</h2>
                    <ul>
                        <IconList
                            imageSrc=''
                            listText="Comptabilisation des arbres individualisés"
                            textStyle='usecase_list-item'
                        />
                        <IconList
                            imageSrc=''
                            listText="Calcul de la surface de trottoirs imperméables"
                            textStyle='usecase_list-item'
                        />
                        <IconList
                            imageSrc=''
                            listText="Mesure de l'artificialisation et déduction du potentiel
                            de desimperméabilisation de la zone"
                            textStyle='usecase_list-item'
                        />
                        <IconList
                            imageSrc=''
                            listText="Comparaison temporelle, évolution."
                            textStyle='usecase_list-item'
                        />
                    </ul>
                    <button
                        type='button'
                        className='usecase-button button_style'>
                        Artificialisation - ZAN
                    </button>
                </article>
                <aside>
                    <div className='box-img-col'>
                        <div className='box-img-row'>
                            <div className='usecase-box-img'>
                                <img src={Zan1} alt='AwsStartups Logo'/>
                                <span>Individualisation des arbres</span>
                            </div>
                        </div>
                        <div className='box-img-row'>
                            <div className='usecase-box-img'>
                                <img src={Zan2} alt='AwsStartups Logo'/>
                                <span>Instantiation des élements de détection</span>
                            </div>
                            <div className='usecase-box-img'>
                                <img src={Zan3} alt='AwsStartups Logo'/>
                                <span>Détection des toits et des velux</span>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
            <div className='usecase__item-section2'>
                <div className='usecase-box-img'>
                    <span>   </span>
                </div>
                <div className='usecase-box-img'>
                    <img src={Zan4} alt='AwsStartups Logo' />
                    <span>Détection des toits, parkinkgs, trottoir</span>
                </div>
                <div className='usecase-box-img'>
                    <img src={Zan5} alt='AwsStartups Logo' />
                    <span>Instantiation des toits et des arbres</span>
                </div>
                <div className='usecase-box-img'>
                    <img src={Zan6} alt='AwsStartups Logo' />
                    <span>Instantiation des velux, toits et des arbres</span>
                </div>
            </div>
        </div>
    );
}
