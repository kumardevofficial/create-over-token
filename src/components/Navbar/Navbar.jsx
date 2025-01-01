import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300
  return (
    <header className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 rounded-2xl w-[98%] m-auto shadow-sm shadow-white">
      {/* Logo */}
      <div className="flex items-center">
        {/* <img src="logo.png" alt="Logo" className="w-10 h-10 mr-3" /> */}
        <span className="text-2xl font-bold">
          <Link to="/">Create Over Token</Link>
        </span>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-6">
        <Link to="/" className="hover:text-blue-500 font-bold">
          Home
        </Link>

        <Link to="/over-token-guide" className="hover:text-blue-500 font-bold">
          Guide
        </Link>
        <Link to="/" className="hover:text-blue-500 font-bold">
          Over explorer
        </Link>
        {/* <a href="#" className="flex items-center space-x-1">
          <span>Perps</span>
          <span className="text-xs bg-green-500 text-black px-2 rounded">
            NEW
          </span>
        </a>
        <a href="#" className="hover:text-blue-500">
          Pool
        </a>
        <div className="relative group">
          <button className="hover:text-blue-500">Earn</button>
          <div className="absolute left-0 hidden group-hover:block bg-gray-700 mt-2 py-2 shadow-lg">
            <a href="#" className="block px-4 py-2 hover:bg-gray-600">
              Option 1
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-600">
              Option 2
            </a>
          </div>
        </div>
        <a href="#" className="hover:text-blue-500">
          Dragon's Lair
        </a> */}
      </nav>

      {/* Right Section */}
      <div className="hidden md:flex items-center space-x-4">
        <div className="flex items-center bg-white px-3 py-1 rounded-full">
          <span>Over</span>
          {/* <svg
            className="w-4 h-4 ml-1"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.707a1 1 0 011.414 0L10 10.586l3.293-2.879a1 1 0 011.414 1.414l-4 3.5a1 1 0 01-1.414 0l-4-3.5a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg> */}
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-2xl text-white">
          Connect Wallet
        </button>
      </div>

      {/* Hamburger Menu */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden flex items-center px-3 py-2 border rounded text-gray-300 border-gray-600"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M3 5h14a1 1 0 010 2H3a1 1 0 010-2zM3 10h14a1 1 0 010 2H3a1 1 0 010-2zM3 15h14a1 1 0 010 2H3a1 1 0 010-2z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-gray-800">
          <a href="#" className="block px-4 py-2 hover:bg-gray-700">
            Swap
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-700">
            Perps
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-700">
            Pool
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-700">
            Earn
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-700">
            Dragon's Lair
          </a>
          <div className="block px-4 py-2 bg-gray-700 flex items-center justify-between">
            <span>Polygon</span>
            <button className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded text-white">
              Connect Wallet
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
