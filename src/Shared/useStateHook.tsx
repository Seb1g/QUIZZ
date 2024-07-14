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
  return {valueQuestions, categories, selectedDifficulty, selectedType, selectedCaterogy, url, questions, 
    setCategories, setValueQuestions, setSelectedDifficulty, setSelectedType, setSelectedCaterogy, setUrl, setQuestions}
};