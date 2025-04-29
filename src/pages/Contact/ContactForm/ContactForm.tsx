import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { api } from '@/config';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { useSnackbar } from '@store/snackbar';

import { Button } from '../../../common/components/Button';
import { ON_BOARD_INITIATION_DEFAULT_VALUES, OnboardInitiationType, onboardInitiationResolver } from './utils/onboardInitiationResolver';

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<OnboardInitiationType>({
    defaultValues: ON_BOARD_INITIATION_DEFAULT_VALUES,
    resolver: onboardInitiationResolver,
  });
  const [isLoading, setIsLoading] = useState(false);
  const { open } = useSnackbar();

  const sendEmail = async (onboardInitiationValues: OnboardInitiationType) => {
    if (isLoading) {
      return;
    }

    setIsLoading(true);
    try {
      await api.post<OnboardInitiationType>('/sendEmail', onboardInitiationValues);
      open({ message: 'Merci pour votre message ! Nous vous répondrons dès que possible.', type: 'success' });
      reset();
    } catch (error) {
      open({ message: "Une erreur est survenue lors de l'envoi. Veuillez réessayer plus tard", type: 'error' });
    } finally {
      setIsLoading(false);
    }
  };

  const errorProps = (field: keyof OnboardInitiationType): Pick<TextFieldProps, 'error' | 'helperText'> => {
    return {
      helperText: errors[field]?.message,
      error: !!errors[field],
    };
  };

  return (
    <div style={{ position: 'relative' }}>
      <section className="contact-form section">
        <div className="contact-form__container bd-container">
          <div className="contact-form__col1">
            <h2 className="contact-form__title">L'équipe BIRDIA</h2>
            CONTACT ACCUEIL
            <ul style={{ marginBlock: '1rem' }}>
              <li>
                <i className="fa fa-phone" />
                <u>06 68 62 48 36</u>
              </li>
              <li>
                <i className="fa fa-envelope logo-color" />
                <a href="mailto:contact@bpartners.app">
                  <u className="logo-color">contact@bpartners.app</u>
                </a>
              </li>
            </ul>
            <p style={{ marginTop: '1rem' }}>
              ADRESSE <br />
              14 Rue Soleillet, 75020 Paris.
            </p>
          </div>
          <div className="contact-form__col2">
            <form onSubmit={handleSubmit(sendEmail)}>
              <div style={{ display: 'flex' }}>
                <TextField
                  label="Nom"
                  type="text"
                  variant="outlined"
                  sx={{
                    width: '50%',
                    marginRight: '1%',
                    marginBottom: '.5rem',
                    fontSize: '.8rem',
                    backgroundColor: 'white',
                  }}
                  {...register('lastName')}
                  {...errorProps('lastName')}
                />
                <TextField
                  sx={{
                    width: '50%',
                    marginBottom: '.5rem',
                    fontSize: '.8rem',
                    backgroundColor: 'white',
                  }}
                  label="Prénom"
                  type="text"
                  variant="outlined"
                  {...register('firstName')}
                  {...errorProps('firstName')}
                />
              </div>
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                sx={{
                  width: '100%',
                  marginBottom: '.5rem',
                  fontSize: '.8rem',
                  backgroundColor: 'white',
                }}
                {...register('email')}
                {...errorProps('email')}
              />
              <TextField
                label="Sujet"
                type="text"
                variant="outlined"
                sx={{
                  width: '100%',
                  marginBottom: '.5rem',
                  fontSize: '.8rem',
                  backgroundColor: 'white',
                }}
                {...register('subject')}
                {...errorProps('subject')}
              />
              <TextField
                multiline
                type="textarea"
                variant="outlined"
                label="Commentaire"
                sx={{
                  width: '100%',
                  marginBottom: '.5rem',
                  fontSize: '.8rem',
                  backgroundColor: 'white',
                }}
                rows={4}
                {...register('comments')}
                {...errorProps('comments')}
              />
              <Button loading={isLoading} disabled={isLoading} type="submit" label="Envoyer" preset="contact-registration-button" />
            </form>
          </div>
        </div>
      </section>
      <div
        style={{
          backgroundColor: 'rgb(235, 235, 235)',
          height: '6.1rem',
          position: 'absolute',
          bottom: '-6rem',
          width: '100%',
          zIndex: '-1',
        }}
      >
        {' '}
      </div>
    </div>
  );
}
