import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  toast: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleLoading: (state) => {
      state.loading = !state.loading;
    },
    addToast: (state, action) => {
      state.toast = action.payload;
    },
  },
});

export const { toggleLoading, addToast } = appSlice.actions;

export default appSlice.reducer;
