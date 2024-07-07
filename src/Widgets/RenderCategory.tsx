import { useEffect, useState } from "react";
import { Input, NextUIProvider } from "@nextui-org/react";
import { useAllState } from "../Shared/useStateHook";
import { OptionType, TypeOption, DifficultyOption } from "../Shared/types";
import "../Shared/styles.css"

const RenderCategory = () => {
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

  const { categories, setCategories } = useAllState();
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await fetch(
          'https://opentdb.com/api_category.php'
        );
        const data = await response.json();
        setCategories(data.trivia_categories);
        console.log(data.trivia_categories);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    fetchCategory();
  }, [setCategories]);


  const { valueQuestions, setValueQuestions } = useAllState();
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueQuestions(event.target.value);
    console.log(valueQuestions);
  };

  const { selectedDifficulty, setSelectedDifficulty } = useAllState();
  const { selectedType, setSelectedType } = useAllState();
  const handleSelectDifficulty = (option: OptionType) => {
    setSelectedDifficulty(option);
    console.log(selectedType, selectedDifficulty);
  };
  const handleSelectType = (option: OptionType) => {
    setSelectedType(option);
    console.log(selectedType, selectedDifficulty);
  };

  const { selectedCaterogy, setSelectedCaterogy } = useAllState();
  const handleSelect = (option: OptionType) => {
    setSelectedCaterogy(option);
  };
  const [url, setUrl] = useState('');
  const API_URL = `https://opentdb.com/api.php`
  const GenerateLink = () => {
    
    const targetDifficulty = selectedDifficulty?.toLocaleLowerCase();
    const targetType = selectedType?.toLocaleLowerCase();

    let finalUrl = `${API_URL}`;
    if (valueQuestions) {
      finalUrl += `?amount=${valueQuestions}`;
    }
    if (selectedCaterogy !== null) {
      const targetNameCategory = selectedCaterogy;
      const targetIdCategory = categories.filter(category => category.name === targetNameCategory)[0].id;
      finalUrl += `&category=${targetIdCategory}`;
    }
    if (targetDifficulty !== undefined) {
      finalUrl += `&difficulty=${targetDifficulty}`;
    }
    if (targetType !== undefined) {
      finalUrl += `&type=${targetType}`;
    }

    setUrl(
      // `${API_URL}?amount=${valueQuestions}&category=${targetIdCategory}&difficulty=${targetDifficulty}&type=${targetType}`
      finalUrl
    )
  }
  console.log(url, 'oen')

  return (
    <div>
      <NextUIProvider>
        <div className='selectCategory'>
          <h3>Selected Category: {selectedCaterogy}</h3>
          <select onChange={(e) => handleSelect(e.target.value)}>
            {categories.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className='valueQue'>
          <Input
            type="number"
            label=""
            placeholder="Amount"
            labelPlacement="outside"
            onChange={handleInputChange}
            min={1}
            max={50}
          />
        </div>
        <div className='selectDifAndType'>
          <h3>Selected Difficulty: {selectedDifficulty}</h3>
          <select onChange={(e) => handleSelectDifficulty(e.target.value as OptionType)}>
            {difficulty.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
          <h3>Selected Option: {selectedType}</h3>
          <select onChange={(e) => handleSelectType(e.target.value as OptionType)}>
            {type.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className='generateButton'>
          <button onClick={GenerateLink}>Generate Link</button>
        </div>
      </NextUIProvider>
    </div>
  )
};

export default RenderCategory;