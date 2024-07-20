import { TypeOption, DifficultyOption, OptionType } from "../../Shared/types";
import { UrlStore } from "../../Shared/Stores/UrlStore";

export const SelectDifficultyAndType = () => {
  const type: TypeOption[] =
    [
      {
        id: 1,
        name: 'Boolean'
      },
      {
        id: 2,
        name: 'Multiple'
      }
    ];

  const difficulty: DifficultyOption[] =
    [
      {
        id: 1,
        name: 'Easy'
      },
      {
        id: 2,
        name: 'Medium'
      },
      {
        id: 3,
        name: 'Hard'
      }
    ];

  const handleSelectDifficulty = (option: OptionType) => {
    const action = {
      type: "selectedDifficulty",
      payload: { selectedDifficulty: option}
    };
    UrlStore.dispatch(action);
  };

  const handleSelectType = (option: OptionType) => {
    const action = {
      type: "selectedType",
      payload: { selectedType: option}
    };
    UrlStore.dispatch(action);
  };

  return (
    <div className='selectDifAndType'>
      <h3>Selected Difficulty: {UrlStore.getState().selectedDifficulty}</h3>
      <select onChange={(e) => handleSelectDifficulty(e.target.value as OptionType)}>
        {difficulty.map((item) => (
          <option key={item.id} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
      <h3>Selected Option: {UrlStore.getState().selectedType}</h3>
      <select onChange={(e) => handleSelectType(e.target.value as OptionType)}>
        {type.map((item) => (
          <option key={item.id} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};