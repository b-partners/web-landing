import { useDialog } from '@store/dialog';
import { Dialog } from '@mui/material';

export const GlobalDialog = () => {
  const { isOpen: isDialogOpen, content: dialogContent, close: closeDialog } = useDialog();
  return (
    <Dialog open={isDialogOpen} onClose={closeDialog}>
      {dialogContent}
    </Dialog>
  );
};
