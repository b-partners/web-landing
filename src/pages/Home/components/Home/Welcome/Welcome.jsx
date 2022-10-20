/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState } from 'react';

import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import { Dialog, DialogActions, DialogContent, Snackbar } from '@mui/material';

import { Button } from '../../../../../common/components/Button/Button';
import { IconList } from '../../../../../common/components/IconList';

import '../../../../../common/components/Modal/Modal.css';
import '../../../assets/css/forms.css';
import '../../../assets/css/spinner.css';

import CashRegisterEuro from '../../../assets/img/cash-register-euro.png';
import QrCode from '../../../assets/img/qr-code-ext.png';
import PaidBill from '../../../assets/img/paid-bill.png';
import VirtualBot from '../../../assets/img/virtual-bot.png';

import axios from '../../../../../config/axios';


export function Welcome() {

  const useStyles = makeStyles({
    field: {
      marginBottom: '.8rem',
      width: '100%',
    },
  });

  const classes = useStyles();

  const [toastOpen, setToastOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    society: '',
    phone: '',
  });

  const handleToastClose = (_, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setToastOpen(false);
  };

  const handlePreUsersSubmit = async event => {
    event.preventDefault();
    const isFormValid = Object.entries(user).every(value =>
      !!(value[1].trim()),
    );
    if (!isFormValid) {
      setMessage('Veuillez remplir tous les champs obligatoires.');
      setToastOpen(true);
      return;
    }
    try {
      setLoading(true);
      await axios.post('preUsers', [user]);
    } catch (e) {
      setToastOpen(true);
      setMessage('Quelque chose c\'est mal passé. Merci d\'essayer plus tard');
      throw new Error(e);
    } finally {
      setLoading(false);
      setModalOpen(false);
    }
  };

  const onValueChange = event => {
    const { name, value } = event.target;
    setUser(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <section className='home' id='home'>
      <div className='home__container bd-container bd-grid'>
        <div className='home__data'>
          <h1 className='home__title'>
            L'assistant bancaire intelligent qui <br />
            <span style={{ fontWeight: '600' }}> accélère la croissance et les encaissements des artisants
              français.</span>
          </h1>
          <div className='home__list'>
            <div className='home__list__col'>
              <ul>
                <IconList imageSrc={CashRegisterEuro} listText='Suivi de votre trésorerie et de vos objectifs.' />
                <IconList imageSrc={PaidBill} listText='Edition de devis, facture et relance automatisée des impayés.'
                />
              </ul>
            </div>
            <div className='home__list__col'>
              <ul>
                <IconList imageSrc={QrCode} listText='Encaissement de vos prestations sur mobile et à distance.' />
                <IconList
                  imageSrc={VirtualBot}
                  listText='Être informé en temps réel des chantiers,
                   et des demandes de dépannages autour de chez vous.'
                />
              </ul>
            </div>
          </div>
          <Paper elevation={5} className='home-registration-form'>
            <h2 className='registration-title'>
              Renseignez votre mail et <br />
              rejoignez les artisans de demain.
            </h2>
            <TextField
              className={classes.field}
              id='email'
              name='email'
              label='Email'
              type='mail'
              variant='filled'
              onChange={event => {
                const { name, value } = event.target;
                setUser(prevState => ({ ...prevState, [name]: value }));
              }}
              value={user.email}
              required
            />
            <Button type='button' label="Ça m'interesse" preset='registration-button'
              onClick={() => {
                const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                if (!regex.test(user.email)) {
                  setMessage(`S'il vous plaît, mettez une adresse email valide`);
                  setToastOpen(true);
                  return;
                }
                setModalOpen(true);
              }} />
          </Paper>

        </div>
        <div>
          <iframe width='450' height='270' src='https://www.youtube.com/embed/a38imldPQYc?autoplay=1'
            title='Bpart'
            frameBorder='0' allowFullScreen />
        </div>
      </div>
      <Dialog open={modalOpen} onClose={() => setModalOpen(false)}>
        <form onSubmit={handlePreUsersSubmit}>
          <DialogContent>
            <TextField
              className={classes.field}
              id='firstName'
              name='firstName'
              label='Prénom *'
              type='text'
              variant='filled'
              onChange={onValueChange}
              value={user.firstName}
            />
            <TextField
              className={classes.field}
              id='lastName'
              name='lastName'
              label='Nom *'
              type='text'
              variant='filled'
              onChange={onValueChange}
              value={user.lastName}
            />
            <TextField
              className={classes.field}
              id='email'
              name='email'
              label='Adresse e-mail *'
              type='email'
              variant='filled'
              onChange={onValueChange}
              value={user.email}
            />
            <TextField
              className={classes.field}
              id='phone'
              name='phone'
              label='Téléphone *'
              type='text'
              variant='filled'
              onChange={onValueChange}
              value={user.phone}
            />
            <TextField
              className={classes.field}
              id='society'
              name='society'
              label='Société *'
              type='text'
              variant='filled'
              onChange={onValueChange}
              value={user.society}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handlePreUsersSubmit} autoFocus loading={loading}>
              Se préinscrire
            </Button>
            <Button onClick={() => {
              setUser({ firstName: '', lastName: '', society: '', email: '', phone: '' });
              setModalOpen(false);
            }} label='Annuler' preset='btn-secondary' />
          </DialogActions>
        </form>
      </Dialog>
      <Snackbar autoHideDuration={5000} open={toastOpen} onClose={handleToastClose} message={message} />
    </section>
  );
}
