import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { Header , NavBar , SideBar, ThemeSetting , UserProfile   } from './components';
import {
  Ecommerce,
  Orders,
  Products,
  ProductsDetails,
  Users,
  Admins,
  LifeStyle,
  AdminProfile,
  Event, 
  ProductsPage,
} from "./pages";
import { useSelector } from 'react-redux';
import { registerLicense } from '@syncfusion/ej2-base';
import AddLifeStyle from './components/AdminBackLock/LifeStyle/AddLifeStyle';
import EventDetails from './components/AdminBackLock/Events/EventDetails';
import LifestyelDetails from './components/AdminBackLock/LifeStyle/LifestyelDetails'
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for ToastContainer







// Registering Syncfusion license key
registerLicense('Ngo9BigBOggjHTQxAR8/V1NBaF5cWWJCe0x0QXxbf1x0ZFNMYV5bRXZPMyBoS35RckVnW3tednFSRmJdVkVw');

function App() {
  const isActiveMenu = useSelector((state)=> state.sideBar.isActiveMenu);

  return (
    <div>
       <ToastContainer />
      <div className="flex relative h-full bg-white">
        {/* <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent
              content="Settings"
              position="Top"
            >
              <button
                type="button"
                style={{ background: 'blue', borderRadius: '50%' }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>

            </TooltipComponent>
          </div> */}
        {isActiveMenu ? (
          <div className="w-72 fixed sidebar  bg-white ">
            <SideBar />
          </div>
        ) : (
          <div className="w-0 ">
            <SideBar />
          </div>
        )}
        <div
          className={
            isActiveMenu
              ? "  bg-main-bg min-h-screen md:ml-72 w-full overflow-hidden  "
              : "bg-main-bg   w-full min-h-screen flex-2 overflow-hidden "
          }
        >
          <div className="fixed md:static bg-main-bg  navbar w-full ">
            <NavBar />
          </div>

          <div>
            <Routes>
              {/* dashboard  */}

              {/* <Route path="/" element={(<Ecommerce />)} /> */}
              <Route path="/ecommerce" element={<Ecommerce />} />

              {/* pages  */}
              <Route path="/orders" element={<Orders />} />
              <Route path="/admins" element={<Admins />} />
              <Route path="/users" element={<Users />} />
              <Route path="/lifestyles" element={<LifeStyle />} />
              <Route path="/lifestyle/:id" element={<LifestyelDetails />} />
              <Route path="/lifestyle/add" element={<AddLifeStyle />} />
              <Route path="/admin/profile" element={<AdminProfile />} />
              <Route path="/products" element={<Products />} />
              <Route path="/productdetail" element={<ProductsDetails />} />
              <Route path='/events' element={<Event />} />
              <Route path='/events/:id' element={<EventDetails />} />
            </Routes>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App