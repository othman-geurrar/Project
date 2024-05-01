import { configureStore } from "@reduxjs/toolkit";
import sideBarSlice from "./SideBar/sideBarSlice";
import OrderSlice from "./Orders/orderSlice";
import ProductSlice from "./Products/productsSlice"

const store = configureStore({
  reducer: {
    sideBar: sideBarSlice,
    Orders: OrderSlice,
    Products: ProductSlice,
  },
});

export default store;
