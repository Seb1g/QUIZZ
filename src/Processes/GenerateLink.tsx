import { RootState } from "../Shared/Stores/UrlStore";
import { useDispatch, useSelector } from "react-redux";

export const  GenerateLink = () => {
  const {
    selectedDifficulty,
    selectedType,
    selectedCategory,
  } = useSelector((state: RootState) => state.selectedReducer)
  const categories = useSelector((state: RootState) => state.getCategoriesReducer.categories);
  const valueQuestions = useSelector((state: RootState) => state.inputReducer.valueQuestion); // Перенести в редюсер selectedReducer
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
      dispatch({ type: "url", payload: { url: finalUrl } });
    };
    return generateLink
};