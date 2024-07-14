import { useEffect } from "react";
import { store } from "../Shared/store/Store";
import { useAllState } from "../Shared/useStateHook";

export const GetCategory = () => {
  const getUrl = () => {
    const fetchUrl = store.getState().url;
    console.log(fetchUrl, "asd");
  }
  getUrl()
  const { question, setQuestions } = useAllState();
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(
          'https://opentdb.com/api_category.php'
        );
        const data = await response.json();
        setQuestions(data.trivia_categories);
        console.log(data.trivia_categories);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    fetchQuestions();
  }, [setQuestions]);
}
  