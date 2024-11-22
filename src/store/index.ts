import { configureStore } from "@reduxjs/toolkit";
import timezonesReducer from "./timezoneSlice";
import siteReducer from "./siteSlice";

export const store = configureStore({
  reducer: {
    site: siteReducer,
    timezones: timezonesReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
