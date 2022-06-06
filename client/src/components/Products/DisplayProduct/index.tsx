import React from "react"
import { useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { AppState, productTypes } from "../../../globalTypes";
import Button from '../../Button';
import { productAdded } from '../../../redux/slices/cart';


const DisplayProduct = () => {

  const products= useSelector((state: AppState) => state.products.listOne) 
  const {name,_id:id,price,categories,stock,sizes,variants,description}:any=products
  const navigate = useNavigate();

  const dispatch = useDispatch();

  return (
    <section style={{ width: "80vw" }}>
        
      <Button title='Go back' onClick={()=>navigate("/")}/>
      <div className="product" key={name}>
        <div>
          <img src="https://picsum.photos/400" alt={name} className="product__image" />

        </div>
        <div className="product_content">
          <h2 className="product__name">{name}</h2>
          {categories?.map((category:string) =>
            <h3 className="product__category" key={category}>{category}</h3>)}
          <p className="product__price">Price: € {price} </p>
          <h3 className="product__stock">In stock: {stock}</h3>
          <h3>Sizes: </h3>
          <select className="product__sizes">
            {sizes?.map((size:string) =>
              <option value={size} key={size}>{size}</option>)}
          </select>
          <h3>Variants: </h3>
          <select className="product__sizes">
            {variants?.map((variant:string) =>
              <option value={variant} key={variant}>{variant}</option>)}
          </select>
          <p>{description}</p>
          <div> <Button title='Add to cart'  onClick={()=>dispatch(productAdded({name,id,price}))} /></div>
        </div>
        
      </div>
    </section>
  )
}

export default DisplayProduct