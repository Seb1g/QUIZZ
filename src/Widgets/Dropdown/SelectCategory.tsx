import { OptionType } from "../../Shared/types"
import { UrlState, UrlStore } from "../../Shared/Stores/UrlStore";
import { FetchCategory } from "../../Shared/FetchData/FetchCategory/FetchCategory";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export const SelectCategory = () => {
  const categories = useSelector((state: UrlState) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategory = async () => {
      const result = await FetchCategory();
      dispatch({type: "categories", payload: {categories : result.trivia_categories}});
    };
    getCategory();
  }, [dispatch]);

  const handleSelect = (option: OptionType) => {
    const action = {
      type: "selectedCategory",
      payload: { selectedCategory: option}
    };
    UrlStore.dispatch(action);
  };

  return (
    <div className='selectCategory'>
      <h3>Selected Category: </h3>
      <select onChange={(e) => handleSelect(e.target.value)}>
        {categories.map((item) => (
          <option key={item.id} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};