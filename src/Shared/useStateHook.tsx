import { useState } from'react';
import { Category, OptionType, Questions } from './types';

export const useAllState = () => {  
  const [categories, setCategories] = useState<Category[]>([]);
  const [valueQuestions, setValueQuestions] = useState('10');
  const [selectedDifficulty, setSelectedDifficulty] = useState<OptionType | null>(null);
  const [selectedType, setSelectedType] = useState<OptionType | null>(null);
  const [selectedCaterogy, setSelectedCaterogy] = useState<OptionType | null>(null);
  const [url, setUrl] = useState('');
  const [questions, setQuestions] = useState<Questions[]>([])
  const [questionStep, setQuestionStep] = useState(0);
  const [answerStep, setAnswerStep] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return {modalIsOpen, valueQuestions, categories, selectedDifficulty, selectedType, selectedCaterogy, url, questions, questionStep, answerStep,
    setModalIsOpen, setCategories, setValueQuestions, setSelectedDifficulty, setSelectedType, setSelectedCaterogy, setUrl, setQuestions, setQuestionStep, setAnswerStep}
};