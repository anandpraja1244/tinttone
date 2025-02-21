// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

const stats = [
  { id: 1, value: 175, label: "SUCCESSFUL PROJECTS" },
  { id: 2, value: 168, label: "HAPPY CLIENTS" },
  { id: 3, value: 18450, label: "WORKING HOURS" },
  { id: 4, value: 1624, label: "COFFEE CUPS" },
];

const BackgroundSection = () => {
  const [bgOpacity, setBgOpacity] = useState(1);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newBgOpacity = Math.max(5.5, 1 - (scrollY / 500) * 0.5);
      setBgOpacity(newBgOpacity);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prevCounts) =>
        prevCounts.map((count, index) => {
          if (count < stats[index].value) {
            return count + Math.ceil(stats[index].value / 100);
          }
          return stats[index].value;
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full mb-5 h-screen flex flex-col md:flex-row items-start overflow-hidden -z-10" id="process ">
      {/* Left Side - Text Content */}
      <div className="w-full md:w-2/5 bg-gray-800 text-white text-center px-16  flex flex-col justify-start   py-9 h-[94%] mt-0 ">
        <h2 className="text-2xl md:text-3xl font-bold uppercase">
          <span className="text-yellow-400">SOME INTERESTING </span>NUMBERS THAT DO NOT LIE
        </h2>
        <p className="mt-4 text-gray-300">
          We don’t call ourselves the best architects or the best interior designers in Chennai. We make you say that.
        </p>
      </div>

      {/* Right Side - Background Image */}
      <div className="relative w-full md:w-3/5 h-[92%] ">
        {/* Background Image with Opacity Effect */}
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover transition-opacity duration-300 w-screen h-5/6 overflow-hidden"
          style={{
            backgroundImage: `url('https://img.freepik.com/free-photo/opened-book-heap-leaves_23-2147868656.jpg?t=st=1740043074~exp=1740046674~hmac=aaa923762a3f092ecb04554938b5d3059fe15dc41afa5ab9811f7f1583054239&w=1060')`,
            opacity: bgOpacity,
          }}
        ></div>
      </div>
      

      {/* Statistics Section */}
      <div className="absolute bottom-3 md:bottom-48 lg:bottom-48 w-full text-white py-6 flex flex-wrap justify-around">
      {stats.map((stat, index) => (
        <div key={stat.id} className="w-1/2 sm:w-1/4 text-center my-4 px-4">
          <h3 className="text-4xl md:text-5xl font-bold">{counts[index]}</h3>
          <p className="text-gray-300 uppercase text-xs md:text-sm py-2 md:py-3">{stat.label}</p>
        </div>
      ))}
    </div>
    </section>
  );
};

export default BackgroundSection;
