import React from 'react';
import {ImageCard} from "../../../../common/components/ImageCard";
import Auvalie from "../../assets/img/partners/auvalie.jpg";
import Bridge from "../../assets/img/partners/bridge.png";
import Fintecture from "../../assets/img/partners/fintecture.png";
import Founders from "../../assets/img/partners/founders-hub.jpg";
import Pepiniere from "../../assets/img/partners/pepiniere.jpg";
import Systematic from "../../assets/img/partners/systematic.png";

export function Partners() {
    return (
        <section className='partners'>
            <h2 className='section-title'>Nos partenaires</h2>
            <div className='bd-container partners__container'>
                <ImageCard
                    imageSrc={Auvalie}
                    alt="Auvalie logo"
                    />
                <ImageCard
                    imageSrc={Bridge}
                    alt="Bridge logo"
                />
                <ImageCard
                    imageSrc={Fintecture}
                    alt="Fintecture logo"
                />
            </div>
            <div className='bd-container partners__container'>
                <ImageCard
                    imageSrc={Founders}
                    alt="Founders logo"
                />
                <ImageCard
                    imageSrc={Systematic}
                    alt="Systematic logo"
                />
                <ImageCard
                    imageSrc={Pepiniere}
                    alt="Pepiniere logo"
                    styles={{marginTop: '-2.2rem'}}
                />
            </div>
        </section>
    )
}
