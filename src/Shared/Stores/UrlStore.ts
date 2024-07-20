import { configureStore } from "@reduxjs/toolkit";

export type UrlState = {
  url: string;
  selectedCategory: string | null;
  selectedDifficulty: string | null;
  selectedType: string | null;
  valueQuestion: number;
  categories: [{ id: number, name: string }];
  questions: [{
    type: string, difficulty: string, category: string,
    question: string, correct_answer: string, incorrect_answers: string[]
  }];
  question: string;
  answers: string[][];
  questionStep: number;
  answerStep: number;
  correctAnswers: number;
};

type UrlAction = {
  type: string;
  payload: UrlState;
};

const urlInitialState: UrlState = {
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

const reducer = (state = urlInitialState, action: UrlAction): UrlState => {
  switch (action.type) {
    case "url": {
      return {
        ...state,
        url: action.payload.url,
      };
    }
    case "selectedCategory": {
      return {
        ...state,
        selectedCategory: action.payload.selectedCategory
      };
    }
    case "selectedDifficulty": {
      return {
        ...state,
        selectedDifficulty: action.payload.selectedDifficulty
      };
    }
    case "selectedType": {
      return {
        ...state,
        selectedType: action.payload.selectedType
      };
    }
    case "valueQuestion": {
      return {
        ...state,
        valueQuestion: action.payload.valueQuestion
      }
    }
    case "categories": {
      return {
        ...state,
        categories: action.payload.categories
      }
    }
    case "questions": {
      return {
        ...state,
        questions: action.payload.questions
      }
    }
    case "question": {
      return {
        ...state,
        question: action.payload.question
      }
    }
    case "answers" : {
      return {
        ...state,
        answers: action.payload.answers
      }
    }
    case "questionStep" : {
      return {
        ...state,
        questionStep: action.payload.questionStep
      }
    }
    case "answerStep" : {
      return {
        ...state,
        answerStep: action.payload.answerStep
      }
    }
    case "correctAnswers" : {
      return { 
        ...state,
        correctAnswers: action.payload.correctAnswers
      }
    }
    case "clearState" : {
      return urlInitialState
    }
    default: {
      return state;
    }
  }
};

export const UrlStore = configureStore({
  reducer
});