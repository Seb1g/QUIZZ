import { TypeOption } from "../../Shared/Types/types";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";

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
  const [selectedTypeKeys, setSelectedTypeKeys] = useState(new Set(["Type"]));
  const selectedTypeValue = useMemo(
    () => Array.from(selectedTypeKeys).join(", ").replaceAll("_", " "),
    [selectedTypeKeys]
  );
  useEffect(() => {
    dispatch({ type: "selectedType", payload: { selectedType: Array.from(selectedTypeKeys).toString() }})
  });
  return (
    <div>
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
  )
};