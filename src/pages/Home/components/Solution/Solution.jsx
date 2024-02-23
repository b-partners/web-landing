import React from 'react';
import { IconCard } from '../../../../common/components/IconCard';

import CashRegisterEuro from '../../assets/img/evolution.png';
import PaidBill from '../../assets/img/invoice.png';
import VirtualBot from '../../assets/img/stat.png';

export function Solution() {
    return (
        <section className='solution'>
            <div className='bd-container'>
                <h2 className='solution__title'>
                    <span style={{ fontWeight: "200" }}>
                        Nous vous proposons
                        <span style={{ fontWeight: "700" }}> une solution Tout-en-Un </span>
                        <br /> pour faire
                        <span style={{ fontWeight: "700" }}> grandir votre entreprise.</span>
                    </span>
                </h2>
                <p style={{ paddingBlock: '1.5rem' }}>
                    On a discuté avec des artisans comme vous et nous avons simplifié les outils
                    existants en les rendant pragmatiques.<br /> Des fonctionnalités utiles, simples à utiliser
                    qui viennent alléger votre quotidien d’artisan sur :
                </p>
                <div className='solution__data'>
                    <IconCard
                        imageSrc={CashRegisterEuro}
                        paragraph="Analyse les toitures à distance en suivant votre méthode."
                    />
                    <IconCard
                        imageSrc={PaidBill}
                        paragraph="Génère en 1 clic votre analyse des dégâts et un chiffrage des réparations."
                    />
                    <IconCard
                        imageSrc={VirtualBot}
                        paragraph="Transformez un simple appel téléphonique en une opportunité commerciale."
                    />
                </div>
            </div>
        </section>
    )
}
