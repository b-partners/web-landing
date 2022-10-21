import React from 'react'
import { IconCard } from '../../../../common/components/IconCard'

import CashRegisterEuro from '../../assets/img/cash-register-euro.png';
import PaidBill from '../../assets/img/paid-bill.png';
import VirtualBot from '../../assets/img/virtual-bot.png';

export function Solution() {
    return (
        <section className='solution section bd-container'>
            <h2 className='solution__title'>
                <span style={{ fontWeight: "200" }}>
                    Nous vous proposons
                    <span style={{ fontWeight: "700" }}> une solution Tout-en-Un </span>
                    <br /> pour faire
                    <span style={{ fontWeight: "700" }}> grandir votre entreprise.</span>
                </span>
            </h2>
            <p>
                On a discuté avec les artisans, les CMAs et, BPartners a simplifié les outils
                existants en les rendant pragmatiques.<br /> Des fonctionnalités utiles,
                simples à utiliser qui viennent alléger les artisans dans:
            </p>
            <div className='solution__data'>
                <IconCard
                    imageSrc={CashRegisterEuro}
                    paragraph="Sa comptabilité, l’informe sur l’évolution
                    de sa trésorerie et ses objectifs commerciaux."
                />
                <IconCard
                    imageSrc={PaidBill}
                    paragraph="Sa relance automatisée des devis et factures impayées."
                />
                <IconCard
                    imageSrc={VirtualBot}
                    paragraph="Son développement commercial en identifiant les annonces pertinentes et les demandes de
                     dépannages sur lesquelles il peut intervenir."
                />
            </div>
        </section>
    )
}
