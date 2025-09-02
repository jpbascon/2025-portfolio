const Home = () => {
  return (
    <>
      <div className="flex py-[10%] max-w-5xl mx-auto">
        <div className="flex gap-20 justify-center">
          <div className="flex flex-col justify-center w-full">
            <h1 className="text-7xl font-bold funnel-font">Hey, I'm <span className="text-cyan-400">Jason</span></h1>
            <div className="mt-15">
              <p className="text-justify text-xl funnel-font">Passionate in web development. Pursuing to become a full-stack developer. I'm looking for a company to contribute my skills and grow with a collaborative team, and help deliver impactful digital experiences. </p>
            </div>
            <div className="flex gap-5 mt-15">
              <button className="bg-cyan-400 text-gray-950 px-10 py-3 text-xl rounded-sm">contact</button>
            </div>
          </div>
          <div className="w-[70%]">
            <img src="jasonb.jpeg"
              className="w-[400px] img" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;