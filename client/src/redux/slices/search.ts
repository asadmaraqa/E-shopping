import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../actions/api";

const slice = createSlice({
  name: "searches",
  initialState: {
    list: [],

    loading: false,
    error: false,
  },
  reducers: {
    searchRequested: (searches, action) => {
      searches.loading = true;

    },
    Searched: (searches: any, action) => {
      searches.list = action.payload;
      if(searches.list==="")
      searches.error = false
    },
    searchRequestFailed: (searches, action) => {
      searches.error = true;
      console.log(action.payload)

    },
  },
});

export const { searchRequested, Searched, searchRequestFailed } = slice.actions;
export default slice.reducer;

const url = "products/search";

export const fetchSearch = (productName: any) =>
  apiCallBegan({
    url: url + "/" + productName,
    onStart: searchRequested.type,
    onSuccess: Searched.type,
    onError: searchRequestFailed.type,
  });
