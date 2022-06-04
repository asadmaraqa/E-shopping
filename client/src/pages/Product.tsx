
import React from 'react'
import { useParams } from "react-router-dom"
import { useDispatch } from 'react-redux';

import { getByIda } from '../redux/slices/products';
import AppBar from '../components/AppBar';
import DisplayProduct from "../components/Products/DisplayProduct"

const Product = () => {
  const { productId } = useParams();

  const dispatch = useDispatch()
  dispatch(getByIda(productId))

  return (
    <div className="page">
      <AppBar />
      <DisplayProduct />
    </div>

  )
}

export default Product