import React from "react";
import herogirl from "../assets/pngegg.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex items-center justify-center mt-10">
      <div className="flex flex-col md:flex-row items-center max-w-6xl px-8">
        {/* Text Section */}
        <div className="text-left md:w-1/2 mb-8 md:mb-0 self-center">
          <h1 className="text-5xl font-bold leading-tight  text-yellow-400">
            <span className="text-white ">CREATE OVER TOKEN</span> <br />
            ANY TIME,
            <br />
            ANY WHERE
          </h1>
          <Link to="/create-token">
            {" "}
            <button className="bg-white text-black font-bold px-6 py-3 mt-6 rounded-full shadow-lg hover:bg-gray-400">
              Get Started
            </button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="relative md:w-1/2 flex justify-center self-center">
          <div className="relative">
            <img
              src={herogirl}
              alt="Person"
              className="rounded-lg z-10 relative w-[40rem] h-[30rem] object-cover border-b-8 border-yellow-400"
            />
            {/* Stylish Bottom Edge */}
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-yellow-400 to-transparent rounded-b-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
