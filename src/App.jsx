import React from 'react'
import { useState } from 'react'
import './App.css'
import { NavBar } from './components/Navbar/NavBar'
import MessageBanner from './components/MessageBar/MessageBanner'
import NotificationBanner from './components/RegisterBanner/NotificationBanner'
import HomePage from './components/MainContent/HomePage'
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Main from './components/Govt/Main'
import SoftwareJobs from './components/SoftwareJobs/SoftwareJobs'
import { useLocation } from 'react-router-dom';
import InternshipJobs from './components/IntershipJobs/InternshipJobs'
import Admissions from './components/Admissions/Admissions'
import PyqMain from './components/PYQ/PyqMain'
import ContactPage from './components/Contact/ContactPage'


function App() {
  const pathLocation = useLocation();
  const showNotication = pathLocation.pathname === '/' || pathLocation.pathname === '/login' || pathLocation.pathname === '/register' 
  return (
    <>
      <NavBar />
      {/* {showNotication? <NotificationBanner />: null} */}
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/govt-jobs' element={<Main/>} />
      <Route path='/tech-jobs' element={<SoftwareJobs />} />
      <Route path='/internship' element={<InternshipJobs />} />
      <Route path='/admissions' element={<Admissions />} />
      <Route path='/pyq' element={<PyqMain/>} />
      <Route path='/contact' element={<ContactPage/>} />
    </Routes>
      <Footer />
    </>
  )
}

export default App
