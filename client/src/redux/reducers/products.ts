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
    productsRequestFailed:(products,action)=>{
      products.loading = false;

    },
    productsReceived: (products, action) => {
      products.list = action.payload;
      products.loading = false;
    },
    getByIda: (products, action) =>{
      products.list = action.payload;

    }
  },
});

export const { productsReceived, productsRequested,productsRequestFailed,getByIda } = slice.actions;
export default slice.reducer;

const url = "/products";

export const loadproudcts = () =>
  apiCallBegan({
    url,
    onStart: productsRequested.type,
    onSuccess: productsReceived.type,
    onError:productsRequestFailed.type
  });

  export const getById = (productId:any) =>
  apiCallBegan({
    url: url + "/" + productId,
    onStart: productsRequested.type,
    onSuccess: productsReceived.type,
    onError:productsRequestFailed.type,
    
    
  });
