import React from 'react'
import {Route, Routes, HashRouter} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Homepage from './components/Homepage.jsx'
import Destination from './components/Destination.jsx'
import Crew from './components/Crew.jsx'
import Technology from './components/Technology.jsx'

export default function App() {

  React.useEffect(() => {
    const images = [
      import.meta.env.BASE_URL + 'home/background-home-mobile.jpg',
      import.meta.env.BASE_URL + 'home/background-home-tablet.jpg',
      import.meta.env.BASE_URL + 'home/background-home-desktop.jpg',
      import.meta.env.BASE_URL + 'destination/background-destination-mobile.jpg',
      import.meta.env.BASE_URL + 'destination/background-destination-tablet.jpg',
      import.meta.env.BASE_URL + 'destination/background-destination-desktop.jpg',
      import.meta.env.BASE_URL + 'destination/image-moon.png',
      import.meta.env.BASE_URL + 'destination/image-mars.png',
      import.meta.env.BASE_URL + 'destination/image-europa.png',
      import.meta.env.BASE_URL + 'destination/image-titan.png',
      import.meta.env.BASE_URL + 'crew/background-crew-mobile.jpg',
      import.meta.env.BASE_URL + 'crew/background-crew-tablet.jpg',
      import.meta.env.BASE_URL + 'crew/background-crew-desktop.jpg',
      import.meta.env.BASE_URL + 'crew/image-douglas-hurley.png',
      import.meta.env.BASE_URL + 'crew/image-mark-shuttleworth.png',
      import.meta.env.BASE_URL + 'crew/image-victor-glover.png',
      import.meta.env.BASE_URL + 'crew/image-anousheh-ansari.png',
      import.meta.env.BASE_URL + 'technology/background-technology-mobile.jpg',
      import.meta.env.BASE_URL + 'technology/background-technology-desktop.jpg',
      import.meta.env.BASE_URL + 'technology/image-launch-vehicle-portrait.jpg',
      import.meta.env.BASE_URL + 'technology/image-spaceport-portrait.jpg',
      import.meta.env.BASE_URL + 'technology/image-space-capsule-portrait.jpg',
    ]; 
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

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
