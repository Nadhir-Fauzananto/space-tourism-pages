import React from 'react'
import {Route, Routes, HashRouter} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Homepage from './components/Homepage.jsx'
import Destination from './components/Destination.jsx'
import Crew from './components/Crew.jsx'
import Technology from './components/Technology.jsx'

export default function App() {

  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </HashRouter>
  )
}
