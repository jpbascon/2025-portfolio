const Home = () => {
  return (
    <>
      <div className="flex pt-[12%] pb-[10%] max-w-7xl mx-auto relative">
        <div className="flex px-[5%] md:gap-[35%] justify-center items-stretch">
          <div className="flex flex-col w-full relative z-10">
            <div className="flex flex-col gap-5">
              <h1 className="text-7xl font-bold cormorant-font">Hey,<br /> I'm <span className="text-[#93595b]">Jason</span></h1>
              <p className="text-justify text-2xl funnel-font">Web Developer</p>
            </div>
            <div className="flex gap-5 mt-15">
              <button className="px-10 py-5 text-[#93595b] border-1 border-[#93595b] hover:bg-[#93595b] hover:text-white text-xl rounded-sm transition-all">Contact</button>
            </div>
          </div>
          <div className="max-w-[580px] top-[-.5%] left-[25%] overflow-hidden z-1 pointer-none absolute inset-y-0">
            <img src="jasonguitar7.png"
              className="brightness-100 object-fill" />
          </div>
          <div className="gap-5 flex flex-col justify-center w-full relative z-10">
            <h2 className="text-5xl font-bold funnel-font">A web developer based in Philippines</h2>
            <p className="text-xl text-justify">
              Passionate in web development. Pursuing to become a full-stack developer.
              I'm looking for a company to contribute my skills and grow with a collaborative team, and help deliver impactful digital experiences.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;