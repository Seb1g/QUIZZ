import { categoriesSlice, questionsSlice } from "../Slices/getDataSlice";
import correctAnswersSlice from "../Slices/quizCorrectAnswersSlice";
import { combineSlices, createAction } from "@reduxjs/toolkit";
import selectedSlice from "../Slices/selectedSlice";
import quizDataSlice from "../Slices/quizDataSlice";
import quizStepSlice from "../Slices/quizStep";
import urlSlice from "../Slices/urlReducer";

export const resetState = createAction("RESET_STATE");
export type RootState = ReturnType<typeof appReducer>;

export const appReducer = combineSlices({
  selected: selectedSlice,
  [categoriesSlice.reducerPath]: categoriesSlice.reducer,
  url: urlSlice,
  [questionsSlice.reducerPath]: questionsSlice.reducer,
  quizData: quizDataSlice,
  quizStep: quizStepSlice,
  correctAnswers: correctAnswersSlice,
});

type RootAction = ReturnType<typeof resetState>;

export const rootReducer = (state: RootState | undefined, action: RootAction): RootState => {
  if (action.type === resetState.type) {
    state = undefined;
  }
  return appReducer(state, action);
};