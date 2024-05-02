import { configureStore } from "@reduxjs/toolkit";
import sideBarSlice from "./SideBar/sideBarSlice";
import OrderSlice from "./Orders/orderSlice";
import formSlice from "./formState/form"
import { setupListeners } from "@reduxjs/toolkit/query";
import { lifeStyleApi } from "./services/LifeStyleData";
import { eventsApi } from "./services/EventData";
import { adminAuthApi } from "./services/AuthApi";
import addEventReducer from "./formState/addEventSlice"; 

import ProductSlice from "./Products/productsSlice"

const store = configureStore({
  reducer: {
    sideBar: sideBarSlice,
    Orders: OrderSlice,
    Products: ProductSlice,
    form: formSlice,
    addEvent: addEventReducer,
    [lifeStyleApi.reducerPath]: lifeStyleApi.reducer,
    [adminAuthApi.reducerPath]: adminAuthApi.reducer,
    [eventsApi.reducerPath]: eventsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      lifeStyleApi.middleware,
      adminAuthApi.middleware,
      eventsApi.middleware
    ),
});

setupListeners(store.dispatch);

export default store;
