import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../actions/api";

const slice = createSlice({
  name: "products",
  initialState: {
    listAll: [],
    listOne:[],
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
      products.listAll = action.payload;
      products.loading = false;
    },
    getById: (products, action) =>{ 
      

      products.listOne = action.payload;
      products.loading = false;

    }
  },
});

export const { productsReceived, productsRequested,productsRequestFailed,getById } = slice.actions;
export default slice.reducer;

const url = "/products";

export const loadproudcts = () =>
  apiCallBegan({
    url,
    onStart: productsRequested.type,
    onSuccess: productsReceived.type,
    onError:productsRequestFailed.type
  });

  export const getByIda = (productId) =>
  apiCallBegan({
    url: url + "/" + productId,
    onStart: productsRequested.type,
    onSuccess: getById.type,
    onError:productsRequestFailed.type,
  });
