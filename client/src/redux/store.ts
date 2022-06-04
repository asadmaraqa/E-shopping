import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk';

import api from "./middleware/api";
import products from "./slices/products";
import users from "./slices/users";
import cart from "./slices/cart";


const store = configureStore({
  reducer:{
    products,
    users,
    cart
  },
  middleware: [thunkMiddleware,api]
})
export default store;