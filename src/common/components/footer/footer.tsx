import { useNavigate } from 'react-router-dom';

import { GetInTouchForm } from '../get-in-touch';

export function Footer() {
  const navigate = useNavigate();

  return (
    <section className="footer">
      <div className="footer__container">
        <div className="footer__column">
          <button type="button" className="nav__logo" onClick={() => navigate('/home')}>
            <a href="#home">
              <img src="/assets/images/logo-white.png" alt="logo" style={{ width: '10rem' }} />
              <p style={{ fontWeight: '100', color: 'white' }}>Copyright &copy; BIRDIA 2022</p>
            </a>
          </button>
        </div>
        <div className="navigation_link">
          <h4 className="footer_subtitle">LIENS IMPORTANTS</h4>
          <ul className="navigation_link_list">
            <li>
              <button className="navigation-button" type="button" onClick={() => navigate('/home')}>
                <a href="#home">Présentation</a>
              </button>
            </li>
            <li>
              <button className="navigation-button" type="button" onClick={() => navigate('/about')}>
                <a href="#description">À propos de nous</a>
              </button>
            </li>
            <li>
              <button className="navigation-button" type="button" onClick={() => navigate('/contact')}>
                <a href="#location">Nous contacter</a>
              </button>
            </li>
            <li>
              <button className="navigation-button" type="button">
                <a href={process.env.REACT_APP_DASHBOARD_LOGIN_URL}>Mon compte</a>
              </button>
            </li>
            <li>
              <button className="navigation-button" type="button" onClick={() => navigate('/legal-mention')}>
                <a href="#CGU">Mentions Légales</a>
              </button>
            </li>
            <li>
              <button className="navigation-button" type="button" onClick={() => navigate('/general-conditions-of-use')}>
                <a href="#CGU">Conditions générales d'utilisation</a>
              </button>
            </li>
            <li>
              <button className="navigation-button" type="button" onClick={() => navigate('/privacy-policy')}>
                <a href="#CGU">Politique de protection des données</a>
              </button>
            </li>
            <li>
              <button className="navigation-button" type="button">
                <a href="https://landing-bpartners.s3.eu-west-3.amazonaws.com/Inge%CC%81nieur+IA+H_F.pdf">Nous recrutons !</a>
              </button>
            </li>
          </ul>
        </div>
        <div className="footer_registration">
          <h4 className="footer_subtitle">RESTER INFORMÉ</h4>
          <GetInTouchForm />
        </div>
      </div>
    </section>
  );
}
