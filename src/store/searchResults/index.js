import {
    createAsyncThunk,
    createSlice,
} from "@reduxjs/toolkit";

const initialState = {
    results: [],
    status: "idle",
    isLoading: false,
    error: null,
};

export const searchResultsAsync = createAsyncThunk("/searchResults/search", async (payload, thunkAPI) => {
    const response = await fetch("/api/search", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        // Adjustments made to match external api parameters
        body: JSON.stringify({
            VacancyNumber: payload.vacancyNumber,
            Keyword: payload.keyword,
            SelectedAgencyList: payload.department.map((obj) => obj.value),
            SelectedCategoryList: payload.category.map((obj) => obj.value),
            SelectedLocationsList: payload.location.map((obj) => obj.value),
            RemunerationRangeFrom: payload.renumerationFrom,
            RemunerationRangeTo: payload.renumerationTo,
            SelectedVacanycyType: payload.vacancyType,
            DateAdvertisedAfter: payload.date,
            SalaryRangeFrom: payload.salaryFrom,
            SalaryRangeTo: payload.salaryTo,
        }),
    });

    if (response.status === 200) {
        return await response.json();
    } else {
        return thunkAPI.rejectWithValue(await response.json());
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
