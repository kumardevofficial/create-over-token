import React from "react";
import { Link } from "react-router-dom";

const CardBox = ({ tokenData, key }) => {
  return (
    <div
      className="w-72 bg-white rounded-lg shadow-lg overflow-hidden"
      key={key}
    >
      <div className="bg-blue-600 text-center py-5 relative">
        <img
          src={tokenData.tokenLogoURL}
          alt="David Dell"
          className="w-24 h-24 rounded-full border-4 border-white mx-auto"
        />
      </div>
      <div className="text-center py-5 box-border px-2">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          {tokenData.tokenName}
        </h2>
        <p className="text-sm text-gray-600 mb-5">{tokenData.tokenDisc}</p>
        <button className="bg-blue-600 text-white py-2 px-6 rounded-full text-sm transition duration-300 hover:bg-blue-700">
          <a href="#">View More</a>
        </button>
      </div>
    </div>
  );
};

export default CardBox;
