import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./utils/header/header";
import Homepage from "./pages/homepage/homepage";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/" element={<Homepage />} />
                <Route path="/news" />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
