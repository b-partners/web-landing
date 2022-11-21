import React from 'react';
import * as PropTypes from 'prop-types';
import { IconCard } from '../../../../common/components/IconCard';

import CashRegisterEuro from '../../assets/img/cash-register-euro.png';
import PaidBill from '../../assets/img/paid-bill.png';
import VirtualBot from '../../assets/img/virtual-bot.png';
import WavesBottomBg from '../../assets/img/waves-bottom-bg.png';


export function Solution(props) {
    const {backgroundColor} = props;
    return (
        <section className={`solution  ${backgroundColor}`}>
            <img src={WavesBottomBg} alt=" " style={{
                position: 'absolute',
                zIndex: '-1',
                top: '-0.05rem',
                left: '0'
            }}
            />
            <div className='bd-container'>
                <h2 className='solution__title'>
                    <span style={{ fontWeight: "200" }}>
                        Nous vous proposons
                        <span style={{ fontWeight: "700" }}> une solution Tout-en-Un </span>
                        <br /> pour faire
                        <span style={{ fontWeight: "700" }}> grandir votre entreprise.</span>
                    </span>
                </h2>
                <p style={{marginBottom: '2rem'}}>
                    On a discuté avec des artisans comme vous et nous avons simplifié les outils
                    existants en les rendant pragmatiques.<br /> Des fonctionnalités utiles, simples à utiliser
                    qui viennent alléger votre quotidien d’artisan sur :
                </p>
                <div className='solution__data'>
                    <IconCard
                        imageSrc={CashRegisterEuro}
                        paragraph="Votre comptabilité et vous informent de l’évolution de
                         votre trésorerie et de vos objectifs commerciaux."
                    />
                    <IconCard
                        imageSrc={PaidBill}
                        paragraph="Votre édition et relances automatisées des devis et des factures impayées."
                    />
                    <IconCard
                        imageSrc={VirtualBot}
                        paragraph="Votre développement commercial en identifiant les opportunités business
                         et les demandes de dépannages sur lesquelles vous pouvez intervenir."
                    />
                </div>
            </div>
        </section>
    )
}
Solution.propTypes = {
    backgroundColor: PropTypes.string.isRequired,
}
