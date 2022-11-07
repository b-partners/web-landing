import React from 'react'
import WavesTopBg from '../../Home/assets/img/waves-top2-bg.png';

export function Location() {
    return (
        <section className='location section' id='location'>
            <img src={WavesTopBg} alt=" " style={{
                position: 'absolute',
                zIndex: '-1',
                bottom: '-.5rem',
                left: '0'
            }} />
            <div className='location__container bd-container'>
                <div className='location__col1'>
                    <h2 className='location__title'>Contact</h2>
                    <p style={{ fontSize: '.91rem', marginBottom: '1rem' }}>
                        BPartners est une société enregistrée à l'Orias
                        avec son siège social à Paris dans le 18ème arrondissement. <br />
                    </p>
                    <b>N'hésitez pas à nous écrire pour toute question.</b>
                </div>
                <div className='location__col2'>
                    <iframe
                        title='map'
                        src={process.env.REACT_APP_BPARTNERS_LOCATION_URL}
                        width="480"
                        height="300"
                        style={{ border: '0' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade" />
                </div>
            </div>
        </section>
    )
}
