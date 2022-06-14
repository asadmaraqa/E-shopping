import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../actions/api";



const slice = createSlice({
  name: "auth",
  initialState: {
    list: [],
    totalAmount: 0,
    totalquantity: 0,
  },
  reducers: {
    userAdded: (auth: any, action) => {
      console.log(action.payload)

      auth.list[0]=auth.list.push(action.payload)
      
    },
   
  },
});

export const { userAdded } = slice.actions;
export default slice.reducer;
const url = "/users";

export const addUser = () =>
  apiCallBegan({
    url,

    onSuccess: userAdded.type,
  });