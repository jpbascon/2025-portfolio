import { useState } from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default App;
