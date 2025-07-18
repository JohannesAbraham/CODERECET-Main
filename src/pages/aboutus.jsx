import React from "react";
import imgtop from "../assets/abtimgtop.png";
import arrow from "../assets/btnarrow.svg";
import star from "../assets/star.svg";
import image from "../assets/trimg.png";
import gif from "../assets/Code recet.gif";

function AboutUs() {
  return (
    <div
      id="about"
      className="min-h-screen bg-custom-black border-custom-gray border-b flex lg:flex-row flex-col
       space-x-36 justify-center items-center mx-auto max-w-full"
    >
      {/* Left Text Section */}
      <div className="">
        <h1 className="text-custom-white text-5xl font-seasons_r">What is</h1>
        <h1 className="text-custom-yellow text-5xl font-seasons_r">
          Code ReCET <span className="text-custom-white">?</span>
        </h1>
        <h2 className="text-custom-white text-[17px] pr-4 font-satoshi_v mt-3 w-[350px] lg:w-[500px]">
          Code ReCET is a 36-hour hackathon that blends innovation, creativity,
          and pure coding bliss! Conducted collaboratively by TinkerHub CET and
          IET on campus CET, this hackathon is set to ignite the tech spirit at
          College of Engineering, Trivandrum.
        </h2>

        <h1 className="text-white font-seasons_r text-3xl mt-6 mb-4">
          Benefits <span className="text-custom-yellow">you get</span>.
        </h1>

        <ul className="flex flex-col gap-3">
          {[
            {
              title: "HUGE PRIZE POOL",
              desc: "Amazing cash prizes await those who seek innovation!",
            },
            {
              title: (
                <>
                  GOODIES<span className="font-satoshi_v">?</span>
                </>
              ),
              desc: "Stickers, T-Shirts, and more fascinating prizes!",
            },
            {
              title: (
                <>
                  CODE<span className="font-satoshi_v"> & </span>CHILL
                </>
              ),
              desc: "Write code, chill with the others and have fun!",
            },
            {
              title: (
                <>
                  RESUME BOOST<span className="font-satoshi_v">!</span>
                </>
              ),
              desc: "Boost your resume with a new project! Better if you win!",
            },
            {
              title: (
                <>
                  FREE FOOD<span className="text-custom-red">?</span>
                </>
              ),
              desc: "Would you say no?",
            },
          ].map((item, index) => (
            <li key={index} className="flex flex-row items-center gap-3">
              <img src={star} className="w-6 h-6 " />
              <div
                className="p-2 text-white border border-custom-yellow 
                bg-[linear-gradient(to_bottom,#565D60_1%,#000000_100%)] rounded-md lg:w-[380px] w-[300px]"
              >
                <h2 className="font-seasons_r text-[15px]">{item.title}</h2>
                <h2 className="font-satoshi_v text-[14px]">{item.desc}</h2>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side - Images and Register Section */}
      <div className="flex justify-center items-center w-full lg:w-auto mt-10 lg:mt-0">
        {/* Background Images */}
        <div className="absolute w-[90%] lg:w-[800px] min-h-full">
          <img
            src={imgtop}
            className="absolute w-[300px] lg:w-[500px] z-1 mix-blend-screen"
          />
          <img
            src={imgtop}
            className="absolute w-[270px] lg:w-[600px] mt-32 ml-20 lg:mt-56 lg:ml-52 z-0 mix-blend-screen"
          />
        </div>

        {/* Card Section */}
        <div className="relative w-[280px] sm:w-[320px] lg:w-[400px] h-[440px] sm:h-[480px] lg:h-[600px]">
          {/* Background Yellow Box */}
          <div className="absolute z-10 w-full h-full rounded-2xl bg-custom-yellow translate-x-4 -translate-y-4"></div>

          {/* Floating GIF */}
          <div className="absolute z-40 w-20 sm:w-24 top-1/2 -left-12 -translate-y-1/2">
            <img src={gif} />
          </div>

          {/* Front Card */}
          <div className="absolute z-20 w-full h-full rounded-2xl border border-[#FFD700] shadow-lg bg-[linear-gradient(to_bottom,#565D60_1%,#000000_100%)] flex flex-col items-center justify-between p-5">
            <img src={image} className="w-full rounded-md" />

            <div className="font-seasons_r text-center mt-5 text-[16px] sm:text-[18px]">
              <h2 className="text-custom-white">
                REFRESH <span className="text-custom-yellow">IDEAS</span>
              </h2>
              <h2 className="text-custom-white">
                REBOOT <span className="text-custom-yellow">SOLUTIONS</span>
              </h2>
            </div>

            <button className="w-full mt-5 flex items-center justify-center p-3 rounded-lg bg-custom-yellow text-black font-seasons_r text-lg sm:text-xl hover:bg-yellow-700 hover:scale-105 transition-all ease-in-out">
              Register Now <img src={arrow} className="ml-2 w-5 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
