import { create } from 'zustand';

import { TSnackbarStore } from './types';

export const useSnackbar = create<TSnackbarStore>()((set) => ({
  isOpen: false,
  message: '',
  type: 'info',
  close() {
    set({ isOpen: false, message: '' });
  },
  open({ snackbarProps, alertProps, message, type }) {
    set({ isOpen: true, alertProps, snackbarProps, message, type });
  },
}));
