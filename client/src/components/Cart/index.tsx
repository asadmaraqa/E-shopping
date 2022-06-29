import React from "react";
import { useSelector } from "react-redux";

import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { AppState, InitStateCart, ProductTypes } from "../../globalTypes";
import CartItem from "./CartItem";
import Button from "../Button";

const Cart = ({ onClick }: { onClick: () => void }) => {
  const cartProducts = useSelector((state: AppState) => state.cart.list);
  let total = 0;
  cartProducts.map((item: InitStateCart) => (total += item.totalPrice));
  return (
    <div className="cart">
      <FontAwesomeIcon
        icon={faX}
        size="1x"
        onClick={onClick}
        className="cart__icon-close"
      />

      {cartProducts.length !== 0 ? (
        cartProducts.map((product: ProductTypes) => (
          <CartItem {...product} key={product.id} />
        ))
      ) : (
        <li>
          <h3 className="cart__text">Please add a product</h3>
        </li>
      )}
      {cartProducts.length !== 0 && (
        <Button title="Checkout" className="button" />
      ) }
      <hr style={{ backgroundColor: "grey", height: 2 }} />
      <div>
        <h3>Total price: {total}</h3>
      </div>
    </div>
  );
};

export default Cart;
