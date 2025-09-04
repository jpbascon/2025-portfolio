const Home = () => {
  return (
    <>
      <div className="flex pt-50 pb-[10%] px-[5%] sm:max-w-4xl md:max-w-7xl mx-auto relative" id="home">
        <div className="flex md:gap-[35%] px-[5%] justify-center items-stretch">
          <div className="flex flex-col w-full relative z-10">
            <div className="flex flex-col gap-5">
              <h1 className="text-7xl font-bold cormorant-font">Hey,<br /> I'm <span className="text-[#93595b]">Jason Basconcillo</span></h1>
              <p className="text-justify text-2xl funnel-font">Web Developer</p>
            </div>
            <div className="flex gap-5 mt-15">
              <a href="#contact"
                className="px-10 py-5 text-[#93595b] border-1 border-[#93595b] hover:bg-[#93595b] hover:text-white text-xl rounded-sm transition-all">
                Contact</a>
            </div>
          </div>
          <div className="gap-5 flex flex-col justify-center w-full relative z-10">
            <h2 className="text-5xl font-bold funnel-font">A web developer based in Philippines</h2>
            <p className="text-xl text-justify">
              Passionate in web development. Pursuing to become a full-stack developer.
              I'm looking for a company to contribute my skills and grow with a collaborative team, and help deliver impactful digital experiences.
            </p>
          </div>
          <div className="hidden md:inline-block max-w-[580px] top-[2%] lg:left-[25%] xl:left-[26%] overflow-hidden z-1 pointer-none absolute inset-y-0">
            <img src="jasonguitar7.png"
              className="brightness-100 object-fill" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;