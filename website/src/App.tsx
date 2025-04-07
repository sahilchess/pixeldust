import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import PixeldustLogo from "./assets/Pixeldust.svg";
import bgImage from "./assets/bg.jpg";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import Navbar from "./navbar";
import Examples from "./pages/Examples";
import FAQ from "./pages/FAQ";
import Guidelines from "./pages/Guidelines";
import Parts from "./pages/Parts";
import Resources from "./pages/Resources";

function HomePage() {
  return (
    <>
      <div className="relative z-0 flex flex-col items-center justify-center pt-20">
        <img src={PixeldustLogo} alt="Pixeldust Logo" className="w-[80vw]" />
        <p className="text-[#177aff] text-xl">Pixeldust - You ship a Neopixel-based trinket PCB, We ship your design to you!</p>
      </div>
      <div className="relative z-0 flex flex-col items-center justify-center pt-20">
        <div className="flex flex-col bg-[#0077ff69] py-4 text-4xl font-bold text-white rounded-xl w-[90%] md:w-4/5 items-center mb-16">
          <span className="px-4 mb-8 text-2xl text-center md:text-4xl">How to get your PCB!</span>
          <div className="flex flex-col justify-between w-full gap-6 px-4 mb-8 md:flex-row md:px-8">
            {/* Step 1 */}
            <div className="relative w-full md:w-1/3 aspect-square group">
              <img src={img1} alt="Schematic" className="object-cover w-full h-full rounded-xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0077ff] to-[#ffffffa0] sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="mb-2 font-sans text-xl font-semibold md:text-2xl">1. Create your schematic</p>
                  <ul className="space-y-1 font-sans text-sm">
                    <li>- Open KiCad</li>
                    <li>- Create a new project</li>
                    <li>- Import the XIAO symbol</li>
                    <li>- Add your components (Including the Neopixels!)</li>
                    <li>- Connect your components</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative w-full md:w-1/3 aspect-square group">
              <img src={img2} alt="PCB Design" className="object-cover w-full h-full rounded-xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0077ff] to-[#9f9fb9a0] sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="mb-2 font-sans text-xl font-semibold md:text-2xl">2. Make your PCB</p>
                  <ul className="space-y-1 font-sans text-sm">
                    <li>- Import the Xiao footprint</li>
                    <li>- Position your components</li>
                    <li>- Route your components</li>
                    <li>- Make sure everything is connected!!</li>
                    <li>- Run DRC</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative w-full md:w-1/3 aspect-square group">
              <img src={img3} alt="Firmware" className="object-cover w-full h-full rounded-xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0077ff] to-[#191c1fa0] sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="mb-2 font-sans text-xl font-semibold md:text-2xl">3. Write your firmware!</p>
                  <ul className="space-y-1 font-sans text-sm">
                    <li>- Write the firmware to control the lights</li>
                    <li>- Test it using WOKWI</li>
                    <li>- Fork the Pixeldust repository</li>
                    <li>- Add your folder to the projects folder</li>
                    <li>- Make a PR</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      <div className={`border-b z-50 ${isScrolled ? "shadow-md" : "border-gray-300"}`}>
        <Navbar />
      </div>
      <div className="flex-grow">
        <Routes>
          <Route path="/guidelines" element={<Guidelines />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/examples" element={<Examples />} />
          <Route path="/parts" element={<Parts />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
      <footer className="w-full py-2 text-sm text-center text-gray-300 bg-gradient-to-b from-[#0a1930] to-[#1a1a1a]">
        Made with &lt;3 by{" "}
        <a href="https://github.com/M0HID" target="_blank" rel="noopener noreferrer" className="text-[#177aff] hover:underline">
          @m0.hid
        </a>
      </footer>
    </div>
  );
}

export default App;
