import { createSlice } from "@reduxjs/toolkit";
import { SpinnerState } from "./types";

const initialState: SpinnerState = {
  isLoading: false,
};

export const spinnerSlice = createSlice({
  name: "spinner",
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    isLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { isLoading } = spinnerSlice.actions;

export default spinnerSlice.reducer;
