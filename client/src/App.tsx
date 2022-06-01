
import React from "react";
import { BrowserRouter,Routes, Route, useParams } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Signin from "./pages/Signin";


function App() {
  let { id } = useParams();

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