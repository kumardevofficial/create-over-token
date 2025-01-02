import React from "react";
import okx from "../../assets/OKX.png";
import mm from "../../assets/metamask.png";
import "react-toastify/dist/ReactToastify.css";

const ConnectWallet = ({
  walletConnectControl,
  visiblity,
  showSuccessToast,
  showErrorToast,
  setWalletAdd,
}) => {
  const wallets = [
    { name: "MetaMask", image: mm },
    { name: "OKX Wallet", image: okx },
  ];

  // Utility function to format wallet address
  const formatAddress = (address) => {
    let theAddress = `${address.slice(0, 3)}...${address.slice(-4)}`;
    setWalletAdd(theAddress);
  };

  // Function to connect wallet
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log("Connected account:", accounts[0]);
        formatAddress(accounts[0]);
        showSuccessToast();
        walletConnectControl(false); // Hide the modal
        return accounts[0];
      } catch (error) {
        console.error("Connection error:", error);
        showErrorToast(
          "User rejected connection or an unexpected error occurred."
        );
      }
    } else {
      console.error("MetaMask not detected.");
      showErrorToast("MetaMask or compatible wallet is not installed.");
    }
  };

  if (!visiblity) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="relative bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
          <button
            onClick={() => walletConnectControl(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          >
            ✖
          </button>
          <h2 className="text-xl font-semibold mb-4 text-center">
            Connect Wallet
          </h2>
          <p className="text-sm text-gray-600 mb-6 text-center">
            Start by connecting with one of the wallets below.
            <br />
            Be sure to store your private keys or seed phrase securely.
            <br />
            Never share them with anyone.
          </p>
          <div className="grid grid-cols-3 gap-4">
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
