import React from 'react'
import { useDispatch } from 'react-redux';


import { Link } from "react-router-dom";
import { productTypes } from '../../globalTypes'
import { productAdded } from '../../redux/slices/cart';


import Button from '../Button';

const ProductCard = ({ name, description, price, _id:id }: productTypes) => {
  const dispatch = useDispatch();
  const incrementCartItem=()=>{
    dispatch(productAdded({
      name,
      id,
      price,
      
    }))
  }

  return (
    <Link to={`/product/${id}`} style={{ textDecoration: 'none' }}  >
      <div className="card" key={id} >
        <img src="https://picsum.photos/200" alt={name} className="card__image" />
        <div>
          <h2 className="card__name">{name}</h2>
        </div>
        <div className="card_content">
          <p>{description}</p>

          <p>{price}</p>
        </div>
        <Button title='add to cart' onClick={incrementCartItem} />
      </div>
    </Link>

  )
}

export default ProductCard