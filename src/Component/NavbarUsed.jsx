import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

const socialLinks = [
  { icon: <FaFacebook />, link: "#" },
  { icon: <FaLinkedin />, link: "#" },
  { icon: <FaYoutube />, link: "#" },
];

const Navigation = () => (
  <nav className="fixed bottom-0 left-0 w-screen bg-black bg-opacity-50 text-white flex justify-center items-center px-4 py-5">
    <ul className="flex space-x-6">
      <li><a href="#" className="hover:text-yellow-400">Home</a></li>
      <li><a href="#" className="hover:text-yellow-400">About Us</a></li>
      <li><a href="#" className="hover:text-yellow-400">Process</a></li>
      <li><a href="#" className="hover:text-yellow-400">Projects</a></li>
      <li><a href="#" className="hover:text-yellow-400">Clients</a></li>
    </ul>
  </nav>
);

const HeroSection = () => (
  <div className="relative w-full h-screen flex items-center justify-start bg-black text-white">
    <video autoPlay loop muted className="absolute w-full h-full object-cover opacity-50">
      <source src="https://tinttoneandshade.com/wp-content/uploads/TTS-web-vid.mp4" type="video/mp4" />
    </video>
    <div className="relative z-10 w-full max-w-lg md:max-w-2xl pl-6 md:pl-20 text-left">
      <h1 className="text-4xl md:text-6xl font-bold">Hey There!</h1>
      <h2 className="text-2xl md:text-4xl mt-2">
        Design Your New Home With <span className="text-yellow-400">Tint Tone & Shade</span>
      </h2>
      <p className="mt-4 text-lg">ELEGANT INTERIORS JUST FOR YOU</p>
      <button className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition duration-300">
        Get instant quote
      </button>
    </div>
  </div>
);

// eslint-disable-next-line react/prop-types
const Sidebar = ({ isOpen, toggleSidebar }) => (
  <div className={`fixed top-0 left-0 h-screen w-64 bg-black z-50 bg-opacity-50 text-white flex flex-col items-start p-6 space-y-6 transition-transform ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
    <button className="absolute top-4 right-4 text-white" onClick={toggleSidebar}>
      <FiX className="text-2xl" />
    </button>
    {socialLinks.map((item, index) => (
      <a key={index} href={item.link} className="text-2xl hover:text-yellow-400">
        {item.icon}
      </a>
    ))}
  </div>
);

const NavbarUsed = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div 
        className="fixed top-0 left-0 h-screen w-16 bg-black bg-opacity-50 text-white flex-col items-center justify-around z-50 py-3"
        onClick={toggleSidebar}
      >

        <FiMenu className="text-4xl" />
       
      
        
      </div>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <HeroSection />
      <Navigation />
    </div>
  );
};

export default NavbarUsed;
