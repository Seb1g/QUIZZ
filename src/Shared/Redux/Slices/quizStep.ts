import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type QuizStepState = {
  questionStep: number;
  answerStep: number;
};

const initialState: QuizStepState = {
  questionStep: 0,
  answerStep: 0,
};

const quizStepSlice = createSlice({
  name: "quizStep",
  initialState, 
  reducers: {
    setQuestionStep: (state, action: PayloadAction<number>) => {
      state.questionStep = action.payload;
    },
    setAnswerStep: (state, action: PayloadAction<number>) => {
      state.answerStep = action.payload;
    },
    resetState() {
      return initialState;
    },
  },
});

export const { 
  setQuestionStep,
  setAnswerStep,
  resetState,
} = quizStepSlice.actions;

export default quizStepSlice.reducer;