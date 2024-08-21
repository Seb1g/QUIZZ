import { useGetCategoriesQuery } from "../Shared/Redux/Slices/getDataSlice";
import { AppDispatch, RootState } from "../Shared/Redux/Store/store";
import { CategoriesResponse } from "../Shared/Types/types"
import { setUrl } from "../Shared/Redux/Slices/urlReducer"
import { useDispatch, useSelector } from "react-redux";

export const GenerateLink = () => {
  const { selectedCategory, selectedDifficulty, selectedType, selectedValue } = useSelector((state: RootState) => state.selected);
  const dispatch: AppDispatch = useDispatch();
  const { data: items } = useGetCategoriesQuery<CategoriesResponse>();

  const generateLink = () => {
    let finalUrl = "https://opentdb.com/api.php";
    if (selectedValue) {
      finalUrl += `?amount=${selectedValue}`;
    }
    if (selectedCategory !== undefined) {
      const targetIdCategory = items.trivia_categories.find(
        category => category.name === selectedCategory
      )?.id;
      if (targetIdCategory) {
        finalUrl += `&category=${targetIdCategory}`;
      }
    }
    if (selectedDifficulty !== null) {
      finalUrl += `&difficulty=${selectedDifficulty?.toLowerCase()}`;
    }
    if (selectedType !== null) {
      finalUrl += `&type=${selectedType?.toLowerCase()}`;
    }
    dispatch(setUrl(finalUrl));
  };
  return generateLink
};