import { useSelector } from "react-redux";
import { fetchQuestions, Question } from "../Shared/FetchData/FetchQuestions/FetchQuestions";
import { RootState } from "../Shared/Stores/UrlStore";
import { useEffect, useState } from "react";
import { Quiz } from "./Quiz/Quiz";
import { Result } from "./Quiz/QuizResult";
import { MixingAnswer } from "../Processes/MixingAnswer";
import RedirectComponent from '../Processes/RedirectComponent';

export const QuestionsWindow: React.FC = () => {
  const valueQuestion = useSelector((state: RootState) => state.inputReducer.valueQuestion);
  const questionStep = useSelector((state: RootState) => state.questionStep.questionStep);
  const url = useSelector((state: RootState) => state.urlReducer.url);
  const [cachedData, setCachedData] = useState<Question[] | null>(null);

  useEffect(() => {
    const fetchAndStoreQuestions = async () => {
      await fetchQuestions(url, setCachedData);
    };
    fetchAndStoreQuestions();
    return () => {
      setCachedData(null);
    };
  }, [setCachedData, url]);

  MixingAnswer(cachedData ?? []);

  if (url.length <= 1) {
    return <RedirectComponent />;
  }

  return (
    <div>
      {questionStep === valueQuestion ? (<Result />) : (<Quiz />)}
    </div>
  );
};