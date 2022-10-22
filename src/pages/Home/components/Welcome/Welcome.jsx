/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState } from 'react';

import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import { Snackbar } from '@mui/material';

import { Button } from '../../../../common/components/Button';
import { IconList } from '../../../../common/components/IconList';
import { PreRegistrationModal, usePreRegistration } from '../PreRegistrationModal/PreRegistrationModal';

import '../../../../common/components/Modal/Modal.css';
import '../../assets/css/forms.css';
import '../../assets/css/spinner.css';

import CashRegisterEuro from '../../assets/img/cash-register-euro.png';
import QrCode from '../../assets/img/qr-code-ext.png';
import PaidBill from '../../assets/img/paid-bill.png';
import VirtualBot from '../../assets/img/virtual-bot.png';

export function Welcome() {
  const useStyles = makeStyles({
    field: {
      marginBottom: '.8rem',
      width: '100%',
    },
  });

  const classes = useStyles();

  const [toastOpen, setToastOpen] = useState(false);

  const handleToastClose = (_, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setToastOpen(false);
  };

  const [message, setMessage] = useState(null);

  const { modalOpen, setModalOpen, loading, user, setUser, handlePreUsersSubmit, onValueChange, onEmailRegistration } =
    usePreRegistration(setMessage, setToastOpen);

  return (
    <section className="home" id="home">
      <div className="home__container bd-container bd-grid">
        <div className="home__data">
          <h1 className="home__title">
            L'assistant bancaire intelligent qui <br />
            <span style={{ fontWeight: '600' }}>
              {' '}
              accélère la croissance et les encaissements des artisants français.
            </span>
          </h1>
          <div className="home__list">
            <div className="home__list__col">
              <ul>
                <IconList imageSrc={CashRegisterEuro} listText="Suivi de votre trésorerie et de vos objectifs." />
                <IconList
                  imageSrc={PaidBill}
                  listText="Edition de devis, facture et relance automatisée des impayés."
                />
              </ul>
            </div>
            <div className="home__list__col">
              <ul>
                <IconList imageSrc={QrCode} listText="Encaissement de vos prestations sur mobile et à distance." />
                <IconList
                  imageSrc={VirtualBot}
                  listText="Être informé en temps réel des chantiers,
                   et des demandes de dépannages autour de chez vous."
                />
              </ul>
            </div>
          </div>
          <Paper elevation={5} className="home-registration-form">
            <h2 className="registration-title">
              Renseignez votre mail et <br />
              rejoignez les artisans de demain.
            </h2>
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
              required
            />
            <Button type="button" label="Ça m'interesse" preset="registration-button" onClick={onEmailRegistration} />
          </Paper>
        </div>
        <div>
          <iframe
            width="450"
            height="270"
            src="https://www.youtube.com/embed/a38imldPQYc?autoplay=1"
            title="Bpart"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
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
    </section>
  );
}
