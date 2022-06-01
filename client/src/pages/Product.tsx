
import React from 'react'
import configureStore from "../redux/store";
import { useParams } from "react-router-dom"
import { getById } from '../redux/reducers/products';
import { Provider } from 'react-redux';
import AppBar from '../components/AppBar';


import DisplayProduct from "../components/Products/DisplayProduct"
const Product = () => {
  const { productId } = useParams();

  const store = configureStore();
  store.dispatch(getById(productId))


  return (

    <Provider store={store}>
      <div className="page">
        <AppBar />
        <DisplayProduct />
      </div>
    </Provider>

  )
}

export default Product