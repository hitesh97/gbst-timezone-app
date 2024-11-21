import { configureStore } from "@reduxjs/toolkit";
import timezonesReducer from "./timezoneSlice";

export const store = configureStore({
  reducer: {
    timezones: timezonesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
