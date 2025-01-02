import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ walletConnectControl, visiblity, walletAdd }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const walletvisiblity = (visiblityValue) => {
    if (!visiblity) {
      walletConnectControl(visiblityValue);
    }
  };

  return (
    <header className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 rounded-2xl w-[98%] m-auto shadow-sm shadow-white">
      {/* Logo */}
      <div className="flex items-center">
        <span className="text-2xl font-bold">
          <Link to="/">Create Over Token</Link>
        </span>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-6">
        <Link to="/" className="hover:text-blue-500 font-bold">
          Home
        </Link>
        <Link to="/create-token" className="hover:text-blue-500 font-bold">
          Create Token
        </Link>
        <Link to="/user-token" className="hover:text-blue-500 font-bold">
          User Token
        </Link>
        <Link to="/over-token-guide" className="hover:text-blue-500 font-bold">
          Guide
        </Link>
      </nav>

      {/* Right Section */}
      <div className="hidden md:flex items-center space-x-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-2xl text-white"
          onClick={() => walletvisiblity(true)}
        >
          {walletAdd === "" ? "Connect Wallet" : walletAdd}
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
          <Link to="/" className="block px-4 py-2 hover:bg-gray-700">
            Home
          </Link>
          <Link
            to="/create-token"
            className="block px-4 py-2 hover:bg-gray-700"
          >
            Create Token
          </Link>
          <Link to="/user-token" className="block px-4 py-2 hover:bg-gray-700">
            User Token
          </Link>
          <Link
            to="/over-token-guide"
            className="block px-4 py-2 hover:bg-gray-700"
          >
            Guide
          </Link>
          <div className="px-4 py-2 bg-gray-700 flex items-center justify-between">
            <span>Polygon</span>
            <button className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded text-white">
              {walletAdd === "" ? "Connect Wallet" : walletAdd}
              {console.log("is it visible" + walletAdd)}
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
