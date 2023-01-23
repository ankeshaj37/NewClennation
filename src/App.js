import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home'
import Navbar from './component/Navbar';

const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
    <Home/>
    <Routes>
  
    <Route path='/' element={''}/>
    
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
