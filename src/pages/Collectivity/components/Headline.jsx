/* eslint-disable jsx-a11y/media-has-caption */

/* eslint-disable max-len */
import React from 'react';

export function Headline() {

    return (
        <>
            <section className="headline" id="home">
                <h1>Détectez et raisonnez par IA pour gagner en précision et en réactivité.</h1>
                <h2>Intelligence artificielle issue de recherche française, souveraine, entraînée sur l'ensemble du
                    territoire français.</h2>
                <p>BPartners est une startup issue de la recherche française. Labélisée entreprise DeepTech pour avoir
                    conçu
                    un outil de détection et mesure d’objets pour les artisans pour leur simplifier la vie.
                    Cette technologie a été étendue aux collectivités et grandes groupes pour répondre à leur besoin de
                    détecter des objets d’intérêts sur mieux connaitre leur territoires et suivre son évolution.
                </p>
                <p>
                    La technologie repose sur de la détection automatisée des objets, l'extraction pour y appliquer des
                    raisonnements
                    opérationnels pour l'aide à la décision. Découvrez nos cas d'usages:
                </p>
            </section>
            <section className="solution__collectivity">
                <h1>Nos solutions: nos cas d'usages</h1>
                <p>
                    Que ce soit sur des images satellites ou orthophotographie, BPartners IA permet une détection
                    automatisée pour gagner
                    en productivité et un post traitement pour gagner en précision. Valorisez les images aériennes de
                    votre territoire
                    pour vous conformer à la réglementation (Loi ZAN, Loi LOM, Climet Resilence, ...). Nos modèles sont
                    souverains et
                    permettent de réaliser des détections massives avec un impact carbonne réduit.
                </p>
            </section>
            <section className="carousel">
                {/* Place the carousel here */}
                <p>
                    Détection et qualification du bâti dans les villes, les constructions, les toitûres, les espaces verts,
                    la végétation, la signalisation au sol. Que vous soyez Maire, Responsable SIG, Gestionnaire Immobiliers
                    ou professionel du bâti, Bpartners IA analyse vos objets d'intérêts avec précision.
                </p>
                <p>
                    À travers notre plateforme souveraine, et nos outils d'annotations, vous renseignez l'objet d'interêt de
                    votre choix et Bpartners IA vous génère un rapport détaillé pour maîtriser votre territoire et répondre aux
                    exigences réglementaires et climatiques.
                </p>
                <p>Visualisez les résultats sur notre plateforme ou directement dans vos outils SIG par API ou sous format GeoJson.</p>
            </section>
        </>
    );
}