
import React from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Profile from "./pages/Profile";
import Signin from "./pages/Signin";
import { loadproudcts } from "./redux/slices/products";


function App() {
  const dispatch = useDispatch()

  dispatch(loadproudcts())
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product/:productId" element={<Product />} />
        <Route path="signin/" element={<Signin />} />
        <Route path="profile/" element={<Profile />} />

      </Routes>
    </BrowserRouter>
  )
}
export default App;