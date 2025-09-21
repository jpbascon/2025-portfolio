import { useEffect, useState } from "react";

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
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M18.88 1.099C18.147.366 17.265 0 16.233 0H3.746C2.714 0 1.832.366 1.099 1.099C.366 1.832 0 2.714 0 3.746v12.487c0 1.032.366 1.914 1.099 2.647c.733.733 1.615 1.099 2.647 1.099H6.66c.19 0 .333-.007.429-.02a.504.504 0 0 0 .286-.169c.095-.1.143-.245.143-.435l-.007-.885c-.004-.564-.006-1.01-.006-1.34l-.3.052c-.19.035-.43.05-.721.046a5.555 5.555 0 0 1-.904-.091a2.026 2.026 0 0 1-.872-.39a1.651 1.651 0 0 1-.572-.8l-.13-.3a3.25 3.25 0 0 0-.41-.663c-.186-.243-.375-.407-.566-.494l-.09-.065a.956.956 0 0 1-.17-.156a.723.723 0 0 1-.117-.182c-.026-.061-.004-.111.065-.15c.07-.04.195-.059.378-.059l.26.04c.173.034.388.138.643.311a2.1 2.1 0 0 1 .631.677c.2.355.44.626.722.813c.282.186.566.28.852.28c.286 0 .533-.022.742-.065a2.59 2.59 0 0 0 .585-.196c.078-.58.29-1.028.637-1.34a8.907 8.907 0 0 1-1.333-.234a5.314 5.314 0 0 1-1.223-.507a3.5 3.5 0 0 1-1.047-.872c-.277-.347-.505-.802-.683-1.365c-.177-.564-.266-1.215-.266-1.952c0-1.049.342-1.942 1.027-2.68c-.32-.788-.29-1.673.091-2.652c.252-.079.625-.02 1.119.175c.494.195.856.362 1.086.5c.23.14.414.257.553.352a9.233 9.233 0 0 1 2.497-.338c.859 0 1.691.113 2.498.338l.494-.312a6.997 6.997 0 0 1 1.197-.572c.46-.174.81-.221 1.054-.143c.39.98.424 1.864.103 2.653c.685.737 1.028 1.63 1.028 2.68c0 .737-.089 1.39-.267 1.957c-.177.568-.407 1.023-.689 1.366a3.65 3.65 0 0 1-1.053.865c-.42.234-.828.403-1.223.507a8.9 8.9 0 0 1-1.333.235c.45.39.676 1.005.676 1.846v3.11c0 .147.021.266.065.357a.36.36 0 0 0 .208.189c.096.034.18.056.254.064c.074.01.18.013.318.013h2.914c1.032 0 1.914-.366 2.647-1.099c.732-.732 1.099-1.615 1.099-2.647V3.746c0-1.032-.367-1.914-1.1-2.647z" />
                    </svg>
                  </a>
                </div>
                <div className="flex flex-col gap-6">
                  <p className="text-base sm:text-xl/tight text-justify mt-5">A social media platform designed for users to share their goals, track progress, and celebrate achievements together. Currently in active development.</p>
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="bg-[#582a2d] rounded-lg">
                        <p className="px-2 py-1 text-md sm:text-lg font-semibold">React.js</p>
                      </span>
                      <span className="bg-[#582a2d] rounded-lg">
                        <p className="px-2 py-1 text-md sm:text-lg font-semibold">Node.js</p>
                      </span>
                      <span className="bg-[#582a2d] rounded-lg">
                        <p className="px-2 py-1 text-md sm:text-lg font-semibold">Express.js</p>
                      </span>
                      <span className="bg-[#582a2d] rounded-lg">
                        <p className="px-2 py-1 text-md sm:text-lg font-semibold">MongoDB</p>
                      </span>
                      <span className="bg-[#582a2d] rounded-lg">
                        <p className="px-2 py-1 text-md sm:text-lg font-semibold">TailwindCSS</p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`card flex flex-col rounded-xl transition-opacity duration-800 ${second ? "opacity-100" : "opacity-0"}`}>
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M18.88 1.099C18.147.366 17.265 0 16.233 0H3.746C2.714 0 1.832.366 1.099 1.099C.366 1.832 0 2.714 0 3.746v12.487c0 1.032.366 1.914 1.099 2.647c.733.733 1.615 1.099 2.647 1.099H6.66c.19 0 .333-.007.429-.02a.504.504 0 0 0 .286-.169c.095-.1.143-.245.143-.435l-.007-.885c-.004-.564-.006-1.01-.006-1.34l-.3.052c-.19.035-.43.05-.721.046a5.555 5.555 0 0 1-.904-.091a2.026 2.026 0 0 1-.872-.39a1.651 1.651 0 0 1-.572-.8l-.13-.3a3.25 3.25 0 0 0-.41-.663c-.186-.243-.375-.407-.566-.494l-.09-.065a.956.956 0 0 1-.17-.156a.723.723 0 0 1-.117-.182c-.026-.061-.004-.111.065-.15c.07-.04.195-.059.378-.059l.26.04c.173.034.388.138.643.311a2.1 2.1 0 0 1 .631.677c.2.355.44.626.722.813c.282.186.566.28.852.28c.286 0 .533-.022.742-.065a2.59 2.59 0 0 0 .585-.196c.078-.58.29-1.028.637-1.34a8.907 8.907 0 0 1-1.333-.234a5.314 5.314 0 0 1-1.223-.507a3.5 3.5 0 0 1-1.047-.872c-.277-.347-.505-.802-.683-1.365c-.177-.564-.266-1.215-.266-1.952c0-1.049.342-1.942 1.027-2.68c-.32-.788-.29-1.673.091-2.652c.252-.079.625-.02 1.119.175c.494.195.856.362 1.086.5c.23.14.414.257.553.352a9.233 9.233 0 0 1 2.497-.338c.859 0 1.691.113 2.498.338l.494-.312a6.997 6.997 0 0 1 1.197-.572c.46-.174.81-.221 1.054-.143c.39.98.424 1.864.103 2.653c.685.737 1.028 1.63 1.028 2.68c0 .737-.089 1.39-.267 1.957c-.177.568-.407 1.023-.689 1.366a3.65 3.65 0 0 1-1.053.865c-.42.234-.828.403-1.223.507a8.9 8.9 0 0 1-1.333.235c.45.39.676 1.005.676 1.846v3.11c0 .147.021.266.065.357a.36.36 0 0 0 .208.189c.096.034.18.056.254.064c.074.01.18.013.318.013h2.914c1.032 0 1.914-.366 2.647-1.099c.732-.732 1.099-1.615 1.099-2.647V3.746c0-1.032-.367-1.914-1.1-2.647z" />
                    </svg>
                  </a>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-base sm:text-xl/tight text-justify mt-5">A dynamic web application that lets users explore and discover their favorite movies, powered by real-time data integration with TMDB’s API for a seamless browsing experience.</p>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="bg-[#582a2d] rounded-lg">
                      <p className="px-2 py-1 text-md sm:text-lg font-semibold">React.js</p>
                    </span>
                    <span className="bg-[#582a2d] rounded-lg">
                      <p className="px-2 py-1 text-md sm:text-lg font-semibold">JavaScript</p>
                    </span>
                    <span className="bg-[#582a2d] rounded-lg">
                      <p className="px-2 py-1 text-md sm:text-lg font-semibold">Appwrite</p>
                    </span>
                    <span className="bg-[#582a2d] rounded-lg">
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