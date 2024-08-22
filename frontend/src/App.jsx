import React from "react";
import Navbar from "./pages/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/Aboutus/About";
import { Route, Router, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/who-we-are/About-us" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
