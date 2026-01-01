// src/components/About.jsx
import React from "react";
import TypingEffect from "./TypingEffect";
import ProfileImage from "./profileImage/1000000657.jpg";
import Tilt from "react-parallax-tilt";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[15vw] font-sans mt-4 md:mt-6 lg:mt-8"
    >
{/* Left Section */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-center ">
        <div className="md:w-1/2 text-center md:text-left mt-8">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>

          <h2 className="text-4xl sm:text-6xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Vhan Randolp S. Peña!
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-green-400 leading-tight">
            <span className="text-white">I am a </span>
            <span className="font-bold">
              <TypingEffect
                words={[
                  "Fullstack Developer",
                  "Data Analyst",
                  "Data Scientist",
                  "Network Engineer",
                ]}
                typeSpeed={80}
                deleteSpeed={40}
                pause={1200}
                cursor="|"
              />
            </span>
          </h3>

          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am an aspiring Data Scientist knowledgeable in Data Analysis, Machine
            Learning, Deep Learning, and Computer Vision. Also experienced in
            front-end and back-end development. I specialize in Data Analysis and
            Machine Learning to solve real-world engineering problems.
          </p>

          <a 
            href="https://drive.google.com/file/d/1yv1DKzK032WdTxHCGmCkF60ELeZb4NQo/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold duration-300 tranform hover:scale-115"
            style={{
              background: 'linear-gradient(90deg, #15803d, #166534)', 
              boxShadow: '0 0 2px #16a34a, 0 0 2px #22c55e, 0 0 40px #16a34a'
            }}
          >
            DOWNLOAD CV
          </a>
        </div>
{/* Right Section */}
        <div className="md:flex justify-center md:justify-end">
            <Tilt
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-120 md:h-120 border-4 border-green-400 rounded-full"
            >
              <img
                src={ProfileImage}
                alt="Profile"
                className="w-full h-full rounded-full drop-shadow-[0_10px_20px_rgba(22,185,130,0.5)]"
              />
            </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
