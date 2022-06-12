import { createSlice } from "@reduxjs/toolkit";


type cartTypes={
  list:{
    quantity:number
    totalPrice?:number
    
    _id:string
    price?:number
    name:string
  }[] 
  totalquantity:number

}

const slice = createSlice({
  name: "cart",
  initialState: {
    list: [],
    totalAmount: 0,
    totalquantity: 0,
  },
  reducers: {
    productAdded: (cart:cartTypes, action) => {
      const newItem = action.payload;
      const existingItem=cart.list.find((item)=>item._id===newItem._id);
      if(existingItem){
        existingItem.quantity++;
        existingItem.totalPrice+=newItem.price
        
      }else{
        cart.list.push({
          _id:newItem._id,
          price:newItem.price,
          quantity:1,
          totalPrice:newItem.price,
          name:newItem.name
        })
        cart.totalquantity++
      }
    },
    productRemoved:(cart:cartTypes,action)=>{
      const _id=action.payload;
      const existingItem:any=cart.list.find((item)=>item._id===_id);
      if(existingItem.quantity===1){
        cart.list=cart.list.filter(item=>item._id!==_id)
        cart.totalquantity--;
      }else{
        existingItem.quantity--;
        existingItem.totalPrice-=existingItem.price
      }
    }
    
  },
});

export const { productAdded,productRemoved } = slice.actions;
export default slice.reducer;
