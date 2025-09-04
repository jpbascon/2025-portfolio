const Contact = () => {
  return (
    <>
      <div className="border-b-1 border-b-[#93595b]">
        <div className="flex py-[5%] max-w-7xl mx-auto relative z-10 text-white">
          <div className="gap-5 flex flex-col items-center w-full">
            <h1 className="text-5xl cormorant-font">Interested in what I do?</h1>
            <p className="text-xl funnel-font">Feel free to reach out — I'd love to hear from you</p>
            <div className="flex gap-3">
              <a href="https://facebook.com/a.jxson" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 1024 1024">
                  <path fill="currentColor" d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32m-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6c44.2 0 82.1 3.3 93.2 4.8v107.9z" />
                </svg>
              </a>
              <a href="https://linkedin.com/in/a-jxson" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 1024 1024">
                  <path fill="currentColor" d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32M349.3 793.7H230.6V411.9h118.7zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8m503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2c-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7c120.2 0 142.3 79.1 142.3 181.9z" />
                </svg>
              </a>
            </div>
            <div className="flex gap-4 items-center justify-center min-w-[25%]">
              <span className="flex-1 border-l border-1 border-[#93595b]"></span>
              <p>or</p>
              <span className="flex-1 border-l border-1 border-[#93595b]"></span>
            </div>
            <p className="text-3xl funnel-font font-bold">basconj50@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;