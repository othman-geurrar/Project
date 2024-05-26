import { useState, useEffect } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { MdDensityMedium } from "react-icons/md";
// import { FaSignInAlt, FaUser } from "react-icons/fa";
import css from "./Navbar.module.scss";
import logo from '../../assets/logo.png';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setcart , setuserLogins } from "../../redux/SideBar/sideBarSlice";
import Cart from "./Cart";
import UserLoginForm from "../../pages/usersPages/LoginForm";
import ProfileDropDown from "./ProdileDropDown";


const NavBaar = () => {
  const [search, setSearch] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const isLogin = sessionStorage.getItem('UserLogin');

  
  const { cart } = useSelector(
    (state) => state.sideBar
  );

  const { userLogins } = useSelector(
    (state) => state.sideBar
  )

  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openSearchBar = () => {
    setSearch(true);
  };

  const closeSearchBar = () => {
    setSearch(false);
  };

  const toggled = () => {
    setToggle((prev) => !prev);
  };

  return (
    <>
      <div
  className={`fixed top-0 left-0 w-full h-20 flex justify-between items-center px-4 py-4 font-sans z-50 ${scrolling ? "bg-neutral-200 text-teal-600 " : "bg-neutral-200 text-teal-400 "} ${scrolling && css.scroll}`}        style={{ boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)" }}
      >
        <div className="flex avatar ">
          <div className="w-20 rounded-full">
            <img src={logo} alt="Logo" />
            
          </div>
          {/* <span className=" my-auto"> Our Style Are Yours </span> */}
        </div>
        <div
          className={`${css.main_menu} ${toggle ? css["main_menu--open"] : {}}`}
        >
           <nav className="hidden md:flex items-center gap-6 text-lg font-medium">
        <Link
          className="relative li text-teal-500 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-teal-300 before:transition-all before:duration-300 hover:before:w-full hover:text-teal-300 dark:hover:text-gray-50"
          to={"/"}
        >
          Home
        </Link>
        <Link
          className="relative li text-teal-500 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-teal-300 before:transition-all before:duration-300 hover:before:w-full hover:text-teal-300 dark:hover:text-gray-50"
          to={"/products"}
        >
          Products
        </Link>
        <Link
         className="relative li text-teal-500 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-teal-300 before:transition-all before:duration-300 hover:before:w-full hover:text-teal-300 dark:hover:text-gray-50"
          to={"/lifestyles"}
        >
          LifeStyles
        </Link>
        <Link
          className="relative li text-teal-500 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-teal-300 before:transition-all before:duration-300 hover:before:w-full hover:text-teal-300 dark:hover:text-gray-50"
          to={"/events"}
        >
          Events
        </Link>
        <Link
          className="relative li text-teal-500 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-teal-300 before:transition-all before:duration-300 hover:before:w-full hover:text-teal-300 dark:hover:text-gray-50"
          href="#"
        >
          Contact
        </Link>
      </nav>
          
        </div>

        <div>
        <div className="relative left-0 flex">
          {!isLogin ? (
            <Button className="hidden md:inline-flex hover:text-teal-300 " variant="outline" onClick={() => dispatch(setuserLogins())}>
              Sign In
            </Button>
          ) : (
            <>
            <ProfileDropDown />
          </>
          )}
          {console.log('cart')}
          <Button className="rounded-full hover:text-teal-300" size="icon" variant="ghost" onClick={() => dispatch(setcart())}>
            <ShoppingCartIcon className="h-6 w-6" />
            <span className="sr-only">Cart</span>
          </Button>
          <span className="relative flex items-center text-lg z-10 cursor-pointer hover:text-teal-300">
            <IoSearchSharp onClick={openSearchBar}></IoSearchSharp>
            <RxCross2
              className={`${search ? "ml-4 visible" : "invisible"}`}
              onClick={closeSearchBar}
            ></RxCross2>
          </span>
          <MdDensityMedium
            className="lg:hidden md:hidden relative text-2xl cursor-pointer block"
            onClick={toggled}
          ></MdDensityMedium>
        </div>
        </div>

        <div
          className={`absolute ${
            search ? "left-0" : "right-full"
          } flex items-center bg-white px-8 w-full h-full text-base`}
        >
          <input
            className="w-full outline-none px-4 py-2 border-b border-gray-300"
            placeholder="Search here..."
          ></input>
        </div>
      </div>
      { cart && <Cart />}
      { userLogins && <UserLoginForm />}
    </>
  );
};

function ShoppingCartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}

export default NavBaar;
