import { createSlice } from "@reduxjs/toolkit";

export const SavedSlice = createSlice({
  name: "bookmarks",
  initialState: {
    save: [],
    isLoading: false,
  },
  reducers: {
    addBookmark: (state, action) => {
      state.save = [...state.save, action.payload];
    },
    updateBookmark: (state, action) => {
      state.save = action.payload;
    },
  },
});

export const { addBookmark, updateBookmark } = SavedSlice.actions;

export default SavedSlice.reducer;