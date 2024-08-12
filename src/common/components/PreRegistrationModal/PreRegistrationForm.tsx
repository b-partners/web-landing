import { FormProvider } from 'react-hook-form';

import { usePreRegistrationForm } from '@/common/form';
import { usePreRegistrationMutation } from '@/common/query';
import { Box, DialogActions, DialogContent, DialogTitle, Stack, Typography } from '@mui/material';
import { useDialog } from '@store/dialog';

import { BpButton } from '../Button';
import { TextField } from '../fields';
import { PreRegistrationSuccess } from './PreRegistrationSuccess';

export function PreRegistrationForm() {
  const preRegistrationForm = usePreRegistrationForm();
  const { close: closeDialog, open: openDialog } = useDialog();

  const onSuccess = () => {
    closeDialog();
    openDialog(<PreRegistrationSuccess />);
  };

  const { mutate: createUser, isPending } = usePreRegistrationMutation({ onSuccess });
  const handleSubmit = preRegistrationForm.handleSubmit((data) => createUser(data));

  return (
    <Box p={1} width="30vw">
      <FormProvider {...preRegistrationForm}>
        <DialogTitle>
          <Typography variant="body1">
            <i className="fa fa-check" aria-hidden="true" /> Merci, votre pré-inscription est bien prise en compte.
          </Typography>
        </DialogTitle>
        <form onSubmit={handleSubmit}>
          <span style={{ marginLeft: '1.6rem' }}>Dites-nous en plus sur vous:</span>
          <DialogContent>
            <Stack spacing={1}>
              <TextField fullWidth name="firstName" label="Prénom" />
              <TextField fullWidth name="lastName" label="Nom" />
              <TextField fullWidth name="email" label="Adresse e-mail" type="email" />
              <TextField fullWidth name="phone" label="Téléphone" />
              <TextField fullWidth name="society" label="Société" />
            </Stack>
          </DialogContent>
          <DialogActions style={{ marginRight: '1rem' }}>
            <BpButton loading={isPending} type="submit">
              Se préinscrire
            </BpButton>
            <BpButton loading={isPending} onClick={closeDialog}>
              Annuler
            </BpButton>
          </DialogActions>
        </form>
      </FormProvider>
    </Box>
  );
}
