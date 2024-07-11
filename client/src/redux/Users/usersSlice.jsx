/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const adduser = createAsyncThunk(
  "users/adduser",
  async (userdata, thunkAPI) => {
    console.log(userdata);
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.post(
        `https://osay-backend.vercel.app/users/register`,
        userdata,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res.data);
      return res.data.user;
    } catch (error) {
      return rejectWithValue(error.data.message);
    }
  }
);
export const updateuser = createAsyncThunk(
  "users/updateuser",
  async ({ userdata, id }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.patch(
        `https://osay-backend.vercel.app/users/update/${id}`,
        userdata,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return res.data.User;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const deleteuser = createAsyncThunk(
  "users/deleteuser",
  async (userId, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.delete(
        `https://osay-backend.vercel.app/users/delete/${userId}`,
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
      const res = await axios.get(`https://osay-backend.vercel.app/users/getUsers`);
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
    isLoadingEditUser: false,
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
      //addproduct
      .addCase(adduser.fulfilled, (state, action) => {
        // console.log(action.payload);
        state.users = [...state.users, action.payload];
      })
      .addCase(adduser.pending, (state, action) => {
        state.error = null;
      })
      .addCase(adduser.rejected, (state, action) => {
        state.error = action.payload;
      })
      // updateproduct
      .addCase(updateuser.fulfilled, (state, action) => {
        state.isLoadingEditUser = false;
        console.log(action.payload);
        state.users = state.users.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload;
          } else {
            return item;
          }
        });
      })
      .addCase(updateuser.pending, (state, action) => {
        state.isLoadingEditUser = true;
        state.error = null;
      })
      .addCase(updateuser.rejected, (state, action) => {
        state.isLoadingEditUser = false;
        state.error = action.payload;
      })
      // deleteorder
      .addCase(deleteuser.fulfilled, (state, action) => {
        state.isLoadingusers = false;
        state.users = state.users.filter((item) => item.id != action.payload);
      })
      .addCase(deleteuser.pending, (state, action) => {
        state.isLoadingusers = true;
        state.error = null;
      })
      .addCase(deleteuser.rejected, (state, action) => {
        state.isLoadingusers = false;
        state.error = action.payload;
      })
      // getorder
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
