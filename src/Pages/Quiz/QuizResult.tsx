import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Shared/Stores/UrlStore";
import { Link } from "react-router-dom";

export const Result = () => {
  const valueQuestion = useSelector((state: RootState) => state.inputReducer.valueQuestion);
  const correctAnswers = useSelector((state: RootState) => state.correctAnswers.correctAnswers);
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch({type: "resetAction"})
  };
  
  return (
    <div className="result">
      <h2>Вы отгадали {correctAnswers} ответа из {valueQuestion}</h2>
      <button onClick={clickHandler}>
        <Link to="/" >Repeat</Link>
      </button>
    </div>
  );
};