import {
  createAsyncThunk,
  createSlice,
  SerializedError,
} from "@reduxjs/toolkit";
import { UserState, LoginRequest, LoginResponse } from "./types";

// Define the initial state using that type
const initialState: UserState = {
  email: "",
  status: "idle",
  error: null,
};

export const loginAsync = createAsyncThunk<LoginResponse, LoginRequest>(
  "user/login",
  async ({ email, password }, thunkAPI) => {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (response.status === 200) {
      return (await response.json()) as LoginResponse;
    } else {
      return thunkAPI.rejectWithValue(
        (await response.json()) as SerializedError
      );
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearState: (state) => {
      state.error = initialState.error;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.email = action.payload.email;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      })
      .addCase(loginAsync.pending, (state) => {
        state.status = "pending";
      });
  },
});

export const { clearState } = userSlice.actions;

export default userSlice.reducer;
