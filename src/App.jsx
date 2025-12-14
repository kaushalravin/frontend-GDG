import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Header from './Header.jsx'
import NoUser from './NoUser.jsx'
import UserCard from './UserCard.jsx'
import Footer from './Footer.jsx'
import axios from 'axios'
import './App.css'
import Home from './Home.jsx'
import { Routes, Route } from 'react-router-dom'
import UserPage from './UserPage.jsx'

function App() {
  return (
    <>
    
    <div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:login" element={<UserPage />} />
    </Routes>
    <Footer></Footer>
      
    </div>

    
    </>
  )
}

export default App
