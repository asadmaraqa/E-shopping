import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
  name: "cart",
  initialState: {
    list: [],
    totalAmount: 0,
    totalquantity: 0,
  },
  reducers: {
    productAdded: (cart, action) => {
      const newItem = action.payload;
      console.log(newItem)
      const existingItem=cart.list.find((item)=>item.id===newItem.id);
      if(existingItem){
        existingItem.quantity++;
        existingItem.totalPrice+=newItem.price
        
      }else{
        cart.list.push({
          id:newItem.id,
          price:newItem.price,
          quantity:1,
          totalPrice:newItem.price,
          name:newItem.name
        })
        cart.totalquantity++
      }
    },
    productRemoved:(cart,action)=>{
      const id=action.payload;
      const existingItem=cart.list.find((item)=>item.id===id);
      if(existingItem.quantity===1){
        cart.list=cart.list.filter(item=>item.id!==id)
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
