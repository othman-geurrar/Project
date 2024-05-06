import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  showForm: false,
  showEditForm : false ,
};

const formSlice = createSlice({ 
    name: "form",
    initialState,
    reducers: {
      setShowForm: (state) => {
        state.showForm =!state.showForm;
      },
      setShowEditForm: (state) => {
        state.showEditForm =!state.showEditForm;
      },
    },
  });

  export const { setShowForm , setShowEditForm } = formSlice.actions;
  export default formSlice.reducer;