import React from 'react'

import { Link } from "react-router-dom";
import { productTypes } from '../../globalTypes'

const ProductCard = ({ name, description, price, _id }: productTypes) => {

  return (
    <Link to={`/product/${_id}`} style={{ textDecoration: 'none' }}  >
    <div className="card" key={_id}>
    <img src="https://picsum.photos/200" alt={name} className="card__image" />
      <div>
          <h2 className="card__name">{name}</h2>
        </div>
        <div className="card_content">
          <p>{description}</p>

          <p>{price}</p>
        </div>
      </div>
      </Link>

  )
}

export default ProductCard