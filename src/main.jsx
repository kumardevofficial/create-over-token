import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import OvertokenGuide from "./components/Content/OvertokenGuide.jsx";
import MainSection from "./components/MainSection/MainSection.jsx";
import CheckTostify from "./components/tostify/CheckTostify.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import FAQSection from "./components/FAQ/FaqSection.jsx";
import UserTokenCard from "./components/UserTokenCard/UserTokenCard.jsx";
import HomePage from "./HomePage/HomePage.jsx";
import StepMainBox from "./components/StepByStep/StepMainBox.jsx";
import Account from "./components/Account/Account.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <>
            {" "}
            <HomePage />
            <FAQSection />
          </>
        ),
      },
      {
        path: "/over-token-guide", // No leading slash for nested routes
        element: (
          <>
            <OvertokenGuide />
            <FAQSection />
          </>
        ),
      },
      {
        path: "/user-token",
        element: <UserTokenCard />,
      },
      {
        path: "/create-token",
        element: (
          <>
            <MainSection /> <FAQSection />
          </>
        ),
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
      {
        path: "/account",
        element: <Account />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
