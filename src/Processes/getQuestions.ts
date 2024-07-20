import { useEffect } from "react";
import { UrlStore } from "../Shared/Stores/UrlStore";

export const GetLink = () => {
  const selectedDifficulty = UrlStore.getState().selectedDifficulty
  const selectedType = UrlStore.getState().selectedType
  const valueQuestions = UrlStore.getState().valueQuestion
  const selectedCategory = UrlStore.getState().selectedCategory
  const categories = UrlStore.getState().categories
  const generateLink = () => {
    const targetDifficulty = selectedDifficulty?.toLowerCase();
    const targetType = selectedType?.toLowerCase();
    let finalUrl = "https://opentdb.com/api.php"
    if (valueQuestions) {
      finalUrl += `?amount=${valueQuestions}`;
    }
    if (selectedCategory !== null) {
      const targetIdCategory = categories.find(category => category.name === selectedCategory)?.id;
      if (targetIdCategory) {
        finalUrl += `&category=${targetIdCategory}`;
      }
    }
    if (targetDifficulty) {
      finalUrl += `&difficulty=${targetDifficulty}`;
    }
    if (targetType) {
      finalUrl += `&type=${targetType}`;
    }
    const action = {
      type: "url",
      payload: { url: finalUrl },
    };
    UrlStore.dispatch(action)
  };
  generateLink();
};

export const GetQuestion = () => {
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const fetchUrl = UrlStore.getState().url;
        const response = await fetch(fetchUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const action = {
          type: 'question',
          payload: {
            question: data.results
          }
        };
        UrlStore.dispatch(action);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    fetchQuestions();
  }, []);
};

export const GetAnswer = () => {
  useEffect(() => {
    const fetchQuestions = () => {
      const questions = UrlStore.getState().questions
      if (questions && questions.length > 0) {
        const allAnswers = questions.map((question) => {
          const answers = [
            question.correct_answer,
            ...(Array.isArray(question.incorrect_answers) ? question.incorrect_answers : [question.incorrect_answers])
          ].sort(() => Math.random() - 0.5);
          return answers;
        });
        const action = {
          type: 'answers',
          payload: {
            answers: allAnswers
          }
        };
        UrlStore.dispatch(action);
      } else {
        console.log('Данные неправильного формата');
      }
    };
    fetchQuestions();
  }, []);
} 