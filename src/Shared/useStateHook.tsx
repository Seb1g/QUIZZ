import { useState } from'react';
import { Category, OptionType } from './types';

export const useAllState = () => {  
  const [categories, setCategories] = useState<Category[]>([]);
  const [valueQuestions, setValueQuestions] = useState('10');
  const [selectedDifficulty, setSelectedDifficulty] = useState<OptionType | null>(null);
  const [selectedType, setSelectedType] = useState<OptionType | null>(null);
  const [selectedCaterogy, setSelectedCaterogy] = useState<OptionType | null>(null);
  return {valueQuestions, categories, selectedDifficulty, selectedType, selectedCaterogy, 
    setCategories, setValueQuestions, setSelectedDifficulty, setSelectedType, setSelectedCaterogy}
};