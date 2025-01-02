import React from "react";
<<<<<<< HEAD
import raccoon from "../assets/raccoon.png";
import { Link } from "react-router-dom";
import "../App.css";
=======
import herogirl from "../assets/pngegg.png";
import { Link } from "react-router-dom";
>>>>>>> da2d5fe1347529d1f94d4d8e1b8e594a32c77de2

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
<<<<<<< HEAD
            {/* bg-white text-black font-bold px-6 py-3 mt-6 rounded-full shadow-lg hover:bg-gray-400 */}
=======
>>>>>>> da2d5fe1347529d1f94d4d8e1b8e594a32c77de2
            <button className="bg-white text-black font-bold px-6 py-3 mt-6 rounded-full shadow-lg hover:bg-gray-400">
              Get Started
            </button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="relative md:w-1/2 flex justify-center self-center">
          <div className="relative">
            <img
<<<<<<< HEAD
              src={raccoon}
              alt="Person"
              className="rounded-lg z-10 relative w-[40rem] h-[30rem] object-cover just-bounce"
            />
            {/* Stylish Bottom Edge */}
            {/* <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-yellow-400 to-transparent rounded-b-lg"></div> */}
=======
              src={herogirl}
              alt="Person"
              className="rounded-lg z-10 relative w-[40rem] h-[30rem] object-cover border-b-8 border-yellow-400"
            />
            {/* Stylish Bottom Edge */}
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-yellow-400 to-transparent rounded-b-lg"></div>
>>>>>>> da2d5fe1347529d1f94d4d8e1b8e594a32c77de2
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
