import { useEffect } from "react";
import { Routes, Route, Link } from 'react-router-dom';
import { Input, NextUIProvider } from "@nextui-org/react";
import { QuestionsWindow } from "../Pages/QuestionsWindow";
import { OptionType, TypeOption, DifficultyOption } from "../Shared/types";
import { useAllState } from "../Shared/useStateHook";
import { store } from "../Shared/store/Store";
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
  const handleSelectDifficulty = (option: OptionType) => {
    setSelectedDifficulty(option);
    console.log(selectedType, selectedDifficulty);
  };

  const { selectedType, setSelectedType } = useAllState();
  const handleSelectType = (option: OptionType) => {
    setSelectedType(option);
    console.log(selectedType, selectedDifficulty);
  };

  const { selectedCaterogy, setSelectedCaterogy } = useAllState();
  const handleSelect = (option: OptionType) => {
    setSelectedCaterogy(option);
  };

  const GenerateLink = async () => {
    const targetDifficulty = selectedDifficulty?.toLowerCase();
    const targetType = selectedType?.toLowerCase();
    let finalUrl = "https://opentdb.com/api.php"
    if (valueQuestions) {
      finalUrl += `?amount=${valueQuestions}`;
    }
    if (selectedCaterogy !== null) {
      const targetIdCategory = categories.find(category => category.name === selectedCaterogy)?.id;
      if (targetIdCategory) {
        finalUrl += `&category=${targetIdCategory}`;
      }
    }
    if (targetDifficulty) {
      finalUrl += `&difficulty=${targetDifficulty}`;
    }
    if (targetType) {
      finalUrl += `&type=${targetType}`;
    }
    const action = {
      type: "url",
      payload: { url: finalUrl },
    };
    store.dispatch(action)
  }

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
            placeholder={valueQuestions}
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
          <button onClick={GenerateLink}>
            <Link to="/question">Generate Link</Link>
          </button>
        </div>
        <Routes>
          <Route path="/question" element={<QuestionsWindow />} />
        </Routes>
      </NextUIProvider>
    </div>
  )
};

export default RenderCategory;