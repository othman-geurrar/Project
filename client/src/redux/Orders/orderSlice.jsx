/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const deleteorder = createAsyncThunk(
  "orders/deleteorder",
  async (orderId, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.delete(
        `http://localhost:3000/orders/deleteOrder/${orderId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res);
      return orderId;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);
export const getorders = createAsyncThunk(
  "orders/getorders",
  async (_, thunkAPI) => {
    let { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get(`http://localhost:3000/orders/getOrders`);
      console.log(res);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const orderSlice = createSlice({
  name: "orders",
  initialState: {
    isLoadingorders: false,
    error: null,
    orders: [],
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      //deleteorder
      .addCase(deleteorder.fulfilled, (state, action) => {
        state.isLoadingorders = false;
        state.orders = state.orders.filter((item) => item.id != action.payload);
      })
      .addCase(deleteorder.pending, (state, action) => {
        state.isLoadingorders = true;
        state.error = null;
      })
      .addCase(deleteorder.rejected, (state, action) => {
        state.isLoadingorders = false;
        state.error = action.payload;
      })
      //getorder
      .addCase(getorders.fulfilled, (state, action) => {
        state.isLoadingorders = false;
        state.orders = action.payload;
      })
      .addCase(getorders.pending, (state, action) => {
        state.isLoadingorders = true;
        state.error = null;
      })
      .addCase(getorders.rejected, (state, action) => {
        state.isLoadingorders = false;
        state.error = action.payload;
      });
  },
});

export default orderSlice.reducer;
