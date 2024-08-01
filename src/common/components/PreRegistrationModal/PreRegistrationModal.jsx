import { useState } from 'react';

import { Dialog } from '@mui/material';
import { useSnackbar } from '@store/snackbar';
import * as PropTypes from 'prop-types';

import axios from '../../../config/axios';
import { blankToNull } from '../../../utils/blankToNull';
import { useHandleError, useTranslation } from '../../../utils/hooks';
import isValidEmail from '../../../utils/is-valid-email';
import { INITIAL_USER } from './utils';

export function PreRegistrationModal(props) {
  const {
    open,
    preregistrationState: { preregistrationIsComplete, setPreregistrationIsComplete },
    onClose,
  } = props;

  return (
    <>
      <Dialog open={open} onClose={onClose}></Dialog>

      <Dialog open={preregistrationIsComplete} onClose={() => setPreregistrationIsComplete(false)}></Dialog>
    </>
  );
}

PreRegistrationModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
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
};

export function usePreRegistration() {
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [preregistrationIsComplete, setPreregistrationIsComplete] = useState(false);
  const [user, setUser] = useState(INITIAL_USER);

  const { open: openSnackbar } = useSnackbar();

  const onEmailRegistration = () => {
    if (!isValidEmail(user.email)) {
      openSnackbar({
        message: 'Veuillez mettre une adresse email valide',
        type: 'error',
      });
      return;
    }
    setModalOpen(true);
  };

  const toTranslate = useTranslation();
  const toHandleError = useHandleError();

  const handlePreUsersSubmit = async (event) => {
    event.preventDefault();
    const isFormValid = isValidEmail(user.email);
    setPreregistrationIsComplete(false);

    if (!isFormValid) {
      openSnackbar({
        message: 'Veuillez remplir tous les champs obligatoires.',
        type: 'error',
      });
      return;
    }

    try {
      setLoading(true);
      await axios.post('preUsers', [blankToNull(user)]);
      openSnackbar({ message: 'Vous avez été ajouté avec succès à la liste de diffusion', type: 'success' });
      setPreregistrationIsComplete(true);
    } catch (e) {
      const {
        response: {
          status,
          data: { message: apiMessage },
        },
      } = e;
      if (status === 400) {
        const message = toHandleError(apiMessage);
        openSnackbar({ message: toTranslate(message), type: 'error' });
      }
      if (status === 500) {
        openSnackbar({ message: "Quelque chose s'est mal passé. Merci d'essayer plus tard", type: 'error' });
      }
    } finally {
      setLoading(false);
      setModalOpen(false);
      setUser(INITIAL_USER);
    }
  };

  const onValueChange = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const onPhoneChange = (phoneValue) => {
    setUser((prevState) => ({ ...prevState, phone: phoneValue.replace(/\s+/g, '') }));
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
    onPhoneChange,
  };
}
