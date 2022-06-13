import React from 'react';
import {    
    Routes,
    Route, 
  } from "react-router-dom";
import PostcodesPage from './pages/PostcodesPage/PostcodesPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import PageNotFoundPage from './pages/PageNotFoundPage/PageNotFoundPage';
import CheckRequests from "./HOC/CheckRequests";

const PublicRoutes = () => (
    <Routes>
          <Route strict exact path="/" element={<PostcodesPage/>}/>  
          <Route strict exact path="/error-page" element={<ErrorPage/>}/> 
          <Route path="*" element={<PageNotFoundPage/>}/> 
    </Routes> 
);

export default CheckRequests(PublicRoutes);

