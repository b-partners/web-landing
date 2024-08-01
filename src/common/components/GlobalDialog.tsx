import { Dialog } from '@mui/material';
import { useDialog } from '@store/dialog';

export const GlobalDialog = () => {
  const { isOpen: isDialogOpen, content: dialogContent, close: closeDialog } = useDialog();
  return (
    <Dialog maxWidth="lg" open={isDialogOpen} onClose={closeDialog}>
      {dialogContent}
    </Dialog>
  );
};
