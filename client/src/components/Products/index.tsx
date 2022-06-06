import React from "react"
import { useSelector } from 'react-redux';
import ProductCard from '../ProductCard'
import { AppState, productTypes } from '../../globalTypes';



const Products = () => {
  const porducts = useSelector((state: AppState) => state.products)
 
  return (
    <div className="products">
        {!porducts.loading&&porducts.listAll.map((product: productTypes) =>
              <ProductCard {...product} key={product._id} />
        )}

    </div>
  )
}

export default Products