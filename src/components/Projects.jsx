const Projects = () => {
  return (
    <>
      <div className="bg-gray-900">
        <div className="py-[2%] flex flex-col items-center max-w-7xl mx-auto">
          <h1 className="text-7xl text-cyan-400 font-bold">Personal Projects</h1>
          <div className="flex gap-30 mt-[8%]">
            <a className="flex flex-col bg-gray-950 rounded-xl card" href="https://pursuit-pi.vercel.app" target="_blank">
              <img src="/Pursuit.png"
                className="rounded-t-xl w-full" />
              <div className="p-[3%] flex flex-col justify-center gap-4 relative" >
                <a href="https://pursuit-pi.vercel.app" target="_blank"
                  className="text-5xl font-bold hover:underline">Pursuit</a>
                <p className="text-xl">A social media app where people can share their goals and achievements. Currently under development</p>
                <div className="flex flex-col gap-3">
                  <div className="flex gap-3 mt-5">
                    <p className="border-2 border-cyan-400 rounded-2xl px-2 text-cyan-400">React.js</p>
                    <p className="border-2 border-green-400 rounded-2xl px-2 text-green-400">MongoDB</p>
                    <p className="border-2 border-emerald-400 rounded-2xl px-2 text-emerald-400">Node.js</p>
                    <p className="border-2 border-white rounded-2xl px-2 text-white">Express.js</p>
                    <p className="border-2 border-cyan-400 rounded-2xl px-2 text-cyan-400 size-fit">TailwindCSS</p>
                  </div>
                </div>
                <a href="https://github.com/jpbascon/pursuit">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024"
                    className="absolute right-3 top-3">
                    <path fill="#22d3ee" d="M574 665.4a8.03 8.03 0 0 0-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0c-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 0 0-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 0 0 0 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0c59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 0 0 0 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1M610.1 372.3a8.03 8.03 0 0 0-11.3 0L372.3 598.7a8.03 8.03 0 0 0 0 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3z" />
                  </svg>
                </a>
              </div>
            </a>
            <a className="flex flex-col bg-gray-950 rounded-xl card" href="https://react-1-0-2.vercel.app/" target="_blank">
              <img src="/Movie%20Explorer.png"
                className="rounded-t-xl w-full" />
              <div className="p-[3%] flex flex-col justify-center relative gap-4">
                <a href="https://react-1-0-2.vercel.app/" target="_blank"
                  className="text-5xl font-bold hover:underline">Movie Explorer</a>
                <p className="text-xl">Movie application with API integration using React.js, Tailwind CSS, Javascript, and Appwrite. Implemented trendings based on user's interaction.</p>
                <div className="flex gap-3 mt-5">
                  <p className="border-2 border-cyan-400 rounded-2xl px-2 text-cyan-400">React.js</p>
                  <p className="border-2 border-yellow-400 rounded-2xl px-2 text-yellow-400">JavaScript</p>
                  <p className="border-2 border-pink-400 rounded-2xl px-2 text-pink-400">Appwrite</p>
                  <p className="border-2 border-cyan-400 rounded-2xl px-2 text-cyan-400 size-fit">TailwindCSS</p>
                </div>
                <a href="https://github.com/jpbascon/React-1.0.2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024"
                    className="absolute right-3 top-3">
                    <path fill="#22d3ee" d="M574 665.4a8.03 8.03 0 0 0-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0c-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 0 0-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 0 0 0 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0c59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 0 0 0 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1M610.1 372.3a8.03 8.03 0 0 0-11.3 0L372.3 598.7a8.03 8.03 0 0 0 0 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3z" />
                  </svg>
                </a>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects;