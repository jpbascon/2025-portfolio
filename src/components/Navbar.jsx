const Navbar = () => {
  return (
    <>
      <div className="navbar sticky">
        <div className="flex items-center justify-between max-w-7xl mx-auto sticky inset-x-0 top-0 h-[80px] z-500">
          <div>
            <p className="text-cyan-400 font-bold text-4xl plaster-font">{"</>"}</p>
          </div>
          <div className="flex gap-7 funnel-font">
            <p>Home</p>
            <p>Projects</p>
            <p>About</p>
            <p>Contact</p>
          </div>
        </div>
      </div >
    </>
  )
}

export default Navbar;