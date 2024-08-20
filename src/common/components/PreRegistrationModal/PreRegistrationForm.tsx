import { FormProvider } from 'react-hook-form';

import { usePreRegistrationForm } from '@/common/form';
import { usePreRegistrationMutation } from '@/common/query';
import { Box, DialogActions, DialogContent, DialogTitle, Stack, Typography } from '@mui/material';
import { useDialog } from '@store/dialog';
import MuiPhoneNumber from 'material-ui-phone-number';

import { BpButton } from '../Button';
import { TextField } from '../fields';
import { PreRegistrationSuccess } from './PreRegistrationSuccess';

export function PreRegistrationForm({ email = '' }) {
  const preRegistrationForm = usePreRegistrationForm({ email });
  const { register } = preRegistrationForm;
  const { close: closeDialog, open: openDialog } = useDialog();

  const onSuccess = () => {
    closeDialog();
    openDialog(<PreRegistrationSuccess />);
  };

  const { mutate: createUser, isPending } = usePreRegistrationMutation({ onSuccess });
  const handleSubmit = preRegistrationForm.handleSubmit((data) => createUser(data));

  const onPhoneNumberChange = (newValue: string) => {
    preRegistrationForm.setValue('phone', newValue);
  };
  const phoneNumberValue = preRegistrationForm.getValues('phone');

  return (
    <Box p={1}>
      <FormProvider {...preRegistrationForm}>
        <DialogTitle>
          <Typography variant="body1" sx={{ textAlign: 'center' }}>
            <i className="fa fa-check" aria-hidden="true" /> Merci, votre pré-inscription est bien prise en compte.
          </Typography>
        </DialogTitle>
        <form style={{ width: '100%' }} onSubmit={handleSubmit}>
          <span style={{ marginLeft: '1.6rem' }}>Dites-nous en plus sur vous:</span>
          <DialogContent>
            <Stack spacing={1}>
              <TextField fullWidth {...register('firstName')} label="Prénom" />
              <TextField fullWidth {...register('lastName')} label="Nom" />
              <TextField fullWidth {...register('email')} label="Adresse e-mail" type="email" />
              <MuiPhoneNumber
                id="phone"
                name="phone"
                type="phone"
                variant="filled"
                label="Téléphone"
                defaultCountry="fr"
                onChange={onPhoneNumberChange as any}
                value={phoneNumberValue}
              />
              <TextField fullWidth {...register('society')} label="Société" />
            </Stack>
          </DialogContent>
          <DialogActions style={{ marginRight: '1rem' }}>
            <BpButton loading={isPending} size="small" type="submit">
              Se préinscrire
            </BpButton>
            <BpButton variant="outlined" size="small" sx={{ px: 2 }} loading={isPending} onClick={closeDialog}>
              Annuler
            </BpButton>
          </DialogActions>
        </form>
      </FormProvider>
    </Box>
  );
}
