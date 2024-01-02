import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const QuizSlice = createSlice({
  name: "Quiz",
  initialState: {
    game: [],
  },
  reducers: {
    gameStart: (state, action) => {
      state.game = action.payload;
    },
  },
});
export let { gameStart } = QuizSlice.actions;
export default QuizSlice.reducer;
