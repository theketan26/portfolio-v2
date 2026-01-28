import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import myCodeReducer from './slices/myCodeSlice';
import codeWizardReducer from './slices/codeWizardSlice';
import terminalReducer from './slices/terminalSlice';
import seniorOpenReducer from './slices/seniorOpenSlice';
import educationOpenReducer from './slices/educationOpenSlice';
import projectsOpenReducer from './slices/projectsOpenSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    myCode: myCodeReducer,
    codeWizard: codeWizardReducer,
    terminal: terminalReducer,
    seniorOpen: seniorOpenReducer,
    educationOpen: educationOpenReducer,
    projectsOpen: projectsOpenReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
