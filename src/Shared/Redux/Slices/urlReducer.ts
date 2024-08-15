import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UrlState = {
  url: string;
};

const initialState: UrlState = {
  url: "" 
};

const urlSlice = createSlice({
  name: "url",
  initialState,
  reducers: {
    setUrl: (state, action: PayloadAction<string>) => {
      state.url = action.payload;
    },
    resetState() {
      return initialState;
    },
  },
});

export const { 
  setUrl,
  resetState,
} = urlSlice.actions;
export default urlSlice.reducer;