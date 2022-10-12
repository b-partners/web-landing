import React from 'react'
import LogoFrenchTech from '../../../assets/img/Logo_French_Tech.png';
import EiffelTower from '../../../assets/img/eiffel-tower.png';
import Ovalie from '../../../assets/img/ovalie.png';
import { ImageCard } from '../../../../../common/components/ImageCard/ImageCard';

export function Distinction() {
    return (
        <section className='distinction section bd-container'>
            <h2 className='distinction__title'>Nos distinctions</h2>
            <div className='distinction__container'>
                <div className='distinction__item'>
                        <p style={{ fontSize: '3.85rem' }}>56</p>
                    <p>
                        métiers de l'artisanat ont testés BPartners
                    </p>
                </div>
                <ImageCard
                    imageSrc={LogoFrenchTech}
                    alt="frenchTech logo"
                    cardText="Intégration du programme French Tech Emergence BPI
                     de recherche en Intelligence Artificielle" />
                <ImageCard
                    imageSrc={EiffelTower}
                    alt="EiffelTower"
                    cardText="Enregistrée à l'Orias et basée Paris" />
                <ImageCard
                    imageSrc={Ovalie}
                    alt="Ovalie logo"
                    cardText="Nos partenaires" />
            </div>
        </section>
    )
}
