import {
  createAsyncThunk,
  createSlice,
  SerializedError,
} from "@reduxjs/toolkit";
import {
  SearchResultsState,
  SearchResultsRequest,
  SearchResultsResponse,
} from "./types";

const initialState: SearchResultsState = {
  results: [],
  status: "idle",
  isLoading: false,
  error: null,
};

export const searchResultsAsync = createAsyncThunk<
  SearchResultsResponse[],
  SearchResultsRequest
>("/searchResults/search", async ({ keyword }, thunkAPI) => {
  const response = await fetch("/api/search", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      keyword,
    }),
  });

  if (response.status === 200) {
    return (await response.json()) as SearchResultsResponse[];
  } else {
    return thunkAPI.rejectWithValue((await response.json()) as SerializedError);
  }
});

export const searchResultsSlice = createSlice({
  name: "searchResults",
  initialState,
  reducers: {
    resetSearchResults: (state) => {
      state.results = initialState.results;
      state.error = initialState.error;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchResultsAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.isLoading = false;
        state.results = action.payload;
        state.error = null;
      })
      .addCase(searchResultsAsync.rejected, (state, action) => {
        state.status = "failed";
        state.isLoading = false;
        state.error = action.error;
      })
      .addCase(searchResultsAsync.pending, (state) => {
        state.status = "pending";
        state.isLoading = true;
      });
  },
});

export const { resetSearchResults } = searchResultsSlice.actions;

export default searchResultsSlice.reducer;
