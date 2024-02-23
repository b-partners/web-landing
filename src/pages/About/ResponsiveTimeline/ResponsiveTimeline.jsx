import React from 'react'
import { Polygone } from '../Timeline/Polygone'

export function ResponsiveTimeline() {
    return (
        <div className='responsive-timeline'>
            <Polygone
                description='Lancement des rencontres avec les artisans en fin 2022.'
                color='rgba(156, 37, 90, 1)'
                position='polygone-right'
                borderLeft='polygone-border-left'
                preset='responsive-width'
            />
            <Polygone
                description='Création de la société en début 2023, lancement des développements IT.'
                color='rgba(165, 58, 106, 1)'
                position='polygone-left'
                preset='responsive-width'
            />
            <Polygone
                description='Interviews des artisans testeurs.'
                color='rgba(175, 79, 122, 1)'
                position='polygone-right'
                preset='responsive-width'
            />
            <Polygone
                description='Juin 2023 : Commercialisation auprès des artisans.'
                color='rgba(197, 129, 161, 1)'
                position='polygone-left'
                preset='responsive-width'
            />
            <Polygone
                description='Septembre 2023 : Commercialisation auprès des collectivités.'
                color='rgba(213, 164, 188, 1)'
                position='polygone-right'
                borderLeft='polygone-border-right'
                preset='responsive-width'
            />
        </div>
    )
}
