import { useEffect, useState } from "react";
import { GitCommitVertical } from "lucide-react"

const Projects = () => {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1100) {
        setFirst(true)
        setTimeout(() => setSecond(true), 200);
        setTimeout(() => setThird(true), 400);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="py-8 px-10 border-b-1 border-b-[#93595b]" id="projects">
        <div className="flex flex-col items-center cormorant-font max-w-6xl mx-auto">
          <h1 className={`text-4xl sm:text-5xl font-bold text-white w-full text-start transition-opacity duration-800 ${first ? "opacity-100" : "opacity-0"}`}>Projects</h1>
          <div className="lg:flex-row flex-col flex gap-10 mt-12 lg:mt-16 text-white max-w-4xl mx-auto">
            <div className={`card flex flex-col rounded-xl transition-opacity duration-800 ${second ? "opacity-100" : "opacity-0"}`}>
              <a href="https://pursuit-pi.vercel.app" target="_blank">
                <img className="rounded-t-xl"
                  src="./Dashboard.png"
                  alt="Pursuit's Dashboard" />
              </a>
              <div className="p-5 flex flex-col">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-1">
                    <a href="https://pursuit-pi.vercel.app" target="_blank"
                      className="text-4xl md:text-5xl font-bold italic navlink relative">Pursuit</a>
                    <span className="flex-1 border-l border-1 border-[#93595b] w-[40%]"></span>
                  </div>
                  <a href="https://github.com/jpbascon/Pursuit" target="_blank" className="size-fit">
                    <GitCommitVertical width={22} height={22} />
                  </a>
                </div>
                <div className="flex flex-col gap-6">
                  <p className="text-base sm:text-xl/tight text-justify mt-5">A social media platform designed for users to share their goals, track progress, and celebrate achievements together. Currently in active development.</p>
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="bg-[#443637] rounded-lg">
                        <p className="px-2 py-1 text-md sm:text-lg font-semibold">React.js</p>
                      </span>
                      <span className="bg-[#443637] rounded-lg">
                        <p className="px-2 py-1 text-md sm:text-lg font-semibold">Node.js</p>
                      </span>
                      <span className="bg-[#443637] rounded-lg">
                        <p className="px-2 py-1 text-md sm:text-lg font-semibold">Express.js</p>
                      </span>
                      <span className="bg-[#443637] rounded-lg">
                        <p className="px-2 py-1 text-md sm:text-lg font-semibold">MongoDB</p>
                      </span>
                      <span className="bg-[#443637] rounded-lg">
                        <p className="px-2 py-1 text-md sm:text-lg font-semibold">TailwindCSS</p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`card flex flex-col rounded-xl transition-opacity duration-800 ${third ? "opacity-100" : "opacity-0"}`}>
              <a href="https://react-1-0-2.vercel.app/" target="_blank">
                <img className="rounded-t-xl"
                  src="./movie-app.png"
                  alt="Pursuit's Dashboard" />
              </a>
              <div className="p-5 flex flex-col">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-1">
                    <a href="https://react-1-0-2.vercel.app/" target="_blank"
                      className="text-4xl sm:text-5xl font-bold italic navlink relative">Movie Explorer</a>
                    <span className="flex-1 border-l border-1 border-[#93595b] w-[40%]"></span>
                  </div>
                  <a href="https://github.com/jpbascon/React-1.0.2" target="_blank" className="size-fit">
                    <GitCommitVertical width={22} height={22} />
                  </a>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-base sm:text-xl/tight text-justify mt-5">A dynamic web application that lets users explore and discover their favorite movies, powered by real-time data integration with TMDB’s API for a seamless browsing experience.</p>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="bg-[#443637] rounded-lg">
                      <p className="px-2 py-1 text-md sm:text-lg font-semibold">React.js</p>
                    </span>
                    <span className="bg-[#443637] rounded-lg">
                      <p className="px-2 py-1 text-md sm:text-lg font-semibold">JavaScript</p>
                    </span>
                    <span className="bg-[#443637] rounded-lg">
                      <p className="px-2 py-1 text-md sm:text-lg font-semibold">Appwrite</p>
                    </span>
                    <span className="bg-[#443637] rounded-lg">
                      <p className="px-2 py-1 text-md sm:text-lg font-semibold">TailwindCSS</p>
                    </span>
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

export default Projects;