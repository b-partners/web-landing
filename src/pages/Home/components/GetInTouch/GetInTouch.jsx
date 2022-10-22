import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import { Snackbar } from '@mui/material';
import { Button } from '../../../../common/components/Button/Button';
import { PreRegistrationModal, usePreRegistration } from '../PreRegistrationModal/PreRegistrationModal';

export function GetInTouch() {
  const useStyles = makeStyles({
    field: {
      width: '38%',
    },
    underline: {
      '&&&:before': {
        borderBottom: 'none',
      },
      '&&:after': {
        borderBottom: 'none',
      },
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
    <section className="get_in_touch section bd-container">
      <h2 className="get_in_touch__title">Rester informé</h2>
      <p>Aujourd'hui les artisans perdent entre 30% et 40% de leur temps sur des tâches administratives</p>
      <div className="get_in_touch__form">
        <TextField
          className={classes.field}
          InputProps={{ classes }}
          id="filled-mail-input"
          label="Tapez votre email ici"
          type="mail"
          variant="filled"
          name="email"
          onChange={(event) => {
            const { name, value } = event.target;
            setUser((prevState) => ({ ...prevState, [name]: value }));
          }}
        />
        <Button type="submit" label="Je m'inscris" preset="get_in_touch__button" onClick={onEmailRegistration} />
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
