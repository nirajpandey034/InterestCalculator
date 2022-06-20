import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Calculator from "./InterestCalculator/Calculator";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Calculator />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Home;
