const Navbar = () => {
  return (
    <>
      <div className="navbar sticky">
        <div className="flex items-center justify-between mx-[15%] sticky inset-x-0 top-0 h-[80px] z-500">
          <div>
            <p className="font-bold text-4xl funnel-font">Jason</p>
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