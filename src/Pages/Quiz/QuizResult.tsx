import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Shared/Stores/UrlStore";
import { Link } from "react-router-dom";
import "../../Shared/Styles/QuestionsResult.sass"

export const Result = () => {
  const valueQuestion = useSelector((state: RootState) => state.inputReducer.valueQuestion);
  const correctAnswers = useSelector((state: RootState) => state.correctAnswers.correctAnswers);
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch({type: "resetAction"})
  };
  
  return (
    <div className="result">
      <h2>You guessed {correctAnswers} answers out of {valueQuestion}</h2>
      <button onClick={clickHandler}>
        <Link to="/" >Try again</Link>
      </button>
    </div>
  );
};