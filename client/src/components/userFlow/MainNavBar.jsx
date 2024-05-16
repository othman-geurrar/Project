import { useState, useEffect } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { MdDensityMedium } from "react-icons/md";
// import { FaSignInAlt, FaUser } from "react-icons/fa";
import css from "./Navbar.module.scss";
import logo from '../../assets/logo.png';

const MainNav = () => {
  const [search, setSearch] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [scrolling, setScrolling] = useState(false);

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
  className={`fixed top-0 left-0 w-full h-20 flex justify-between items-center px-4 py-4 font-sans z-50 ${scrolling ? "bg-neutral-200 text-black" : "bg-transparent text-white"} ${scrolling && css.scroll}`}        style={{ boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)" }}
      >
        <div className="avatar">
          <div className="w-20 rounded-full">
            <img src={logo} alt="Logo" />
          </div>
        </div>
        <div
          className={`${css.main_menu} ${toggle ? css["main_menu--open"] : {}}`}
        >
          <div>
            <ul className="flex gap-8">
              <li>
                <a href="/">HOME</a>
              </li>
              <li>
                <a href="/attorney">LIFE STYLE</a>
              </li>
              <li>
                <a href="/about">PRODUCTS</a>
              </li>
              <li>
                <a href="/services">EVENTS</a>
              </li>
              <li>
                <a href="/contact">CONTACT</a>
              </li>
            </ul>
          </div>
          {/* <div className="flex gap-4">
            <button className="text-md ml-64">
              <FaSignInAlt /> Sign In
            </button>
            <button className="text-md">
              <FaUser /> Log In
            </button>
          </div> */}
        </div>

        <div>
          <div className="relative left-0 flex">
            <span className="relative flex items-center text-lg z-10 cursor-pointer">
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
    </>
  );
};

export default MainNav;
