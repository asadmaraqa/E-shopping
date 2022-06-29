import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addProudct } from '../../../redux/slices/products';
import { Inputs, SelectedValue } from '../../../globalTypes';
import { catergoryOptions, sizeOptions, variantOptions } from './options';
import Select from './Select';

const AddProduct = () => {
  const [success, setSuccess] = useState(false);

  const [inputs, setInputs] = useState<Inputs>({
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

  const handlePhoto = (e: any) => {
    
    setInputs({ ...inputs, img: e.target.files[0] })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLTextAreaElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }))
  }


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("img", inputs.img);
    formData.append("name", inputs.name)
    formData.append("price", inputs.price as any)
    formData.append("stock", inputs.stock as any)
    formData.append("description", inputs.description)
    selectedSize.map((val: SelectedValue) => formData.append("sizes", val.value as any));
    selectedVariant.map((val: SelectedValue) => formData.append("variants", val.value as any));
    selectedCategory.map((val: SelectedValue) => formData.append("categories", val.value as any));

    dispatch(addProudct(formData))
    setSuccess(true)

  }
  const dispatch = useDispatch();

  return (
    <form onSubmit={handleSubmit} className="form" encType="multipart/form-data" method="post">
      {success ? <h2>Product added</h2> : ""}
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
      <label>stock:
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
      <input type="file" name="img" onChange={handlePhoto} />
      <input type="submit" className='button' />
    </form>
  )
}

export default AddProduct