import { AlertProps, SnackbarProps } from '@mui/material';

type SnackbarTypes = 'success' | 'error' | 'warning' | 'info';

interface SnackbarState {
  isOpen: boolean;
  message: string;
  type: SnackbarTypes;
  snackbarProps?: SnackbarProps;
  alertProps?: AlertProps;
}

interface OpenOptions {
  message: string;
  type: SnackbarTypes;
  snackbarProps?: SnackbarProps;
  alertProps?: AlertProps;
}

interface SnackbarAction {
  open: (options: OpenOptions) => void;
  close: () => void;
}

export type TSnackbarStore = SnackbarState & SnackbarAction;
