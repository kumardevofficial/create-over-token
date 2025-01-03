import React, { useContext } from "react";
import okx from "../../assets/OKX.png";
import mm from "../../assets/metamask.png";
import "react-toastify/dist/ReactToastify.css";
import { OverContext } from "../../Store/Create-over-store";

const ConnectWallet = () => {
  const {
    SetWallAddx,
    walletAdds,
    setVisiblityTrue,
    wallVisiblity,
    setVisiblityFalse,
    showSuccessToast,
    showErrorToast,
  } = useContext(OverContext);

  const wallets = [
    { name: "MetaMask", image: mm },
    { name: "OKX Wallet", image: okx },
  ];

  const formatAddress = (address) => {
    SetWallAddx(`${address.slice(0, 6)}...${address.slice(-4)}`);
    setVisiblityFalse();
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        formatAddress(accounts[0]);
        showSuccessToast();
      } catch (error) {
        console.error("Connection error:", error);
      }
    } else {
      alert("Please install MetaMask or another compatible wallet.");
      showErrorToast("unable to connect");
    }
  };

  console.log(wallVisiblity);
  if (wallVisiblity) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="relative bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
          <button
            onClick={() => {
              setVisiblityFalse();
            }}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          >
            ✖
          </button>
          <h2 className="text-xl font-semibold mb-4 text-center">
            Connect Wallet
          </h2>
          <p className="text-sm text-gray-600 mb-6 text-center">
            Start by connecting with one of the wallets below. Keep your private
            keys secure.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {wallets.map((wallet, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-gray-50 border border-gray-200 rounded-lg p-4 hover:shadow-md cursor-pointer transition"
                onClick={connectWallet}
              >
                <img
                  src={wallet.image}
                  alt={wallet.name}
                  className="w-12 h-12 mb-2"
                />
                <span className="text-sm text-gray-700">{wallet.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ConnectWallet;
