import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions, Question } from "../Shared/FetchData/FetchQuestions/FetchQuestions";
import { RootState } from "../Shared/Stores/UrlStore";
import { useEffect, useState } from "react";
import { Quiz } from "./Quiz/Quiz";
import { Result } from "./Quiz/QuizResult";
import RedirectComponent from '../Processes/RedirectComponent';

export const QuestionsWindow: React.FC = () => {
  const valueQuestion = useSelector((state: RootState) => state.inputReducer.valueQuestion);
  const questionStep = useSelector((state: RootState) => state.questionStep.questionStep);
  const url = useSelector((state: RootState) => state.urlReducer.url);
  const dispatch = useDispatch();
  const [cachedData, setCachedData] = useState<Question[] | null>(null);

  useEffect(() => {
    const fetchAndStoreQuestions = async () => {
      await fetchQuestions(url, setCachedData);
    };
    fetchAndStoreQuestions();
    return () => {
      setCachedData(null);
    };
  }, [url]);

  useEffect(() => {
    if (cachedData) {
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

  if (url.length <= 1) {
    return <RedirectComponent />;
  }

  return (
    <div>
      {questionStep === valueQuestion ? (<Result />) : (<Quiz />)}
    </div>
  );
};