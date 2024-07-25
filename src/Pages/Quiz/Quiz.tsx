import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Shared/Stores/UrlStore";
import { htmlDecode } from "../../Processes/htmlDecode";

export const Quiz = () => {
  const answers = useSelector((state: RootState) => state.getAnswersReducer.answers);
  const question = useSelector((state: RootState) => state.getQuestionReducer.question);
  const answerStep = useSelector((state: RootState) => state.answerStep.answerStep);
  const questionStep = useSelector((state: RootState) => state.questionStep.questionStep);
  const correctAnswers = useSelector((state: RootState) => state.correctAnswers.correctAnswers);
  const questions = useSelector((state: RootState) => state.getQuestionsReducer.questions)
  const dispatch = useDispatch();

  const questionRender = question[questionStep];
  const answerRender = answers[answerStep];
  const onClickAnswer = (index: number, value: string) => {
    const currentQuestion = questions[questionStep];
    console.log(index)
    console.log(value, currentQuestion.correct_answer.replace(/&#039;/g, "'").replace(/&quot;/g, '"'))
    value === currentQuestion.correct_answer ?
      dispatch({ type: "correctAnswers", payload: { correctAnswers: correctAnswers + 1 } }) :
      console.log("not True")
    dispatch({ type: "questionStep", payload: { questionStep: questionStep + 1 } })
    dispatch({ type: "answerStep", payload: { answerStep: answerStep + 1 } })
  };
  return (
    <div className="questionBlock"
      style={{ display: "flex", flexDirection: "column" }}>
      <div className="progressBar">
        hyi
      </div>
      <h1>{htmlDecode(questionRender)}</h1>
      <ul
        style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        {answerRender.map((item, index) => (
          <button key={index}
            style={{ background: "blue", width: "80px" }}
            onClick={() => onClickAnswer(index, item)}>
              {htmlDecode(item)}
          </button>
        ))}
      </ul>
    </div>
  );
};