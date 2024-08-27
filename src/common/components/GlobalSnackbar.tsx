import { Snackbar } from '@mui/material';
import { useSnackbar } from '@store/snackbar';

export function GlobalSnackbar() {
  const { isOpen, close, message } = useSnackbar();
  return <Snackbar autoHideDuration={5000} open={isOpen} onClose={close} message={message} />;
}
