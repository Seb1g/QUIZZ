import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { Question } from "./FetchData/FetchQuestions/FetchQuestions";

export const MixingAnswer = (cachedData: Question[]) => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (cachedData && cachedData.length > 0) {
      dispatch({ type: "questions", payload: { questions: cachedData } });
      const allAnswers = cachedData.map((question) => {
        const answers = [
          question.correct_answer,
          ...(Array.isArray(question.incorrect_answers) ?
            question.incorrect_answers.map(answer => (answer)) :
            [(question.incorrect_answers)])
        ].sort(() => Math.random() - 0.5);
        return answers;
      });
      const allQuestions = cachedData.map((question) => {
        return [(question.question)];
      });
      dispatch({ type: "answers", payload: { answers: allAnswers } });
      dispatch({ type: "question", payload: { question: allQuestions } });
    } else {
      console.log('Данные неправильного формата');
    }
  }, [dispatch, cachedData]); 
};