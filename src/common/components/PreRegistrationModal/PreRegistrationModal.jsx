/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import MuiPhoneNumber from 'material-ui-phone-number';
import { Dialog, DialogActions, DialogContent } from '@mui/material';
import TextField from '@mui/material/TextField';
import * as PropTypes from 'prop-types';
import axios from '../../../config/axios';
import { Button } from '../Button';
import isValidEmail from '../../../utils/is-valid-email';
import { useTranslation } from '../../../utils/hooks/use-translate';

export function PreRegistrationModal(props) {
  const { user, loading, open, onChange, onSubmit, onClick, onClose, onPhoneChange } = props;

  const useStyles = makeStyles({
    field: {
      width: '100%',
    },
  });

  const classes = useStyles();
  return (
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
            required
          />
          <MuiPhoneNumber
            defaultCountry='fr'
            className={classes.field}
            id="phone"
            name="phone"
            label="Téléphone"
            type="phone"
            variant="filled"
            onChange={onPhoneChange}
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
        <DialogActions style={{ marginRight: '1rem' }}>
          <Button onClick={onSubmit} autoFocus loading={loading}>
            Se préinscrire
          </Button>
          <Button onClick={onClick} label="Annuler" preset="btn-secondary" />
        </DialogActions>
      </form>
    </Dialog>
  );
}

PreRegistrationModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onPhoneChange: PropTypes.func.isRequired,
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
      setMessage('Veuillez mettre une adresse email valide');
      return;
    }
    setModalOpen(true);
  };

  const toTranslate = useTranslation();

  const handlePreUsersSubmit = async (event) => {
    event.preventDefault();
    const isFormValid = isValidEmail(user.email);

    if (!isFormValid) {
      setMessage('Veuillez remplir tous les champs obligatoires.');
      setToastOpen(true);
      return;
    }
    try {
      setLoading(true);
      await axios.post('preUsers', [user]);
      setMessage('Vous avez été ajouté avec succès à la liste de diffusion');
      setToastOpen(true);
    } catch (e) {
      const {
        response: {
          status,
          data: { message: apiMessage },
        },
      } = e;
      setToastOpen(true);
      if (status === 400) {
        const { message } = JSON.parse(apiMessage);
        setMessage(toTranslate(message));
      }
      if (status === 500) {
        setMessage("Quelque chose s'est mal passé. Merci d'essayer plus tard");
      }
      throw new Error(e);
    } finally {
      setLoading(false);
      setModalOpen(false);
      setUser({ email: '', firstName: null, lastName: null, phone: null, society: null });
    }
  };

  const onValueChange = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const onPhoneChange = (phoneValue) => {
    setUser((prevState) => ({ ...prevState, phone: phoneValue.replace(/\s+/g, '') }));
  };

  return { modalOpen, setModalOpen, loading, user, setUser, handlePreUsersSubmit,
    onValueChange, onEmailRegistration, onPhoneChange };
}