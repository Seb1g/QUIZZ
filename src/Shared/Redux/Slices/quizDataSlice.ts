import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type quizDataState = {
  question: string[][];
  answers: string[][];
};

const initialState: quizDataState = {
  question: [[""]],
  answers: [[]],
};

const quizDataSlice = createSlice({
  name: "quizData",
  initialState,
  reducers: {
    setQuestion: (state, action: PayloadAction<string[][]>) => {
      state.question = action.payload;
    },
    setAnswers: (state, action: PayloadAction<string[][]>) => {
      state.answers = action.payload;
    },
    resetState() {
      return initialState;
    },
  },
});

export const { 
  setQuestion, 
  setAnswers,
  resetState,
} = quizDataSlice.actions;

export default quizDataSlice.reducer;