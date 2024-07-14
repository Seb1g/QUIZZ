import { useEffect, useState } from "react";
import { store } from "../Shared/store/Store";
import { useAllState } from "../Shared/useStateHook";

export const QuestionsWindow = () => {
  const { questions, setQuestions } = useAllState();
  const [answer, setAnswer] = useState<string[][]>([]);
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const fetchUrl = store.getState().url;
        const response = await fetch(fetchUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setQuestions(data.results);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    fetchQuestions();
  }, [setQuestions]);

  useEffect(() => {
    const fetchQuestions = async () => {
      if (questions && questions.length > 0) {
        const allAnswers = questions.map((question) => {
          const answers = [
            question.correct_answer,
            ...(Array.isArray(question.incorrect_answers) ? question.incorrect_answers : [question.incorrect_answers])
          ].sort(() => Math.random() - 0.5);
          return answers;
        });
        setAnswer(allAnswers);
      } else {
        console.log('Данные неправильного формата');
      }
    };
    fetchQuestions();
  }, [questions]);

  useEffect(() => {
    console.log(answer, "Answers");
  }, [answer]);

  return (
    <div>
      asdasds
    </div>
  )
};