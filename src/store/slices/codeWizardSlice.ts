import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CodeWizardState {
  isOpen: boolean;
  isMinimized: boolean;
  isHidden: boolean;
}

const initialState: CodeWizardState = {
  isOpen: true,
  isMinimized: false,
  isHidden: false,
};

const codeWizardSlice = createSlice({
  name: 'codeWizard',
  initialState,
  reducers: {
    setCodeWizardOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
    setCodeWizardMinimized: (state, action: PayloadAction<boolean>) => {
      state.isMinimized = action.payload;
    },
    setCodeWizardHidden: (state, action: PayloadAction<boolean>) => {
      state.isHidden = action.payload;
    },
    toggleCodeWizardMinimized: (state) => {
      state.isMinimized = !state.isMinimized;
    },
    toggleCodeWizardHidden: (state) => {
      state.isHidden = !state.isHidden;
    },
    closeCodeWizard: (state) => {
      state.isOpen = false;
    },
    openCodeWizard: (state) => {
      state.isOpen = true;
    },
  },
});

export const {
  setCodeWizardOpen,
  setCodeWizardMinimized,
  setCodeWizardHidden,
  toggleCodeWizardMinimized,
  toggleCodeWizardHidden,
  closeCodeWizard,
  openCodeWizard,
} = codeWizardSlice.actions;

export default codeWizardSlice.reducer;
