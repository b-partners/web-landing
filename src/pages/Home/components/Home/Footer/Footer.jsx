/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState } from 'react'

import TextField from '@mui/material/TextField';
import { makeStyles } from "@mui/styles";
import { Dialog, DialogActions, DialogContent, Snackbar } from '@mui/material';

import logo from '../../../assets/img/logoFullWhite.png';
import { Button } from '../../../../../common/components/Button/Button';

import axios from '../../../../../config/axios';

export function Footer() {
  const [toastOpen, setToastOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
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

  const useStyles = makeStyles({
    field: {
      width: "70%",
      backgroundColor: "white"
    }
  });
  const classes = useStyles();
  return (
    <section className='footer'>
      <div className="footer__container">
        <div className='footer__column'>
          <img src={logo} alt='logo' style={{ width: '10.625rem' }} />
          <p style={{ fontWeight: "100" }}>Copyright &copy; B.Partners 2022</p>
        </div>
        <div className='navigation_link'>
          <h4 className='footer_subtitle'>LIENS IMPORTANTS</h4>
          <ul className='navigation_link_list'>
            <li><a href="#share">Présentation</a></li>
            <li><a href="#share">À propos de nous</a></li>
            <li><a href="#share">Nous contacter</a></li>
            <li><a href="#share">Mon compte</a></li>
          </ul>
        </div>
        <div className='footer_registration'>
          <h4 className='footer_subtitle'>RESTER INFORMÉ</h4>
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
          />
          <Button type='button' label="Je m'inscris" preset='footer_registration__button'
            onClick={() => {
              const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
              if (!regex.test(user.email)) {
                setMessage(`S'il vous plaît, mettez une adresse email valide`);
                setToastOpen(true);
                return;
              }
              setModalOpen(true);
            }} />
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
        </div>
      </div>
    </section>
  )
}
