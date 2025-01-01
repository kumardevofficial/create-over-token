import { Outlet } from "react-router-dom";
import "./App.css";
import FAQSection from "./components/FAQ/FaqSection";
import FooterSection from "./components/Footer.jsx/FooterSection";
import Navbar from "./components/Navbar/Navbar";

function App() {
  // gray gradient
  // bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] pt-3
  // organge
  // bg-gradient-to-br from-[#FF7F50] via-[#FF6347] to-[#FF4500] pt-3

  return (
    <div className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] pt-3">
      <Navbar />
      <Outlet />
      <FooterSection />
    </div>
  );
}
export default App;
