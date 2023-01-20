import React from 'react'
import LogoFrenchTech from '../../assets/img/Logo_French_Tech.png';
import EiffelTower from '../../assets/img/eiffel-tower.png';
import CompanyLogo from '../../assets/img/company-logo.png';
import { ImageCard } from '../../../../common/components/ImageCard/ImageCard';

export function Distinction() {
    return (
        <section className='distinction'>
            <div style={{ paddingBlock: '4rem' }}>
                <h2 className='distinction__title'>Nos distinctions</h2>
                <div className='distinction__container bd-container'>
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
                        cardText="Enregistrée à l'Orias et basée à Paris." />
                    <div className='distinction__item'>
                        <img
                            alt="companyLogo"
                            src={CompanyLogo}
                            height='110'
                            style={{ height: "110px" }}
                            loading="lazy"
                        />
                        <p style={{
                            marginTop: '2rem'
                        }}>
                            Nos partenaires.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
