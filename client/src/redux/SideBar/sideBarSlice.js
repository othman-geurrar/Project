import { createSlice } from "@reduxjs/toolkit";

const initialState =  {
    isActiveMenu : true,
    chat: false,
    cart: false,
    notification: false,
    profile: false,
};

const sideBarSlice = createSlice({
    name: "sideBar",
    initialState: initialState,
    reducers: {
        setisActiveMenu: (state) => {
            state.isActiveMenu = !state.isActiveMenu;
        },
        setchat: (state) => {
            state.chat = !state.chat;
        },
        setcart: (state) => {
            state.cart = !state.cart;
        },
        setnotification: (state) => {
            state.notification = !state.notification;
        },
        setprofile: (state) => {
            state.profile = !state.profile;
        }
    
    },
});

export const { setisActiveMenu , setchat , setcart , setnotification , setprofile} = sideBarSlice.actions;

export default sideBarSlice.reducer;