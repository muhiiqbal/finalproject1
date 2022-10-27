import React, { useState } from "react";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



const URL = `https://newsapi.org/v2/everything?q=indonesia&sortBy=popularity&apiKey=62c2fe52b16d4245ada0559d58042c3a&pageSize=50`;
// const URL = "https://jsonplaceholder.typicode.com/posts"

const initialState = {
  dataArticles: [],
  loading: false,
  status: "idle",
};
export const fetchArticles = createAsyncThunk("articles/fetchArticles", async () => {
  const response = await axios.get(URL);
  return response.data.articles;
  // console.log('response', response);
});
export const IndonesiaSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      state.dataArticles = state.dataArticles.concat(action.payload);
      state.status = "succeeded";
      state.loading = false;
    });
    builder.addCase(fetchArticles.pending, (state, action) => {
      state.status = "loading";
      state.loading = true;
    });
    builder.addCase(fetchArticles.rejected, (state, action) => {
      state.status = "failed";
      state.loading = false;
      state.error = action.error.message;
      // alert('Kesalahan dari sisi user');
    });
  },
});

export default IndonesiaSlice.reducer;
