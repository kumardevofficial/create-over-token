import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import OvertokenGuide from "./components/Content/OvertokenGuide.jsx";
import MainSection from "./components/MainSection/MainSection.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <MainSection />,
      },
      {
        path: "/over-token-guide", // No leading slash for nested routes
        element: <OvertokenGuide />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
