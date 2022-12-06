import React from 'react'
import { Polygone } from '../Timeline/Polygone'

export function ResponsiveTimeline() {
    return (
        <div className='responsive-timeline'>
            <Polygone
                description='Lancement des rencontres avec les artisans en S2 2022.'
                color='rgba(156, 37, 90, 1)'
                position='polygone-right'
                borderLeft='polygone-border-left'
                preset='responsive-width'
            />
            <Polygone
                description='Lancement des rencontres avec les artisans en S2 2022.'
                color='rgba(165, 58, 106, 1)'
                position='polygone-right'
                preset='responsive-width'
            />
            <Polygone
                description='Lancement des rencontres avec les artisans en S2 2022.'
                color='rgba(175, 79, 122, 1)'
                position='polygone-right'
                preset='responsive-width'
            />
            <Polygone
                description='Lancement des rencontres avec les artisans en S2 2022.'
                color='rgba(197, 129, 161, 1)'
                position='polygone-right'
                preset='responsive-width'
            />
            <Polygone
                description='Lancement des rencontres avec les artisans en S2 2022.'
                color='rgba(213, 164, 188, 1)'
                position='polygone-right'
                borderLeft='polygone-border-right'
                preset='responsive-width'
            />
        </div>
    )
}
