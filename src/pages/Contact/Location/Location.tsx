import WavesTopBg from '../assets/images/waves-top2-bg.png';

export function Location() {
  return (
    <section className="location section" id="location">
      <img
        src={WavesTopBg}
        alt=" "
        style={{
          position: 'absolute',
          zIndex: '-1',
          bottom: '-.5rem',
          right: '0',
        }}
      />
      <div className="location__container bd-container">
        <div className="location__col1">
          <h2 className="location__title">Contact</h2>
          <p className="location__description">
            BIRDIA est une société enregistrée au RCS de Paris sous le numéro Siren 918072737 avec son siège social basé à Paris dans le 11ème arrondissement.
            <br />
          </p>
          <b className="location__description-bold">N'hésitez pas à nous écrire pour toute question.</b>
        </div>
        <div className="location__col2">
          <iframe
            allowFullScreen
            title="map"
            src={process.env.REACT_APP_BPARTNERS_LOCATION_URL}
            width="480"
            height="300"
            style={{ border: '0' }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
