import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { answerStep, correctAnswers, getAnswersReducer, 
  getCategoriesReducer, getQuestionReducer, getQuestionsReducer, 
  inputReducer, questionStep, selectedReducer, urlReducer } from "./Reducers";

const reducer = combineReducers({
  selectedReducer: selectedReducer,
  inputReducer: inputReducer,
  getCategoriesReducer: getCategoriesReducer,
  urlReducer: urlReducer,
  getQuestionsReducer: getQuestionsReducer,
  getQuestionReducer: getQuestionReducer,
  getAnswersReducer: getAnswersReducer,
  questionStep: questionStep,
  answerStep: answerStep,
  correctAnswers: correctAnswers,
});

export const UrlStore = configureStore({
  reducer: reducer,
});
export type RootState = ReturnType<typeof reducer>;