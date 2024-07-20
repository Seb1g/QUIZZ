import { useDispatch, useSelector } from "react-redux";
import { UrlState } from "../Shared/Stores/UrlStore";

export const Quiz = () => {
  const answers = useSelector((state: UrlState) => state.answers);
  const question = useSelector((state: UrlState) => state.question);
  const answerStep = useSelector((state: UrlState) => state.answerStep);
  const questionStep = useSelector((state: UrlState) => state.questionStep);
  const correctAnswers = useSelector((state: UrlState) => state.correctAnswers);
  const questions = useSelector((state: UrlState) => state.questions)
  const dispatch = useDispatch();

  const questionRender = question[questionStep] ;
  const answerRender = answers[answerStep];
  const onClickAnswer = ( index: number, value: string) => {
    const currentQuestion = questions[questionStep];
    console.log(index)
    console.log(value, currentQuestion.correct_answer)
    value === currentQuestion.correct_answer ? 
    dispatch({ type: "correctAnswers", payload: { correctAnswers: correctAnswers + 1 }}) :
    console.log("not True")
    dispatch({ type: "questionStep", payload: { questionStep: questionStep + 1}})
    dispatch({ type: "answerStep", payload: { answerStep: answerStep + 1}})
  };
  return (
    <div className="questionBlock"
      style={{ display: "flex", flexDirection: "column" }}>
      <div className="progressBar">
        hyi
      </div>
      <h1>{questionRender}</h1>
      <ul
        style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        {answerRender.map((item, index) => (
          <button key={index}
            style={{ background: "blue", width: "80px" }}
            onClick={() => onClickAnswer(index, item)}>{item}</button>
        ))}
      </ul>
    </div>
  );
};