import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'

import { faTrash, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../../sass/_main.scss'

const Cart = ({ onClick }: any) => {
  const cartProducts = useSelector((state: any) => state.cart.list)
  let total = 0;
  cartProducts.map((item: any) => total += item.totalPrice)
  console.log(cartProducts)
  return (
    <div className="cart">

      <FontAwesomeIcon
        icon={faX}
        size="1x"
        onClick={onClick}
        className="cart__icon-close"
      />

      {cartProducts.length !== 0 ? (cartProducts.map((product: any) =>
        <CartItem {...product} key={product.id} />
      )) :
        (<li><h3 className="cart__text">Please add a product</h3></li>)
      }
      <hr style={{ backgroundColor: "grey", height: 2 }} />
      <div><h3>Total price: {total}</h3></div>
    </div>

  )
}

export default Cart
