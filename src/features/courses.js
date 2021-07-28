import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [],
};

const slice = createSlice({
  name: "courses",
  initialState: initialState,
  reducers: {
    AddCourse: (state, action) => {
      state.courses.push({ ...action.payload, rating: 0 });
    },
  },
});

export const { AddCourse } = slice.actions;

export default slice.reducer;
