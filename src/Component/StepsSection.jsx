

const steps = [
  {
    id: 1,
    title: "Stage 1: Let’s have a Visit",
    heading: "The Meeting",
    description:
      "This stage includes in-person meetings, phone calls, and emails, plus sharing the references to understand your lifestyle and design needs. This stage of the interior design process is where we refine the nuts-and-bolts parameters of the project in terms of defining your specific needs and details, whether this is space planning, lifestyle needs, or personal desires.",
    points: ["Excitement", "Exploration", "Planning"],
  },
  {
    id: 1,
    title: "Stage 1: Let’s have a Visit",
    heading: "The Meeting",
    description:
      "This stage includes in-person meetings, phone calls, and emails, plus sharing the references to understand your lifestyle and design needs. This stage of the interior design process is where we refine the nuts-and-bolts parameters of the project in terms of defining your specific needs and details, whether this is space planning, lifestyle needs, or personal desires.",
    points: ["Excitement", "Exploration", "Planning"],
  },
];

const StepsSection = () => {
  return (
    <div className="bg-white text-gray-800 p-6 md:p-12 -z-10  relative">
      <div className="relative mb-8 flex items-center">
        <div className="border-l-4 border-yellow-500 h-20 mr-4"></div>
        <div>
          <h2 className="text-6xl font-extrabold text-gray-200 absolute top-0 left-0 transform -translate-y-1/2">
            WE – THE TT&S //
          </h2>
          <h2 className="text-4xl font-bold text-black relative z-10">
            WE GOT YOU <span className="text-yellow-500">COVERED</span>
          </h2>
          <p className="text-gray-500 mt-2">
            ENOUGH WAITING. LET’S GET STARTED! YOU ARE ALMOST THERE & JUST 4 STEPS AHEAD TO HAVE YOUR DREAM HOME.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-yellow-500 text-3xl rotate-90">01.</span>
      </div>

      {steps.map((step) => (
        <div
          key={step.id}
          className="flex flex-col md:flex-row items-start   rounded-lg overflow-hidden mb-8 "
        >
          <div className="w-full md:w-1/3 bg-gray-100 p-6">
            <h3 className="text-lg font-semibold">{step.title}</h3>
          </div>

          <div className="w-full md:w-2/3 p-6 bg-gray-50">
            <h4 className="text-xl font-semibold mb-2">{step.heading}</h4>
            <p className="text-gray-600 mb-4">{step.description}</p>
            <ul className="list-disc list-inside text-gray-600">
              {step.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      <div className="text-right mt-4">
        <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-yellow-600">
          CLICK HERE
        </button>
      </div>
    </div>
  );
};

export default StepsSection;
