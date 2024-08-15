import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type quizCorrectAnswersState = {
  correctAnswers: number;
};

const initialState: quizCorrectAnswersState = {
  correctAnswers: 0,
};

const quizCorrectAnswersSlice = createSlice({
  name: "quizCorrectAnswers",
  initialState,
  reducers: {
    addCorrectAnswer: (state, action: PayloadAction<number>) => {
      state.correctAnswers = action.payload
    },
    resetState() {
      return initialState;
    },
  },
});

export const {
  addCorrectAnswer,
  resetState,
} = quizCorrectAnswersSlice.actions;

export default quizCorrectAnswersSlice.reducer;