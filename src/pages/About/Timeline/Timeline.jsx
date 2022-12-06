import React from 'react';
import { Polygone } from './Polygone';
import './Timeline.css';

export function Timeline() {
    return (
        <div className="timeline">
            <Polygone
                description='Lancement des rencontres avec les artisans en S2 2022.'
                color='rgba(156, 37, 90, 1)'
                position='polygone-up'
                borderLeft='polygone-border-left' 
                />
            <Polygone
                description='Création de la société en Juillet 2022, lancement des développements IT.'
                color='rgba(165, 58, 106, 1)'
                position='polygone-down' /> 
            <Polygone
                description='Interviews des artisans testeurs.'
                color='rgba(175, 79, 122, 1)'
                position='polygone-up' />
            <Polygone
                description='Novembre 2022 : Commercialisation.'
                color='rgba(197, 129, 161, 1)'
                position='polygone-down' />
            <Polygone
                description='Décembre 2022 : Lancement d’un programme de R&D.'
                color='rgba(213, 164, 188, 1)'
                position='polygone-up'
                borderLeft='polygone-border-right' />
        </div>
    )
}
