import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface TimezoneState {
  visitedTimezones: Record<string, string[]>; // { userId: [zoneName1, zoneName2, ...] }
}

// Helper function to load state from localStorage
const loadFromLocalStorage = (): TimezoneState => {
  const storedState = localStorage.getItem("timezoneState");
  if (storedState) {
    return JSON.parse(storedState);
  }
  return {
    visitedTimezones: {},
  };
};

// Helper function to save state to localStorage
const saveToLocalStorage = (state: TimezoneState) => {
  localStorage.setItem("timezoneState", JSON.stringify(state));
};

const initialState: TimezoneState = loadFromLocalStorage();

const timezoneSlice = createSlice({
  name: "timezone",
  initialState,
  reducers: {
    visitTimezone: (
      state,
      action: PayloadAction<{ userId: string; timezone: string }>
    ) => {
      const { userId, timezone } = action.payload;
      if (!state.visitedTimezones[userId]) {
        state.visitedTimezones[userId] = [];
      }
      if (!state.visitedTimezones[userId].includes(timezone)) {
        state.visitedTimezones[userId].push(timezone);
        saveToLocalStorage(state); // Save changes to localStorage
      }
    },
  },
});

export const { visitTimezone } = timezoneSlice.actions;
export default timezoneSlice.reducer;

// Selector to get visited timezones for the current user
export const selectVisitedTimezones = (
  state: RootState,
  userId: string | null
) => (userId ? state.timezones.visitedTimezones[userId] || [] : []);
