import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../Store/store';

interface Category {
  id: number;
  name: string;
}

export const categoriesSlice = createApi({
  reducerPath: 'categories',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://opentdb.com' }),
  endpoints: (create) => ({
    getCategories: create.query<Category[], void>({
      query: () => '/api_category.php',
    }),
  }),
});

export interface Result {
  response_code: number; 
  results: results[];
}

export interface results {
  type: string,
  difficulty: string,
  category: string,
  question: string,
  correct_answer: string,
  incorrect_answers: string[]
}

export const questionsSlice = createApi({
  reducerPath: 'arrayQuestions',
  baseQuery: async (args, { getState }) => {
    const state = getState() as RootState;
    const url = state.url.url;
    
    const result = await fetch(`${url}${args}`);
    const data = await result.json();
    return { data };
  },
  endpoints: (builder) => ({
    getDynamicData: builder.query<Result, string>({
      query: (id) => id,
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesSlice;
export const { useGetDynamicDataQuery } = questionsSlice;