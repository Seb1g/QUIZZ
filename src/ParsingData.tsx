import { useEffect, useState } from "react";

type category = [
  id: number,
  name: string,
];

export const RenderCategory = () => {
  const [categories, setCategories] = useState([]);

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

  return (
    <div>
      <h1>Categories from API:</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
};