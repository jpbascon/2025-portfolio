import { useState } from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';

function App() {
  const [hamburger, setHamburger] = useState(true);
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const HandleDropDown = () => {
    if (dropDownOpen) {
      setDropDownOpen(false);
      setHamburger(true);
    } else {
      setHamburger(false);
      setDropDownOpen(true);
    }
  }
  const OutsideClicked = () => {
    if (dropDownOpen) {
      setDropDownOpen(false);
      setHamburger(true);
    }
  }
  return (
    <>
      <Navbar hamburger={hamburger} HandleDropDown={HandleDropDown} dropDownOpen={dropDownOpen} />
      <div onClick={() => OutsideClicked()}>
        <div className={`${dropDownOpen && "transition-all brightness-65 blur-xs pointer-events-none"}`}>
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App;
