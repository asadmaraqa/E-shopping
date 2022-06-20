
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import AppBar from '../../components/AppBar';
import Footer from '../../components/Footer';

import ModifyProductForm from '../../components/Products/ModifyProductForm'
import { getByIda } from '../../redux/slices/products';

const ModifyProduct = () => {
  const { productId } = useParams();

  const dispatch = useDispatch()

  dispatch(getByIda(productId))
  
  return (
    <div className="page">
      <AppBar />
      <ModifyProductForm />
      <Footer />
    </div>)
}

export default ModifyProduct