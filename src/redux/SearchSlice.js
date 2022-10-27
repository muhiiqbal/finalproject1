import { createSlice } from "@reduxjs/toolkit";

export const SearchSlice = createSlice({
  name: "search",
  initialState: {
    query: null,
    isLoading: false,
  },
  reducers: {
    updateQuery: (state, action) => {
      state.query = encodeURIComponent(action.payload);
    },
  },
});

export const { updateQuery } = SearchSlice.actions;

export default SearchSlice.reducer;