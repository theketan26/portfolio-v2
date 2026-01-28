import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SeniorOpenState {
  isOpen: boolean;
  isMinimized: boolean;
  isHidden: boolean;
}

const initialState: SeniorOpenState = {
  isOpen: true,
  isMinimized: false,
  isHidden: false,
};

const seniorOpenSlice = createSlice({
  name: 'seniorOpen',
  initialState,
  reducers: {
    setSeniorOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
    setSeniorMinimized: (state, action: PayloadAction<boolean>) => {
      state.isMinimized = action.payload;
    },
    setSeniorHidden: (state, action: PayloadAction<boolean>) => {
      state.isHidden = action.payload;
    },
    toggleSeniorMinimized: (state) => {
      state.isMinimized = !state.isMinimized;
    },
    toggleSeniorHidden: (state) => {
      state.isHidden = !state.isHidden;
    },
    closeSenior: (state) => {
      state.isOpen = false;
    },
    openSenior: (state) => {
      state.isOpen = true;
    },
  },
});

export const {
  setSeniorOpen,
  setSeniorMinimized,
  setSeniorHidden,
  toggleSeniorMinimized,
  toggleSeniorHidden,
  closeSenior,
  openSenior,
} = seniorOpenSlice.actions;

export default seniorOpenSlice.reducer;
