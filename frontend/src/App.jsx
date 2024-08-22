import React from "react";
import Navbar from "./pages/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/Aboutus/About";
import { Route, Router, Routes } from "react-router-dom";
import Footer from "./pages/Footer/footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/who-we-are/About-us" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
