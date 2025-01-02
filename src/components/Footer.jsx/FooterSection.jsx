import React from "react";
import { Link } from "react-router-dom";

const FooterSection = () => {
  // bg-gray-900
  return (
    <footer className=" text-gray-400 py-8 border-t border-gray-600 mt-[10%]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-6">
        {/* Products Section */}
        {/* <div></div> */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-white">Other Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/over-token-guide" className="hover:text-white">
                Guide
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                X.com
              </a>
            </li>
            {/* <li>
              <a href="#" className="hover:text-white">
                Hydra
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Perps - PoS <span className="text-red-500">🔥 New</span>
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Pool
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Farm
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Bonds
              </a>
            </li> */}
          </ul>
        </div>

        {/* Other Section */}
        <div></div>
        {/* <div>
          <h3 className="text-lg font-bold mb-4 text-white">Other</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Dragon's Lair
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Gaming Hub
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Leaderboard
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Convert QUICK
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                dappOS
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Analytics
              </a>
            </li>
          </ul>
        </div> */}
        <div></div>

        {/* About Section */}
        <div>
          {/* <img
            src="https://via.placeholder.com/100"
            alt="QuickSwap Logo"
            className="mb-4"
          /> */}
          <h1 className="text-white text-2xl mb-2">Create Over Token</h1>
          <p className="mb-4">
            Effortlessly create your OVER Token with our 7+1 step process – no
            coding required. Customize your Over Token exactly the way you
            envision it. Less than 5 minutes, at an affordable cost.
          </p>
          <form className="flex border border-gray-500 rounded overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow p-2 bg-transparent text-white outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2"
            >
              →
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-600 mt-8 pt-4 text-center flex justify-between px-8 box-border">
        <p>© 2025 CreateOverToken.</p>
        <a href="#" className="hover:text-white">
          Terms of Use
        </a>
      </div>
    </footer>
  );
};

export default FooterSection;
