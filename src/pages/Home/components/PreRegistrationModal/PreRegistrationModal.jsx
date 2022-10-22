/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent } from '@mui/material';
import TextField from '@mui/material/TextField';
import * as PropTypes from 'prop-types';
import axios from '../../../../config/axios';
import { Button } from '../../../../common/components/Button';
import isValidEmail from '../../../../utils/is-valid-email';

export function PreRegistrationModal(props) {
  const { user, loading, classes, open, onChange, onSubmit, onClick, onClose } = props;

  return (
    <Dialog open={open} onClose={onClose}>
      <form onSubmit={onSubmit}>
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
  );
}

PreRegistrationModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  classes: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
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
    } catch (e) {
      setToastOpen(true);
      setMessage("Quelque chose c'est mal passé. Merci d'essayer plus tard");
      throw new Error(e);
    } finally {
      setLoading(false);
      setModalOpen(false);
    }
  };

  const onValueChange = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  return { modalOpen, setModalOpen, loading, user, setUser, handlePreUsersSubmit, onValueChange };
}
