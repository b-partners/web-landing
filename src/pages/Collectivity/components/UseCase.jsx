import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {UseCaseItem} from "./UseCaseItem";
import ImgCarousel1 from '../assets/img/Images-carrousselle-1.png';
import ImgCarousel2 from '../assets/img/Images-carrousselle-2.png';
import ImgCarousel3 from '../assets/img/Images-carrousselle-3.png';

export function UseCase() {
    return (
        <section className="offer_collectivity" id="description">
            <Carousel showArrows infiniteLoop showThumbs={false} showStatus={false} autoPlay interval={5000}>
                <UseCaseItem image={ImgCarousel1}/>
                <UseCaseItem image={ImgCarousel2}/>
                <UseCaseItem image={ImgCarousel3}/>
            </Carousel>
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