const stats = [
  { number: "175+", label: "SUCCESSFUL PROJECTS" },
  { number: "168", label: "HAPPY CLIENTS" },
  { number: "18,450", label: "WORKING HOURS" },
  { number: "1,624", label: "COFFEE CUPS" },
];

const StatsSection = () => {
  return (
    <section className="bg-gray-900 z-auto text-white py-10">
      <div className="grid md:grid-cols-2 gap-8 px-6 md:px-16">
        {/* Left Section */}
        <div className="flex flex-col justify-center">
          <div className="border-l-4 border-yellow-500 pl-3">
            <h2 className="text-3xl md:text-4xl font-bold">
              SOME INTERESTING{" "}
              <span className="text-yellow-500">NUMBERS</span>
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold">THAT DON’T LIE</h2>
          </div>
          <p className="mt-4 text-gray-400 text-sm md:text-base">
            We don’t call ourselves the best architects or the best interior designers in Chennai. We make you say that.
          </p>
        </div>

        {/* Right Section */}
        <div className="relative">
          <img
            src="https://your-image-url.com/image.jpg"
            alt="Background"
            className="w-full h-64 md:h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-wrap items-center justify-center p-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center w-full">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center">
                  <h3 className="text-2xl md:text-4xl font-bold">{stat.number}</h3>
                  <p className="text-gray-300 text-sm md:text-base">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
