import { useEffect, useState, ChangeEvent } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, NextUIProvider, Button, Input } from "@nextui-org/react";
import "../Shared/styles.css"


interface category {
  id: number;
  name: string;
}

const RenderCategory = () => {
  const difficulty = ['Easy', 'Medium', 'Hard'];
  const type = ['Boolean', 'Multipe'];

  const [categories, setCategories] = useState<category[]>([]);
  const [selectedCategoryKeys, setSelectedCategoryKeys] = useState(null);
  const [selectedDifficultyKeys, setSelectedDifficultyKeys] = useState(new Set([]));
  const [selectedTypeKeys, setSelectedTypeKeys] = useState(new Set([]));

  // const selectedCategoryValue = useMemo(
  //   () =>
  //     Array.from(selectedCategoryKeys)
  //       .join(", ").replaceAll("_", " "),
  //   [selectedCategoryKeys]
  // );
  // const selectedDifficultyValue = useMemo(
  //   () => Array.from(selectedDifficultyKeys)
  //     .join(", ").replaceAll("_", " "),
  //   [selectedDifficultyKeys]
  // );
  // const selectedTypeValue = useMemo(
  //   () => Array.from(selectedTypeKeys)
  //     .join(", ").replaceAll("_", " "),
  //   [selectedTypeKeys]
  // );

  console.log(typeof selectedCategoryKeys, 'three')
  const [valueQuestions, setValueQuestions] = useState('10');
  const [url, setUrl] = useState('https://opentdb.com/api.php?amount=')
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValueQuestions(event.target.value);
  };

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
  }, []);

  useEffect(() => {
    const formationURL = () => {
      const value = valueQuestions
      setUrl('https://opentdb.com/api.php?amount=' + value)
      console.log(url, 'one')
      
    }
    
    formationURL()
  }, [url, valueQuestions])

  return (
    <div style={{ "display": "flex" }}>
      <NextUIProvider>
        <Dropdown className="categories">
          <DropdownTrigger>
            <Button
              variant="bordered"
              className="capitalize"
            >
              {/* {selectedCategoryValue} */}
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Single selection example"
            variant="flat"
            disallowEmptySelection
            selectionMode="single"
            // selectedKeys={selectedCategoryKeys}
            onSelectionChange={setSelectedCategoryKeys}
          >
            {categories.map((category) => (
              <DropdownItem key={category.id}>{category.name}</DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
        <Input
          type="number"
          label=""
          placeholder="Amount"
          labelPlacement="outside"
          onChange={handleInputChange}
          min={1}
          max={50}
        />
        <Dropdown className="difficulty">
          <DropdownTrigger>
            <Button
              variant="bordered"
              className="capitalize"
            >
              {/* {selectedDifficultyValue} */}
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Single selection example"
            variant="flat"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={selectedDifficultyKeys}
            onSelectionChange={setSelectedDifficultyKeys}
          >
            {difficulty.map((difficulty) => (
              <DropdownItem key={difficulty}>{difficulty}</DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
        <Dropdown className="type">
          <DropdownTrigger>
            <Button
              variant="bordered"
              className="capitalize"
            >
              {/* {selectedTypeValue} */}
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Single selection example"
            variant="flat"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={selectedTypeKeys}
            onSelectionChange={setSelectedTypeKeys}
          >
            {type.map((type) => (
              <DropdownItem key={type}>{type}</DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </NextUIProvider>
    </div>
  );
};

export default RenderCategory;