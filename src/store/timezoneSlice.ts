import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TimezoneState {
  selectedTimezones: string[];
}

const initialState: TimezoneState = {
  selectedTimezones: JSON.parse(
    localStorage.getItem("selectedTimezones") || "[]"
  ),
};

const timezonesSlice = createSlice({
  name: "timezones",
  initialState,
  reducers: {
    addTimezone(state, action: PayloadAction<string>) {
      //assuming: we do not want duplicate timezones in the list
      if (!state.selectedTimezones.includes(action.payload)) {
        state.selectedTimezones.push(action.payload);
        localStorage.setItem(
          "selectedTimezones",
          JSON.stringify(state.selectedTimezones)
        );
      }
    },
  },
});

export const { addTimezone } = timezonesSlice.actions;
export default timezonesSlice.reducer;
