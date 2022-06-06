import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addProudct } from '../../../redux/slices/products';
import { inputs, selectedValue } from '../../../globalTypes';
import { catergoryOptions, sizeOptions, variantOptions } from './options';
import Select from './Select';

const AddProduct = () => {

  const [inputs, setInputs] = useState<inputs>({
    name: "",
    price: 0,
    stock:0,
    description:"",
    sizes: [{ label: "", value: "" }],
    variants: [{ label: "", value: "" }],
    categories: [{ label: "", value: "" }],
  });

  const [selectedSize, setSelectedSize] = useState([]);
  const [selectedVariant, setSelectedVariant] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);

  inputs.sizes = selectedSize.map((val: selectedValue) => val.value)
  inputs.variants = selectedVariant.map((val: selectedValue) => val.value)
  inputs.categories = selectedCategory.map((val: selectedValue) => val.value)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLTextAreaElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addProudct(inputs))
  }

  const dispatch = useDispatch();

  return (
    <form onSubmit={handleSubmit} className="form">
      <label>Name:
        <input
          type="text"
          name="name"
          value={inputs.name}
          onChange={handleChange}
          placeholder="Product name"
          required
        />
      </label>
      <label>Description:
        <textarea
          name="description"
          value={inputs.description}
          onChange={handleChange}
          placeholder="Product description"
          required
        />
      </label>
      <label>Price:
        <input
          type="number"
          name="price"
          value={inputs.price || ""}
          placeholder="Product price"
          required
          onChange={handleChange}
        />
      </label>
      <label>Price:
        <input
          type="number"
          name="stock"
          value={inputs.stock || ""}
          placeholder="Product stock"
          required
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
      <input type="submit" className='button' />
    </form>
  )
}

export default AddProduct