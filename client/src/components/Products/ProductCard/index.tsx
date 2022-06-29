import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";

import { ProductTypes } from '../../../globalTypes'
import { productAdded } from '../../../redux/slices/cart';
import { deleteproduct, productDeleted } from '../../../redux/slices/products';
import Button from '../../Button';
import Can from '../../can';

const ProductCard = ({ name, description, price, _id, img }: ProductTypes) => {
  const dispatch = useDispatch();
  const incrementCartItem = () => {
    dispatch(productAdded({
      name,
      _id,
      price,
    }))
  }
  const handleDispatch = () => {
    dispatch(deleteproduct(_id))
    dispatch(productDeleted(_id))
  }
  const navigate = useNavigate();

  return (
    <Link to={`/product/${_id}`} style={{ textDecoration: 'none' }}  >
      <div className="card" key={_id} >
        <img src={`/images/${img}`} alt={name} className="card__image" />
        <div>
          <h2 className="card__name">{name}</h2>
        </div>
        <div className="card_content">
          <p>{description.substring(1, 100)} ...</p>
          <p className="card__price">€{price}</p>
        </div>
        <Button title='add to cart' className="button" onClick={incrementCartItem} />
        <Can role="admin" perform="products:delete" yes={() => <Button title='delete' className="button__delete" onClick={handleDispatch} />} />
        <Can role="admin" perform="products:edit" yes={() => <Button title='modify' className="button__modify" onClick={() => navigate(`/ModifyProduct/${_id}`)} />} />
      </div>
    </Link>

  )
}

export default ProductCard