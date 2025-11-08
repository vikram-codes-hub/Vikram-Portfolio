import React from 'react'
import DarkStarsBackground from './Components/Navbar/DarkStarsBackground'
import Navbar from './Pages/Navbar'
import Aboutme from './Pages/Aboutme'
import Home from './Pages/Home'
import Skillsmain from './Pages/Skillsmain'
import Helpersection from './Components/Helpersection'
import Projects from './Pages/Projects'
import Experience from './Pages/Experience'
import Certificates from './Pages/Certificates'
import Conatctme from './Pages/Conatctme'
import Footer from './Pages/Footer'

const App = () => {
  return (
    <div>
      <DarkStarsBackground/>
     <Navbar/>
      <Home/>
      <Aboutme/>
      <Skillsmain/>
      <Projects/>
      <Experience/>
      <Certificates/>
      <Conatctme/>
      <Footer/>
      {/* <Helpersection/> */}

      
    </div>
  )
}

export default App
