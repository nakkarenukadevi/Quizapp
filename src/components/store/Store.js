import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import QuizReducer from "./Slice";
const Store = configureStore({
  reducer: {
    quiz: QuizReducer,
  },
});
export default Store;
