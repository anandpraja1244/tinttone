import { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { LuSend } from "react-icons/lu";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ toggleLeftSidebar }) => {
  return (
    <div className="hidden md:flex fixed top-0 left-0 h-full w-16 bg-gray-900 text-white flex-col items-center justify-between py-6 shadow-lg z-10">
      <nav className="flex flex-col items-center gap-6  text-white text-lg">
      <a href="#" className="cursor-pointer hover:text-yellow-400 text-2xl">
          <img  src="https://tinttoneandshade.com/wp-content/uploads/DISPLAY-PIC-LOGO-transparent-1536x1536.png" className="w-10 h-10" alt="logo"/>
        </a>
        <a className="cursor-pointer hover:text-yellow-400 text-2xl">  <AiOutlineMenu
          className="text-white text-3xl font-bold cursor-pointer"
          onClick={toggleLeftSidebar}
        />
        <p className="text-center text-yellow-200 text-[12px] my-4">MENU</p>
         </a>
    
      </nav>
      <div className="flex flex-col justify-center items-center text-center gap-8 mb-28 text-white ">
        <FaFacebookF className="cursor-pointer hover:text-red-500 size-6 " />
        <FaLinkedinIn className="cursor-pointer hover:text-red-500 size-6 " />
        <FaYoutube className="cursor-pointer hover:text-red-500 size-6 " />
        <FaInstagram className="cursor-pointer hover:text-red-500 size-6 " />
      </div>
      <div className="flex flex-col bg-orange-500 hover:bg-blue-400 justify-end items-center  text-center gap-8 mb-0
        text-white z-50 ">
      <span className=" inline-block  p-3 ">
      <LuSend className="cursor-pointer   size-10 " /> </span>
       
      </div>
    </div>
  );
};

// Left Sidebar Overlay (For Mobile)
// eslint-disable-next-line react/prop-types
const LeftSidebarOverlay = ({ isOpen, toggleLeftSidebar }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-60 bg-black opacity-50 text-white transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 shadow-lg z-50 `}
    >
      <div className="p-5 py-5 flex justify-between items-center">
        <div className="text-xl font-bold text-center">
        <a href="#" className="cursor-pointer hover:text-yellow-400 text-2xl">
          <img  src="https://tinttoneandshade.com/wp-content/uploads/DISPLAY-PIC-LOGO-transparent-1536x1536.png" className="w-32 h-32" alt="logo"/>
          </a>
        </div>
        
        <AiOutlineClose className="text-white text-2xl cursor-pointer" onClick={toggleLeftSidebar} />
      </div>
      <nav className="flex flex-col items-center gap-4 text-white font-bold text-lg px-5">
        <a href="#" className="cursor-pointer hover:text-orange-300">Home</a>
        <a href="#about" className="cursor-pointer hover:text-orange-300">About</a>
        <a href="#process" className="cursor-pointer hover:text-orange-300">Process</a>
        <a href="#" className="cursor-pointer hover:text-orange-300">Projects</a>
        <a href="#clients" className="cursor-pointer hover:text-orange-300">Clients</a>
      </nav>
    </div>
  );
};

// Bottom Navbar Component
export const BottomNavbar = () => {
  return (

    <div className="  sticky top-0 bottom-0 left-0 w-full bg-gray-900 text-white flex flex-wrap justify-center   py-3 z-5  text-sm md:text-base sm:inline-flex  hidden">
      <ul className="flex space-x-6 items-center p-3">
        <li><a href="#" className="hover:text-yellow-400">Homessss</a></li>
        <li><a href="#about" className="hover:text-yellow-400">About Us</a></li>
        <li><a href="#process" className="hover:text-yellow-400">Process</a></li>
        <li><a href="#" className="hover:text-yellow-400">Projects</a></li>
        <li><a href="#clients" className="hover:text-yellow-400">Clients</a></li>
      </ul>
    </div>
  );
};
// -------------------
// eslint-disable-next-line react/prop-types
const TopBar = ({ toggleLeftSidebar }) => {
  return (
    <div className="absolute top-0 left-0 w-full bg-gray-900 text-white py-4 px-6 flex justify-around items-center z-40 md:hidden">
        <a href="#" className="cursor-pointer hover:text-yellow-400 text-2xl">
          <img  src="https://tinttoneandshade.com/wp-content/uploads/DISPLAY-PIC-LOGO-transparent-1536x1536.png" className="w-16 h-10" alt="logo"/>
        </a>
      <AiOutlineMenu className="text-white text-3xl cursor-pointer" onClick={toggleLeftSidebar} />
    
    </div>
    
  );
};

// HomePage Component
const HomePage = () => {
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(false);

  const toggleLeftSidebar = () => {
    setLeftSidebarOpen(!leftSidebarOpen);
  };

  return (
    <div className="relative w-full h-screen bg-black text-white">
      {/* Background Video */}
      <div> 
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
        <source src="https://tinttoneandshade.com/wp-content/uploads/TTS-web-vid.mp4" type="video/mp4" />
      </video>
     
      </div>

      <Sidebar toggleLeftSidebar={toggleLeftSidebar} />

     
      <LeftSidebarOverlay isOpen={leftSidebarOpen} toggleLeftSidebar={toggleLeftSidebar} />

    
      <TopBar toggleLeftSidebar={toggleLeftSidebar} />

      {/* Text Overlay */}
      <div className="absolute top-1/2 md:left-[550px] sm:left-[550px]  transform md:-translate-x-1/2 sm:-translate-x-1/2 -translate-y-1/2 w-full max-w-4xl md:text-start sm:text-center px-5">
        <h1 className="text-4xl md:text-6xl font-bold">Everything</h1>
        <h2 className="text-2xl md:text-4xl mt-2">
           <span className="text-yellow-400">Let us work on your dream together!e</span>
        </h2>
      
        <button className="mt-6 bg-blue-400 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition duration-300">
        Book Free Consultation
        </button>
      </div>


      
    </div>
  );
};

export default HomePage;
