import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    keyword: "",
    vacancyNumber: "",
    department: [],
    category: [],
    location: [],
    renumerationFrom: "",
    renumerationTo: "",
    vacancyType: [],
    date: "",
    salaryFrom: "",
    salaryTo: "",
};

export const searchParamsSlice = createSlice({
    name: "searchParams",
    initialState,
    reducers: {
        updateSearchParams: {
            reducer: (state, action) => {
                state = { ...state, [action.payload.name]: action.payload.value };
                return state;
            },
            // Use this if you need to adjust the payload value before it hits the reducer
            prepare: (action) => {
                return { payload: action };
            }
        },
        resetSearchParams: (state) => {
            state = { ...initialState };
            return state;
        },
    },
});

export const { updateSearchParams, resetSearchParams } =
    searchParamsSlice.actions;

export default searchParamsSlice.reducer;
