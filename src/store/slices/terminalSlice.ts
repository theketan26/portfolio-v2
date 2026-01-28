import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TerminalState {
  isOpen: boolean;
  isMinimized: boolean;
  isHidden: boolean;
}

const initialState: TerminalState = {
  isOpen: true,
  isMinimized: false,
  isHidden: false,
};

const terminalSlice = createSlice({
  name: 'terminal',
  initialState,
  reducers: {
    setTerminalOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
    setTerminalMinimized: (state, action: PayloadAction<boolean>) => {
      state.isMinimized = action.payload;
    },
    setTerminalHidden: (state, action: PayloadAction<boolean>) => {
      state.isHidden = action.payload;
    },
    toggleTerminalMinimized: (state) => {
      state.isMinimized = !state.isMinimized;
    },
    toggleTerminalHidden: (state) => {
      state.isHidden = !state.isHidden;
    },
    closeTerminal: (state) => {
      state.isOpen = false;
    },
    openTerminal: (state) => {
      state.isOpen = true;
    },
  },
});

export const {
  setTerminalOpen,
  setTerminalMinimized,
  setTerminalHidden,
  toggleTerminalMinimized,
  toggleTerminalHidden,
  closeTerminal,
  openTerminal,
} = terminalSlice.actions;

export default terminalSlice.reducer;
