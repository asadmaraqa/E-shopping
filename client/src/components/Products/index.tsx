import React from "react"
import { useSelector } from 'react-redux';
import ProductCard from '../ProductCard'
import Container from '@mui/material/Container';
import { AppState } from '../../globalTypes';



const Products = () => {
  const products = useSelector((state: any) => state.products.listAll)

  return (
    <div className="products">
        {products.map((product: any) =>
              <ProductCard {...product} key={product._id} />
        )}

    </div>
  )
}

export default Products