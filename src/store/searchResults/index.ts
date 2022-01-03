import qs from 'qs';
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
  payload: null,
  status: "idle",
  isLoading: false,
  error: null,
};

export const searchResultsAsync = createAsyncThunk<
  SearchResultsResponse,
  SearchResultsRequest
>("/searchResults/search", async ({ keyword }, thunkAPI) => {

  const query = {
    title: {
      like: keyword
    }
  }

  const stringifiedQuery = qs.stringify({
    where: query
  }, { addQueryPrefix: true });

  const response = await fetch(`http://localhost:3000/api/jobs${stringifiedQuery}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (response.status === 200) {
    return (await response.json()) as SearchResultsResponse;
  } else {
    return thunkAPI.rejectWithValue((await response.json()) as SerializedError);
  }
});

export const searchResultsSlice = createSlice({
  name: "searchResults",
  initialState,
  reducers: {
    resetSearchResults: (state) => {
      state.payload = initialState.payload;
      state.error = initialState.error;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchResultsAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.isLoading = false;
        state.payload = action.payload;
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
