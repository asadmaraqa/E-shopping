
import React from 'react'
import {useNavigate} from 'react-router-dom';

import { useSelector } from 'react-redux';
import { AppState, productTypes } from "../../globalTypes";
import Button from '../Button';

const DisplayProduct = () => {
const product= useSelector((state: AppState) => state.products.list) 
 const {name,price}:any=product
 const navigate = useNavigate();

  return (
    <section>
    <Button title="go back" onClick={() => navigate(-1)} />
    <div className="CountryInformation" key={name}>
      <div>
        <img src="" alt={name} className="card__image" />
        <h2 className="card__name">{name}</h2>
      </div>
      <div className="card_content">
        <h3 className="card__language">Region: </h3>

    </div>
    </div>
  </section>
  )
}

export default DisplayProduct