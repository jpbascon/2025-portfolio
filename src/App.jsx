import { useState } from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import About from './components/About';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Projects />
      <About />
    </>
  )
}

export default App;
