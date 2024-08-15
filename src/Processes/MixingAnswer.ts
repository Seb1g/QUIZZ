import { setQuestion, setAnswers } from "../Shared/Redux/Slices/quizDataSlice";
import { Result } from "../Shared/Redux/Slices/getDataSlice";
import { useDispatch } from "react-redux"
import { useEffect } from "react";

export const useMixingAnswer  = (items: Result | null) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (items && items !== null) {
      dispatch(setQuestion(items.results.map((question) => [question.question])));
      dispatch(setAnswers(
        items.results.map((answers) => [
          answers.correct_answer,
          ...(Array.isArray(answers.incorrect_answers) ? answers.incorrect_answers : [answers.incorrect_answers])
        ].sort(() => Math.random() - 0.5))
      ));
    } else {
      console.log('Данные неправильного формата');
    }
  }, [dispatch, items]);
};