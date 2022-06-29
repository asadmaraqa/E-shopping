
import React, { useEffect } from 'react'
import { useParams } from "react-router-dom"
import { useDispatch } from 'react-redux';

import AppBar from '../components/AppBar';
import DisplayProduct from "../components/Products/DisplayProduct"
import Footer from '../components/Footer';

const Product = () => {


  return (
    <div className="page">
      <AppBar />
      <DisplayProduct />
      <Footer />
    </div>

  )
}

export default Product