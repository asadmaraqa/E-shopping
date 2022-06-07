
import React from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AddProduct from "./pages/AdminPages/AddProduct";
import EditDeleteProduct from "./pages/AdminPages/EditDeleteProduct";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Profile from "./pages/Profile";
import Signin from "./pages/Signin";
import { loadproudcts } from "./redux/slices/products";

import "./App.css";

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
        <Route path="addProduct/" element={<AddProduct />} />
        <Route path="editDeleteProduct/" element={<EditDeleteProduct />} />

      </Routes>
    </BrowserRouter>
  )
}
export default App;