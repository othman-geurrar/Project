import React from "react";
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./pages/LoginForm.jsx";
import RegisterForm from "./pages/RegisterForm.jsx";
import store from "./redux/store.js";
import { registerLicense } from '@syncfusion/ej2-base';
import Protected from './Routes/Protected.jsx'



// Registering Syncfusion license key
registerLicense('Ngo9BigBOggjHTQxAR8/V1NBaF5cWWJCe0x0QXxbf1x0ZFNMYV5bRXZPMyBoS35RckVnW3tednZVRGdUUkF0');




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        {/* <Route path="/register" element={<RegisterForm />} /> */}
        <Route element={<Protected />}>
          <Route path="*" element={<App />} />
        </Route>
      </Routes>
    </Provider>
  </BrowserRouter>
</React.StrictMode>,
)
