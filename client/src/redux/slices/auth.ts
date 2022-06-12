import { createSlice } from "@reduxjs/toolkit";



const slice = createSlice({
  name: "auth",
  initialState: {
    list: [],
    totalAmount: 0,
    totalquantity: 0,
  },
  reducers: {
    userAdded: (auth: any, action) => {
      auth.list[0]=action.payload
      
    },
   

  },
});

export const { userAdded } = slice.actions;
export default slice.reducer;
