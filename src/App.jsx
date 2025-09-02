import { useState } from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Projects />
    </>
  )
}

export default App;
