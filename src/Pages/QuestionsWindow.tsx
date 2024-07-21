import { useDispatch, useSelector } from "react-redux";
import { FetchQuestions } from "../Shared/FetchData/FetchQuestions/FetchQuestions";
import { UrlState, UrlStore } from "../Shared/Stores/UrlStore";
import { useEffect } from "react";
import { Quiz } from "../Widgets/Quiz"
import { Result } from "../Widgets/QuizResult"
import RedirectComponent from '../Shared/RedirectComponent';

export const QuestionsWindow = () => {
  const questions = useSelector((state: UrlState) => state.questions);
  const valueQuestion = useSelector((state: UrlState) => state.valueQuestion);
  const questionStep = useSelector((state: UrlState) => state.questionStep);
  const dispatch = useDispatch();

  useEffect(() => {
    const getQuestions = async () => {
      const result = await FetchQuestions()
      dispatch({ type: "questions", payload: { questions: result.results } })
    };
    getQuestions();
  })

  useEffect(() => {
    const fetchQuestions = () => {
      if (questions && questions.length > 0) {
        const decodeHTMLEntities = (str: string) => {
          return str.replace(/&#039;/g, "'").replace(/&quot;/g, '"');
        };
        const allAnswers = questions.map((question) => {
          const answers = [
            decodeHTMLEntities(question.correct_answer),
            ...(Array.isArray(question.incorrect_answers) ?
              question.incorrect_answers.map(answer => decodeHTMLEntities(answer)) :
              [decodeHTMLEntities(question.incorrect_answers)])
          ].sort(() => Math.random() - 0.5);
          return answers;
        });
        const allQuestions = questions.map((question) => {
          const questions = [
            question.question.replace(/&#039;/g, "'").replace(/&quot;/g, '"')
          ];
          return questions;
        });
        dispatch({ type: "answers", payload: { answers: allAnswers } });
        dispatch({ type: "question", payload: { question: allQuestions } });
      } else {
        console.log('Данные неправильного формата');
      }
    };
    fetchQuestions();
  }, [dispatch, questions]);

  const url = UrlStore.getState().url
  if (url.length <= 1) {
    return <RedirectComponent />;
  }

  return (
    <div>
      {questionStep === valueQuestion ? (<Result />) : (<Quiz />)}
    </div>
  )
};