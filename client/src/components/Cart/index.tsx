import React, { Dispatch } from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'

import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../../sass/_main.scss'
import { AppState, productTypes } from '../../globalTypes'
import Button from '../Button'


const Cart = ({ onClick }: { onClick: () => void }) => {
  console.log(typeof onClick)
  const cartProducts = useSelector((state: AppState) => state.cart.list)
  let total = 0;
  cartProducts.map((item: any) => total += item.totalPrice)
  return (
    <div className="cart">

      <FontAwesomeIcon
        icon={faX}
        size="1x"
        onClick={onClick}
        className="cart__icon-close"
      />

      {cartProducts.length !== 0 ? (cartProducts.map((product: productTypes) =>

        <CartItem {...product} key={product.id} />

      )) :
        (<li><h3 className="cart__text">Please add a product</h3></li>)
      }
      {cartProducts.length !== 0 ? <Button title='Checkout' onClick={() => { }} className="button" />:""}

      <hr style={{ backgroundColor: "grey", height: 2 }} />
      <div><h3>Total price: {total}</h3></div>
    </div>

  )
}

export default Cart
