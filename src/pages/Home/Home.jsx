import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Snackbar } from '@mui/material';

import { Header } from './components/Header';
import { Feature } from './components/Feature';
import { Welcome } from './components/Welcome';
import { Offer } from './components/Offer';
import { Authenticity } from './components/Authenticity';
import { Solution } from './components/Solution';
import { Distinction } from './components/Distinction';
import { Testimonial } from './components/Testimonial';
import { GetInTouch } from './components/GetInTouch';
import { Footer } from './components/Footer';
import { PreRegistrationModal, usePreRegistration } from './components/PreRegistrationModal/PreRegistrationModal';

export function Home() {
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

  const onEmailChange = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div>
      <Header />
      <Welcome classes={classes} onEmailChange={onEmailChange} onEmailRegistration={onEmailRegistration} user={user} />
      <Feature />
      <Authenticity />
      <Solution />
      <Distinction />
      <Offer />
      <Testimonial />
      <GetInTouch
        classes={classes}
        onEmailChange={onEmailChange}
        onEmailRegistration={onEmailRegistration}
        user={user}
      />
      <Footer classes={classes} onEmailChange={onEmailChange} onEmailRegistration={onEmailRegistration} user={user} />
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
  );
}
