import React from "react";
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./pages/adminPages/LoginForm.jsx";
import RegisterForm from "./pages/adminPages/RegisterForm.jsx";
import store from "./redux/store.js";
import { registerLicense } from '@syncfusion/ej2-base';
import Protected from './Routes/Protected.jsx'
import { EventDetails, EventPage, LandingPage, LifeStyleDetail, LifeStyleFront, ProductDetail, ProductsPage } from "./pages/index.jsx";
import LifestyelDetails from "./components/AdminBackLock/LifeStyle/LifestyelDetails.jsx";



// Registering Syncfusion license key
registerLicense('Ngo9BigBOggjHTQxAR8/V1NBaF5cWWJCe0x0QXxbf1x0ZFNMYV5bRXZPMyBoS35RckVnW3tednZVRGdUUkF0');




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/lifestyles" element={<LifeStyleFront />} />
        <Route path="/lifestyles/detail" element={<LifeStyleDetail />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/event/detail" element={<EventDetails />} />
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
