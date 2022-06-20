import React from "react"
import { useSelector } from 'react-redux';

import ProductCard from './ProductCard'
import { productInit, productTypes } from '../../globalTypes';

const Products = () => {

  const products = useSelector((state: productInit) => state.products)
  const searchUndefined = products.search[0] === undefined

  return (
    <div className="products">
      {products.loading ? <h1>Loading</h1> : ""}
      {(products.error && products.errorName==="Request failed with status code 404") ? (<h2> not found </h2>) :
        !products.error && !searchUndefined && products.search.map((product: productTypes) =>
          <ProductCard {...product} key={product._id} />)
      }
      {searchUndefined && !products.loading && products.errorName!=="Request failed with status code 404"&& products.listAll.map((product: productTypes) =>
        <ProductCard {...product} key={product._id} />)
      }
    </div>
  )
}

export default Products