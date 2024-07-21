import { CategoriesState, UrlAction } from "./Type";
import { initialState, categoriesInitialState } from "./initialsState";

// export const selectedReducer = (state = initialState, action: UrlAction) => {
//   switch (action.type) {
//     case "selectedCategory": {
//       return {
//         ...state,
//         selectedCategory: action.payload.selectedCategory
//       };
//     }
//     case "selectedDifficulty": {
//       return {
//         ...state,
//         selectedDifficulty: action.payload.selectedDifficulty
//       };
//     }
//     case "selectedType": {
//       return {
//         ...state,
//         selectedType: action.payload.selectedType
//       };
//     }
//     default: {
//       return state;
//     }
//   }
// };

// export const inputReducer = (state = initialState, action: UrlAction) => {
//   switch (action.type) {
//     case "valueQuestion": {
//       return {
//         ...state,
//         valueQuestion: action.payload.valueQuestion
//       }
//     }
//     default: {
//       return state;
//     }
//   }
// };

export const getCategoriesReducer = (state = categoriesInitialState, action: UrlAction): CategoriesState => {
  switch (action.type) {
    case "categories": {
      return {
        ...state,
        categories: action.payload.categories
      }
    }
    default: {
      return state;
    }
  }
};

// export const getQuestionsReducer = (state = initialState, action: UrlAction) => {
//   switch (action.type) {
//     case "questions": {
//       return {
//         ...state,
//         questions: action.payload.questions
//       }
//     }
//     default: {
//       return state;
//     }
//   }
// };

// export const getQuestionReducer = (state = initialState, action: UrlAction) => {
//   switch (action.type) {
//     case "question": {
//       return {
//         ...state,
//         question: action.payload.question
//       }
//     }
//     default: {
//       return state;
//     }
//   }
// };

// export const getAnswersReducer = (state = initialState, action: UrlAction) => {
//   switch (action.type) {
//     case "answers" : {
//       return {
//         ...state,
//         answers: action.payload.answers
//       }
//     }
//     default: {
//       return state;
//     }
//   }
// };

// export const questionStep = (state = initialState, action: UrlAction) => {
//   switch (action.type) {
//     case "questionStep" : {
//       return {
//         ...state,
//         questionStep: action.payload.questionStep
//       }
//     }
//     default: {
//       return state;
//     }
//   }
// };

// export const answerStep = (state = initialState, action: UrlAction) => {
//   switch (action.type) {
//     case "answerStep" : {
//       return {
//         ...state,
//         answerStep: action.payload.answerStep
//       }
//     }
//     default: {
//       return state;
//     }
//   }
// };

// export const correctAnswers = (state = initialState, action: UrlAction) => {
//   switch (action.type) {
//     case "correctAnswers" : {
//       return { 
//         ...state,
//         correctAnswers: action.payload.correctAnswers
//       }
//     }
//     default: {
//       return state;
//     }
//   }
// };

// export const clearState = (state = initialState, action: UrlAction) => {
//   switch (action.type) {
//     case "clearState" : {
//       return initialState
//     }
//     default: {
//       return state;
//     }
//   }
// };