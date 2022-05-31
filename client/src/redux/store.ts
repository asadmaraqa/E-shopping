import { configureStore } from "@reduxjs/toolkit";

import api from "./middleware/api";
import products from "./reducers/products";
import users from "./reducers/users";

export default function store() {
  return configureStore(
    {
      reducer:{
        products
        ,users
      },
      middleware: [api]
    }
  );
};