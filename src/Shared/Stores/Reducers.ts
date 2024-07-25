import { AnswersAction, AnswersState, AnswerStepAction, AnswerStepState, CorrectAnswersAction, CorrectAnswersState, InputAction, QuestionAction, QuestionsAction, QuestionsState, QuestionState, QuestionStepAction, QuestionStepState, SelectedReducerAction, SelectedReducerState, UrlAction, UrlState } from "./Type";
import { answersInitialState, answerStepInitialState, correctAnswersInitialState, inputInitialState, questionInitialState, questionsInitialState, questionStepInitialState, selectedReducerInitialState, urlInitialState } from "./initialsState";
import { CategoriesState, CategoriesAction } from './Type';
import { categoriesInitialState } from "./initialsState";

export const selectedReducer = (state = selectedReducerInitialState, action: SelectedReducerAction): SelectedReducerState => {
  switch (action.type) {
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
    case "resetAction": {
      return selectedReducerInitialState; 
    }
    default: {
      return state;
    }
  }
};
  export const inputReducer = (state = inputInitialState, action: InputAction) => {
    switch (action.type) {
    case "valueQuestion": {
      return {
        ...state,
        valueQuestion: action.payload.valueQuestion
      }
    }
    case "resetAction": {
      return inputInitialState; 
    }
    default: {
      return state;
    }
  }
};
export const getCategoriesReducer = (
  state = categoriesInitialState, action: CategoriesAction
): CategoriesState => {
  switch (action.type) {
    case "categories": {
      return {
        ...state,
        categories: action.payload.categories,
      };
    }
    default: {
      return state;
    }
  }
};
export const urlReducer = ( state = urlInitialState, action: UrlAction): UrlState => {
  switch (action.type) {
    case "url": {
      return {
        ...state,
        url: action.payload.url,
      }
    }
    case "resetAction": {
      return urlInitialState; 
    }
    default: {
      return state;
    }
  }
};
export const getQuestionsReducer = (state = questionsInitialState, action: QuestionsAction): QuestionsState => {
  switch (action.type) {
    case "questions": {
      return {
        ...state,
        questions: action.payload.questions
      };
    }
    case "resetAction": {
      return questionsInitialState; 
    }
    default: {
      return state;
    }
  }
};
export const getQuestionReducer = (state = questionInitialState, action: QuestionAction): QuestionState => {
  switch (action.type) {
    case "question": {
      return {
        ...state,
        question: action.payload.question
      };
    }
    case "resetAction": {
      return questionInitialState; 
    }
    default: {
      return state;
    }
  }
};
export const getAnswersReducer = (state = answersInitialState, action: AnswersAction): AnswersState => {
  switch (action.type) {
    case "answers" : {
      return {
        ...state,
        answers: action.payload.answers
      };
    }
    case "resetAction": {
      return answersInitialState; 
    }
    default: {
      return state;
    }
  }
};
export const questionStep = (state = questionStepInitialState, action: QuestionStepAction): QuestionStepState => {
  switch (action.type) {
    case "questionStep" : {
      return {
        ...state,
        questionStep: action.payload.questionStep
      };
    }
    case "resetAction": {
      return questionStepInitialState; 
    }
    default: {
      return state;
    }
  }
};
export const answerStep = (state = answerStepInitialState, action: AnswerStepAction): AnswerStepState => {
  switch (action.type) {
    case "answerStep" : {
      return {
        ...state,
        answerStep: action.payload.answerStep
      };
    }
    case "resetAction": {
      return answerStepInitialState; 
    }
    default: {
      return state;
    }
  }
};
export const correctAnswers = (state = correctAnswersInitialState, action: CorrectAnswersAction): CorrectAnswersState => {
  switch (action.type) {
    case "correctAnswers" : {
      return { 
        ...state,
        correctAnswers: action.payload.correctAnswers
      };
    }
    case "resetAction": {
      return correctAnswersInitialState; 
    }
    default: {
      return state;
    }
  }
};