import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MyCodeState {
  isOpen: boolean;
  isMinimized: boolean;
  isHidden: boolean;
}

const initialState: MyCodeState = {
  isOpen: true,
  isMinimized: false,
  isHidden: false,
};

const myCodeSlice = createSlice({
  name: 'myCode',
  initialState,
  reducers: {
    setMyCodeOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
    setMyCodeMinimized: (state, action: PayloadAction<boolean>) => {
      state.isMinimized = action.payload;
    },
    setMyCodeHidden: (state, action: PayloadAction<boolean>) => {
      state.isHidden = action.payload;
    },
    toggleMyCodeMinimized: (state) => {
      state.isMinimized = !state.isMinimized;
    },
    toggleMyCodeHidden: (state) => {
      state.isHidden = !state.isHidden;
    },
    closeMyCode: (state) => {
      state.isOpen = false;
    },
    openMyCode: (state) => {
      state.isOpen = true;
    },
  },
});

export const {
  setMyCodeOpen,
  setMyCodeMinimized,
  setMyCodeHidden,
  toggleMyCodeMinimized,
  toggleMyCodeHidden,
  closeMyCode,
  openMyCode,
} = myCodeSlice.actions;

export default myCodeSlice.reducer;
