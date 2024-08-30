import { Input } from "@nextui-org/react";
import { setSelectedValue } from "../../Shared/Redux/Slices/selectedSlice";
import { AppDispatch, RootState } from "../../Shared/Redux/Store/store";
import { useSelector, useDispatch } from "react-redux";

export const ValueQuestions = () => {
  const valueQuestions = useSelector((state: RootState) => state.selected.selectedValue);
  const dispatch: AppDispatch = useDispatch();
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    dispatch(setSelectedValue(newValue));
  };

  return (
    <div className='valueQuestion'>
      <Input type="number" min={1} max={50}
        color="default" variant="bordered"
        value={valueQuestions ? valueQuestions.toString() : ''}
        onChange={handleInputChange}
      />
    </div>
  );
};