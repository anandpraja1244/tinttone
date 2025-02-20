import { FaThumbsUp, FaClock } from "react-icons/fa";
import { FaFlag } from "react-icons/fa6";
import { FaHandshakeSimple } from "react-icons/fa6";

const features = [
  {
    title: "One Stop",
    description:
      "Our Best Interior Designing team will stay from Quantity Surveys until Visualization. The customers get all solutions at one place.",
    icon: <FaFlag className="text-green-400 text-2xl" />,
    hasBorder: true,
  },
  {
    title: "Quality Adherence",
    description:
      "Our Designers ensure the quality and execution standards across the on-site activities. Customers get all updates via monthly meetings.",
    icon: <FaThumbsUp className="text-green-400 text-2xl" />,
    hasBorder: true,
  },
  {
    title: "Client Relations",
    description:
      "Being well known for valuing the relationship with clients, we have absolutely no hidden costs or conditions-applied-design process.",
    icon: <FaHandshakeSimple className="text-green-400 text-2xl" />,
    hasBorder: true,
  },
  {
    title: "50-day Projects",
    description:
      "Our promise of 'Interiors in 50 days' is perfect for every client who is in a hurry. Delivering great designs in client-desired timelines.",
    icon: <FaClock className="text-green-400 text-2xl" />,
    hasBorder: true,
  },
];

const AboutSection = () => {
  return (
    <div className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-10 gap-10 items-center">
      {/* Left Side - */}
      <div className="md:col-span-3 sm:ml-10 flex justify-center">
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
          Since 2016. Team of Best Interior Designing enthusiastic peeps in Chennai who work
          together for only one goal: To transform living spaces to make living a complete joy.
        </p>
        <p className="mt-2 text-gray-600">
          And we do that by offering artful yet appropriate and comfortable interior design
          solutions for your home and workspaces.
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
  );
};

export default AboutSection;
