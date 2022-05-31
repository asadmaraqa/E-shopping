
import React from 'react'
import configureStore from "../redux/store";
import {useParams} from "react-router-dom"
import { getById } from '../redux/reducers/products';
import { Provider, useSelector } from 'react-redux';
import { AppState } from '../globalTypes';

import DisplayProduct from "../components/DisplayProduct"
const Product = () => {
  const {productId}= useParams();

  const store = configureStore();
  store.dispatch(getById(productId))


  return (
    <Provider store={store}>

    <DisplayProduct/>
</Provider>
  )
}

export default Product