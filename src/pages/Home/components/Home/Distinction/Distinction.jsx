import React from 'react'
import LogoFrenchTech from '../../../assets/img/Logo_French_Tech.png';
import EiffelTower from '../../../assets/img/eiffel-tower.png';
import Auvalie from '../../../assets/img/auvalie.jpg';
import Swan from '../../../assets/img/swan.png';
import Bridge from '../../../assets/img/bridge.png';
import Fintecture from '../../../assets/img/fintecture.png';
import { ImageCard } from '../../../../../common/components/ImageCard/ImageCard';

export function Distinction() {
    return (
        <section className='distinction section bd-container'>
            <h2 className='distinction__title'>Nos distinctions</h2>
            <div className='distinction__container'>
                <div className='distinction__item'>
                    <p style={{ fontSize: '4.9rem' }}>56</p>
                    <p>
                        métiers de l'artisanat ont été testés par BPartners.
                    </p>
                </div>
                <ImageCard
                    imageSrc={LogoFrenchTech}
                    alt="frenchTech logo"
                    cardText="Intégration du programme French Tech Emergence BPI
                     de recherche en Intelligence Artificielle." />
                <ImageCard
                    imageSrc={EiffelTower}
                    alt="EiffelTower"
                    cardText="Enregistrée à l'Orias et basée Paris." />
                <div className='distinction__item'>
                    <div className='company__logo__container'>
                        <img src={Auvalie} alt="auvalie-logo" className='company-main-logo' />
                        <div className='flex-inline-container'>
                            <img src={Swan} alt="swan-logo" className='company-logo' />
                            <img src={Bridge} alt="bridge-logo" className='company-logo' />
                        </div>
                        <img src={Fintecture} alt="fintecture-logo" className='company-main-logo' />
                    </div>
                    <p>
                        Nos partenaires
                    </p>
                </div>
            </div>
        </section>
    )
}
