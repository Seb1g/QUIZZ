import { Link } from "react-router-dom";
import { RootState } from "../../Shared/Stores/UrlStore";
import { useDispatch, useSelector } from "react-redux";

export const GenerateLinkButton = () => {
  const selectedDifficulty = useSelector((state: RootState) => state.selectedReducer.selectedDifficulty);
  const selectedType = useSelector((state: RootState) => state.selectedReducer.selectedType);
  const valueQuestions = useSelector((state: RootState) => state.inputReducer.valueQuestion);
  const selectedCategory = useSelector((state: RootState) => state.selectedReducer.selectedCategory);
  const categories = useSelector((state: RootState) => state.getCategoriesReducer.categories);
  const dispatch = useDispatch();
  const generateLink = () => {
    let finalUrl = "https://opentdb.com/api.php";
    if (valueQuestions) {
      finalUrl += `?amount=${valueQuestions}`;
    }
    if (selectedCategory !== "categories") {
      const targetIdCategory = categories.find(category => category.name === selectedCategory)?.id;
      if (targetIdCategory) {
        finalUrl += `&category=${targetIdCategory}`;
      }
    }
    if (selectedDifficulty !== "Difficulty") {
      finalUrl += `&difficulty=${selectedDifficulty?.toLowerCase()}`;
    }
    if (selectedType !== "Type") {
      finalUrl += `&type=${selectedType?.toLowerCase()}`;
    }
    dispatch({type: "url", payload: {url: finalUrl}});
  };
  return (
    <div className='generateButton'>
      <button onClick={generateLink}>
        <Link to="/question" >Generate Link</Link>
      </button>
    </div>
  );
};