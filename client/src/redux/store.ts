import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk';
import {combineReducers} from "redux"; 

import api from "./middleware/api";
import products from "./slices/products";
import users from "./slices/users";
import cart from "./slices/cart";
import search from "./slices/search";

import auth from "./slices/auth";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const reducers = combineReducers({
  products,
  users,
  cart,
  auth,
  search,
 });
const persistConfig = {
  key: 'root',
  blacklist: ['products'],
  storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunkMiddleware,api]
});

export default store;