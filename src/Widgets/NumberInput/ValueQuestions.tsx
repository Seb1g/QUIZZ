import { setSelectedValue } from "../../Shared/Redux/Slices/selectedSlice";
import { RootState } from "../../Shared/Redux/Store/store";
import { useSelector, useDispatch } from "react-redux";

export const ValueQuestions = () => {
  const valueQuestions = useSelector((state: RootState) => state.selected.selectedValue);
  const dispatch = useDispatch();
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    dispatch(setSelectedValue(newValue));
  };

  return (
    <div className='valueQuestion'>
      <input type="number" min={1} max={50}
      value={valueQuestions || ''} onChange={handleInputChange} 
      />
    </div>
  );
};