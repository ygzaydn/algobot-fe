import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./utils/header/header";
import Homepage from "./pages/homepage/homepage";
import Footer from "./utils/footer/footer";
import SigninPage from "./pages/signin/signin";
import ResetPassword from "./pages/resetPassword/resetPassword";
import Account from "./pages/account/account";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
