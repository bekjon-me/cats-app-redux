import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "react-redux-typescript";
import { Cat, CatID, CatsState } from "./@types.cats";
import { RootState } from "./store";

// init state
const initialState = {
  catList: [],
} as CatsState;

const CatsSlice = createSlice({
  // name used in action types
  name: "cats",
  // initial state
  initialState,
  // an object of "case reducers"
  // key names are used to generate actions
  reducers: {
    addCat: (state, action: PayloadAction<string, Cat>) => {
      state.catList.push(action.payload);
    },

    minusOne: (state) => {
      state.catList.forEach((cat) => {
        if (cat.feedTime > 0) {
          cat.feedTime -= 1;
        }
      });
    },

    // feed cat with id
    feedCat: (state, action: PayloadAction<string, CatID>) => {
      state.catList.forEach((cat) => {
        if (cat.id === action.payload) {
          cat.feedTime = 35;
        }
      });
    },
  },
});

export const { addCat, minusOne, feedCat } = CatsSlice.actions;
export default CatsSlice.reducer;

// create and export the selector
export const selectCats = (state: RootState) => state.catList;
