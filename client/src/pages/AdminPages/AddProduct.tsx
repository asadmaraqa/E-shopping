
import React from 'react'
import AddProductForm from '../../components/Products/AddProductForm';
import AppBar from "../../components/AppBar"
import Footer from '../../components/Footer';

const AddProduct = () => {
  return (
    <div className="page"  >
      <AppBar />
      <AddProductForm />
      <Footer/>
    </div>

  )
}

export default AddProduct