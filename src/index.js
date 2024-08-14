import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './index.css'; 

import HomePage from './landing page/home/HomePage';
import AboutPages from './landing page/about/AboutPages';
import PricingPage from './landing page/pricing/PricingPage';
import Signup from './landing page/signup/Signup';
import ProductPage from './landing page/product/ProductPage';
import SupportPage from './landing page/support/SupportPage';
import NotFound from './landing page/NotFound';
import Navbar from './landing page/Navbar';
import Footer from './landing page/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
<Routes>
  <Route path='/' element={<HomePage/>}/>
  <Route path='/signup' element={<Signup/>}/>
  <Route path='/About' element={<AboutPages/>}/>
  <Route path='/Pricing' element={<PricingPage/>}/>
  <Route path='/Product' element={<ProductPage/>}/>
  <Route path='/support' element={<SupportPage/>}/>
  <Route path='*' element={<NotFound/>}/>
  </Routes> 
  <Footer/> 
  </BrowserRouter>
  
);
