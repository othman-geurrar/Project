import { createSlice } from "@reduxjs/toolkit";

const initialState =  {
    isActiveMenu : false,
    chat: false,
    cart: false,
    notification: false,
    profile: false,
    userLogins: false,
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
        },
        setuserLogins: (state) => {
            state.userLogins =!state.userLogins;
        },
    
    },
});

export const { setisActiveMenu , setchat , setcart , setnotification , setprofile , setuserLogins} = sideBarSlice.actions;

export default sideBarSlice.reducer;