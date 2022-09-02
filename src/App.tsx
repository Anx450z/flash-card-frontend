import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import LoginPage from './pages/LoginPage'
import Navbar from './pages/Navbar'
import { myContext } from './Context'
import ProfilePage from './pages/ProfilePage'
import NewFlashPage from './pages/NewFlashPage'
import EditFlashPage from './pages/EditFlashPage'
import PrivacyPolicyPage from './pages/PrivacyPolicy'

function App() {
  const userObject = useContext(myContext)
  // console.log('app.tsx == ', userObject)
  return (
    <div className="font-[poppins] transition-all duration-500 ease-in-out">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={userObject ? <ProfilePage /> : <Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/newflash" element={<NewFlashPage />} />
          <Route path="/edit" element={<EditFlashPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="*" element={<h1>This page does not exist</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
