// addEventSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  events: [], // Initialize events array to store added events
};

const addEventSlice = createSlice({
  name: "addEvent",
  initialState,
  reducers: {
    addEventSuccess: (state, action) => {
      state.events.push(action.payload); // Add the newly added event to the events array
    },
  },
});

export const { addEventSuccess } = addEventSlice.actions;
export default addEventSlice.reducer;