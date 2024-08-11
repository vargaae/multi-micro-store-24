import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  currentUser: null,
  isComponentVisible: false,
  test: { a: 1 },
};

export const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
    setIsComponentVisible(state, action) {
      state.isComponentVisible = action.payload;
    },
  },
});

export const { setCurrentUser, setIsComponentVisible } = userSlice.actions;

export const userReducer = userSlice.reducer;