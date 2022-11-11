import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Snackbar } from '@mui/material';

import {
  PreRegistrationModal,
  usePreRegistration,
} from './common/components/PreRegistrationModal/PreRegistrationModal';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';

function App() {
  const [toastOpen, setToastOpen] = useState(false);

  const handleToastClose = (_, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setToastOpen(false);
  };

  const [message, setMessage] = useState(null);

  const {
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
  } = usePreRegistration(setMessage, setToastOpen);

  const onEmailChange = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <Routes>
        <Route
          exact
          path="/home"
          element={
            <Home
              setModalOpen={setModalOpen}
              onEmailChange={onEmailChange}
              onEmailRegistration={onEmailRegistration}
              user={user}
            />
          }
        />
        <Route
          exact
          path="/about"
          element={<About onEmailChange={onEmailChange} onEmailRegistration={onEmailRegistration} user={user} />}
        />
        <Route
          exact
          path="/contact"
          element={<Contact onEmailChange={onEmailChange} onEmailRegistration={onEmailRegistration} user={user} />}
        />
        <Route path="/" element={<Navigate to="/home" replace />} />
      </Routes>
      <PreRegistrationModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handlePreUsersSubmit}
        onChange={onValueChange}
        onPhoneChange={onPhoneChange}
        user={user}
        loading={loading}
        onClick={() => {
          setUser({ firstName: '', lastName: '', society: '', email: '', phone: '' });
          setModalOpen(false);
        }}
        preregistrationState={{ preregistrationIsComplete, setPreregistrationIsComplete }}
      />
      <Snackbar autoHideDuration={5000} open={toastOpen} onClose={handleToastClose} message={message} />
    </>
  );
}

export default App;
