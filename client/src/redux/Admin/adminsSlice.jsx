/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addadmin = createAsyncThunk(
  "admins/addadmin",
  async (admindata, thunkAPI) => {
    console.log(admindata);
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.post(
        `http://localhost:3000/admin/register`,
        admindata,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true // Include credentials in the request
        }
      );
      console.log(res.data);
      return res.data.admin;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const updateadmin = createAsyncThunk(
  "admins/updateadmin",
  async ({ admindata, id }, thunkAPI) => {
    console.log(admindata);
    console.log(id);
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.patch(
        `http://localhost:3000/admin/update/${id}`,
        admindata,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true // Include credentials in the request
        }
      );
      return res.data.admin;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const deleteadmin = createAsyncThunk(
  "admins/deleteadmin",
  async (adminId, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.delete(
        "http://localhost:3000/admin/delete/" + adminId,
        {
          headers: {
            "Content-Type": "application/json",
          },
            withCredentials: true // Include credentials in the request
          
        }
      );
      console.log(res.data);
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
      const res = await axios.get(`http://localhost:3000/admin/getAdmins`, {
        withCredentials: true // Include credentials in the request
      });
       
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
      // addadmin
      .addCase(addadmin.fulfilled, (state, action) => {
        // console.log(action.payload);
        state.admins = [...state.admins, action.payload];
      })
      .addCase(addadmin.pending, (state, action) => {
        state.error = null;
      })
      .addCase(addadmin.rejected, (state, action) => {
        state.error = action.payload;
      })
      //updateproduct
      .addCase(updateadmin.fulfilled, (state, action) => {
        state.isLoadingEditadmin = false;
        state.admins = state.admins.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload;
          } else {
            return item;
          }
        });
      })
      .addCase(updateadmin.pending, (state, action) => {
        state.isLoadingEditadmin = true;
        state.error = null;
      })
      .addCase(updateadmin.rejected, (state, action) => {
        state.isLoadingEditadmin = false;
        state.error = action.payload;
      })
      //   deleteorder
      .addCase(deleteadmin.fulfilled, (state, action) => {
        state.isLoadingadmmins = false;
        state.admins = state.admins.filter((item) => item.id != action.payload);
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
