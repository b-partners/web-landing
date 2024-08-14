import { Dialog } from '@mui/material';
import { useDialog } from '@store/dialog';

export function GlobalDialog() {
  const { isOpen: isDialogOpen, content: dialogContent, close: closeDialog } = useDialog();
  return (
    <Dialog fullWidth maxWidth="sm" open={isDialogOpen} onClose={closeDialog}>
      {dialogContent}
    </Dialog>
  );
}
