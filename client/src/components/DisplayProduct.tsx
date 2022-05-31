
import React from 'react'

import { useSelector } from 'react-redux';
import { AppState, productTypes } from "../globalTypes";

const DisplayProduct = () => {
const product= useSelector((state: AppState) => state.products.list) 
 const {name,price}:any=product
  return (
  
    <div>{name}</div>
  )
}

export default DisplayProduct