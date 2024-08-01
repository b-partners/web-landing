
type SnackbarTypes = 'success' | 'error' | 'warning' | 'info';

interface SnackbarState {
  isOpen: boolean;
  message: string;
  type: SnackbarTypes;
}

interface OpenOptions {
  message: string;
  type: SnackbarTypes;
}

interface SnackbarAction {
  open: (options: OpenOptions) => void;
  close: () => void;
}

export type TSnackbarStore = SnackbarState & SnackbarAction;
