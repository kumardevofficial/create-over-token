import { Outlet } from "react-router-dom";
import "./App.css";
import FAQSection from "./components/FAQ/FaqSection";
import FooterSection from "./components/Footer.jsx/FooterSection";
import Navbar from "./components/Navbar/Navbar";
import ConnectWallet from "./components/ConnectWallet/ConnectWallet";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [walletConncet, setWalletConnect] = useState(0);
  const [walletAdd, setWalletAdds] = useState("");

  const showSuccessToast = () => {
    toast.success("🦄 Wallet connected successfully.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const showErrorToast = (message) => {
    toast.error(`❌ Error! ${message}`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  // gray gradient
  // bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] pt-3
  // organge
  // bg-gradient-to-br from-[#FF7F50] via-[#FF6347] to-[#FF4500] pt-3

  const setWalletAdd = (receivedAddress) => {
    setWalletAdds(receivedAddress);
  };

  const walletConnectControl = (visiblityVAlue) => {
    setWalletConnect(visiblityVAlue);
  };

  return (
    <div className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] pt-3">
      <Navbar
        walletConnectControl={walletConnectControl}
        visiblity={walletConncet}
        walletAdd={walletAdd}
      />
      <Outlet />
      <FooterSection />
      <ConnectWallet
        walletConnectControl={walletConnectControl}
        visiblity={walletConncet}
        showSuccessToast={showSuccessToast}
        showErrorToast={showErrorToast}
        setWalletAdd={setWalletAdd}
      />
      <ToastContainer />
    </div>
  );
}
export default App;
