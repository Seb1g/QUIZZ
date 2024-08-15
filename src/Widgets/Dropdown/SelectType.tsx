import { Button,Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { setSelectedType } from "../../Shared/Redux/Slices/selectedSlice";
import { TypeOption } from "../../Shared/Types/types";
import { useDispatch } from "react-redux";
import { Key } from "@react-types/shared"
import { useState } from "react";

export const SelectType = () => {
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

  const dispatch = useDispatch()
  const [selectedTypeKeys, setSelectedTypeKeys] = useState<Set<Key>>(new Set<Key>(["Type"]));

  return (
    <div>
      <Dropdown>
        <DropdownTrigger>
          <Button
            variant="bordered"
            className="capitalize"
          >
            {selectedTypeKeys}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Single selection example"
          variant="flat"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={Array.from(selectedTypeKeys)}
          onSelectionChange={(keys) => setSelectedTypeKeys(new Set(keys as Iterable<Key>))}
        >
          {type.map((item) => (
            <DropdownItem key={item.name}
            onClick={() => dispatch(setSelectedType(Array.from(selectedTypeKeys).toString())
            )}>{item.name}</DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  )
};