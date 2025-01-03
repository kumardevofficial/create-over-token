import React from "react";

const OvertokenGuide = () => {
  return (
    <div className="m-auto p-6  text-white rounded-lg  w-[80%] my-[10%]">
      <h1 className="text-2xl font-bold mb-6">How to use Create Over Token</h1>
      <ol className="list-decimal list-inside space-y-4">
        <li>Connect your Over wallet.</li>
        <li>Specify the desired name for your Token.</li>
        <li>Indicate the symbol (max 8 characters).</li>
        <li>
          Select the decimals quantity (default recommended 6 for all tokens).
        </li>
        <li>Provide a brief description for your Over Token.</li>
        <li>Upload the image for your token (PNG).</li>
        <li>Determine the Supply of your Token.</li>
        <li>
          Click on create, accept the transaction, and wait until your tokens
          are ready.
        </li>
      </ol>
      <p className="mt-6 text-lg">
        The cost of Token creation is{" "}
        <span className="font-bold text-yellow-400">5 Over</span>, covering all
        fees for Over Token Creation.
      </p>

      <h2 className="text-xl font-bold mt-6">Revoke Freeze Authority:</h2>
      <p className="mt-2 text-base">
        If you want to create a liquidity pool, you will need to "Revoke Freeze
        Authority" of the Token. You can do that here. The cost is{" "}
        <span className="font-bold text-yellow-400">5 Over</span>.
      </p>

      <h2 className="text-xl font-bold mt-6">Revoke Mint Authority:</h2>
      <p className="mt-2 text-base">
        Revoking mint authority ensures that there can be no more tokens minted
        than the total supply. This provides security and peace of mind to
        buyers. The cost is{" "}
        <span className="font-bold text-yellow-400">5 Over</span>.
      </p>
    </div>
  );
};

export default OvertokenGuide;
