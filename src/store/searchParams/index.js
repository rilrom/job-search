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
        updateSearchParams: (state, action) => {
            state = { ...state, [action.payload.name]: action.payload.value };
            return state;
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
