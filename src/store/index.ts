import { configureStore } from "@reduxjs/toolkit";

import userSlice from "store/user";
import searchParamsSlice from "store/searchParams";
import searchResultsSlice from "store/searchResults";
import spinnerSlice from "store/spinner";

export const store = configureStore({
  reducer: {
    user: userSlice,
    searchParams: searchParamsSlice,
    searchResults: searchResultsSlice,
    spinner: spinnerSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
