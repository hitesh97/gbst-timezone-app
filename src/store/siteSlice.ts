import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SiteState {
  currentUser: {
    id: string;
    name: string;
  } | null;
}

const initialState: SiteState = {
  currentUser: {
    id: "123", // Example default user ID
    name: "John Doe",
  },
};

const siteSlice = createSlice({
  name: "site",
  initialState,
  reducers: {
    setCurrentUser: (
      state,
      action: PayloadAction<{ id: string; name: string }>
    ) => {
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = siteSlice.actions;
export default siteSlice.reducer;
