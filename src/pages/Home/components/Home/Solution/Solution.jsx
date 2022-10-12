import React from 'react'

export function Solution() {
    return (
        <section className='solution section bd-container'>
            <h2 className='solution__title'>
                <span style={{ fontWeight: "700" }}>
                    Nous avons compris votre besoin
                </span>
                <span style={{ fontWeight: "200" }}> et nous vous <br /> proposons la solution</span>
            </h2>
            <p>On simplifie des outils existants pour les rendre programmatique comme les artisans,
                des fonctionnalités utiles,<br />
                simple à utiliser et viennent alléger les artisans dans:
            </p>
            <div className='solution__data'>
                <div className='solution__data__item'>
                    <div className='icon-wrapper'>
                        <i className="fa fa-bullseye fa-2x" />
                    </div>
                    <p>
                        Sa comptabilité et l'informe sur l'évolution de sa trésorerie et ses objectifs.
                    </p>
                </div>
                <div className='solution__data__item'>
                    <div className='icon-wrapper'> 
                        <i className="fa fa-money fa-2x" />
                    </div>
                    <p>
                        Sa relance automatisée des devis et factures impayées.
                    </p>
                </div>
                <div className='solution__data__item'>
                    <div className='icon-wrapper'>
                        <i className='fa fa-bell-o fa-2x' />
                    </div>
                    <p>
                        Son développement commercial en identifiant les annonces pertinentes et
                        les demandes de dépannages sur lesquelles vous pouvez intervenir.
                    </p>
                </div>
            </div>
        </section>
    )
}
