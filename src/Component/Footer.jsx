
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const contactDetails = [
  { icon: <FaPhone />, label: "PHONE", details: ["Chennai - 95134 46356", "Hyderabad - 95134 46545"] },
  { icon: <FaEnvelope />, label: "E-MAIL", details: ["INFO@TINTTONEANDSHADE.COM"] },
  { icon: <FaMapMarkerAlt />, label: "ADDRESS", details: ["OMR, KARAPAKKAM, CHENNAI"] },
];

const quickLinks = ["PROJECTS", "SERVICES", "BLOG", "CONTACT US"];
const socialIcons = [FaFacebook, FaInstagram, FaLinkedin, FaYoutube];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
    
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center mb-8 rounded-lg">
        {/* Left Section */}
        <div className="w-full md:w-1/2 text-center bg-zinc-600 py-8">
          <h2 className="text-2xl font-bold text-white">
            READY TO REDESIGN YOUR SPACE?
          </h2>
          <a
            href="#"
            className="mt-4 inline-block bg-blue-400 text-black py-2 px-4 rounded hover:bg-yellow-600 border border-gray-700"
          >
            Connect with US
          </a>
        </div>
        {/* Right Section */}
        <div className="w-full md:w-1/2 text-center bg-gray-500 py-8 md:py-16 mt-4 md:mt-0">
          <a
            href="#"
            className="bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-600 border border-gray-700"
          >
            GET IN TOUCH
          </a>
        </div>
      </div>
      
      {/* Footer Content */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 p-6 sm:px-48  rounded-lg">
       
        <div>
          <h1 className="text-yellow-500 text-3xl font-bold pb-2">TTS</h1>
          <p className="text-gray-400 mt-4">
            Shake hands with the best interior designers in Chennai from our team and get your project shaped to perfection.
          </p>
        
          <div className="flex space-x-4 mt-4 border-t-2 border-gray-700 pt-4">
            {socialIcons.map((Icon, index) => (
              <Icon key={index} className="text-white text-2xl cursor-pointer hover:text-yellow-500" />
            ))}
          </div>
        </div>
        
        {/* Contact Section */}
        <div>
          <h2 className="text-lg font-semibold text-gray-300 border-b-2 border-gray-700 pb-2">CONTACT</h2>
          <div className="mt-4 space-y-4">
            {contactDetails.map((item, index) => (
              <div key={index} className="flex items-start space-x-3 border-b border-gray-700 pb-2">
                <span className="text-yellow-500 text-xl">{item.icon}</span>
                <div>
                  <p className="text-gray-400 text-sm font-semibold">{item.label} :</p>
                  {item.details.map((detail, i) => (
                    <p key={i} className="text-gray-300 text-sm">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-gray-300 border-b-2 border-gray-700 pb-2">QUICK LINKS</h2>
          <ul className="mt-4 space-y-2 border-b border-gray-700 pb-4">
            {quickLinks.map((link, index) => (
              <li key={index} className="text-gray-400 text-sm cursor-pointer hover:text-yellow-500">
                 {link}
              </li>
            ))}
          </ul>
          <button className="mt-6 bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-600 border border-gray-700">
            GET QUOTE
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
