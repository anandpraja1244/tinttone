import SimpleSliders from "./SimpleSliders";

const testimonials = [
    {
      id: 1,
      video:
        "https://tinttoneandshade.com/wp-content/uploads/pexels-kindel-media-7578552.mp4",
      text: "Interior design is a reality which starts within & it's endless. Tint Tone & Shade is a Chennai city-based innovative firm focusing on design, business tactics, and experiential innovation. We design urban strategies and architectural solutions by redefining challenging conditions as design opportunities. Tint Tone & Shade provides customizable designs for interior solutions. We never compromise on quality. And here’s the proof!",
    },
  ];
  
  const Testimonials = () => {
    return (
      <>
      <div className="bg-gray-900 text-white py-16 px-4 sm:px-6 md:px-10 lg:px-20 flex flex-col items-center">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex flex-col md:flex-row md:items-center rounded-lg p-6 shadow-lg max-w-6xl w-full"
          >
            {/* Video Section */}
            <div className="w-full md:w-1/2 overflow-hidden rounded-lg">
              <video
                src={testimonial.video}
                controls
                className="w-full rounded-lg shadow-md"
              ></video>
            </div>
  
            {/* Text Section */}
            <div className="w-full md:w-1/2 md:pl-8 mt-6 md:mt-0 flex flex-col items-center md:items-start text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-200 mb-4">
                HEAR FROM OUR CLIENTS
              </h2>
              <div className="w-32 border-b-4 border-green-400 mb-4"></div>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {testimonial.text}
              </p>
              <a
                href="https://www.youtube.com/channel/UCrwvrlDS33tHbi_In2b_u7Q"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 bg-blue-400 text-white px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition duration-300"
              >
                OUR YOUTUBE CHANNEL
              </a>
            </div>
          </div>
        ))}
        
      </div>
      <SimpleSliders/>  </>
    );
  };
  
  export default Testimonials;