import React from "react";
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";
import "./log.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./pages/adminPages/LoginForm.jsx";
import RegisterForm from "./pages/adminPages/RegisterForm.jsx";
import store from "./redux/store.js";
import { registerLicense } from '@syncfusion/ej2-base';
import Protected from './Routes/Protected.jsx'
import { EventDetails, EventPage, LandingPage, LifeStyleDetail, LifeStyleFront, ProductDetail, ProductExample, ProductsPage, ProfilUser, UserLoginForm } from "./pages/index.jsx";
import { ShopCart } from "./components/index.jsx";
import { ThemeProvider } from "@material-tailwind/react";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



// Registering Syncfusion license key
registerLicense('Ngo9BigBOggjHTQxAR8/V1NBaF1cXmhPYVFzWmFZfVpgdVdMYFlbRnRPIiBoS35RckVmW3lfcnRQRGNeUUVx');


registerLicense('Ngo9BigBOggjHTQxAR8/V1NBaF5cWWJCe0x0QXxbf1x0ZFNMYV5bRXZPMyBoS35RckVnW3tednZVRGdUUkF0');
import CheckoutPage from "./pages/usersPages/CheckOut.jsx"
import LoginUser from "./pages/usersPages/visacart.jsx"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>   
      <Routes>    
        <Route path="/" element={<LandingPage />} />
        <Route path="/user/login" element={<UserLoginForm />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/user/profil"element={
              <ThemeProvider>
                <ProfilUser />
              </ThemeProvider>
            }
          />
        {/* <Route path="/products/:id" element={<ProductDetail />} /> */}
        <Route path="/products/:id" element={<ProductExample />} />
        <Route path="/cart" element={<ShopCart />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<CheckoutPage />} />
        <Route path="/lifestyles" element={<LifeStyleFront />} />
        <Route path="/lifestyles/detail/:LifeStyleName" element={<LifeStyleDetail />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/events/detail" element={<EventDetails />} />
        <Route path="/admin/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route element={<Protected />}>
          <Route path="*" element={<App />} />
        </Route>
      </Routes>
    </Provider>
  </BrowserRouter>
</React.StrictMode>,
)
