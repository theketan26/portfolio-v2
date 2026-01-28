import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface EducationOpenState {
  isOpen: boolean;
  isMinimized: boolean;
  isHidden: boolean;
}

const initialState: EducationOpenState = {
  isOpen: true,
  isMinimized: false,
  isHidden: false,
};

const educationOpenSlice = createSlice({
  name: 'educationOpen',
  initialState,
  reducers: {
    setEducationOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
    setEducationMinimized: (state, action: PayloadAction<boolean>) => {
      state.isMinimized = action.payload;
    },
    setEducationHidden: (state, action: PayloadAction<boolean>) => {
      state.isHidden = action.payload;
    },
    toggleEducationMinimized: (state) => {
      state.isMinimized = !state.isMinimized;
    },
    toggleEducationHidden: (state) => {
      state.isHidden = !state.isHidden;
    },
    closeEducation: (state) => {
      state.isOpen = false;
    },
    openEducation: (state) => {
      state.isOpen = true;
    },
  },
});

export const {
  setEducationOpen,
  setEducationMinimized,
  setEducationHidden,
  toggleEducationMinimized,
  toggleEducationHidden,
  closeEducation,
  openEducation,
} = educationOpenSlice.actions;

export default educationOpenSlice.reducer;
