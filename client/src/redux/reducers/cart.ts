import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "cart",
  initialState: {
    list: [],

  },
  reducers: {

    productAdded: (productCart, action) => {
     productCart.list = action.payload;
    },
  },
});

export const { productAdded } = slice.actions;
export default slice.reducer;
