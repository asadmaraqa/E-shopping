import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../actions/api";


type productSliceTypes={
  listAll:object[]
  loading:boolean
}
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
    },
    productUploaded:(products:productSliceTypes,action)=>{
      products.listAll.push(action.payload)
      products.loading = false;
      console.log(products.listAll)
      console.log(action.payload)
    },

  },
});

export const { productsReceived, productsRequested,productsRequestFailed,getById, productUploaded} = slice.actions;
export default slice.reducer;

const url = "/products";

export const loadproudcts = () =>
  apiCallBegan({
    url,
    onStart: productsRequested.type,
    onSuccess: productsReceived.type,
    onError:productsRequestFailed.type
  });

  export const getByIda = (productId?:string) =>
  apiCallBegan({
    url: url + "/" + productId,
    onStart: productsRequested.type,
    onSuccess: getById.type,
    onError:productsRequestFailed.type,
  });

  export const addProudct=(product:Object)=>
    apiCallBegan({
      url,
      method:"post",

      data: product,
      onStart: productsRequested.type,
      onSuccess:productUploaded.type
    })

  
  
