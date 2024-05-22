import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setcart,
  setisActiveMenu,
  setchat,
  setnotification,
  setprofile,
} from "../../redux/SideBar/sideBarSlice";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";

import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import logo from "../../assets/img/logo.png";
import Cart from "./Cart";
import UserProfile from "./UserProfile";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);
const NavBar = () => {
  const isActiveMenu = useSelector((state) => state.sideBar.isActiveMenu);
  const { cart, chat, notification, profile } = useSelector(
    (state) => state.sideBar
  );
  const dispatch = useDispatch();

  return (
    <div className="flex w-full justify-between p-2 md:ml-6 md:mr-6 relative">
      <NavButton
        title="Menu"
        customFunc={() => {
          dispatch(setisActiveMenu());
        }}
        color="blue"
        icon={<AiOutlineMenu />}
      />
      <div className="flex">
        <NavButton
          title="Cart"
          customFunc={() => dispatch(setcart())}
          color="blue"
          icon={<FiShoppingCart />}
        />

        <TooltipComponent content="UserProfile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => {
              dispatch(setprofile());
            }}
          >
            <img src={logo} className="rounded-full w-8 h-8" />
            <p>
              <span className="text-gray-400 text-14">Hi,</span>{" "}
              <span className="text-gray-400 font-bold ml-1 text-14">
                Michael
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
        {cart && <Cart />}

        {profile && <UserProfile />}
      </div>
    </div>
  );
};

export default NavBar;
