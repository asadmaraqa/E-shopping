import React from 'react'
import { faTrash, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import '../../sass/_main.scss'

const Cart = () => {
  return (
    <>
      <div className="cart">
        <FontAwesomeIcon
          icon={faX}
          size="1x"
          onClick={() => ""}
          className="cart__icon-close"
        />
        <ul>
          <li className="cart__item">
            <h3 className="cart__text">Please add a product</h3>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Cart
