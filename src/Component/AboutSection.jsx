import { FaThumbsUp, FaClock } from "react-icons/fa";
import { FaFlag } from "react-icons/fa6";
import { FaHandshakeSimple } from "react-icons/fa6";
import { BottomNavbar } from "./HomePage";


const features = [
  {
    title: "  Promised Timelines  ",
    description:
      "Time Management has been one of our core strengths. We have a dedicated team of individuals who are focused on ensuring the timely delivery of projects.",
    icon: <FaFlag className="text-green-400 text-2xl" />,
    hasBorder: true,
  },
  {
    title: "Unlimited Designs ",
    description:
      "Buying a house and converting it into a home is a dream for many. There is no limit to the variety of designs that you can explore with us.",
    icon: <FaThumbsUp className="text-green-400 text-2xl" />,
    hasBorder: true,
  },
  {
    title: " Dedicated Designers ",
    description:
      "Each person in our team absolutely loves what they do. Naturally, the results are outstanding!",
    icon: <FaHandshakeSimple className="text-green-400 text-2xl" />,
    hasBorder: true,
  },
  {
    title: " Best Price ",
    description:
      "Our customers do not believe what they see in our quotations. We are too good to be true!",
    icon: <FaClock className="text-green-400 text-2xl" />,
    hasBorder: true,
  },
];

const AboutSection = () => {
  return (
    <>
    <BottomNavbar    />
    <div className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-10 gap-10 items-center" id="about">
      {/* Left Side - */}
      <div className="md:col-span-4 sm:ml-10 flex justify-center  ">
        <img
          src="https://tinttoneandshade.com/wp-content/uploads/44-683x1024.webp"
          alt="Interior Design"
          className="w-full  md:h-[600px] rounded-lg shadow-lg"
        />
      </div>

      {/* Right Side  */}
      <div className="md:col-span-6">
        <p className="text-gray-600 text-sm">Curating finest living & Working Experience.</p>
        <div className="relative my-4">
 

        <h2 className="text-gray-900 text-4xl font-bold leading-tight w-auto">
          We are here to offer <span className="text-green-400 italic">Next Level</span> living
        </h2>
        <span className="block w-32 border-b-4 border-red-400 "></span>
        </div>
        <p className="mt-4 text-gray-600">
        Our design process is very simple. We listen to you, understand what you need, and come up with the best designs. Before you realize it, you will be walking into your dream home with smiling faces.
        </p>
       

        {/* Features List */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
            
              <span className="text-lg">{feature.icon}</span>

              {/* Feature Text */}
              <div>
                <h3 className="text-gray-900 font-semibold">{feature.title}</h3>
                {feature.hasBorder && (
                  <div className="border-b-4 border-green-400 w-[70px] pb-[5px]"></div>
                )}
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutSection;
