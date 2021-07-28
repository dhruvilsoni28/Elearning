import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: {},
  user: [],
};

const slice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.user.push(action.payload);
    },
    setActiveUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { setUser, setActiveUser } = slice.actions;

export default slice.reducer;
