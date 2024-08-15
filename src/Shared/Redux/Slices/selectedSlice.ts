import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SelectedState = {
  selectedCategory: string | null;
  selectedDifficulty: string | null;
  selectedType: string | null;
  selectedValue: number;
};

const initialState: SelectedState = {
  selectedCategory: null,
  selectedDifficulty: null,
  selectedType: null,
  selectedValue: 10,
};

const selectedSlice = createSlice({
  name: "selected",
  initialState,
  reducers: {
    setSelectedCategory(state, action: PayloadAction<string>) {
      state.selectedCategory = action.payload;
    },
    setSelectedDifficulty(state, action: PayloadAction<string>) {
      state.selectedDifficulty = action.payload;
    },
    setSelectedType(state, action: PayloadAction<string>) {
      state.selectedType = action.payload;
    },
    setSelectedValue(state, action: PayloadAction<number>) {
      state.selectedValue = action.payload;
    },
    resetSelectedState() {
      return initialState;
    },
  },
});

export const { 
  setSelectedCategory, 
  setSelectedDifficulty, 
  setSelectedType,
  setSelectedValue,
  resetSelectedState,
} = selectedSlice.actions;

export default selectedSlice.reducer;