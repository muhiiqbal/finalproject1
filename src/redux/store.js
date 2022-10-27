import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./IndonesiaSlice";
import programmerReducer from "./ProgrammingSlice";
import covidReducer from "./CovidSlice";
import searchReducer from "./SearchSlice";
import saveReducer from "./SavedSlice";
import logger from "redux-logger";
export default configureStore({
  reducer: {
    articles: articlesReducer,
    programming: programmerReducer,
    covid: covidReducer,
    search: searchReducer,
    save: saveReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
