import { Dropdown, DropdownTrigger, Button, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { useGetCategoriesQuery } from "../../Shared/Redux/Slices/getDataSlice";
import { setSelectedCategory } from "../../Shared/Redux/Slices/selectedSlice";
import { AppDispatch } from "../../Shared/Redux/Store/store";
import { Key } from "@react-types/shared";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Category, CategoriesResponse } from "../../Shared/Types/types";

export const SelectCategory = () => {
  const [selectedCategoryKeys, setSelectedCategoryKeys] = useState<Set<Key>>(new Set<Key>(["Category"]));
  const { data: items, isLoading, isError } = useGetCategoriesQuery<CategoriesResponse>();
  const dispatch: AppDispatch = useDispatch();

  if (isLoading) {
    return (
      <Button color="default" variant="bordered" isLoading>
        Loading...
      </Button>
    )
  }
  
  if (isError || !items?.trivia_categories) {
    return <div>Error loading categories.</div>;
  }

  return (
    <div>
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered" className="capitalize">
            {Array.from(selectedCategoryKeys).join(", ")}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Single selection example"
          variant="flat"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={Array.from(selectedCategoryKeys)}
          onSelectionChange={(keys) => setSelectedCategoryKeys(new Set(keys as Iterable<Key>))}
          style={{ maxHeight: "200px", overflowY: "auto" }}
        >
          {items.trivia_categories.map((item: Category) => (
            <DropdownItem key={item.name} aria-label={item.name}
              onClick={() => dispatch(
                setSelectedCategory(Array.from(selectedCategoryKeys).toString())
              )}>
              {item.name}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};