import React, { useState } from 'react'
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
import Cursor from './Custom cursor/Cursor'
import CustomCursor from './Custom cursor/Customcursor'
import PageLoader from './Components/Pageloader'

const App = () => {
  const [loaded, setLoaded] = useState(false)

  return (
    <div>
      {/* Loader — covers everything, removes itself when done */}
      <PageLoader onComplete={() => setLoaded(true)} />

      {/* Site fades in after loader exits */}
      <div
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.6s ease',
          pointerEvents: loaded ? 'auto' : 'none',
        }}
      >
        <CustomCursor />
        <DarkStarsBackground />
        <Navbar />
        <Home />
        <Aboutme />
        <Skillsmain />
        <Projects />
        <Experience />
        <Certificates />
        <Conatctme />
        <Footer />
        {/* <Helpersection/> */}
      </div>
    </div>
  )
}

export default App