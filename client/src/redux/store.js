import { configureStore } from "@reduxjs/toolkit";
import sideBarSlice from "./SideBar/sideBarSlice";



const store = configureStore({
    reducer: {
        sideBar: sideBarSlice
    }
})

export default store;