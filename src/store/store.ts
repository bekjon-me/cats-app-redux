import { configureStore } from "@reduxjs/toolkit";
import CatsReducer from "./CatsSlice";

export const store = configureStore({
  reducer: {
    cats: CatsReducer,
  },
});

// defining the 'rootstate' as the return type
export type RootState = ReturnType<typeof store.getState>;
