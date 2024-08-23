import { configureStore } from "@reduxjs/toolkit";
export const Store = configureStore({
  reducer: {
    // hexagonData: hexagonReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export default Store;
