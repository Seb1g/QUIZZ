export type OptionType = 'Boolean' | 'Multipe' | string | null;
export type DifficultyOption = { id: number, name: string };
export type TypeOption  =  { id: number, name: string  };
export type Category = { id: number, name: string };
export type Questions = { question: string, correct_answer: string, incorrect_answers: string[]};