import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Components
import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";
import ModelViewer from "./assets/components/ModelViewer";
import ScrollToTop from "./assets/components/ScrollToTop"; // ✅ Import here

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import FeaturesPage from "./pages/FeaturesPage";
import Contact from "./pages/Contact";
import OurTeamPage from "./pages/OurTeamPage";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-black text-white">
      <ScrollToTop /> {/* ✅ Add this before Routes */}
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/model" element={<ModelViewer />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ourteam" element={<OurTeamPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
