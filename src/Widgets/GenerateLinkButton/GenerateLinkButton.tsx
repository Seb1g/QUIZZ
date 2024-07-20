import { Link } from "react-router-dom";
import { UrlState } from "../../Shared/Stores/UrlStore";
import { useDispatch, useSelector } from "react-redux";

export const GenerateLinkButton = () => {
  const selectedDifficulty = useSelector((state: UrlState) => state.selectedDifficulty);
  const selectedType = useSelector((state: UrlState) => state.selectedType);
  const valueQuestions = useSelector((state: UrlState) => state.valueQuestion);
  const selectedCategory = useSelector((state: UrlState) => state.selectedCategory);
  const categories = useSelector((state: UrlState) => state.categories);
  const dispatch = useDispatch();
  const generateLink = () => {
    let finalUrl = "https://opentdb.com/api.php"
    if (valueQuestions) {
      finalUrl += `?amount=${valueQuestions}`;
    }
    if (selectedCategory) {
      const targetIdCategory = categories.find(category => category.name === selectedCategory)?.id;
      if (targetIdCategory) {
        finalUrl += `&category=${targetIdCategory}`;
      }
    }
    if (selectedDifficulty) {
      finalUrl += `&difficulty=${selectedDifficulty?.toLowerCase()}`;
    }
    if (selectedType) {
      finalUrl += `&type=${selectedType?.toLowerCase()}`;
    }
    dispatch({type: "url", payload: {url: finalUrl}})
  };
  return (
    <div className='generateButton'>
      <button onClick={generateLink}>
        <Link to="/question" >Generate Link</Link>
      </button>
    </div>
  );
};