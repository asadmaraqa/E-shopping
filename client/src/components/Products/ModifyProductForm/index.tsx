import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addProudct, modifyProduct } from '../../../redux/slices/products';
import { AppState, inputs, selectedValue } from '../../../globalTypes';
import { catergoryOptions, sizeOptions, variantOptions } from '../AddProductForm/options';
import Select from '../AddProductForm/Select';

const ModifyProductForm = () => {
  const products= useSelector((state: AppState) => state.products.listOne) 
  const {name,_id,price,categories,stock,sizes,variants,description,img}:any=products
  const [inputs, setInputs] = useState<inputs>({
    name: "",
    price: 0,
    stock: 0,
    description: "",
    img: "",
    sizes: [{ label: "", value: "" }],
    variants: [{ label: "", value: "" }],
    categories: [{ label: "", value: "" }],
  });

  const [selectedSize, setSelectedSize] = useState([]);
  const [selectedVariant, setSelectedVariant] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);

  const handlePhoto = async (e: any) => {
    setInputs({ ...inputs, img: e.target.files[0] })
  }

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }))
  }

console.log(inputs.name)
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    if (inputs.img !== "") {formData.append("img", inputs.img);}
console.log(inputs.img)
    if (inputs.name !== "") formData.append("name", inputs.name)

    if (inputs.price !== 0) formData.append("price", inputs.price as any)
    if (inputs.stock !== 0) formData.append("stock", inputs.stock as any)
    if (inputs.description !== "") formData.append("description", inputs.description)
    console.log(selectedSize)
    selectedSize.map((val: selectedValue) => {if (val.value !== null) formData.append("sizes", val.value as any)});
    selectedVariant.map((val: selectedValue) => {if (val.value !== null) formData.append("variants", val.value as any)});
    selectedCategory.map((val: selectedValue) => {if (val.value !== null) formData.append("categories", val.value as any)});
    dispatch(modifyProduct(formData,_id)) 
    for (const value of formData.entries()) {
      console.log(value);
    }  }
  const dispatch = useDispatch();
console.log(_id)
  return (
    <form onSubmit={handleSubmit} className="form" encType="multipart/form-data" method="post">
      <label>Name:
        <input
          type="text"
          name="name"
          value={inputs.name}
          onChange={handleChange}
          placeholder={name}
          
        />
      </label>
      <label>Description:
        <textarea
          name="description"
          value={inputs.description}
          onChange={handleChange}
          placeholder={description}
          
        />
      </label>
      <label>Price:
        <input
          type="number"
          name="price"
          value={inputs.price || ""}
          placeholder={price}
          onChange={handleChange}
        />
      </label>
      <label>stock:
        <input
          type="number"
          name="stock"
          value={inputs.stock || ""}
          placeholder={stock}
          onChange={handleChange}
        />
      </label>
      <Select options={sizeOptions} value={selectedSize}
        onChange={setSelectedSize} labelledBy="Select size"
        label="sizes:" />
      <Select options={variantOptions} value={selectedVariant}
        onChange={setSelectedVariant} labelledBy="Select variant"
        label="Variants:" />
      <Select options={catergoryOptions} value={selectedCategory}
        onChange={setSelectedCategory} labelledBy="Select categroy"
        label="Categories:" />
      <input type="file" name="img" onChange={handlePhoto} />
      <input type="submit" className='button' />
    </form>
  )
}

export default ModifyProductForm