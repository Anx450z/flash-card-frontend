import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import LoginPage from './pages/LoginPage'
import Navbar from './pages/Navbar'
import { myContext } from "./Context";

function App() {
  const userObject = useContext(myContext);
  console.log("app.tsx == ", userObject);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
