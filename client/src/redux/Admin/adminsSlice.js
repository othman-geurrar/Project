/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// export const updateproduct = createAsyncThunk(
//   "products/updateproduct",
//   async ({ productdata, id }, thunkAPI) => {
//     const { rejectWithValue } = thunkAPI;
//     try {
//       const res = await axios.patch(
//         `http://localhost:3000/product/update/${id}`,
//         productdata,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       return res.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
export const deleteadmin = createAsyncThunk(
  "admins/deleteadmin",
  async (adminId, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.delete(
        "http://localhost:3000/admin/delete/"+adminId,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return adminId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getadmins = createAsyncThunk(
  "admins/getadmins",
  async (_, thunkAPI) => {
    let { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get(`http://localhost:3000/admin/getAdmins`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const adminSlice = createSlice({
  name: "admins",
  initialState: {
    showForm: false,
    isLoadingEditadmin: false,
    isLoadingadmins: false,
    error: null,
    admins: [],
  },
  reducers: {
    toggleForm: (state, action) => {
      state.showForm = !state.showForm;
    },
  },

  extraReducers: (builder) => {
    builder
      //updateproduct
      //   .addCase(updateproduct.fulfilled, (state, action) => {
      //     state.isLoadingEditProduct = false;
      //     state.products = state.products.map((item) => {
      //       if (item.id === action.payload.id) {
      //         return action.payload;
      //       } else {
      //         return item;
      //       }
      //     });
      //     console.log(state.products);
      //   })
      //   .addCase(updateproduct.pending, (state, action) => {
      //     state.isLoadingEditProduct = true;
      //     state.error = null;
      //   })
      //   .addCase(updateproduct.rejected, (state, action) => {
      //     state.isLoadingEditProduct = false;
      //     state.error = action.payload;
      //   })
    //   deleteorder
        .addCase(deleteadmin.fulfilled, (state, action) => {
          state.isLoadingadmmins = false;
          state.admins = state.admins.filter(
            (item) => item.id != action.payload
          );
        })
        .addCase(deleteadmin.pending, (state, action) => {
          state.isLoadingadmmins = true;
          state.error = null;
        })
        .addCase(deleteadmin.rejected, (state, action) => {
          state.isLoadingadmmins = false;
          state.error = action.payload;
        })
      //getorder
      .addCase(getadmins.fulfilled, (state, action) => {
        state.isLoadingadmins = false;
        state.admins = action.payload;
      })
      .addCase(getadmins.pending, (state, action) => {
        state.isLoadingadmins = true;
        state.error = null;
      })
      .addCase(getadmins.rejected, (state, action) => {
        state.isLoadingadmins = false;
        state.error = action.payload;
      });
    //showform
  },
});
export const { toggleForm } = adminSlice.actions;
export default adminSlice.reducer;