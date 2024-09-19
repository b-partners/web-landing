import { Alert, Snackbar } from '@mui/material';
import { useSnackbar } from '@store/snackbar';

export function GlobalSnackbar() {
  const { isOpen, close, message, type } = useSnackbar();
  return (
    <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} autoHideDuration={5000} open={isOpen} onClose={close}>
      <Alert severity={type} onClose={close} variant="filled" sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
}
