import { configureStore } from "@reduxjs/toolkit";
import translateReducer from "./LanguageType/TranslateSlice.tsx";
const Store = configureStore({
  reducer: {
    translate: translateReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export default Store;
