import { Sports } from '@mui/icons-material';
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CarCleaning from './Category/CarCleaning';
import CategoryHome from './Category/CategoryHome';
import ChandelierClean from './Category/ChandelierClean';
import Dance from './Category/Dance';
import Decoration from './Category/Decoration';
import Digital from './Category/Digital';
import Events from './Category/Events';
import Fitness from './Category/Fitness';
import HouesKeeping from './Category/HouesKeeping';
import HouseCleaning from './Category/HouseCleaning';
import JobAgency from './Category/JobAgency';
import Others from './Category/Others';
import Programming from './Category/Programming';
import RealEstate from './Category/RealEstate';
import Shifting from './Category/Shifting';
import Wedding from './Category/Wedding';
import Footer from './component/Footer';
import Home from './component/Home'
import Navbar from './component/Navbar';
import About from './Menus/About';
import Contactus from './Menus/Contactus';
import Offer from './Menus/Offer';
import Team from './Menus/Team';

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar />
        <Routes>  <Route path="/" element={<Home />} />
          <Route path="/Category" element={<CategoryHome />} />


          <Route path="/services/1" element={<HouseCleaning />} />
          <Route path="/services/2" element={<CarCleaning />} />
          <Route path="/services/3" element={<ChandelierClean />} />
          <Route path="/services/4" element={<HouesKeeping />} />
          <Route path="/services/5" element={<Shifting />} />
          <Route path="/services/6" element={<JobAgency />} />
          <Route path="/services/7" element={<RealEstate />} />
          <Route path="/services/8" element={<Dance />} />
          <Route path="/services/9" element={<Fitness />} />
          <Route path="/services/10" element={<Sports />} />
          <Route path="/services/11" element={<Decoration />} />
          <Route path="/services/12" element={<Wedding />} />
          <Route path="/services/13" element={<Events/>} />
          <Route path="/services/14" element={<Programming />} />
          <Route path="/services/15" element={<Digital />} />
          <Route path="/services/16" element={<Others />} />

          <Route path="/team" element={<Team />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/offer" element={<Offer />} />
        
        </Routes>
        
      </BrowserRouter>
      <Footer/> 
    </div>
  )
}

export default App
