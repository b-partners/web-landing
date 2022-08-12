import { useState } from 'react';
import { useToggle } from './use-toggle';
import httpClient from '../../config/axios';

export function usePreregistration() {
  const [isLoading, setIsLoading] = useState(false);
  const [preregistrationPayload, setPreregistrationPayload] = useState({
    first_name: '', last_name: '', society: '', email: '', phone_number: '',
  });
  const [showModal, toggle] = useToggle(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    toggle();
  };

  const sendData = async (payload) => {
    setIsLoading(true);
    try {
      await httpClient.post('/pre-registration', payload);
    } catch (e) {
      throw new Error(e);
    } finally {
      setIsLoading(false);
      toggle();
    }
  };

  const handleModalSubmit = async (e) => {
    e.preventDefault();
    await sendData({ ...preregistrationPayload });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPreregistrationPayload((state) => ({ ...state, [name]: value }));
  };

  return { isLoading, showModal, toggle, handleEmailSubmit: handleSubmit, handleModalSubmit, handleChange };
}
