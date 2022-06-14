
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AddProduct from "./pages/AdminPages/AddProduct";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Profile from "./pages/Profile";
import Signin from "./pages/Signin";
import { loadproudcts } from "./redux/slices/products";

import "./App.css";
import ModifyProduct from "./pages/AdminPages/ModifyProduct";
import Can from "./components/can";
import Users from "./pages/AdminPages/Users";
import SearchContext from "./context/searchContext";
import { loadUsers } from "./redux/slices/users";
import ModifyUser from "./pages/UserPages/ModifyUser";

function App() {
  const [input, setInput] = useState('')

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadproudcts())
  }, [dispatch])
  useEffect(()=>{   dispatch(loadUsers())},[])
  return (
    <BrowserRouter>
      <SearchContext.Provider value={{ input, onChange: setInput }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product/:productId" element={<Product />} />
          <Route path="signin/" element={<Signin />} />
          <Route path="profile/" element={<Can role={"user" || "admin"} perform="profile:get" yes={() => (<Profile />)} no={() => (<p>no</p>)} />} />
          <Route path="addProduct/" element={<Can role="admin" perform="products:add" yes={() => (<AddProduct />)} no={() => (<p>no</p>)} />} />
          <Route path="ModifyProduct/:productId" element={<Can role="admin" perform="products:edit" yes={() => (<ModifyProduct />)} no={() => (<p>no</p>)} />} />
          <Route path="Users/" element={<Can role="admin" perform="users:get" yes={() => (<Users />)} no={() => (<p>no</p>)} />} />
          <Route path="modifyUser/:userId" element={<Can role={"user" || "admin"} perform="user:edit" yes={() => (<ModifyUser />)} no={() => (<p>no</p>)} />} />
        </Routes>
      </SearchContext.Provider>
    </BrowserRouter>
  )
}
export default App;