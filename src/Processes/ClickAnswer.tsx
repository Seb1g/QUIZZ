import { useDispatch, useSelector } from"react-redux";
import { addCorrectAnswer } from"../Shared/Redux/Slices/quizCorrectAnswersSlice";
import { setQuestionStep, setAnswerStep } from"../Shared/Redux/Slices/quizStep";
import { AppDispatch, RootState } from"../Shared/Redux/Store/store";
import { Result } from "../Shared/Redux/Slices/getDataSlice";

export const useOnClickAnswer = (items: Result | undefined) => {
  const dispatch: AppDispatch = useDispatch();
  const { questionStep, answerStep } = useSelector((state: RootState) => state.quizStep);
  const correctAnswers = useSelector((state: RootState) => state.correctAnswers.correctAnswers);

  const onClickAnswer = (value: string) => {
    const currentQuestion = items?.results[questionStep];
    const correctAnswer = currentQuestion?.correct_answer.replace(/&#039;/g, "'").replace(/&quot;/g, '"');
    if (value === correctAnswer) {
      dispatch(addCorrectAnswer(correctAnswers + 1));
    } else {
      console.log("Incorrect answer");
    }
    dispatch(setQuestionStep(questionStep + 1));
    dispatch(setAnswerStep(answerStep + 1));
  };

  return { onClickAnswer };
};