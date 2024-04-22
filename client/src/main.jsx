import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx'
import './index.css'
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import LoginForm from './pages/LoginForm.jsx';
import RegisterForm from './pages/RegisterForm.jsx';


ReactDOM.render(
  <React.StrictMode> 
    <BrowserRouter>
    
    <Routes> 
                   
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="*" element={<App />} />        
    </Routes>
    
 
    </BrowserRouter>
       
  </React.StrictMode>,
  document.getElementById('root'),
);
