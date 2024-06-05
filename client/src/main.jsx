import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";
import "./log.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./pages/usersPages/LoginForm.jsx";
import RegisterForm from "./pages/adminPages/RegisterForm.jsx";
import store from "./redux/store.js";
import { registerLicense } from "@syncfusion/ej2-base";
import Protected from "./Routes/Protected.jsx";
import {
  EventDetails,
  EventPage,
  LandingPage,
  LifeStyleDetail,
  LifeStyleFront,
  ProductDetail,
  ProductsPage,
  ProfilUser,
} from "./pages/index.jsx";
import LifestyelDetails from "./components/AdminBackLock/LifeStyle/LifestyelDetails.jsx";
import { ThemeProvider } from "@material-tailwind/react";

// Registering Syncfusion license key
registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NBaF1cXmhPYVFzWmFZfVpgdVdMYFlbRnRPIiBoS35RckVmW3lfcnRQRGNeUUVx"
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/lifestyles" element={<LifeStyleFront />} />
          <Route
            path="/lifestyles/detail/:LifeStyleName"
            element={<LifeStyleDetail />}
          />
          <Route path="/events" element={<EventPage />} />
          <Route path="/event/detail" element={<EventDetails />} />
          {/* <Route path="/admin/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} /> */}
          <Route path="/user/login" element={<LoginForm />} />

          <Route
            path="/user/profil"
            element={
              <ThemeProvider>
                <ProfilUser />
              </ThemeProvider>
            }
          />

          <Route path="*" element={<App />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
