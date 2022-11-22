/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import { useNavigate } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import * as PropTypes from 'prop-types';

import { Button } from '../../../../common/components/Button';
import logo from '../../assets/img/logoFullWhite.png';

export function Footer(props) {
  const navigate = useNavigate();

  const useStyles = makeStyles({
    field: {
      width: '70%',
      backgroundColor: 'white',
      overflow: 'hidden',
      borderRadius: '25px 0px 0px 25px'
    },
  });

  const classes = useStyles();

  const { onEmailChange, onEmailRegistration, user } = props;

  return (
    <section className="footer">
      <div className="footer__container">
        <div className="footer__column">
          <button type="button" className="nav__logo" onClick={() => navigate('/home')}>
            <a href="#home">
              <img src={logo} alt="logo" style={{ width: '10.625rem' }} />
              <p style={{ fontWeight: '100', color: 'white' }}>Copyright &copy; B.Partners 2022</p>
            </a>
          </button>
        </div>
        <div className="navigation_link">
          <h4 className="footer_subtitle">LIENS IMPORTANTS</h4>
          <ul className="navigation_link_list">
            <li>
              <button className="footer-navigation" type="button" onClick={() => navigate('/home')}>
                <a href="#home">Présentation</a>
              </button>
            </li>
            <li>
              <button className="footer-navigation" type="button" onClick={() => navigate('/about')}>
                <a href="#description">À propos de nous</a>
              </button>
            </li>
            <li>
              <button className="footer-navigation" type="button" onClick={() => navigate('/contact')}>
                <a href="#location">Nous contacter</a>
              </button>
            </li>
            <li>
              <button className="footer-navigation" type="button">
                <a href="https://dashboard-dev.bpartners.app/login">Mon compte</a>
              </button>
            </li>
            <li>
              <button className="footer-navigation" type="button" onClick={() => navigate('/general-condition-of-use')}>
                <a href="#CGU">Conditions générales d'utilisation</a>
              </button>
            </li>
          </ul>
        </div>
        <div className="footer_registration">
          <h4 className="footer_subtitle">RESTER INFORMÉ</h4>
          <TextField
            className={classes.field}
            name="email"
            label="Email"
            type="mail"
            variant="filled"
            onChange={onEmailChange}
            value={user && user.email}
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
  onEmailChange: PropTypes.func.isRequired,
  onEmailRegistration: PropTypes.func.isRequired,
};
