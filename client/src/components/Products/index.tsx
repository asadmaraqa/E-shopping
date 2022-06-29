import React from "react"
import { useSelector } from 'react-redux';

import ProductCard from './ProductCard'
import { ProductInit, ProductTypes } from '../../globalTypes';

const Products = () => {

  const products = useSelector((state: ProductInit) => state.products)
  const searchUndefined = products.search[0] === undefined

  if (products.loading) return <h1>Loading</h1>

  if (products.error) return <h2> {products.error} </h2>

  if (searchUndefined) {
    return (
      <div className="products">
        {products.listAll.map((product: ProductTypes) => <ProductCard {...product} key={product._id} />)}
      </div>
    )
  }

  return (
    <div className="products">
      {products.search.map((product: ProductTypes) =>
        <ProductCard {...product} key={product._id} />)
      }
    </div>
  )
}

export default Products