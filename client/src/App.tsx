
import React from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Signin from "./pages/Signin";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product/:productId" element={<Product />} />
        <Route path="signin/" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;