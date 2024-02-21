import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {UseCaseItem1} from "./UseCaseItem1";
import {UseCaseItem2} from "./UseCaseItem2";
import {UseCaseItem3} from "./UseCaseItem3";

export function UseCase() {
    return (
        <section className="usecase bd-container" id="description">
            <UseCaseItem1 />
            <UseCaseItem2 />
            <UseCaseItem3 />
            <p className="headline__paragraph bd-container">
                Détection et qualification du bâti dans les villes, les constructions, les toitûres, les espaces verts,
                la végétation, la signalisation au sol. Que vous soyez Maire, Responsable SIG, Gestionnaire Immobiliers
                ou professionel du bâti, Bpartners IA analyse vos objets d'intérêts avec précision.
            </p>
            <p className="headline__paragraph bd-container">
                À travers notre plateforme souveraine, et nos outils d'annotations, vous renseignez l'objet d'interêt de
                votre choix et Bpartners IA vous génère un rapport détaillé pour maîtriser votre territoire et répondre
                aux
                exigences réglementaires et climatiques.
            </p>
            <p className="headline__paragraph bd-container">
                Visualisez les résultats sur notre plateforme ou directement dans vos outils SIG par API ou sous format
                GeoJson.
            </p>
        </section>
    );
}