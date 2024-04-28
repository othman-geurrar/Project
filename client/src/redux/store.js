import { configureStore } from "@reduxjs/toolkit";
import sideBarSlice from "./SideBar/sideBarSlice";
import OrderReducer from "./Orders/orderSlice";

const store = configureStore({
  reducer: {
    sideBar: sideBarSlice,
    Orders: OrderReducer,
  },
});

export default store;
