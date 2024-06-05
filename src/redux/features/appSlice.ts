import { createSlice } from '@reduxjs/toolkit';

type AppState = {
  open_app_drawer: boolean;
};

const initialState = {
  open_app_drawer: false,
} as AppState;
export const app = createSlice({
  name: 'app',
  initialState,
  reducers: {
    closeAppDrawer: state => ({
      ...state,
      open_app_drawer: false,
    }),
    openAppDrawer: state => ({
      ...state,
      open_app_drawer: true,
    }),
  },
});

export const { closeAppDrawer, openAppDrawer } = app.actions;
export default app.reducer;
