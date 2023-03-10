

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
import HouseCleaning from './Category/HouseCleaning';
import JobAgency from './Category/JobAgency';
import Others from './Category/Others';
import RealEstate from './Category/RealEstate';
import Shifting from './Category/Shifting';
import Sports from './Category/Sports';
import Footer from './component/Footer';
import Form from './component/Form';
import Home from './component/Home'
import Login from './component/Login';
import Navbar from './component/Navbar';
import ShowData from './component/ShowData';
import AddServices from './dashboard/AddServices';
import Dashboard from './dashboard/Dashboard';
import Edit from './dashboard/Edit';
import Leads from './dashboard/Leads';
import TotaleServises from './dashboard/TotaleServises';
import Cancellation from './FooterCompo.js/Cancellation';
import FAQs from './FooterCompo.js/FAQs';

import Privecy from './FooterCompo.js/Privecy';
import Terms from './FooterCompo.js/Terms';
import About from './Menus/About';
import Contactus from './Menus/Contactus';
import Offer from './Menus/Offer';
import Team from './Menus/Team'
import { HelmetProvider } from 'react-helmet-async';
import Payment from './component/Payment';
import Backlink from './component/Backlink';




const App = () => {
  const helmetContext = {};

  return (
    <div className='app'>
      <BrowserRouter>
        <HelmetProvider context={helmetContext}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Category" element={<CategoryHome />} />
            <Route path="/services/1" element={<HouseCleaning />} />
            <Route path="/services/2" element={<CarCleaning />} />
            <Route path="/services/3" element={<ChandelierClean />} />
            <Route path="/services/4" element={<Shifting />} />
            <Route path="/services/5" element={<JobAgency />} />
            <Route path="/services/6" element={<RealEstate />} />
            <Route path="/services/7" element={<Dance />} />
            <Route path="/services/8" element={<Sports />} />
            <Route path="/services/9" element={<Decoration />} />
            <Route path="/services/10" element={<Events />} />
            <Route path="/services/11" element={<Digital />} />
            <Route path="/services/12" element={<Others />} />
            <Route path="/team" element={<Team />} />
            <Route path="/about" element={<About />} />
            <Route path="/contactus" element={<Contactus />} />
            <Route path="/offer" element={<Offer />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dash" element={<Dashboard />} />
            <Route path="/add" element={<AddServices />} />
            <Route path="/totle" element={<TotaleServises />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/form" element={<Form />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/:id" element={<ShowData />} />
          
            <Route path="/cancellation" element={<Cancellation />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/privecy" element={<Privecy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/pay" element={<Payment />} />
            <Route path="/backlink" element={<Backlink />} />
          </Routes>
        </HelmetProvider>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
