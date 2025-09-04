import { useState, useEffect } from "react";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) setShowNavbar(false);
      else setShowNavbar(true);
      setLastScrollY(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  })
  return (
    <>
      <div className={`navbar bg-neutral-900 fixed inset-x-0 top-0 z-50 transition-transform duration-300
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}>
        <div className={`h-[80px] mx-[15%] flex items-center justify-between transition-transform duration-300
          ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}>
          <div>
            <a href="#"
              className="font-bold text-4xl funnel-font">Jason</a>
          </div>
          <div className="flex gap-7 funnel-font">
            <a href="#" className="navlink relative">home</a>
            <a href="#about" className="navlink relative">about</a>
            <a href="#projects" className="navlink relative">projects</a>
            <a href="#contact" className="navlink relative">contact</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;