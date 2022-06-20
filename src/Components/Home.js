import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./Header";
import Calculator from "./InterestCalculator/Calculator";
import Welcome from "./Welcome";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="interest-calculator" element={<Calculator />} />
      </Routes>
      <Footer />
      {/* <Outlet /> */}
    </>
  );
}

export default Home;
