import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
};

export const spinnerSlice = createSlice({
    name: "spinner",
    initialState,
    reducers: {
        isLoading: (state, action) => {
            state.isLoading = action.payload;
        },
    },
});

export const { isLoading } = spinnerSlice.actions;

export default spinnerSlice.reducer;
