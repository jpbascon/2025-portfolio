import { useState, useEffect } from "react";

const Navbar = ({ HandleDropDown, hamburger, dropDownOpen }) => {
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
        <div className={`h-[80px] md:h-[65px] mx-[15%] flex items-center justify-between transition-transform duration-300
          ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}>
          <div>
            <a href="#"
              className="font-bold text-2xl funnel-font">{"Jason"}</a>
          </div>
          <div className="hidden md:flex gap-7 funnel-font">
            <a href="#" className="navlink relative size-fit">home</a>
            <a href="#about" className="navlink relative size-fit">about</a>
            <a href="#projects" className="navlink relative size-fit">projects</a>
            <a href="#contact" className="navlink relative size-fit">contact</a>
          </div>
          <div className="flex md:hidden relative"
            onClick={() => HandleDropDown()}>
            <div className="cursor-pointer transition-all p-2 rounded-md hover:bg-neutral-800 active:brightness-80">
              {hamburger ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
                <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M7.95 11.95h32m-32 12h32m-32 12h32" />
              </svg> :
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m18 18l-6-6m0 0L6 6m6 6l6-6m-6 6l-6 6" />
                </svg>}
            </div>
            <div className={`absolute top-[80px] transition-all
                ${dropDownOpen ? "opacity-100" : "opacity-0"}`}>
              <div className="flex flex-col gap-4">
                <a href="#" className="navlink relative size-fit">home</a>
                <a href="#about" className="navlink relative size-fit">about</a>
                <a href="#projects" className="navlink relative size-fit">projects</a>
                <a href="#contact" className="navlink relative size-fit">contact</a>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default Navbar;