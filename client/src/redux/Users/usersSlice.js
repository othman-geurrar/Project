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
export const deleteuser = createAsyncThunk(
  "products/deleteproduct",
  async (userId, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.delete(
        `http://localhost:3000/product/delete/${userId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return userId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getusers = createAsyncThunk(
  "users/getusers",
  async (_, thunkAPI) => {
    let { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get(`http://localhost:3000/users/getUsers`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: "users",
  initialState: {
    showForm: false,
    isLoadingEditProduct: false,
    isLoadingusers: false,
    error: null,
    users: [],
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
      //deleteorder
      //   .addCase(deleteproduct.fulfilled, (state, action) => {
      //     state.isLoadingproducts = false;
      //     state.products = state.products.filter(
      //       (item) => item.id != action.payload
      //     );
      //   })
      //   .addCase(deleteproduct.pending, (state, action) => {
      //     state.isLoadingproducts = true;
      //     state.error = null;
      //   })
      //   .addCase(deleteproduct.rejected, (state, action) => {
      //     state.isLoadingproducts = false;
      //     state.error = action.payload;
      //   })
      //getorder
      .addCase(getusers.fulfilled, (state, action) => {
        state.isLoadingusers = false;
        state.users = action.payload;
      })
      .addCase(getusers.pending, (state, action) => {
        state.isLoadingusers = true;
        state.error = null;
      })
      .addCase(getusers.rejected, (state, action) => {
        state.isLoadingusers = false;
        state.error = action.payload;
      });
    //showform
  },
});
export const { toggleForm } = userSlice.actions;
export default userSlice.reducer;