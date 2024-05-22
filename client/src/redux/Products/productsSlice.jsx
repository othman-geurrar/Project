/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getOneProduct = createAsyncThunk(
  "products/getOneProduct",
  async (productid, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get(
        `http://localhost:3000/product/getOne/${productid}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res.data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateproduct = createAsyncThunk(
  "products/updateproduct",
  async ({ productdata, productId }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await new Promise((resolve) => setTimeout(resolve, 600));
      const res = await axios.patch(
        `http://localhost:3000/product/update/${productId}`,
        productdata,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const addproduct = createAsyncThunk(
  "products/addproduct",
  async (productdata, thunkAPI) => {
    console.log(productdata);
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.post(
        `http://localhost:3000/product/newer`,
        productdata,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
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
      return productId;
    } catch (error) {
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
      return res.data.docs;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    showForm: false,
    isLoadingEditProduct: false,
    isLoadingproducts: false,
    error: null,
    currentproduct: {},
    products: [],
  },
  reducers: {
    toggleForm: (state, action) => {
      state.showForm = !state.showForm;
    },
  },

  extraReducers: (builder) => {
    builder
      // getoneproduct
      .addCase(getOneProduct.fulfilled, (state, action) => {
        console.log(action.payload);
        state.currentproduct = action.payload;
      })
      .addCase(getOneProduct.pending, (state, action) => {
        state.error = null;
      })
      .addCase(getOneProduct.rejected, (state, action) => {
        state.error = action.payload;
      })
      //addproduct
      .addCase(addproduct.fulfilled, (state, action) => {
        // console.log(action.payload);
        state.products = [...state.products, action.payload];
      })
      .addCase(addproduct.pending, (state, action) => {
        state.error = null;
      })
      .addCase(addproduct.rejected, (state, action) => {
        state.error = action.payload;
      })
      //updateproduct
      .addCase(updateproduct.fulfilled, (state, action) => {
        state.isLoadingEditProduct = false;
        state.products = state.products.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload;
          } else {
            return item;
          }
        });
        console.log(state.products);
      })
      .addCase(updateproduct.pending, (state, action) => {
        state.isLoadingEditProduct = true;
        state.error = null;
      })
      .addCase(updateproduct.rejected, (state, action) => {
        state.isLoadingEditProduct = false;
        state.error = action.payload;
      })
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
    //showform
  },
});
export const { toggleForm } = productSlice.actions;
export default productSlice.reducer;