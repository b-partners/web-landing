import React from 'react';
import './Timeline.css';
 
export function Timeline() {
    return (
        <section className="timeline">
            <div className="timeline__container">
                <div className="timeline__element" />
                <div className="timeline__element line horizontal">

                    <div className="timeline__elt">
                        <div className="sub__timeline__elt">
                            <p className="round" />
                            <p className="timeline__text">
                                Lancement des rencontres avec les artisans en S2 2022.
                            </p>
                        </div>
                    </div>
                    <div className="timeline__elt">
                        <div className="sub__timeline__elt">
                            <p className="round" />
                            <p className="timeline__text">
                                Création de la société en Juillet 2022, lancement des Développement IT.
                            </p>
                        </div>
                    </div>
                    <div className="timeline__elt">
                        <div className="sub__timeline__elt">
                            <p className="round" />
                            <p className="timeline__text">
                                Interviews des artisans testeurs.
                            </p>
                        </div>
                    </div>
                    <div className="timeline__elt">
                        <div className="sub__timeline__elt">
                            <p className="round" />
                            <p className="timeline__text">
                                Novembre 2022 commercialisation.
                            </p>
                        </div>
                    </div>
                    <div className="timeline__elt">
                        <div className="sub__timeline__elt">
                            <p className="round" />
                            <p className="timeline__text">
                                Décembre 2022 lancement d'un programme de R&D.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
