import { useState, useEffect } from "react";
import { education } from "./education_constants";

const Education = () => {
  const [isCompact, setIsCompact] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsCompact(window.innerWidth < 1500);
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isCompact) setActiveIndex(null);
  }, [isCompact]);

  return (
    <section
      id="education"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16 pb-10">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-green-500 mx-auto mt-4" />
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-2 bg-green-800 h-full hidden sm:block" />

        {education.map((edu, index) => {
          const isLeft = index % 2 === 0;
          const isActive = activeIndex === index;

          return (
            <div
              key={edu.id}
              className={`flex flex-col sm:flex-row items-center mb-16 py-16 ${
                isLeft ? "sm:justify-start" : "sm:justify-end"
              }`}
            >
              {/* Timeline Circle */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <button
                  onClick={() =>
                    isCompact
                      ? setActiveIndex(activeIndex === index ? null : index)
                      : null
                  }
                  className={`
                    rounded-full border-4 border-green-800 bg-gray-400
                    flex items-center justify-center
                    transition-transform duration-300
                    ${isCompact
                      ? "w-[14vw] h-[14vw] hover:scale-110 cursor-pointer"
                      : "w-[10vw] h-[10vw]"}
                  `}
                  aria-label={`Toggle education item ${edu.school}`}
                >
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-fill rounded-full"
                  />
                </button>
              </div>

              {(!isCompact || isActive) && (
                <div
                  className={`
                    p-6 rounded-2xl
                    border border-white bg-gray-900 backdrop-blur-md
                    shadow-[0_0_20px_1px_rgba(0,100,0,0.5)]
                    transform transition duration-300 hover:scale-105
                    mt-20 sm:mt-0
                    ${isLeft ? "sm:mr-40" : "sm:ml-40"}
                    ${isCompact ? "w-full z-30" : "w-[24vw]"}
                  `}
                >
                  {isCompact && (
                    <button
                      onClick={() => setActiveIndex(null)}
                      className="absolute top-2 right-2 text-gray-300 hover:text-red-500 font-bold text-xl cursor-pointer"
                      aria-label="Close card"
                    >
                      &times;
                    </button>
                  )}
                  
                  {/* Header */}
                  <div className="flex items-center space-x-6">
                    <div className="w-[8vw] h-[8vw] bg-white rounded-md overflow-hidden">
                      <img
                        src={edu.img}
                        alt={edu.school}
                        className="w-full h-full object-fill"
                      />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {edu.degree}
                      </h3>
                      <h4 className="text-sm text-gray-300">
                        {edu.school}
                      </h4>
                      <p className="text-sm text-gray-500 mt-1">
                        {edu.date}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-gray-400">{edu.desc}</p>

                  {/* Highlights */}
                  {edu.highlights && (
                    <div className="mt-4 list-disc list-inside space-y-1 text-gray-400">
                      <ul>HIGHLIGHTS: </ul>
                      {edu.highlights.map((item, i) => (
                        <div
                          key={i}
                          className="
                            inline-flex items-center px-3 py-1
                            border-2 border-gray-700 rounded-3xl
                            bg-gray-800/50 text-gray-300 text-sm
                            hover:bg-green-800/20 hover:scale-105
                            transition cursor-default
                          "
                        >
                          <li>{item}</li>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
