import React from 'react'
import LogoFrenchTech from '../../assets/img/Logo_French_Tech.png';
import EiffelTower from '../../assets/img/eiffel-tower.png';
import {ImageCard} from '../../../../common/components/ImageCard/ImageCard';

export function Distinction() {
    return (
        <section className='distinction'>
            <h2 className='section-title'>Nos distinctions</h2>
            <div className='distinction__container bd-container'>
                <div className='distinction__item'>
                    <p style={{fontSize: '4.9rem'}}>56</p>
                    <p>
                        métiers de l'artisanat ont été testés par BPartners.
                    </p>
                </div>
                <ImageCard
                    imageSrc={LogoFrenchTech}
                    alt="frenchTech logo"
                    cardText="Intégration du programme French Tech Emergence BPI
                     de recherche en Intelligence Artificielle."/>
                <ImageCard
                    imageSrc={EiffelTower}
                    alt="EiffelTower"
                    cardText="Lauréat du Concours Régional de Création d’Entreprises, CCI Paris & IDF."/>
            </div>
        </section>
    )
}
