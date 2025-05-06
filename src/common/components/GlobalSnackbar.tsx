import { Alert, Snackbar } from '@mui/material';
import { useSnackbar } from '@store/snackbar';

export function GlobalSnackbar() {
  const { isOpen, close, message, type, snackbarProps = {}, alertProps = {} } = useSnackbar();
  return (
    <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} autoHideDuration={5000} open={isOpen} onClose={close} {...snackbarProps}>
      <Alert severity={type} onClose={close} variant="filled" sx={{ width: '100%' }} {...alertProps}>
        {message}
      </Alert>
    </Snackbar>
  );
}
