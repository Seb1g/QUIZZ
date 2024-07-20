import { UrlStore } from "../../Stores/UrlStore";

let cachedData: string[] | null = null;

export const FetchQuestions = async () => {
  try {
    if (cachedData) {
      return cachedData;
    }

    const fetchUrl = UrlStore.getState().url;
    const response = await fetch(fetchUrl);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    if (data.results) {
      cachedData = data;
      return data;
    } else {
      throw new Error('Results not found in data');
    }
  } catch (error) {
    console.error('Error fetching data: ', error);
  }
};