import React from 'react'
import { IconCard } from '../../../../../common/components/IconCard'


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
                existants pour les rendre programmatique,<br /> en gardant que les fonctionnalités utiles,
                simple à utiliser depuis un mobile et qui surtout allège l'artisan dans:
            </p>
            <div className='solution__data'>
                <IconCard
                    icon="fa fa-bullseye fa-2x"
                    paragraph="Sa comptabilité & l’informe sur l’évolution
                     de sa trésorerie et ses objectifs commerciaux"
                />
                <IconCard
                    icon="fa fa-money fa-2x"
                    paragraph="Sa relance automatisée des devis et factures impayées."
                />
                <IconCard
                    icon="fa fa-bell-o fa-2x"
                    paragraph="Son développement commercial en identifiant les annonces pertinentes et les demandes de
                     dépannages sur lesquelles vous pouvez intervenir."
                />
            </div>
        </section>
    )
}
