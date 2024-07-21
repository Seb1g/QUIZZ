import { CategoriesState, UrlState } from "./Type";

export const initialState: UrlState = {
  url: '',
  selectedCategory: null,
  selectedDifficulty: null,
  selectedType: null,
  valueQuestion: 10,
  categories: [{ id: 0, name: '' }],
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

export const categoriesInitialState: CategoriesState = {
  categories: [{ id: 0, name: '' }],
}