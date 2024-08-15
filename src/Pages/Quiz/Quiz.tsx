import { addCorrectAnswer } from "../../Shared/Redux/Slices/quizCorrectAnswersSlice";
import { setQuestionStep, setAnswerStep } from "../../Shared/Redux/Slices/quizStep";
import { useGetDynamicDataQuery } from "../../Shared/Redux/Slices/getDataSlice";
import { useMixingAnswer  } from "../../Processes/MixingAnswer";
import { RootState } from "../../Shared/Redux/Store/store";
import { htmlDecode } from "../../Processes/htmlDecode";
import { useDispatch, useSelector } from "react-redux";

export const Quiz = () => {
  const dispatch = useDispatch();
  const { answers, question } = useSelector((state: RootState) => state.quizData);
  const { answerStep, questionStep } = useSelector((state: RootState) => state.quizStep);
  const correctAnswers = useSelector((state: RootState) => state.correctAnswers.correctAnswers);
  const { data: items, isLoading } = useGetDynamicDataQuery("");

  useMixingAnswer(items ?? null);

  if (isLoading || !items || !answers || !question) {
    return <div>Loading...</div>;
  }

  const onClickAnswer = (value: string) => {
    const currentQuestion = items.results[questionStep];
    const correctAnswer = currentQuestion.correct_answer.replace(/&#039;/g, "'").replace(/&quot;/g, '"');
    if (value === correctAnswer) {
      dispatch(addCorrectAnswer(correctAnswers + 1));
    } else {
      console.log("Incorrect answer");
    }
    dispatch(setQuestionStep(questionStep + 1));
    dispatch(setAnswerStep(answerStep + 1));
  };

  return (
    <div className="questionBlock" style={{ display: "flex", flexDirection: "column" }}>
      <div className="progressBar"></div>
      <h1>{htmlDecode(question[questionStep]?.toString())}</h1>
      <ul>
        {answers[answerStep]?.map((item, index) => (
          <button key={index} onClick={() => onClickAnswer(item)}>
            {htmlDecode(item)}
          </button>
        ))}
      </ul>
    </div>
  );
};