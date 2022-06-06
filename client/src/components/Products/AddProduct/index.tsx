import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProudct } from '../../../redux/slices/products';
import { MultiSelect } from "react-multi-select-component";

const sizeOptions = [
  { label: "s", value: "s" },
  { label: "m ", value: "m" },
  { label: "l ", value: "l" },
];
const catergoryOptions = [
  { label: "Men", value: "s" },
  { label: "women ", value: "m" },
  { label: "Jeans", value: "l" },
  { label: "Shirts", value: "l" },
];
const variantOptions = [
  { label: "Green ", value: "green" },
  { label: "Red", value: "red" },
  { label: "Yellow", value: "yellow" },
  { label: "Brown", value: "brown" },
];
const AddProduct = () => {
  const products = useSelector((state: any) => state.products.listOne)
  const { name, _id: id, price, categories, stock, sizes, variants, description } = products
  const [inputs, setInputs] = useState<any>({

  });

  console.log(inputs)

  const [selectedSize, setSelectedSize] = useState([]);
  const [selectedVariant, setSelectedVariant] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);

  inputs.sizes = selectedSize.map((val: any) => val.value)
  inputs.variants = selectedVariant.map((val: any) => val.value)
  inputs.categories = selectedCategory.map((val: any) => val.value)

  const handleChange = (event: any) => {
    const name: any = event.target.name;
    const value: any = event.target.value;
    setInputs((values: any) => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    dispatch(addProudct(inputs))
  }

  const dispatch = useDispatch();
  return (

    <form onSubmit={handleSubmit} className="form">
      <label>Product name:
        <input
          type="text"
          name="name"
          value={inputs.name || ""}
          onChange={handleChange}
          placeholder="Product name"
          required
        />
      </label>
      <label>Product price:
        <input
          type="number"
          name="price"
          value={inputs.price || ""}
          placeholder="Product price"
          required
          onChange={handleChange}
        />
      </label>
      <label>Product sizes:

        <MultiSelect
          options={sizeOptions}
          value={selectedSize}
          onChange={setSelectedSize}
          labelledBy="Select size"
        />
      </label>
      <label>Product variants:

        <MultiSelect
          options={variantOptions}
          value={selectedVariant}
          onChange={setSelectedVariant}
          labelledBy="Select variant"
        />
      </label>
      <label>Product categories:

        <MultiSelect
          options={catergoryOptions}
          value={selectedCategory}
          onChange={setSelectedCategory}
          labelledBy="Select categroy"
        />
      </label>
      <input type="submit" className='button' />
    </form>

  )
}

export default AddProduct