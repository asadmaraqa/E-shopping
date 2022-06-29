import { createSlice } from "@reduxjs/toolkit";
import { ProductSliceTypes, ProductTypes } from "../../globalTypes";
import { apiCallBegan } from "../actions/api";

const slice = createSlice({
  name: "products",
  initialState: {
    listAll: [],
    listOne: [],
    search: [],
    loading: false,
    error: false,
    errorName: "",
  },
  reducers: {
    productsRequested: (products, action) => {
      products.loading = true;
      products.error = false;
    },
    productsRequestFailed: (products, action) => {
      products.loading = false;
      products.errorName = action.payload;
      products.error = true;
      products.search = [];
    },
    productsReceived: (products, action) => {
      products.listAll = action.payload;
      products.loading = false;
      products.error = false;
    },
    getById: (products, action) => {
      if(products.loading&&products.listOne!==[]) products.listOne = action.payload;
      products.loading = false;
      products.error = false;
    },
    productUploaded: (products: ProductSliceTypes, action) => {
      products.listAll.push(action.payload);
      products.loading = false;
      products.error = false;
    },
    productDeleted: (products, action) => {
      products.listAll = products.listAll.filter(
        (product: ProductTypes) => product._id !== action.payload
      );
    },
    productModified: (products: ProductSliceTypes, action) => {
      const index = products.listAll.findIndex(
        (product: any) => product._id === action.payload._id
      );
      products.listAll[index] = action.payload;
    },
    Searched: (products: any, action) => {
      products.search = action.payload;
      products.error = false;
      products.loading = false;
    },
  },
});

export const {
  productsReceived,
  productsRequested,
  productsRequestFailed,
  getById,
  productUploaded,
  productDeleted,
  productModified,
  Searched,
} = slice.actions;
export default slice.reducer;

const url = "/products";

export const loadproudcts = () =>
  apiCallBegan({
    url,
    onStart: productsRequested.type,
    onSuccess: productsReceived.type,
    onError: productsRequestFailed.type,
  });

export const getByIda = (productId?: string) =>
  apiCallBegan({
    url: url + "/" + productId,
    onStart: productsRequested.type,
    onSuccess: getById.type,
    onError: productsRequestFailed.type,
  });

export const addProudct = (product: Object) =>
  apiCallBegan({
    url,
    method: "post",
    data: product,
    onStart: productsRequested.type,
    onSuccess: productUploaded.type,
  });

export const deleteproduct = (productId: string) =>
  apiCallBegan({
    url: url + "/" + productId,
    method: "delete",
  });
export const modifyProduct = (product: object, _id: string) =>
  apiCallBegan({
    url: url + "/" + _id,
    method: "patch",
    data: product,
    onSuccess: productModified.type,
  });

export const fetchSearch = (productName: string) =>
  apiCallBegan({
    url: url + "/search/" + productName,
    data: { productName },
    onStart: productsRequested.type,
    onSuccess: Searched.type,
    onError: productsRequestFailed.type,
  });
