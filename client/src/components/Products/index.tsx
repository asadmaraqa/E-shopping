import React from "react"
import { useSelector } from 'react-redux';
import ProductCard from '../ProductCard'
import { AppState, productTypes } from '../../globalTypes';

const Products = () => {
  const products = useSelector((state: AppState) => state.products)

  return (
    <div className="products">
      {products.loading ? <h1>Loading</h1>:""}
        {!products.loading&&products.listAll.map((product: productTypes) =>
              <ProductCard {...product} key={product._id} />
        )}
    </div>
  )
}

export default Products