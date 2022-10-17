import React from 'react'
import timeline from '../../Home/assets/img/Group156.png';

export function History() {
    return (
        <section className='history bd-container'>
            <h2 className='history__title'>Notre histoire</h2>
            <div className='timeline'>
                <img src={timeline} alt='timeline'
                    className='timeline__image'
                />
            </div>
        </section>
    )
}
