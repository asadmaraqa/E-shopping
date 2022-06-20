import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk';
import {combineReducers} from "redux"; 
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

import api from "./middleware/api";
import products from "./slices/products";
import users from "./slices/users";
import cart from "./slices/cart";

const reducers = combineReducers({
  products,
  users,
  cart,
  });
const persistConfig = {
  key: 'root',
  blacklist: ['products',"cart"],
  storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunkMiddleware,api]
});

export default store;