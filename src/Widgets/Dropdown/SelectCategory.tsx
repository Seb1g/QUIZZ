import { FetchCategory } from "../../Shared/FetchData/FetchCategory/FetchCategory";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { Dropdown, DropdownTrigger, Button, DropdownMenu, DropdownItem } from "@nextui-org/react";
// import { CategoriesState } from "../../Shared/Stores/Type";
import { UrlState } from "../../Shared/Stores/UrlStore";

export const SelectCategory = () => {
  const [selectedCategoryKeys, setSelectedCategoryKeys] = useState(new Set(["Category"]));
  const categories = useSelector((state: UrlState) => state.categories);
  const dispatch = useDispatch()

  useEffect(() => {
    const getCategory = async () => {
      const result = await FetchCategory();
      dispatch({ type: "categories", payload: { categories: result.trivia_categories } })
    }
    getCategory()
  }, [dispatch])

  const selectedDifficultyValue = useMemo(
    () => Array.from(selectedCategoryKeys).join(", ").replaceAll("_", " "),
    [selectedCategoryKeys]
  );

  useEffect(() => {
    dispatch({type: "selectedCategory", payload: { selectedCategory: Array.from(selectedCategoryKeys).toString() }})
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
          selectedKeys={selectedCategoryKeys}
          onSelectionChange={setSelectedCategoryKeys}
        >
          {categories.map((item) => (
            <DropdownItem key={item.name}>
              {item.name}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}