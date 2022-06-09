
import React from 'react'
import AddProductForm from '../../components/Products/AddProductForm';
import AppBar from "../../components/AppBar"

const AddProduct = () => {
  return (
    <div className="page"  >
      <AppBar />
      <AddProductForm />
    </div>
  )
}

export default AddProduct