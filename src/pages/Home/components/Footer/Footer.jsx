/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import * as PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';

import logo from '../../assets/img/logoFullWhite.png';
import { Button } from '../../../../common/components/Button';

export function Footer(props) {
  const { onEmailChange, onEmailRegistration, user } = props;

  return (
    <section className="footer">
      <div className="footer__container">
        <div className="footer__column">
          <img src={logo} alt="logo" style={{ width: '10.625rem' }} />
          <p style={{ fontWeight: '100' }}>Copyright &copy; B.Partners 2022</p>
        </div>
        <div className="navigation_link">
          <h4 className="footer_subtitle">LIENS IMPORTANTS</h4>
          <ul className="navigation_link_list">
            <li>
              <a href="src/pages/Home/components/Footer/Footer#share">Présentation</a>
            </li>
            <li>
              <a href="src/pages/Home/components/Footer/Footer#share">À propos de nous</a>
            </li>
            <li>
              <a href="src/pages/Home/components/Footer/Footer#share">Nous contacter</a>
            </li>
            <li>
              <a href="src/pages/Home/components/Footer/Footer#share">Mon compte</a>
            </li>
          </ul>
        </div>
        <div className="footer_registration">
          <h4 className="footer_subtitle">RESTER INFORMÉ</h4>
          <TextField
            name="email"
            label="Email"
            type="mail"
            variant="filled"
            onChange={onEmailChange}
            value={user.email}
          />
          <Button
            type="button"
            label="Je m'inscris"
            preset="footer_registration__button"
            onClick={onEmailRegistration}
          />
        </div>
      </div>
    </section>
  );
}

Footer.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    society: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
  onEmailChange: PropTypes.bool.isRequired,
  onEmailRegistration: PropTypes.bool.isRequired,
};
