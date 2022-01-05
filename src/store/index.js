import { configureStore } from "@reduxjs/toolkit";

import searchParamsSlice from "store/searchParams";
import searchResultsSlice from "store/searchResults";
import spinnerSlice from "store/spinner";

export const store = configureStore({
    reducer: {
        searchParams: searchParamsSlice,
        searchResults: searchResultsSlice,
        spinner: spinnerSlice,
    },
});
