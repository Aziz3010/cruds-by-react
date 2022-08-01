import React from 'react';
import About from '../Pages/About';
import Home from '../Pages/Home';
import { Routes, Route, Navigate } from 'react-router-dom';

const Router = () => {
  return <Routes>
    <Route exact path='/' element={ <Navigate to='/home' /> } />
    <Route path='/home' element={ <Home /> } />
    <Route path='/about' element={ <About /> } />
  </Routes>
}

export default Router