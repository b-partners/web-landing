import { DialogActions, DialogContent } from '@mui/material';
import { useDialog } from '@store/dialog';

import { BpButton } from '../Button';

export function PreRegistrationSuccess() {
  const { close } = useDialog();
  return (
    <>
      <DialogContent>
        <p>
          Pour finaliser votre inscription, télécharger l’application BPartners sur <b>Android</b> ou <b>Appstore</b> pour utiliser les services de partout.
        </p>
      </DialogContent>
      <DialogActions>
        <BpButton onClick={close}>Ok, Merci</BpButton>
      </DialogActions>
    </>
  );
}
