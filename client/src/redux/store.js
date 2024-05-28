import { configureStore } from "@reduxjs/toolkit";
import sideBarSlice from "./SideBar/sideBarSlice";
import OrderSlice from "./Orders/orderSlice";
import formSlice from "./formState/form"
import { setupListeners } from "@reduxjs/toolkit/query";
import { lifeStyleApi } from "./services/LifeStyleData";
import { eventsApi } from "./services/EventData";
import { adminAuthApi } from "./services/AuthApi";
import addEventReducer from "./formState/addEventSlice"; 
import UserSlice from "./Users/usersSlice";
import AdminSlice from "./Admin/adminsSlice";
import ProductSlice from "./Products/productsSlice";
import {AdminApi} from "./services/adminApi";
import { ProductApi } from "./services/ProductData";
import { cartApi } from "./services/cartApi";

const store = configureStore({
  reducer: {
    sideBar: sideBarSlice,
    Orders: OrderSlice,
    Products: ProductSlice,
    Admins: AdminSlice,
    Users: UserSlice,
    form: formSlice,
    addEvent: addEventReducer,
    [lifeStyleApi.reducerPath]: lifeStyleApi.reducer,
    [adminAuthApi.reducerPath]: adminAuthApi.reducer,
    [eventsApi.reducerPath]: eventsApi.reducer,
    [AdminApi.reducerPath]: AdminApi.reducer,
    [ProductApi.reducerPath]: ProductApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      lifeStyleApi.middleware,
      adminAuthApi.middleware,
      eventsApi.middleware,
      AdminApi.middleware,
      ProductApi.middleware,
      cartApi.middleware,
      

    ),
});

setupListeners(store.dispatch);

export default store;
