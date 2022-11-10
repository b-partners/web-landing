/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Dialog, DialogActions, DialogContent } from '@mui/material';
import TextField from '@mui/material/TextField';
import * as PropTypes from 'prop-types';
import axios from '../../../config/axios';
import { Button } from '../Button';
import isValidEmail from '../../../utils/is-valid-email';

export function PreRegistrationModal(props) {
  const {
    user,
    loading,
    open,
    onChange,
    preregistrationState: { preregistrationIsComplete, setPreregistrationIsComplete },
    onSubmit,
    onClick,
    onClose,
  } = props;

  const useStyles = makeStyles({
    field: {
      width: '100%',
    },
  });

  const classes = useStyles();
  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <p style={{ textAlign: 'center', marginBlock: '1rem' }}>
          <i className="fa fa-check fa-2x" aria-hidden="true" />
          Merci, votre pré-inscription est bien prise en compte.
        </p>
        <form onSubmit={onSubmit}>
          <span style={{ marginLeft: '1.6rem' }}>Dites-nous en plus sur vous:</span>
          <DialogContent>
            <TextField
              className={classes.field}
              id="firstName"
              name="firstName"
              label="Prénom"
              type="text"
              variant="filled"
              onChange={onChange}
              value={user.firstName}
            />
            <TextField
              className={classes.field}
              id="lastName"
              name="lastName"
              label="Nom"
              type="text"
              variant="filled"
              onChange={onChange}
              value={user.lastName}
            />
            <TextField
              className={classes.field}
              id="email"
              name="email"
              label="Adresse e-mail"
              type="email"
              variant="filled"
              onChange={onChange}
              value={user.email}
            />
            <TextField
              className={classes.field}
              id="phone"
              name="phone"
              label="Téléphone"
              type="text"
              variant="filled"
              onChange={onChange}
              value={user.phone}
            />
            <TextField
              className={classes.field}
              id="society"
              name="society"
              label="Société"
              type="text"
              variant="filled"
              onChange={onChange}
              value={user.society}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={onSubmit} autoFocus loading={loading}>
              Se préinscrire
            </Button>
            <Button onClick={onClick} label="Annuler" preset="btn-secondary" />
          </DialogActions>
        </form>
      </Dialog>

      <Dialog open={preregistrationIsComplete} onClose={() => setPreregistrationIsComplete(false)}>
        <DialogContent>
          <p>
            Pour finaliser votre inscription, télécharger l’application BPartners sur <b>Android</b> ou <b>Appstore </b>
            pour utiliser les services de partout.
          </p>
        </DialogContent>

        <DialogActions
          sx={{
            '& > button': {
              width: '100%',
            },
          }}
        >
          <Button onClick={() => setPreregistrationIsComplete(false)} label="Ok, Merci" />
        </DialogActions>
      </Dialog>
    </>
  );
}

PreRegistrationModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  preregistrationState: PropTypes.shape({
    setPreregistrationIsComplete: PropTypes.func.isRequired,
    preregistrationIsComplete: PropTypes.bool.isRequired,
  }).isRequired,
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    society: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
  loading: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export function usePreRegistration(setMessage, setToastOpen) {
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [preregistrationIsComplete, setPreregistrationIsComplete] = useState(false);
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    society: '',
    phone: '',
  });

  const onEmailRegistration = () => {
    if (!isValidEmail(user.email)) {
      setToastOpen(true);
      setMessage(`S'il vous plaît, mettez une adresse email valide`);
      return;
    }
    setModalOpen(true);
  };

  const handlePreUsersSubmit = async (event) => {
    event.preventDefault();
    const isFormValid = isValidEmail(user.email);
    setPreregistrationIsComplete(false);

    if (!isFormValid) {
      setMessage('Veuillez remplir tous les champs obligatoires.');
      setToastOpen(true);
      return;
    }
    try {
      setLoading(true);
      await axios.post('preUsers', [user]);
      setToastOpen(true);
      setMessage('Vous avez été ajouté avec succès à la liste de diffusion');
      setPreregistrationIsComplete(true);
    } catch (e) {
      const {
        response: {
          status,
          data: { message: apiMessage },
        },
      } = e;

      setToastOpen(true);
      if (status === 400) {
        const { message } = JSON.parse(apiMessage.toString());
        setMessage(message);
      }
      if (status === 500) {
        setMessage("Quelque chose c'est mal passé. Merci d'essayer plus tard");
      }

      throw new Error(e);
    } finally {
      setLoading(false);
      setModalOpen(false);
      setUser({ email: '', firstName: '', lastName: '', phone: '', society: '' });
    }
  };

  const onValueChange = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  return {
    modalOpen,
    setModalOpen,
    loading,
    user,
    setUser,
    preregistrationIsComplete,
    setPreregistrationIsComplete,
    handlePreUsersSubmit,
    onValueChange,
    onEmailRegistration,
  };
}
