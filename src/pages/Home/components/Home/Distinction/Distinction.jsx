import React from 'react'
import LogoFrenchTech from '../../../assets/img/Logo_French_Tech.png';
import EiffelTower from '../../../assets/img/eiffel-tower.png';
import Ovalie from '../../../assets/img/ovalie.png';

export function Distinction() {
    return (
        <section className='distinction section bd-container'>
            <h2 className='distinction__title'>Nos distinctions</h2>
            <div className='distinction__container'>
                <div className='distinction__item'>
                    <span>+De
                        <p style={{ fontSize: '3.85rem' }}>56</p>
                    </span>
                    <p>
                        métiers de l'artisanat nous ont rejoint
                    </p>
                </div>
                <div className='distinction__item'>
                    <img alt="mobile_image" src={LogoFrenchTech} style={{ height: "120px" }} />
                    <p>
                        La french tech nous soutient dans notre projet
                    </p>
                </div>
                <div className='distinction__item'>
                    <img alt="mobile_image" src={EiffelTower} style={{ height: "120px" }} />
                    <p>
                        Basé à l'Orias et basé à Paris 18.
                    </p>
                </div>
                <div className='distinction__item'>
                    <img alt="mobile_image" src={Ovalie} style={{ height: "120px" }} />
                    <p>
                        Notre partenaire
                    </p>
                </div>
            </div>
        </section>
    )
}
