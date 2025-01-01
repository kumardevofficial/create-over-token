import React from "react";

const RightStep = () => {
  return (
    <div className="flex justify-center items-center  mt-[3%] mb-[3%]">
      <div className="flex items-center border-2 border-green-500 rounded-lg p-5 max-w-3xl bg-white">
        <div className="bg-green-500 text-white text-xl font-bold py-2 px-4 rounded-lg mr-5">
          02
        </div>
        <img
          src="https://via.placeholder.com/100x100?text=PC"
          alt="Computer Icon"
          className="w-24 mr-5"
        />
        <div className="flex-grow">
          <h3 className="text-lg font-bold text-gray-800">
            Visitors log on to the website.
          </h3>
          <p className="mt-2 text-gray-600 text-base">
            They may find the website on Google search or directly type in the
            website URL in the search box.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RightStep;
