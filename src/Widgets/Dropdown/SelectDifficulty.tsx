import { DifficultyOption } from "../../Shared/Types/types";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export const SelectDifficulty = () => {
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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: "selectedDifficulty", payload: { selectedDifficulty: Array.from(selectedDifficultyKeys).toString() }});
  });

  return (
    <div>
      <Dropdown>
        <DropdownTrigger>
          <Button
            variant="bordered"
            className="capitalize"
          >
            {selectedDifficultyKeys}
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
    </div>
  );
};
