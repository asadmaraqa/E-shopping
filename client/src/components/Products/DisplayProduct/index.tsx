import React from "react"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { AppState, productTypes } from "../../../globalTypes";
import Button from '../../Button';
import { productAdded } from '../../../redux/slices/cart';

const DisplayProduct = () => {

  const products = useSelector((state: AppState) => state.products.listOne)
  const { name, _id, price, categories, stock, sizes, variants, description, img } = products as unknown as productTypes
  
  const navigate = useNavigate();
  const nameUpperCase = name ? name.toUpperCase() : ""
  const dispatch = useDispatch();
  return (
    <section style={{ width: "80vw" }}>
      <div className="product__category">
        Categories:&nbsp;
        {categories?.map((category: string) =>
          <p key={category}>{category} &nbsp;</p>)}
      </div>
      <Button title='Go back' className="button" onClick={() => navigate("/")} />
      <div className="product" key={name}>
        <div>
          <img src={`/images/${img}`} alt={name} className="product__image" />

        </div>
        <div className="product_content">
          <h2 className="product__name">{nameUpperCase} </h2>

          <p className="product__price">Price: € {price} </p>
          <h3 className="product__stock">In stock: {stock}</h3>
          <div className="product__sizes">
            <h3 >Sizes: </h3>
            <select >
              {sizes?.map((size: string) =>
                <option value={size} key={size} >{size}</option>)}
            </select>
          </div>

          <div className="product__variants">
            <h3>Variants: </h3>
            <select >
              {variants?.map((variant: string) =>
                <option value={variant} key={variant} >{variant}</option>)}
            </select>
          </div>
          <p>{description}</p>
          <div> <Button title='Add to cart' className="button" onClick={() => dispatch(productAdded({ name, _id, price }))} /></div>
        </div>

      </div>
    </section>
  )
}

export default DisplayProduct