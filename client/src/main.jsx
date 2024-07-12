
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import { registerLicense } from '@syncfusion/ej2-base';
import store from "./redux/store.js";
import App from "./App.jsx";
import "./index.css";
import "./log.css";

// Import pages and components
import {
  AboutUs, CheckoutPage, EventDetails, EventPage, LandingPage, LifeStyleDetail, LifeStyleFront, ProductExample, ProductsPage, ProfilUser, UserLoginForm
} from "./pages/index.jsx";
import { ShopCart } from "./components/index.jsx";
import LoginForm from "./pages/adminPages/LoginForm.jsx";
import RegisterForm from "./pages/adminPages/RegisterForm.jsx";
import Protected from './Routes/Protected.jsx';

// Registering Syncfusion license key
registerLicense('Ngo9BigBOggjHTQxAR8/V1NBaF1cXmhPYVFzWmFZfVpgdVdMYFlbRnRPIiBoS35RckVmW3lfcnRQRGNeUUVx');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/user/login" element={<UserLoginForm />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/user/profil" element={
            <ThemeProvider>
              <ProfilUser />
            </ThemeProvider>
          } />
          <Route path="/products/:id" element={<ProductExample />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/cart" element={<ShopCart />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/lifestyles" element={<LifeStyleFront />} />
          <Route path="/lifestyles/detail/:LifeStyleName" element={<LifeStyleDetail />} />
          <Route path="/events" element={<EventPage />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/admin/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route element={<Protected />}>
            <Route path="*" element={<App />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
