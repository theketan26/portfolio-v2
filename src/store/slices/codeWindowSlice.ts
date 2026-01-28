import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CodeWindowState {
  isOpen: boolean;
  isMinimized: boolean;
  isHidden: boolean;
}

const initialState: CodeWindowState = {
  isOpen: true,
  isMinimized: false,
  isHidden: false,
};

const codeWindowSlice = createSlice({
  name: 'codeWindow',
  initialState,
  reducers: {
    setCodeWindowOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
    setCodeWindowMinimized: (state, action: PayloadAction<boolean>) => {
      state.isMinimized = action.payload;
    },
    setCodeWindowHidden: (state, action: PayloadAction<boolean>) => {
      state.isHidden = action.payload;
    },
    toggleCodeWindowMinimized: (state) => {
      state.isMinimized = !state.isMinimized;
    },
    toggleCodeWindowHidden: (state) => {
      state.isHidden = !state.isHidden;
    },
    closeCodeWindow: (state) => {
      state.isOpen = false;
    },
    openCodeWindow: (state) => {
      state.isOpen = true;
    },
  },
});

export const {
  setCodeWindowOpen,
  setCodeWindowMinimized,
  setCodeWindowHidden,
  toggleCodeWindowMinimized,
  toggleCodeWindowHidden,
  closeCodeWindow,
  openCodeWindow,
} = codeWindowSlice.actions;

export default codeWindowSlice.reducer;
