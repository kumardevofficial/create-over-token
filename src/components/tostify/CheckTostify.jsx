import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CheckTostify = () => {
  // Function to display a success toast
  const showSuccessToast = () => {
    toast.success("🦄 Success! Your action was successful.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  // Function to display an error toast
  const showErrorToast = () => {
    toast.error("❌ Error! Something went wrong.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Toastify Example</h1>
      <button onClick={showSuccessToast} style={{ marginRight: "10px" }}>
        Show Success Toast
      </button>
      <button onClick={showErrorToast}>Show Error Toast</button>

      {/* Toast Container to render all toasts */}
      <ToastContainer />
    </div>
  );
};

export default CheckTostify;
