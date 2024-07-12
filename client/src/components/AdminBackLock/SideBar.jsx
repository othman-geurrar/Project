import { Link, NavLink, useNavigate } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { CiShoppingCart } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import { SiStylelint } from "react-icons/si";
import { Button } from "flowbite-react";
import { FaUser } from "react-icons/fa6";
import { FaUserShield } from "react-icons/fa6";






import { BsKanban, BsBarChart, BsBoxSeam, BsCurrencyDollar, BsShield, BsChatLeft } from 'react-icons/bs';
import { AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock } from 'react-icons/ai';
import {
  FiShoppingBag,
  FiEdit,
  FiPieChart,
  FiBarChart,
  FiCreditCard,
  FiStar,
  FiShoppingCart,
} from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { setisActiveMenu } from "../../redux/SideBar/sideBarSlice";

const links = [
  {
    title: "Dashboard",
    links: [
      {
        name: "ecommerce",
        link: "ecommerce",
        icon: <FiShoppingBag />,
      },
    ],
  },

  {
    title: "Pages",
    links: [
     
      {
        name: "Products",
        link: "admin/products",
        icon: <CiShoppingCart />,
      },
      {
        name: "Oreders",
        link: "orders",
        icon: <MdOutlineShoppingBag />,
      },
      {
        name: "Life Style",
        link: "admin/lifestyles",
        icon: <SiStylelint />,
      },
      {
        name: "Events",
        link: "admin/events",
        icon: <AiOutlineShoppingCart />,
      },
      {
        name: "Admins",
        link: "admins",
        icon: <FaUserShield />
        ,
      },
      {
        name: "Users",
        link: "users",
        icon: <FaUser />
        ,
      },
    ],
  },
  // {
  //   title: "Apps",
  //   links: [
  //     {
  //       name: "calendar",
  //       icon: <AiOutlineCalendar />,
  //     },
  //     {
  //       name: "kanban",
  //       icon: <BsKanban />,
  //     },
  //     {
  //       name: "editor",
  //       icon: <FiEdit />,
  //     },
      
  //   ],
  // },
  // {
  //   title: "Charts",
  //   links: [
  //     {
  //       name: "line",
  //       icon: <AiOutlineStock />,
  //     },
  //     {
  //       name: "area",
  //       icon: <AiOutlineAreaChart />,
  //     },

  //     {
  //       name: "bar",
  //       icon: <AiOutlineBarChart />,
  //     },
  //     {
  //       name: "pie",
  //       icon: <FiPieChart />,
  //     },
  //     {
  //       name: "financial",
  //       icon: <RiStockLine />,
  //     },
  //     {
  //       name: "color-mapping",
  //       icon: <BsBarChart />,
  //     },
  //     {
  //       name: "pyramid",
  //       icon: <GiLouvrePyramid />,
  //     },
  //     {
  //       name: "stacked",
  //       icon: <AiOutlineBarChart />,
  //     },
  //   ],
  // },
];

const SideBar = () => {
  const isActiveMenu = useSelector((state) => state.sideBar.isActiveMenu);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const SingOut = () => {
    // localStorage.setItem("isLoggedIn", "");
    // localStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('isLoggedIn');
    navigate('/admin/login');
  }

  const activeLink =
    "flex items-center bg-teal-500 gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {isActiveMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={() => dispatch(setisActiveMenu())}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-teal-600"
            >
              <SiShopware /> <span>OSAY</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => { dispatch(setisActiveMenu())}}
                className="text-xl rounded-full p-3 md:hidden hover:bg-light-gray mt-4 block "
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.link}`}
                    key={link.name}
                    onClick={()=>{}}
                    
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                    {link.icon}
                    <span className="capitalize ">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
          <div className="absolute bottom-0 left-0 w-full">
            <div className=" mx-6 mb-4">
              <Button onClick={SingOut} pill>Sign Out</Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SideBar;






  

