import { QuizResult } from "../Shared/Types/types";

export const PushDataLocalStorage = (
  correctAnswers: number, valueQuestion: number, category: string | null
) => {
  const result: QuizResult = {
    correctAnswers: correctAnswers,
    valueQuestion: valueQuestion,
    category: category,
  };

  function saveResultToLocalStorage(result: QuizResult) {
    let key;
    for (let index = 0; ; index++) {
      key = index;
      if (!localStorage.getItem(key.toString())) {
        break;
      }
    }
    localStorage.setItem(key.toString(), JSON.stringify(result));
  }

  saveResultToLocalStorage(result);
};