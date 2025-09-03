const About = () => {
  return (
    <>
      <div className="flex py-[2%] max-w-7xl mx-auto relative">
        <div className="flex cormorant-font">
          <div className="flex flex-col gap-10">
            <h1 className="text-4xl">About me</h1>
            <div className="flex gap-10">
              <img
                className="object-cover rounded-[50%] w-[350px] h-[350px]"
                src="jasonb.jpeg" />
              <div className="gap-5 flex flex-col justify-center">
                <h1 className="text-5xl text-[#93595b] font-bold">Jason Basconcillo</h1>
                <p className="text-lg funnel-font">Hey, I'm Jason. A web developer based in Philippines. I enjoy creating meaningful projects such as Pursuit. From an early age, I discovered my passion
                  for bringing imagination to life and shaping it into reality. Now that I've grown, Web Development has become my instrument through which I express
                  my creativity and ambition.
                </p>
                <p className="text-lg funnel-font">
                  My interest in web development sparked during my college internship {"(March of 2025)"} and I've been continuously finding ways to learn new technologies to further my capabilities.
                </p>
                <p className="text-lg funnel-font">
                  Experience is what I lack but when opportunities arise, I do my best to seize them and quickly shift my focus to learning. I'm excited to uncover the potential within me that has yet to be seen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;