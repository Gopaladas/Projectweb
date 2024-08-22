import React from "react";
import Navbar from "./pages/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/Aboutus/About";
import { Route, Router, Routes } from "react-router-dom";
import Footer from "./pages/Footer/footer";
import Newsroom from "./pages/Newsroom/Newsroom";
import BusinessSolution from "./business-home/BusinessSolution";
import LegalSolutions from "./legalSolutions/LegalSolutions";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/who-we-are/About-us" element={<About />} />
        <Route path="/newsroom" element={<Newsroom />} />
        <Route path="/Businesssolution" element={<BusinessSolution />} />
        <Route path="/legal" element={<LegalSolutions />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
