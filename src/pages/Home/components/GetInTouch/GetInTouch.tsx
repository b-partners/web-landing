import { useForm } from 'react-hook-form';

import { PreRegistrationForm } from '@/common/components/PreRegistrationModal';
import { SxProps, TextField, useMediaQuery } from '@mui/material';
import { useDialog } from '@store/dialog';

import { Button } from '../../../../common/components/Button/Button';
import WavesBottomBg from '../../assets/img/waves-bottom-bg.png';

type User = {
  firstName?: string;
  lastName?: string;
  society?: string;
  phone?: string;
  email?: string;
};

const EMAIL_FIELD_SX: SxProps = {
  width: '70%',
  overflow: 'hidden',
  bgcolor: 'white',
  border: '1px solid white',
  borderBottom: 'none !important',
  borderRadius: '25px 0px 0px 25px',
};

export const GetInTouchForm = () => {
  const { open: openDialog } = useDialog();
  const matches = useMediaQuery('(max-width: 768px)');
  const { register, handleSubmit } = useForm<Pick<User, 'email'>>({
    defaultValues: {
      email: '',
    },
  });

  const onEmailRegistration = ({ email }: Pick<User, 'email'>) => {
    openDialog(<PreRegistrationForm email={email} />);
  };

  return (
    <form className="form-wrapper" onSubmit={handleSubmit(onEmailRegistration)}>
      <TextField
        sx={{
          ...EMAIL_FIELD_SX,
          ...(matches
            ? {
                borderRadius: '25px !important',
                marginBottom: '.5rem',
              }
            : {
                borderRadius: '25px 0px 0px 25px',
              }),
        }}
        required
        label="Email"
        type="email"
        variant="filled"
        {...register('email')}
      />
      <Button type="submit" id="registration-button-2" label="Je m'inscris" preset="get_in_touch__button" />
    </form>
  );
};

export const GetInTouch = () => {
  return (
    <section className="get_in_touch section">
      <img
        src={WavesBottomBg}
        alt=" "
        loading="lazy"
        style={{
          position: 'absolute',
          zIndex: '-1',
          left: '0',
          top: '-.05rem',
          filter: 'brightness(1.05)',
        }}
      />
      <div className="bd-container section">
        <h2 className="get_in_touch__title">Restez informé</h2>
        <p style={{ marginBlock: '1.3rem' }}>
          Aujourd'hui, les artisans consacrent entre 20% à 30% de leur temps à faire des déplacements et des devis. <br />
          Restez informé pour gagner plus de clients.
        </p>
        <div className="get_in_touch__form">
          <GetInTouchForm />
        </div>
      </div>
    </section>
  );
};
