import { resetState } from "../../Shared/Redux/RootReducer/rootReducer";
import { RootState } from "../../Shared/Redux/Store/store";
import { useDispatch, useSelector } from "react-redux";
import "../../Shared/Styles/QuestionsResult.sass"
import { Link } from "react-router-dom";

export type result = {
  correctAnswers: number,
  valueQuestion: number,
  category: string | null,
}

export const Result = () => {
  const valueQuestion = useSelector((state: RootState) => state.selected.selectedValue);
  const correctAnswers = useSelector((state: RootState) => state.correctAnswers.correctAnswers);
  const category = useSelector((state: RootState) => state.selected.selectedCategory);
  const dispatch = useDispatch();
  const result: result = {
    correctAnswers: correctAnswers,
    valueQuestion: valueQuestion,
    category: category,
  };

  function saveResultToLocalStorage(result: result) {
    let key;
    for (let index = 0; ; index++) {
      key = index;
      if (!localStorage.getItem(key.toString())) {
        break;
      }
    }
    localStorage.setItem(key.toString(), JSON.stringify(result));
  }

  return (
    <div className="result">
      <h2>You guessed {correctAnswers} answers out of {valueQuestion}</h2>
      <button onClick={() => {
        saveResultToLocalStorage(result);
        dispatch(resetState());
      }}>
        <Link to="/" >Try again</Link>
      </button>
    </div>
  );
};