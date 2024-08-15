import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { setSelectedDifficulty } from "../../Shared/Redux/Slices/selectedSlice";
import { DifficultyOption } from "../../Shared/Types/types";
import { useDispatch } from "react-redux";
import { Key } from "@react-types/shared";
import { useState } from "react";

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

  const [selectedDifficultyKeys, setSelectedDifficultyKeys] = useState<Set<Key>>(new Set<Key>(["Difficulty"]));
  const dispatch = useDispatch();

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
          selectedKeys={Array.from(selectedDifficultyKeys)}
          onSelectionChange={(keys) => setSelectedDifficultyKeys(new Set(keys as Iterable<Key>))}
        >
          {difficulty.map((item) => (
            <DropdownItem key={item.name}
            onClick={() => dispatch(
              setSelectedDifficulty(Array.from(selectedDifficultyKeys).toString())
            )}
            >{item.name}</DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};
