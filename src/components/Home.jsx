import { useEffect, useState } from "react";

const Home = () => {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);
  const [fifth, setFifth] = useState(false);
  const [sixth, setSixth] = useState(false);

  useEffect(() => {
    setFirst(true);
    setTimeout(() => setSecond(true), 400);
    setTimeout(() => setThird(true), 600);
    setTimeout(() => setFourth(true), 800);
    setTimeout(() => setFifth(true), 1000);
    setTimeout(() => setSixth(true), 1200);
  }, [])
  return (
    <>
      <div className="relative">
        <div className="flex pt-30 md:pt-60 pb-10 md:pb-30 max-w-7xl mx-auto" id="home">
          <div className="flex flex-col px-10 md:px-30 md:flex-row gap-10 md:gap-[30%] justify-center items-stretch">
            <div className="flex flex-col w-full relative z-10">
              <div className="flex flex-col gap-5">
                <div className="text-5xl md:text-6xl font-bold cormorant-font">
                  <h1 className={` transition-opacity duration-800 ${second ? "opacity-100" : "opacity-0"}`}>Hey</h1>
                  <p className={` transition-opacity duration-800 ${third ? "opacity-100" : "opacity-0"}`}>I'm <span className="text-[#93595b]">Jason</span></p>
                  <p className={`text-[#93595b]  transition-opacity duration-800 ${fourth ? "opacity-100" : "opacity-0 "}`}>Basconcillo</p>
                </div>
              </div>
            </div>
            <div className="gap-5 flex flex-col justify-center w-full relative z-10">
              <div className="hidden md:inline-block text-4xl md:text-5xl font-bold funnel-font">
                <h2 className={`transition-opacity duration-800 ${second ? "opacity-100" : "opacity-0"}`}>A web developer</h2>
                <p className={`transition-opacity duration-800 ${third ? "opacity-100" : "opacity-0"}`}>based in</p>
                <p className={`transition-opacity duration-800 ${fourth ? "opacity-100" : "opacity-0"}`}>Philippines</p>
              </div>
              <p className={`text-base md:text-lg text-justify transition-opacity duration-800 ${fifth ? "opacity-100" : "opacity-0"}`}>
                Frontend Developer at i4 Asia Incorporated.
                I'm looking for a company to contribute my skills, grow with a collaborative team, and help deliver impactful digital experiences.
              </p>
            </div>
          </div>
        </div>
        <div className="hidden md:inline-block w-[350px] absolute top-120 lg:top-115 xl:top-110 left-[47%] -translate-x-1/2 -translate-y-1/2 z-1 pointer-events-none">
          <img
            src="jasonguitar7.png"
            alt="Jason holding his guitar facing the camera"
            loading="eager"
            className={`object-contain w-full h-auto transition-opacity duration-800 ${first ? "opacity-100" : "opacity-0"}`}
          />
        </div>
      </div >
    </>
  )
}

export default Home;