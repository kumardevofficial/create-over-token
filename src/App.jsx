import { Outlet } from "react-router-dom";
import "./App.css";
import FooterSection from "./components/Footer.jsx/FooterSection";
import Navbar from "./components/Navbar/Navbar";
import ConnectWallet from "./components/ConnectWallet/ConnectWallet";
import { act, useReducer } from "react";
import { ToastContainer, toast } from "react-toastify";
import { OverContext } from "./Store/Create-over-store";

const updatWalletAdd = (preStatewalladd, action) => {
  let walladd = preStatewalladd;
  console.log(action.payload.mywallAdd);
  if (action.type === "WAll_ADD") {
    walladd = action.payload.mywallAdd;
  }
  return walladd;
};

const updateVisblity = (preVisiblity, action) => {
  let justVisiblity = preVisiblity;
  if (action.type === "WALL_VISIBLITY_TRUE") {
    justVisiblity = false;
  } else if (action.type === "WALL_VISIBLITY_FALSE") {
    justVisiblity = true;
  }
  return justVisiblity;
};

const App = () => {
  const [wallVisiblity, dispatchWallVsiblity] = useReducer(
    updateVisblity,
    true
  );

  const setVisiblityTrue = () => {
    const wallVisi = {
      type: "WALL_VISIBLITY_TRUE",
      payload: {
        wallyvsiblity: true,
      },
    };
    dispatchWallVsiblity(wallVisi);
  };

  const setVisiblityFalse = () => {
    const wallvisi = {
      type: "WALL_VISIBLITY_FALSE",
      payload: {
        wallVisiblity: false,
      },
    };
    dispatchWallVsiblity(wallvisi);
  };

  const [walletAdds, dispatchWallAdd] = useReducer(
    updatWalletAdd,
    "Connect Wallet"
  );

  const SetWallAddx = (addValue) => {
    const walladdxy = {
      type: "WAll_ADD",
      payload: {
        mywallAdd: addValue,
      },
    };
    dispatchWallAdd(walladdxy);
  };

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

  return (
    <OverContext.Provider
      value={{
        SetWallAddx,
        walletAdds,
        setVisiblityTrue,
        wallVisiblity,
        setVisiblityFalse,
        showSuccessToast,
        showErrorToast,
      }}
    >
      <>
        <div className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] pt-3">
          <Navbar />
          <Outlet />
          <FooterSection />
          <ConnectWallet />
          <ToastContainer />
        </div>
      </>
    </OverContext.Provider>
  );
};
export default App;
