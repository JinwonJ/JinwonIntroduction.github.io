import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Language {
  ko?: String;
  en?: String;
}
const initialState: Language = {};

const LanguageType = createSlice({
  name: "Language",
  initialState,
  reducers: {
    hexagonClick(state, action: PayloadAction<Language>) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});
export const { actions, reducer } = LanguageType;
