import { AnswersState, AnswerStepState, CategoriesState, 
  ClearState, CorrectAnswersState, InputState, 
  QuestionsState, QuestionState, QuestionStepState,
  SelectedReducerState, UrlState } from "./Type";


export const selectedReducerInitialState: SelectedReducerState = {
  selectedCategory: null,
  selectedDifficulty: null,
  selectedType: null,
};
export const inputInitialState: InputState = {
  valueQuestion: 10,
};
export const categoriesInitialState: CategoriesState = {
  categories: [{ id: 0, name: '' }],
};
export const urlInitialState: UrlState = {
  url: '',
}
export const questionsInitialState: QuestionsState = {
  questions: [{
    type: '', difficulty: '', category: '',
    question: '', correct_answer: '', incorrect_answers: [''],
  }],
};
export const questionInitialState: QuestionState = {
  question: '',
};
export const answersInitialState: AnswersState = {
  answers: [[]],
};
export const questionStepInitialState: QuestionStepState = {
  questionStep: 0,
};
export const answerStepInitialState: AnswerStepState = {
  answerStep: 0,
};
export const correctAnswersInitialState: CorrectAnswersState = {
  correctAnswers: 0,
};
export const clearInitialState: ClearState = {
  selectedCategory: null,
  selectedDifficulty: null,
  selectedType: null,
  valueQuestion: 10,
  categories: [{ id: 0, name: '' }],
  url: '',
  questions: [{
    type: '', difficulty: '', category: '',
    question: '', correct_answer: '', incorrect_answers: [''],
  }],
  question: '',
  answers: [[]],
  questionStep: 0,
  answerStep: 0,
  correctAnswers: 0,
};