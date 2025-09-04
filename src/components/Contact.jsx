import { useEffect, useState } from "react"

const Contact = () => {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);
  const [fifth, setFifth] = useState(false);
  const [sixth, setSixth] = useState(false);
  const [seventh, setSeventh] = useState(false);
  const [eigth, setEigth] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1700) {
        setFirst(true)
        setTimeout(() => setSecond(true), 200);
        setTimeout(() => setThird(true), 400);
        setTimeout(() => setFourth(true), 600);
        setTimeout(() => setFifth(true), 800);
        setTimeout(() => setSixth(true), 1000);
        setTimeout(() => setSeventh(true), 600);
        setTimeout(() => setEigth(true), 800);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="px-10 py-25 border-b-1 border-b-[#93595b]" id="contact">
        <div className="flex max-w-7xl mx-auto relative z-10 text-white">
          <div className="gap-5 flex flex-col items-center text-center w-full">
            <h1 className={`text-4xl md:text-5xl cormorant-font transition-opacity duration-800 ${first ? "opacity-100" : "opacity-0"}`}>Interested in what I do?</h1>
            <p className={`text-lg md:text-xl funnel-font transition-opacity duration-800 ${second ? "opacity-100" : "opacity-0"}`}>Feel free to reach out — I'd love to hear from you</p>
            <div className="flex gap-3">
              <a className={`transition-opacity duration-800 ${third ? "opacity-100 to-up" : "opacity-0"}`}
                href="https://facebook.com/a.jxson"
                target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 1024 1024">
                  <path fill="currentColor" d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32m-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6c44.2 0 82.1 3.3 93.2 4.8v107.9z" />
                </svg>
              </a>
              <a className={`transition-opacity duration-800 ${fourth ? "opacity-100 to-up" : "opacity-0"}`}
                href="https://instagram.com/o.jas_n"
                target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 100 100"><g fill="currentColor"><path d="M67.961 45.288c0 9.919-8.041 17.96-17.96 17.96s-17.96-8.041-17.96-17.96c0-2.795.657-5.43 1.795-7.788H14v42c0 3.85 3.15 7 7 7h58c3.85 0 7-3.15 7-7v-42H66.165a17.848 17.848 0 0 1 1.796 7.788M79 13.5H21c-3.85 0-7 3.15-7 7v14h21.665c3.278-4.349 8.47-7.172 14.335-7.172s11.057 2.823 14.335 7.172H86v-14c0-3.85-3.15-7-7-7M19.756 31.216H17.15V21.121a4.253 4.253 0 0 1 2.607-3.922zm4.27 0h-2.469V16.868h2.469zm4.269 0h-2.469V16.868h2.469zm4.266-10.095v10.095h-2.466V16.868h2.466zm49.79 5.842a4.252 4.252 0 0 1-4.251 4.253h-6.909a4.252 4.252 0 0 1-4.252-4.253v-5.842a4.252 4.252 0 0 1 4.252-4.253H78.1a4.251 4.251 0 0 1 4.251 4.253z" /><path d="M50.001 61.148c8.736 0 15.818-7.085 15.818-15.819c0-8.735-7.081-15.82-15.818-15.82c-8.738 0-15.82 7.085-15.82 15.82c0 8.733 7.082 15.819 15.82 15.819M50 32.725c6.96 0 12.604 5.643 12.604 12.604c0 6.96-5.643 12.604-12.604 12.604S37.396 52.29 37.396 45.329C37.397 38.367 43.04 32.725 50 32.725" /></g></svg>
              </a>
              <a className={`transition-opacity duration-800 ${fifth ? "opacity-100 to-up" : "opacity-0"}`}
                href="https://linkedin.com/in/a-jxson"
                target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 1024 1024">
                  <path fill="currentColor" d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32M349.3 793.7H230.6V411.9h118.7zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8m503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2c-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7c120.2 0 142.3 79.1 142.3 181.9z" />
                </svg>
              </a>
            </div>
            <div className="flex gap-4 items-center justify-center min-w-[200px]">
              <span className={`flex-1 border-l border-1 border-[#93595b] transition-opacity duration-800 ${seventh ? "opacity-100" : "opacity-0"}`}></span>
              <p className={`transition-opacity duration-800 ${eigth ? "opacity-100" : "opacity-0"}`}>or</p>
              <span className={`flex-1 border-l border-1 border-[#93595b] transition-opacity duration-800 ${seventh ? "opacity-100" : "opacity-0"}`}></span>
            </div>
            <p className={`text-2xl md:text-3xl funnel-font font-bold transition-opacity duration-800 ${sixth ? "opacity-100" : "opacity-0"}`}>basconj50@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;