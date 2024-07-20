import { useDispatch, useSelector } from "react-redux";
import { UrlState } from "../Shared/Stores/UrlStore";
import { Link } from "react-router-dom";

export const Result = () => {
  const valueQuestion = useSelector((state: UrlState) => state.valueQuestion);
  const correctAnswers = useSelector((state: UrlState) => state.correctAnswers);
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch({type: "clearState"})
  }
  return (
    <div className="result">
      <h2>Вы отгадали {correctAnswers} ответа из {valueQuestion}</h2>
      <button onClick={clickHandler}>
        <Link to="/" >Repeat</Link>
      </button>
    </div>
  );
}