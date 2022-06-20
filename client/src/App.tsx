
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AddProduct from "./pages/AdminPages/AddProduct";

import Home from "./pages/Home";

import Product from "./pages/Product";
import Profile from "./pages/Profile";
import Signin from "./pages/Signin";
import { loadproudcts } from "./redux/slices/products";
import ModifyProduct from "./pages/AdminPages/ModifyProduct";
import Can from "./components/can";
import Users from "./pages/AdminPages/Users";
import SearchContext from "./context/searchContext";
import ModifyUser from "./pages/UserPages/ModifyUser";
import NotAuthorised from "./components/NotAuthorised";
import "./App.css";

function App() {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadproudcts())
  }, [dispatch])
 
  return (
    <BrowserRouter>
      <SearchContext.Provider value={{ input, onChange: setInput }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product/:productId" element={<Product />} />
          <Route path="signin/" element={<Signin />} />
          <Route path="profile/" element={<Can role={"user" || "admin"} perform="profile:get" yes={() => (<Profile />)} no={() => (<NotAuthorised/>)} />} />
          <Route path="addProduct/" element={<Can role="admin" perform="products:add" yes={() => (<AddProduct />)} no={() => (<NotAuthorised/>)} />} />
          <Route path="ModifyProduct/:productId" element={<Can role="admin" perform="products:edit" yes={() => (<ModifyProduct />)} no={() => (<NotAuthorised/>)} />} />
          <Route path="Users/" element={<Can role="admin" perform="users:get" yes={() => (<Users />)} no={() => (<NotAuthorised/>)} />} />
          <Route path="modifyUser/:userId" element={<Can role={"user" || "admin"} perform="user:edit" yes={() => (<ModifyUser />)} no={() => (<NotAuthorised/>)} />} />

        </Routes>
      </SearchContext.Provider>
    </BrowserRouter>
  )
}
export default App;