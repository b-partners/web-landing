import { create } from 'zustand';

export type TMode = 'create' | 'edit';

interface State {
  jsonToEdit: any;
  mode: TMode;
}

interface Action {
  setJsonToEdit: (jsonData: any) => void;
  setMode: (value: TMode) => void;
}

export const useTemplateGenStore = create<State & Action>((set) => {
  return {
    jsonToEdit: null,
    mode: 'create',
    setMode: (mode) => {
      set({ mode, jsonToEdit: null });
    },
    setJsonToEdit: (jsonData) => set({ jsonToEdit: jsonData }),
  };
});
