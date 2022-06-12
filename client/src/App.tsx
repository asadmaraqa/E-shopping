
import React from "react";
import { useDispatch, useSelector } from "react-redux";
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

function App() {
  const dispatch = useDispatch()

  const currentRole = useSelector((state: any) => state.auth.list[0].role)
  dispatch(loadproudcts())
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product/:productId" element={<Product />} />
        <Route path="signin/" element={<Signin />} />
        <Route path="profile/" element={<Can role={currentRole} perform="profile:get" yes={()=>(<Profile />)} no={()=>(<p>no</p>)}/>}  />
        <Route path="addProduct/" element={<Can role="admin" perform="products:add" yes={()=>(<AddProduct />)} no={()=>(<p>no</p>)}/>} />
        <Route path="ModifyProduct/:productId" element={<Can role="admin" perform="products:edit" yes={()=>(<ModifyProduct />)} no={()=>(<p>no</p>)}/>}  />
        <Route path="Users/" element={<Can role="user" perform="users:get" yes={()=>(<Users />)} no={()=>(<p>no</p>)}/>}  />

      </Routes>
    </BrowserRouter>
  )
}
export default App;