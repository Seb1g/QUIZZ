import { TypeOption, DifficultyOption } from "../../Shared/types";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";

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

  const [selectedDifficultyKeys, setSelectedDifficultyKeys] = useState(new Set(["Difficulty"]));
  const [selectedTypeKeys, setSelectedTypeKeys] = useState(new Set(["Type"]));
  const dispatch = useDispatch();

  const selectedDifficultyValue = useMemo(
    () => Array.from(selectedDifficultyKeys).join(", ").replaceAll("_", " "),
    [selectedDifficultyKeys]
  );

  const selectedTypeValue = useMemo(
    () => Array.from(selectedTypeKeys).join(", ").replaceAll("_", " "),
    [selectedTypeKeys]
  );

  useEffect(() => {
    dispatch({type: "selectedDifficulty", payload: { selectedDifficulty: Array.from(selectedDifficultyKeys).toString() }})
    dispatch({type: "selectedType", payload: { selectedType: Array.from(selectedTypeKeys).toString() }})
  });
  
  return (
    <div>
      <Dropdown>
        <DropdownTrigger>
          <Button
            variant="bordered"
            className="capitalize"
          >
            {selectedDifficultyValue}
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
          {difficulty.map((item) => (
            <DropdownItem key={item.name}>{item.name}</DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
      <Dropdown>
        <DropdownTrigger>
          <Button
            variant="bordered"
            className="capitalize"
          >
            {selectedTypeValue}
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
          {type.map((item) => (
            <DropdownItem key={item.name}>{item.name}</DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};
