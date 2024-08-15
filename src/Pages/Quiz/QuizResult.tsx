import { resetState } from "../../Shared/Redux/RootReducer/rootReducer";
import { RootState } from "../../Shared/Redux/Store/store";
import { useDispatch, useSelector } from "react-redux";
import "../../Shared/Styles/QuestionsResult.sass"
import { Link } from "react-router-dom";

export const Result = () => {
  const valueQuestion = useSelector((state: RootState) => state.selected.selectedValue);
  const correctAnswers = useSelector((state: RootState) => state.correctAnswers.correctAnswers);
  const dispatch = useDispatch();
  
  const clickHandler = () => {
    dispatch(resetState())
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