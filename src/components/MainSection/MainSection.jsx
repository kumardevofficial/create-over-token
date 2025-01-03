import React, { useContext } from "react";
import { OverContext } from "../../Store/Create-over-store";

const MainSection = () => {
  const { walletAdds, setVisiblityTrue } = useContext(OverContext);
  // bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] mt-4
  return (
    <div className="flex justify-center items-center h-auto ">
      <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-lg w-full max-w-md mt-[5%]">
        <h2 className="text-center text-white text-2xl mb-6">
          Over Token Creator
        </h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-white text-sm mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter token name"
              className="w-full px-3 py-2 bg-white/20 text-white rounded focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="symbol" className="block text-white text-sm mb-2">
              Symbol
            </label>
            <input
              type="text"
              id="symbol"
              placeholder="Enter token symbol"
              className="w-full px-3 py-2 bg-white/20 text-white rounded focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="decimals" className="block text-white text-sm mb-2">
              Decimals
            </label>
            <input
              type="number"
              id="decimals"
              defaultValue="6"
              min="0"
              max="18"
              className="w-full px-3 py-2 bg-white/20 text-white rounded focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="supply" className="block text-white text-sm mb-2">
              Supply
            </label>
            <input
              type="number"
              id="supply"
              placeholder="Enter token supply"
              className="w-full px-3 py-2 bg-white/20 text-white rounded focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="image" className="block text-white text-sm mb-2">
              Image
            </label>
            <input
              type="file"
              id="image"
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-blue-500 file:text-white hover:file:bg-blue-600"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-white text-sm mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              placeholder="Enter token description"
              className="w-full px-3 py-2 bg-white/20 text-white rounded focus:outline-none focus:ring focus:ring-blue-400 h-24 resize-none"
            />
          </div>

          <div className="mb-6">
            <label className="flex items-center text-white text-sm">
              <input type="checkbox" className="mr-2 accent-blue-500" />
              Revoke Freeze (required) <span className="ml-2">(1 OVER)</span>
            </label>
            <label className="flex items-center text-white text-sm mt-2">
              <input type="checkbox" className="mr-2 accent-blue-500" />
              Revoke Mint <span className="ml-2">(1 OVER)</span>
            </label>
          </div>

          <div
            className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition flex justify-center items-center cursor-pointer"
            onClick={() => {
              walletAdds == "Connect Wallet"
                ? setVisiblityTrue()
                : console.log("hellow");
            }}
          >
            {walletAdds != "Connect Wallet" ? "Create Token" : "Connect Wallet"}
          </div>
        </form>
      </div>
    </div>
  );
};

export default MainSection;
