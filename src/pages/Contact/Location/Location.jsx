import React from 'react'
import Map from '../../Home/assets/img/Rectangle107.png'

export function Location() {
    return (
        <section className='location section bd-container'>
            <div className='location__container'>
                <div className='location__col1'>
                    <h2 className='location__title'>Contact</h2>
                    <p style={{ fontSize: '.91rem', marginBottom: '1rem' }}>
                        BPartners est une société enregistrée à l'Orias
                        avec son siège social à Paris dans le 18ième arrondissement. <br />
                    </p>
                   <b>N'hésitez pas à nous écrire pour toute question.</b>
                </div>
                <div className='location__col2'>
                    <img
                        src={Map}
                        alt="carte"
                        width="380"
                    />
                </div>
            </div>
        </section>
    )
}
