import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  showForm: false,
};

const formSlice = createSlice({ 
    name: "form",
    initialState,
    reducers: {
      setShowForm: (state) => {
        state.showForm =!state.showForm;
      },
    },
  });

  export const { setShowForm } = formSlice.actions;
  export default formSlice.reducer;