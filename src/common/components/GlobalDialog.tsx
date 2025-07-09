import { Dialog } from '@mui/material';
import { useDialog } from '@store/dialog';

export function GlobalDialog() {
  const { isOpen: isDialogOpen, content: dialogContent, close: closeDialog, dialogProps = {} } = useDialog();
  return (
    <Dialog maxWidth="lg" open={isDialogOpen} onClose={dialogProps.onClose || closeDialog} {...dialogProps}>
      {dialogContent}
    </Dialog>
  );
}
