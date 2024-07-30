import { FetchCategory } from "../../Processes/FetchData/FetchCategory/FetchCategory";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Dropdown, DropdownTrigger, Button, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { RootState } from "../../Shared/Stores/UrlStore";

export const SelectCategory = () => {
  const [selectedCategoryKeys, setSelectedCategoryKeys] = useState(new Set(["Category"]));
  const categories = useSelector((state: RootState) => state.getCategoriesReducer.categories);
  const dispatch = useDispatch()

  useEffect(() => {
    const getCategory = async () => {
      const result = await FetchCategory();
      dispatch({ type: "categories", payload: { categories: result.trivia_categories } })
    }
    getCategory()
  }, [dispatch])

  useEffect(() => {
    dispatch({type: "selectedCategory", payload: { selectedCategory: Array.from(selectedCategoryKeys).toString() }})
  }, [dispatch, selectedCategoryKeys]);

  return (
    <div>
      <Dropdown>
        <DropdownTrigger>
          <Button
            variant="bordered"
            className="capitalize"
          >
            {selectedCategoryKeys}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Single selection example"
          variant="flat"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={selectedCategoryKeys}
          onSelectionChange={setSelectedCategoryKeys}
          style={{ maxHeight: '200px', overflowY: 'auto'}}
        >
          {categories && categories.map((item) => (
            <DropdownItem key={item.name}>
              {item.name}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}