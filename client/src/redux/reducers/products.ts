import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../actions/api";

const slice = createSlice({
  name: "products",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    productsRequested: (products, action) => {
      products.loading = true;
    },
    productsReceived: (products, action) => {
      products.list = action.payload;
      products.loading = false;
    },
  },
});

export const { productsReceived, productsRequested } = slice.actions;
export default slice.reducer;

const url = "/products";

export const loadproudcts = () =>
  apiCallBegan({
    url,
    onStart: productsRequested.type,
    onSuccess: productsReceived.type,
  });
