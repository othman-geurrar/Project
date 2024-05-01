/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const deleteproduct = createAsyncThunk(
  "products/deleteproduct",
  async (productId, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.delete(
        `http://localhost:3000/product/delete/${productId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res);
      return productId;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);
export const getproducts = createAsyncThunk(
  "products/getproducts",
  async (_, thunkAPI) => {
    let { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get(`http://localhost:3000/product/getAll`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const productSlice = createSlice({
  name: "products",
  initialState: {
    isLoadingproducts: false,
    error: null,
    products: [],
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      //deleteorder
      .addCase(deleteproduct.fulfilled, (state, action) => {
        state.isLoadingproducts = false;
        state.products = state.products.filter(
          (item) => item.id != action.payload
        );
      })
      .addCase(deleteproduct.pending, (state, action) => {
        state.isLoadingproducts = true;
        state.error = null;
      })
      .addCase(deleteproduct.rejected, (state, action) => {
        state.isLoadingproducts = false;
        state.error = action.payload;
      })
      //getorder
      .addCase(getproducts.fulfilled, (state, action) => {
        state.isLoadingproducts = false;
        state.products = action.payload;
      })
      .addCase(getproducts.pending, (state, action) => {
        state.isLoadingproducts = true;
        state.error = null;
      })
      .addCase(getproducts.rejected, (state, action) => {
        state.isLoadingproducts = false;
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
