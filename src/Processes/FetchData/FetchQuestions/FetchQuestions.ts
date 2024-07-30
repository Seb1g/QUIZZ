export interface Question {
  type: string,
  difficulty: string,
  category: string,
  question: string,
  correct_answer: string,
  incorrect_answers: string[]
}

export const fetchQuestions = async (
  url: string,
  setCachedData: React.Dispatch<React.SetStateAction<Question[] | null>>
): Promise<Question[] | void> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      if (response.status === 429) {
        console.warn('Too many requests. Retrying after a delay...');
        await new Promise(resolve => setTimeout(resolve, 10000)); 
        return fetchQuestions(url, setCachedData); 
      }
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    if (data.results) {
      setCachedData(data.results); 
      return data.results; 
    } else {
      throw new Error('Results not found in data');
    }
  } catch (error) {
    console.error('Error fetching data: ', error);
  }
};
