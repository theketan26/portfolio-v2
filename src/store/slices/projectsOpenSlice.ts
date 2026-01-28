import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProjectsOpenState {
  openedProjects: string[];
  minimizedProjects: string[];
  hiddenProjects: string[];
}

const initialState: ProjectsOpenState = {
  openedProjects: [],
  minimizedProjects: [],
  hiddenProjects: [],
};

const projectsOpenSlice = createSlice({
  name: 'projectsOpen',
  initialState,
  reducers: {
    setOpenedProjects: (state, action: PayloadAction<string[]>) => {
      state.openedProjects = action.payload;
    },
    setMinimizedProjects: (state, action: PayloadAction<string[]>) => {
      state.minimizedProjects = action.payload;
    },
    setHiddenProjects: (state, action: PayloadAction<string[]>) => {
      state.hiddenProjects = action.payload;
    },
    toggleProjectOpen: (state, action: PayloadAction<string>) => {
      const projectName = action.payload;
      if (state.openedProjects.includes(projectName)) {
        state.openedProjects = state.openedProjects.filter(p => p !== projectName);
      } else {
        state.openedProjects = [...state.openedProjects, projectName];
      }
    },
    toggleProjectMinimized: (state, action: PayloadAction<string>) => {
      const projectName = action.payload;
      if (state.minimizedProjects.includes(projectName)) {
        state.minimizedProjects = state.minimizedProjects.filter(p => p !== projectName);
      } else {
        state.minimizedProjects = [...state.minimizedProjects, projectName];
      }
    },
    toggleProjectHidden: (state, action: PayloadAction<string>) => {
      const projectName = action.payload;
      if (state.hiddenProjects.includes(projectName)) {
        state.hiddenProjects = state.hiddenProjects.filter(p => p !== projectName);
      } else {
        state.hiddenProjects = [...state.hiddenProjects, projectName];
      }
    },
    openAllProjects: (state) => {
      state.openedProjects = [];
    },
  },
});

export const {
  setOpenedProjects,
  setMinimizedProjects,
  setHiddenProjects,
  toggleProjectOpen,
  toggleProjectMinimized,
  toggleProjectHidden,
  openAllProjects,
} = projectsOpenSlice.actions;

export default projectsOpenSlice.reducer;
