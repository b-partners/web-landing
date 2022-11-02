import React from 'react'

export function Location() {
    return (
        <section className='location section bd-container' id='location'>
            <div className='location__container'>
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
