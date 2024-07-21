export type UrlState = {
  url: string;
  selectedCategory: string | null;
  selectedDifficulty: string | null;
  selectedType: string | null;
  valueQuestion: number;
  categories: [{ id: number, name: string }];
  questions: [ results: {
    type: string, difficulty: string, category: string,
    question: string, correct_answer: string, incorrect_answers: string[]
  }];
  question: string;
  answers: string[][];
  questionStep: number;
  answerStep: number;
  correctAnswers: number;
};

export type CategoriesState = {
  categories: [{
    id: number, 
    name: string
  }]
};

export type UrlAction = {
  type: string;
  payload: CategoriesState;
};