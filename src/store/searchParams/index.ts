import { createSlice } from "@reduxjs/toolkit";
import { SearchParamsState } from "./types";

const initialState: SearchParamsState = {
  keyword: "",
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
      state.keyword = initialState.keyword;
      return state;
    },
  },
});

export const { updateSearchParams, resetSearchParams } =
  searchParamsSlice.actions;

export default searchParamsSlice.reducer;
