import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Footer , Header , NavBar , SideBar, ThemeSetting , UserProfile   } from './components';
import { Ecommerce , LoginForm , Orders , Products , RegisterForm , Users , Admins , LifeStyle, AdminProfile , Event } from './pages';
import { useSelector } from 'react-redux';
import { registerLicense } from '@syncfusion/ej2-base';
import LifeStyleById from './components/LifeStyle/LifeStyleById';
import AddLifeStyle from './components/LifeStyle/AddLifeStyle';
import AddEvent from './components/Events/AddEvent';
import EventDetails from './components/Events/EventDetails';
// import EventById from './components/Events/EventById';




// Registering Syncfusion license key
registerLicense('Ngo9BigBOggjHTQxAR8/V1NBaF5cWWJCe0x0QXxbf1x0ZFNMYV5bRXZPMyBoS35RckVnW3tednFSRmJdVkVw');

function App() {
  const isActiveMenu = useSelector((state)=> state.sideBar.isActiveMenu);

  return (
   <div >
      
     
     <div className="flex relative h-full dark:bg-main-dark-bg">
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
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
            <SideBar />
          </div>
          )
         : (
          <div className="w-0 dark:bg-secondary-dark-bg">
              <SideBar />
            </div>
         )}
         <div
            className={
              isActiveMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <NavBar /> 
            </div>
          
          
          <div>
          <Routes>
                {/* dashboard  */}
                
                {/* <Route path="/" element={(<Ecommerce />)} /> */}
                <Route path="/ecommerce" element={(<Ecommerce />)} />

                {/* pages  */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/admins" element={<Admins />} />
                <Route path="/users" element={<Users />} />
                <Route path="/lifestyles" element={<LifeStyle />} />
                <Route path="/lifestyle/id" element={<LifeStyleById />} />
                <Route path="/lifestyle/add" element={<AddLifeStyle />} />
                <Route path="/admin/profile" element={<AdminProfile />} />
                <Route path="/products" element={<Products />} />
                <Route path='/events' element={<Event />} />
                <Route path="/events/add" element={<AddEvent />} />
                <Route path='/events/:id' element={<EventDetails />} />
            </Routes>
          </div>
          </div> 
          </div>
     
   </div>
  )
}

export default App