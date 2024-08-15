import { categoriesSlice, questionsSlice } from "../Slices/getDataSlice";
import { rootReducer } from "../RootReducer/rootReducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer:  rootReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
    .concat(categoriesSlice.middleware)
    .concat(questionsSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;