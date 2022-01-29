import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./utils/header/header";
import Homepage from "./pages/homepage/homepage";
import Footer from "./utils/footer/footer";
import SigninPage from "./pages/signin/signin";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/signin" element={<SigninPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
