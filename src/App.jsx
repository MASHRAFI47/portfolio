import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NavbarComp from './components/Navbar/NavbarComp'



function App() {

  return (
    <>
        <BrowserRouter>
          <NavbarComp />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
