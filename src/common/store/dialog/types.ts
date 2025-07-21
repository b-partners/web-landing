import { ReactNode } from 'react';

import { DialogProps } from '@mui/material';

interface DialogState {
  content: ReactNode;
  isOpen: boolean;
  dialogProps?: Partial<DialogProps>;
}

interface DialogAction {
  open: (content: ReactNode, dialogProps?: Partial<DialogProps>) => void;
  close: () => void;
}

export type TDialogStore = DialogState & DialogAction;
