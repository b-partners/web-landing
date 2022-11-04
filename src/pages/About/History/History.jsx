import React from 'react'
import { Timeline } from '../Timeline';

export function History() {
    return (
        <section className='history'>
            <div className='bd-container'>
                <h2 className='history__title'>Notre histoire</h2>
                <h3 className='actual-year'>2022</h3>
                <Timeline />
            </div>
        </section>
    )
}
