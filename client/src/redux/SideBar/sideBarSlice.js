import { createSlice } from "@reduxjs/toolkit";

const initialState =  {
    isActiveMenu : true,
};

const sideBarSlice = createSlice({
    name: "sideBar",
    initialState: initialState,
    reducers: {
        setisActiveMenu: (state) => {
            state.isActiveMenu = false;
        }
    },
});

export const { setisActiveMenu } = sideBarSlice.actions;

export default sideBarSlice.reducer;