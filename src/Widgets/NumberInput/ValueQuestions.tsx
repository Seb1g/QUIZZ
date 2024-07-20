import { UrlState } from "../../Shared/Stores/UrlStore";
import { useSelector, useDispatch } from 'react-redux';

export const ValueQuestions = () => {
  const valueQuestions = useSelector((state: UrlState) => state.valueQuestion);
  const dispatch = useDispatch();
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    dispatch({ type: 'valueQuestion', payload: { valueQuestion: newValue } });
  };

  return (
    <div className='valueQuestion'>
      <input type="number" min={1} max={50} value={valueQuestions || ''} onChange={handleInputChange} />
    </div>
  );
};