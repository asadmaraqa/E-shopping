import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../actions/api";

type productSliceTypes = {
  listAll: object[];
  loading: boolean;
};
const slice = createSlice({
  name: "products",
  initialState: {
    listAll: [],
    listOne: [],
    loading: false,
  },
  reducers: {
    productsRequested: (products, action) => {
      products.loading = true;
    },
    productsRequestFailed: (products, action) => {
      products.loading = false;
    },
    productsReceived: (products, action) => {
      products.listAll = action.payload;
      products.loading = false;
    },
    getById: (products, action) => {
      products.listOne = action.payload;
      products.loading = false;
    },
    productUploaded: (products: productSliceTypes, action) => {
      products.listAll.push(action.payload);
      products.loading = false;
    },
    productDeleted: (products, action) => {
      products.listAll = products.listAll.filter(
        (product: any) => product._id !== action.payload
      );
    },
    productModified: (products, action) => {
    console.log(action.payload)
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

export const deleteproduct = (productId: any) =>
  apiCallBegan({
    url: url + "/" + productId,
    method: "delete",
  });
export const modifyProduct = (product:any,_id:any) =>
  apiCallBegan({
    url: url + "/" + _id,
    method: "patch",
    data:product,
    onStart: productsRequested.type,

    onSuccess: productModified.type,
  });
