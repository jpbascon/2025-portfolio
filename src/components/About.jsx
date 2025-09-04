const About = () => {
  return (
    <>
      <div className="border-y-1 border-y-[#93595b]">
        <div className="flex py-[2%] max-w-6xl mx-auto relative">
          <div className="flex cormorant-font">
            <div className="flex gap-10">
              <div className="gap-5 flex flex-col">
                <h1 className="text-5xl font-bold">About</h1>
                <div className="flex gap-3">
                  <div className="flex items-start justify-center w-[10%] mt-3">
                    <span className="flex-1 border-l border-1 border-[#93595b]"></span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="text-lg funnel-font">From an early age, I discovered my passion for bringing imagination to life and shaping it into reality. Now that I've grown, Web Development has
                      become my instrument through which I express my creativity and ambition.
                    </p>
                    <p className="text-lg funnel-font">
                      My interest in web development sparked during my college internship {"(March of 2025)"} and I've been continuously finding ways to learn new technologies to further my capabilities.
                    </p>
                    <p className="text-lg funnel-font">
                      Experience is what I lack but when opportunities arise, I do my best to seize them and quickly shift my focus to learning — and I'm excited to uncover the potential within me that has yet to be seen.
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