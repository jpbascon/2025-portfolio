import { useState, useEffect } from "react";

const About = () => {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);

  useEffect(() => {
    setTimeout(() => setFirst(true), 400);
    setTimeout(() => setSecond(true), 600);
    setTimeout(() => setThird(true), 800);
    setTimeout(() => setFourth(true), 1000);
  }, []);
  return (
    <>
      <div className="border-y-1 border-y-[#93595b] px-10 relative z-20 bg-neutral-900" id="about">
        <div className="flex py-5 max-w-6xl md:mx-auto relative">
          <div className="flex cormorant-font">
            <div className="flex gap-10">
              <div className="gap-5 flex flex-col">
                <h1 className={`text-4xl md:text-5xl font-bold transition-opacity duration-800 ${first ? "opacity-100" : "opacity-0"}`}>About</h1>
                <div className="flex gap-5">
                  <div className="hidden md:flex items-start justify-center w-[10%] mt-3">
                    <span className={`flex-1 border-l border-1 border-[#93595b] ${third ? "opacity-100 to-right" : "opacity-0"}`}></span>
                  </div>
                  <div className="flex flex-col gap-4 text-justify md:text-normal">
                    <p className={`text-base md:text-lg funnel-font transitio-opacity duration-800 ${second ? "opacity-100" : "opacity-0"}`}>From an early age, I discovered a passion for turning imagination into reality.
                      Over time, that passion found its outlet in Web Development — a craft that allows me to express both creativity and ambition.
                    </p>
                    <p className={`text-base md:text-lg  funnel-font transitio-opacity duration-800 ${third ? "opacity-100" : "opacity-0"}`}>
                      My interest began at the age of 20, and since then I’ve been committed to learning new technologies to strengthen my skills and expand my capabilities. Through this journey,
                      I realized that when you’re truly passionate about something, learning becomes exciting and rewarding.
                    </p>
                    <p className={`text-base md:text-lg  funnel-font transitio-opacity duration-800 ${fourth ? "opacity-100" : "opacity-0"}`}>
                      Every lesson has fueled my growth, and I’m eager to continue unlocking my potential and taking on new challenges.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;