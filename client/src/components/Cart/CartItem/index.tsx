
import React from 'react'
import { useDispatch } from 'react-redux';
import { productTypes } from '../../../globalTypes';
import { productAdded, productRemoved } from '../../../redux/slices/cart';

const CartItem = ({ name, price, quantity, totalPrice, id }: productTypes) => {
  const dispatch = useDispatch();
  const incrementCartItem = () => {
    dispatch(productAdded({
      name,
      id,
      price,

    }))
  }
  return (
    <ul>
      <li className="cartItem">

        <h3 className='cartItem__name'>{name}</h3>
        <div className="cartItem__price">
          <p> €{price}</p>
          *
          <p> {quantity}</p>
          =
          <p>€{totalPrice}</p>
        </div>
        <div className="cartItem__controlers">  <button onClick={() => dispatch(productRemoved(id))}>-</button>
          <p> {quantity}</p>
          <button onClick={incrementCartItem}>+</button></div>

      </li>
    </ul>
  )
}

export default CartItem