import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Calculator from "./InterestCalculator/Calculator";
import Welcome from "./Welcome";
import RequestTool from "./RequestTool";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="interest-calculator" element={<Calculator />} />
        <Route path="request-tool" element={<RequestTool />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Home;
