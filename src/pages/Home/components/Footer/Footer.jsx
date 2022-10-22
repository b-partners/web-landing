/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState } from 'react';

import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import { Snackbar } from '@mui/material';

import logo from '../../assets/img/logoFullWhite.png';
import { PreRegistrationModal, usePreRegistration } from '../PreRegistrationModal/PreRegistrationModal';
import { Button } from '../../../../common/components/Button';

export function Footer() {
  const useStyles = makeStyles({
    field: {
      width: '70%',
      backgroundColor: 'white',
    },
  });

  const classes = useStyles();

  const [toastOpen, setToastOpen] = useState(false);
  const [message, setMessage] = useState(null);

  const handleToastClose = (_, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setToastOpen(false);
  };

  const { modalOpen, setModalOpen, loading, user, setUser, handlePreUsersSubmit, onValueChange, onEmailRegistration } =
    usePreRegistration(setMessage, setToastOpen);

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
            className={classes.field}
            id="email"
            name="email"
            label="Email"
            type="mail"
            variant="filled"
            onChange={(event) => {
              const { name, value } = event.target;
              setUser((prevState) => ({ ...prevState, [name]: value }));
            }}
            value={user.email}
          />
          <Button
            type="button"
            label="Je m'inscris"
            preset="footer_registration__button"
            onClick={onEmailRegistration}
          />
          <PreRegistrationModal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            onSubmit={handlePreUsersSubmit}
            classes={classes}
            onChange={onValueChange}
            user={user}
            loading={loading}
            onClick={() => {
              setUser({ firstName: '', lastName: '', society: '', email: '', phone: '' });
              setModalOpen(false);
            }}
          />
          <Snackbar autoHideDuration={5000} open={toastOpen} onClose={handleToastClose} message={message} />
        </div>
      </div>
    </section>
  );
}
