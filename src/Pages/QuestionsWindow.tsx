import RedirectComponent from '../Features/RedirectComponent';
import { RootState } from "../Shared/Redux/Store/store";
import "../Shared/Styles/QuestionsWindow.sass"
import { Result } from "./Quiz/QuizResult";
import { useSelector } from "react-redux";
import { Quiz } from "./Quiz/Quiz";

export const QuestionsWindow: React.FC = () => {
  const valueQuestion = useSelector((state: RootState) => state.selected.selectedValue);
  const questionStep = useSelector((state: RootState) => state.quizStep.questionStep);
  const url = useSelector((state: RootState) => state.url.url);
  if (url.length <= 1) {
    return <RedirectComponent />;
  }
  return (
    <div className="questionsWindow">
      {questionStep === valueQuestion ? (
        <Result />
      ) : (
        <Quiz/>
      )}
    </div>
  );
};