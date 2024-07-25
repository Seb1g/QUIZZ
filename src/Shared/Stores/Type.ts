export type sdfs = {
  questionStep: number;
  answerStep: number;
  correctAnswers: number;
};
export type SelectedReducerState = {
  selectedCategory: string | null;
  selectedDifficulty: string | null;
  selectedType: string | null;
};
export type SelectedReducerAction = {
  type: string;
  payload: SelectedReducerState;
};
export type InputState = {
  valueQuestion: number;
};
export type InputAction = {
  type: string;
  payload: InputState;
};
export type CategoriesState = {
  categories: [{
    id: number;
    name: string;
  }];
};
export type CategoriesAction = {
  type: string;
  payload: CategoriesState;
};
export type UrlState = {
  url: string;
};
export type UrlAction = {
  type: string;
  payload: UrlState;
};
export type QuestionsState = {
  questions: [
    results: {
      type: string, difficulty: string, category: string,
      question: string, correct_answer: string, incorrect_answers: string[]
    }
  ];
};
export type QuestionsAction = {
  type: string;
  payload: QuestionsState;
};
export type QuestionState = {
  question: string;
};
export type QuestionAction = {
  type: string;
  payload: QuestionState;
};
export type AnswersState = {
  answers: string[][];
};
export type AnswersAction = {
  type: string;
  payload: AnswersState;
};
export type QuestionStepState = {
  questionStep: number;
};
export type QuestionStepAction = {
  type: string;
  payload: QuestionStepState
};
export type AnswerStepState = {
  answerStep: number;
};
export type AnswerStepAction = {
  type: string;
  payload: AnswerStepState;
};
export type CorrectAnswersState = {
  correctAnswers: number;
};
export type CorrectAnswersAction = {
  type: string;
  payload: CorrectAnswersState;
};
export type ClearState = {
  selectedCategory: null,
  selectedDifficulty: null,
  selectedType: null,
  valueQuestion: number,
  categories: [{ id: number, name: string }],
  url: string,
  questions: [{
    type: string, difficulty: string, category: string,
    question: string, correct_answer: string, incorrect_answers: string[],
  }],
  question: string,
  answers: string[][],
  questionStep: number
  answerStep: number,
  correctAnswers: number,
};
export type ClearAction = {
  type: string;
  payload: { CorrectAnswersAction: ClearState};
};
